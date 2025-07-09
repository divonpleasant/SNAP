// Startup routine
var curr_date = new Date();
var utc_year = curr_date.getUTCFullYear();

const zp = new generateProductData();
console.log(`productData loaded...
    Schema: v${zp.pdata.schema_version}
    Data: v${zp.pdata.data_version}`);

function exportAudit(data, extension = '.txt', filename = 'audit') {
    var blob = new Blob([data], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${filename}${extension}`;
    link.click();
}

function processAuditResults() {
    //var checkedBoxes = document.querySelectorAll('.chx_inp:checked');
    var checkedBoxes = document.querySelectorAll('.chx_inp');
    var commentFeedback = document.querySelectorAll('input[type=text]');
    console.debug({checkedBoxes});
    var audit_results = '';
    for (var c = 0; c < commentFeedback.length; c++) {
        console.debug(checkedBoxes[c].id.substr(5, ).replace(/-/g, '::') + " checked? " + checkedBoxes[c].checked);
        if (checkedBoxes[c].checked) {
            audit_results += '  Flagged: ' + checkedBoxes[c].id.substr(5, ).replace(/-/g, '::');
            if (commentFeedback[c].value !== '') {
                audit_results += " with comment: '" + commentFeedback[c].value + "'";
            }
            audit_results += "\n";
        } else if (commentFeedback[c].value !== '') {
            audit_results += 'Commented: ' + commentFeedback[c].id.substr(8, ).replace(/-/g, '::') + " comment: '" + commentFeedback[c].value + "'\n";
        }
    }
    console.log(audit_results);
    exportAudit(audit_results);
}

function displayAuditReview(audit_type) {
    console.debug('Executing displayAuditReview...');
    console.debug({audit_type});
    document.getElementById('audit_submit').removeAttribute("disabled");
    document.getElementById('audit_submit').addEventListener('click', processAuditResults);
    switch (audit_type) {
        case 'productData':
            var title = 'Product Data';
            var meta = "<table class='meta'><thead><tr><th class='keycol'>data_key</th><td class='valcol'>data_value</td><th class='flag-feedback'>Flagged?</th><th class='comment-feedback'>Comment</th></tr></thead></table>";
            var audit_data = auditData(zp.pdata);
            break;
        default:
            console.log('Could not determine audit process from audit type "' + audit_type + '"');
    }
    document.getElementById('audit-title').innerHTML = title;
    document.getElementById('metadata').innerHTML = meta;
    document.getElementById('audit').innerHTML = audit_data;
}

function auditData(obj, level = 0, enclosing_key = '') {
    console.debug('Executing auditData...');
    console.debug({level});
    console.debug({obj});
    var ignore_subkeys = ['DEFAULT', 'meta'];
    var audit_output = '<table';
    audit_output += (level > 0) ? ' class="subtable">' : '>';
    for (var a = 0; a < Object.keys(obj).length; a++) {
        console.debug('object iteration ' + a + ' of ' + Object.keys(obj).length);
        var thiskey = Object.keys(obj)[a];
        var breadcrumb = (enclosing_key === '') ? thiskey : enclosing_key + '-' + thiskey;
        if (!ignore_subkeys.includes(thiskey)) {
            switch (typeof obj[thiskey]) {
                case 'boolean':
                case 'string':
                    var formatted_value = formatValue(obj[thiskey]);
                    console.debug('key: ' + thiskey + '; value: ' + obj[thiskey] + '; type: string');
                    audit_output += `<tr><th class="keycol">${thiskey}</th><td class="valcol">${formatted_value}</td><td class="flag-feedback"><input type="checkbox" id="flag-${breadcrumb}" class="chx_inp" /></td><td class="comment-feedback"><input id="comment-${breadcrumb}" class="cmt_inp" type="text" /></td></tr>`;
                    continue;
                case 'object':
                    var next_level = level + 1;
                    if (Array.isArray(obj[thiskey])) {
                        console.debug('key: ' + thiskey + '; value: ' + obj[thiskey] + '; type: array');
                        audit_output += `<tr><th colspan="4">${thiskey}</th></tr><tr><td colspan="4">`;
                        audit_output += auditData(obj[thiskey], next_level, breadcrumb);
                        audit_output += `</td></tr>`;
                    } else {
                        console.debug('key: ' + thiskey + '; type: object');
                        audit_output += `<tr><th colspan="4">${thiskey}</th></tr><td colspan="4">`;
                        audit_output += auditData(obj[thiskey], next_level, breadcrumb);
                        audit_output += `</td></tr>`;
                    }
                    continue;
                case 'array':
                    console.debug('key: ' + thiskey + '; value: ' + obj[thiskey] + '; type: array');
                    audit_output += `<code>${prefix}<strong>${thiskey}:</strong> [ARRAY]</code><br />`;
                    continue;
                default:
                    var type_chk = (typeof obj[thiskey]);
                    console.debug({type_chk});
                    console.error('key: ' + thiskey + '; value: ' + obj[thiskey] + '; type: UNKNOWN');
                    break;
            }
        }
    }
    audit_output += '</table>';
    console.debug({audit_output});
    return audit_output;
}

function formatValue(value_str, max_len = 50) {
    console.debug("Executing formatValue...\n  value_str: " + value_str + "\n  max_len: " + max_len);
    var ret_str = '';
    const url_pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
    if (isValidUrl(value_str)) {
        console.debug("formatValue " + value_str + " length: " + value_str.length);
        var abbr_str = (value_str.length > max_len) ? value_str.substring(0, (max_len / 2)) + '...' + value_str.substr(-(max_len / 2), ) : '';
        ret_str = '<a href="' + value_str + '" target="_blank">';
        ret_str += (abbr_str !== '') ? abbr_str : value_str;
        ret_str += '</a>';
    } else {
        ret_str = value_str;
    }
    console.debug('formatValue returning: ' + ret_str);
    return ret_str;
}

function isValidUrl(test_url_str) {
    try {
        new URL(test_url_str);
        return true;
    } catch (e) {
        console.debug({e});
        return false;
    }
}
