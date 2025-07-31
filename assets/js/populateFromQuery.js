// Allows query values to be passed to pre-populate form elements
console.log({passed_values});

function populateFormFromQueryParams(query) {
    console.log('Executing populateFormFromQueryParams ...');
    console.log({query});
    for (const [k, v] of query) {
        console.log('key: ' + k + "\nvalue: " + v);
        if (document.getElementById(k) !== null) {
            switch (document.getElementById(k).type) {
                case 'text':
                    document.getElementById(k).value = v;
                    break;
                case 'checkbox':
                    document.getElementById(k).checked = v;
                    break;
                case 'select-one':
                    for (var o = 0; o < document.getElementById(k).length; o++) {
                        console.log({o});
                        var ele_id = document.getElementById(k)[o].id;
                        var ele_val = document.getElementById(k)[o].value;
                        console.log('ele_id: ' + ele_id);
                        console.log('ele_val: ' + ele_val);
                        if (ele_id === v || ele_val === v) {
                            document.getElementById(k).selectedIndex = o;
                            var ev = new Event('change');
                            document.getElementById(k).dispatchEvent(ev);
                            //break;
                        }
                    }
                    break;
                default:
                    console.warn('Should not have gotten here');
                    break;
            }
        } else {
            console.warn("Could not find element with id '" + k + "'");
        }
    }
}

function newWindowMenuToggle() {
    console.debug('Executing newWindowMenu ...');
    var display_value = document.getElementById('new-window-menu').style.display;
    console.log({display_value});
    document.getElementById('new-window-menu').style.display = (display_value === 'flex') ? 'none' : 'flex';
}

function processFieldList(flist) {
    console.debug("Executing processFieldList ...\nflist: " + flist);
    var q_str = '';
    for (var f = 0; f < flist.length; f++) {
        q_str += (f === 0) ? '?' : '';
        q_str += (f !== 0 && f < flist.length) ? '&' : '';
        if (document.getElementById(flist[f])) {
            switch (document.getElementById(flist[f]).type) {
                case 'checkbox':
                    q_str += flist[f] + '=' + document.getElementById(flist[f]).checked;
                    break;
                default:
                    q_str += flist[f] + '=' + document.getElementById(flist[f]).value;
                    break;
            }
        } else {
            console.warn('Document element ID: ' + flist[f] + ' could not be found on the form.');
        }
    }
    return q_str;
}

function generateNewWindowLink(includes) {
    event.preventDefault();
    console.debug("Executing generateNewWindowLink ...\nincludes: " + includes);
    var query = '';
    switch (includes) {
        case 'account':
            fields = ['request-came-from', 'request-source', 'local-contact-person', 'phone', 'prefer-phone', 'email', 'prefer-email', 'account', 'instrument-address'];
            query = processFieldList(fields);
            break;
        case 'instrument':
            fields = ['request-came-from', 'request-source', 'local-contact-person', 'phone', 'prefer-phone', 'email', 'prefer-email', 'account', 'instrument-address', 'instrument', 'model', 'serial'];
            query = processFieldList(fields);
            break;
        default:
            console.warn("Could not find a preset for includes value of '" + includes + "'"); 
            break;
    }
    console.log({query});
    window.open(window.location.pathname + query, '_blank');
}

(passed_values.size > 0) ? populateFormFromQueryParams(passed_values) : '';