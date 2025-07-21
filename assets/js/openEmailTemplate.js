function showOverlay(event) {
    var overlay_id = event.srcElement.id;
    debugmsg(1, 'Executing showOverlay::' + overlay_id);
    document.getElementById(overlay_id + '-overlay').style.display = 'flex';
}

function closeOverlay(event) {
    var overlay_id = event.srcElement.id.split('-').filter(function(a) {return a !== 'close';}).join('-');
    debugmsg(5, 'Executing closeOverlay::' + overlay_id);
    document.getElementById(overlay_id).style.display = 'none';
}
var n2w = new T2W('EN_US');

function openEmailTemplate(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();
    //console.log(event);
    var template_id = event.srcElement.id;
    // Self-identify for debugging
    debugmsg(1, 'Executing openEmailTemplate::' + template_id);
    if (typeof document.getElementById(template_id + 'close-overlay') !== 'undefined') {
        manualCloseOverlay(template_id);
    }
    // Find correct template and perform any context-relevant actions
    var device_context = [];
    switch (template_id) {
        case 'eos-proceed':
            var active_model = (eosPreCheck()) ? fetchEosData() : updateSystemBox('EoS email template could not be processed');
            device_context.push(document.getElementById('instrument').value);
            device_context.push(document.getElementById('model').value);
            var procd_strs = eosProcContext(active_model);
            device_context.push(...procd_strs); // see templatelib::eosProcContext for context details
            break;
        case 'fse-update-proceed':
            device_context.push((document.getElementById('svo-ticket').value !== '') ? document.getElementById('svo-ticket').value : '');
            device_context.push((document.getElementById('svo-date').value !== '') ? document.getElementById('svo-date').value : '');
            device_context.push(setPreferredComm());
            template_id = 'fse-update';
            break;
        case 'fse-billing-request':
            device_context.push('Field Service');
            device_context.push('3,500.00');
            device_context.push('Dispatch a Field Service Engineer (FSE)');
            device_context.push('');
            device_context.push((document.getElementById('cct').value !== '') ? `(# ${document.getElementById('cct').value}) ` : '');
            device_context.push(n2w.toWords(Number(so.Settings.process.fse_sla.value)) + ' (' + so.Settings.process.fse_sla.value + ')');
            device_context.push('hours');
            template_id = 'billing-request';
            break;
        case 'mel-80-90':
            template_id = 'smile-device';
            device_context = ['MEL 80/90'];
            break;
        case 'parts-order-proceed':
            device_context.push((document.getElementById('foc').checked) ? 'FOC ' : '');
            device_context.push((document.getElementById('part-list').value.split('\n').length > 1) ? "s" : '');
            device_context.push(procPartsList(document.getElementById('part-list').value));
            template_id = 'parts-request';
            break;
        case 'pm-billing-request':
            device_context.push('Preventative Maintenance');
            device_context.push('1,600.00');
            device_context.push('Dispatch a Field Service Engineer (FSE)');
            device_context.push(' per instrument');
            device_context.push((document.getElementById('cct').value !== '') ? `(# ${document.getElementById('cct').value}) ` : '');
            device_context.push(n2w.toWords(Number(so.Settings.process.fse_pm_sla.value)) + ' (' + so.Settings.process.fse_pm_sla.value + ')');
            device_context.push('hours');
            template_id = 'billing-request';
            break;
        case 'visumax':
            template_id = 'smile-device';
            device_context = ['Visumax'];
            break;
        default:
            device_context = [];
            break;
    }
    const t = new generateTemplates(device_context);
    debugmsg(5, 'template_id: ' + template_id);
    debugmsg(4, 'Using template: ' + t.templates.email[template_id].name);

    // Construct the mailto link
    var mailto_link = 'mailto:' + encodeURIComponent(t.templates.email[template_id].recipient) + '?';
    var firstarg = true;
    for (copy_type of ['cc', 'bcc']) {
        if (t.templates.email[template_id][copy_type].length > 0) {
            var addresses = t.templates.email[template_id][copy_type].join(';');
            var enc_add = encodeURIComponent(addresses);
            mailto_link = (firstarg) ? mailto_link + copy_type + '=' + enc_add : mailto_link + '&' + copy_type + '=' + enc_add;
            firstarg = (firstarg) ? false : false;
        }
    }
    for (mail_builder of ['subject', 'body']) {
        if (t.templates.email[template_id][mail_builder] != '') {
            var build_data = t.templates.email[template_id][mail_builder];
            var enc_data = encodeURIComponent(build_data);
            mailto_link = (firstarg) ? mailto_link + mail_builder + '=' + enc_data : mailto_link + '&' + mail_builder + '=' + enc_data;
            firstarg = (firstarg) ? false : false;
        }
    }

    debugmsg(5, 'mailto_link: ' + mailto_link);

    // Open the mailto link
    window.location.href = mailto_link;
}

/* MANUAL FUNCTIONS
   These functions will REPLACE the eventlistener functions in a future update.
   The EL versions do not reflect the future development path (where multiple
   calls to the functions are used for various template activities) but are
   included here for backwards compatibility on the mainline SNAP page until
   the migration is complete.
*/
function manualOverlay(o_id) {
    console.debug('Manually executing showOverlay::' + o_id);
    document.getElementById(o_id + '-overlay').style.display = 'flex';
}
function manualCloseOverlay(o_id) {
    console.debug('Manually executing closeOverlay::' + o_id);
    document.getElementById(o_id + '-overlay').style.display = 'none';
}
function manualOpenEmailTemplate(template_id, closeOL = false) {
    // Self-identify for debugging
    console.debug('Manually executing openEmailTemplate::' + template_id);
    (closeOL) ? manualCloseOverlay(template_id) : '';
    // Find correct template and perform any context-relevant actions
    var device_context = [];
    switch (template_id) {
        case 'end-of-support':
            //var active_model = (eosPreCheck()) ? fetchEosData() : updateSystemBox('EoS email template could not be processed');
            if (eosPreCheck()) {
                var active_model = fetchEosData();
                device_context.push(document.getElementById('instrument').value);
                device_context.push(document.getElementById('model').value);
                var procd_strs = eosProcContext(active_model);
                device_context.push(...procd_strs); // see templatelib::eosProcContext for context details
            } else {
                updateSystemBox('EoS email template could not be processed');
                device_context.push('ABORT');
            }
            break;
        case 'fse-update':
            device_context.push((document.getElementById('svo-ticket').value !== '') ? document.getElementById('svo-ticket').value : '');
            device_context.push((document.getElementById('svo-date').value !== '') ? document.getElementById('svo-date').value : '');
            device_context.push(setPreferredComm());
            device_context.push(setPreferredComm());
            break;
        case 'fse-billing-request':
            device_context.push('Field Service');
            device_context.push('3,500.00');
            device_context.push('Dispatch a Field Service Engineer (FSE)');
            device_context.push('');
            device_context.push((document.getElementById('cct').value !== '') ? `(# ${document.getElementById('cct').value}) ` : '');
            device_context.push(n2w.toWords(Number(so.Settings.process.fse_sla.value)) + ' (' + so.Settings.process.fse_sla.value + ')');
            device_context.push('hours');
            template_id = 'billing-request';
            break;
        case 'mel-80-90':
            template_id = 'smile-device';
            device_context = ['MEL 80/90'];
            break;
        case 'parts-order':
            device_context.push((document.getElementById('foc').checked) ? 'FOC ' : '');
            device_context.push((document.getElementById('part-list').value.split('\n').length > 1) ? "s" : '');
            device_context.push(procPartsList(document.getElementById('part-list').value));
            break;
        case 'pm-billing-request':
            device_context.push('Preventative Maintenance');
            device_context.push('1,600.00');
            device_context.push('Dispatch a Field Service Engineer (FSE)');
            device_context.push(' per instrument');
            device_context.push((document.getElementById('cct').value !== '') ? `(# ${document.getElementById('cct').value}) ` : '');
            device_context.push(n2w.toWords(Number(so.Settings.process.fse_pm_sla.value)) + ' (' + so.Settings.process.fse_pm_sla.value + ')');
            device_context.push('hours');
            template_id = 'billing-request';
            break;
        case 'proaim-pm-request':
            device_context.push('Preventative Maintenance (PM)');
            device_context.push('preventative maintenance');
            device_context.push('PM');
            template_id = 'proaim-request';
            break;
        case 'proaim-service-request':
            device_context.push('Service');
            device_context.push('service');
            device_context.push('break-fix');
            template_id = 'proaim-request';
            break;
        case 'soa-contract-pm':
            template_id = 'service-admin-contract-pm-request';
            break;
        case 'visumax':
            template_id = 'smile-device';
            device_context = ['Visumax'];
            break;
        default:
            device_context = [];
            break;
    }
    console.debug({device_context});
    if (device_context[0] === 'ABORT') {
        console.warn("Cannot proceed with template '" + template_id + "'; context processing failed");
        return false;
    }
    const t = new generateTemplates(device_context);
    console.debug({template_id});
    console.debug('Using template: ' + t.templates.email[template_id].name);

    // Construct the mailto link
    var mailto_link = 'mailto:' + encodeURIComponent(t.templates.email[template_id].recipient) + '?';
    var firstarg = true;
    for (copy_type of ['cc', 'bcc']) {
        if (t.templates.email[template_id][copy_type].length > 0) {
            var addresses = t.templates.email[template_id][copy_type].join(';');
            console.debug({addresses});
            var enc_add = encodeURIComponent(addresses);
            mailto_link = (firstarg) ? mailto_link + copy_type + '=' + enc_add : mailto_link + '&' + copy_type + '=' + enc_add;
            firstarg = (firstarg) ? false : false;
        }
    }
    for (mail_builder of ['subject', 'body']) {
        if (t.templates.email[template_id][mail_builder] != '') {
            var build_data = t.templates.email[template_id][mail_builder];
            var enc_data = encodeURIComponent(build_data);
            mailto_link = (firstarg) ? mailto_link + mail_builder + '=' + enc_data : mailto_link + '&' + mail_builder + '=' + enc_data;
            firstarg = (firstarg) ? false : false;
        }
    }

    console.debug({mailto_link});
    console.debug('mailto_link.length: ' + mailto_link.length);
    
    /*
        Google Chrome has a limitation where it will silently refuse to open a 
        mailto link if it exceeds a particular length (tested at 2,034 
        characters). This is also affected by the encoding of values, which 
        expands whitespace and special characters (e.g. commas) to 3-character 
        codes, so templates with a lot of formatting are likely to hit this 
        condition more frequently.
        The following workaround copies the template text to the clipboard 
        rather than performing the mailto: operation when this condition is 
        met.
        The mailto:?subject&body= characters equal 21
        To accommodate 95 % of email addresses (given an average of 22 
            characters), add 31.
        To accommodate first names, in database communities, 30/35 is 
            generally accepted as reasonable practice.
        Signatures add an estimated 175 characters (including encoded white 
        space).
        This should mean a baseline estimate for "overhead" characters is ~275.
        
        The average word-plus-whitespace length (encoded) is 9 characters, 
        in English, which gives us a rough guideline of 190 words per template.
        
        This should accommodate overhead characters plus a conservative 
        guideline to avoid hitting the copy/paste fallback condition as much 
        as possible.
    */
    if (mailto_link.length > 2034) {
        var html_text_email = `<strong>To:</strong> ${t.templates.email[template_id].recipient}<br />
<strong>CC/BCC:</strong> ${addresses}<br />
<strong>Subject:</strong> ${t.templates.email[template_id].subject}<br />
${t.templates.email[template_id].body}`;
        //navigator.clipboard.writeText(html_text_email).then(function() {
        navigator.clipboard.writeText(t.templates.email[template_id].body).then(function() {
            (so.Settings.alerts.copy.value) ? updateSystemBox('Email text copied to clipboard!') : '';
        }).catch(function(err) {
            updateSystemBox('Failed to copy data to clipboard: ', err);
        });
        console.log("'Copied text to clipboard: '" + html_text_email + "'");

        displayProcessMessage(`The current template, "${t.templates.email[template_id].name}", when combined with the appropriate form data, exceeds the maximum template length for certain browsers by ${mailto_link.length - 2034} characters.<br />The following text has been copied to the clipboard instead, which can be manually pasted into a new email document from your mail client:<br /><br />
<pre class="console">${html_text_email}</pre>`);
    } else {
        // Open the mailto link
        try {
            window.location.href = mailto_link;
        } catch (error) {
            console.log(error);
        }
    }
}
