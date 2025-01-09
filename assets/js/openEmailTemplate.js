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
            var activeModel = (eosPreCheck()) ? fetchEosData() : manualOverlay('eos');
            device_context.push(activeModel.short_name);
            device_context.push(activeModel.models[document.getElementById('eos-instrument-model').value].full_name);
            var procd_strs = eosProcContext(activeModel);
            device_context.push(...procd_strs); // see templatelib::eosProcContext for context details
            template_id = 'end-of-support';
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
            device_context.push('eight (8)');
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
            device_context.push('four (4)');
            device_context.push('days');
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
    debugmsg(4, 'Manually executing showOverlay::'+ o_id);
    document.getElementById(o_id + '-overlay').style.display = 'flex';
}
function manualCloseOverlay(o_id) {
    debugmsg(4, 'o_id: ' + o_id);
    //o_id = o_id.substr(0, o_id.length - 8);
    debugmsg(4, 'Manually executing closeOverlay::'+ o_id);
    document.getElementById(o_id + '-overlay').style.display = 'none';
}
function manualOpenEmailTemplate(template_id, closeOL = false) {
    // Self-identify for debugging
    debugmsg(1, 'Executing openEmailTemplate::' + template_id);
    (closeOL) ? manualCloseOverlay(template_id) : '';
    // Find correct template and perform any context-relevant actions
    var device_context = [];
    switch (template_id) {
        case 'end-of-support':
            var activeModel = (eosPreCheck()) ? fetchEosData() : manualOverlay('eos');
            device_context.push(activeModel.short_name);
            device_context.push(activeModel.models[document.getElementById('eos-instrument-model').value].full_name);
            var procd_strs = eosProcContext(activeModel);
            device_context.push(...procd_strs); // see templatelib::eosProcContext for context details
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
            device_context.push('eight (8)');
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
            device_context.push('four (4)');
            device_context.push('days');
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


// Add event listeners to the links
/*
    document.getElementById('canada-service-request').addEventListener('click', openEmailTemplate);
    document.getElementById('eos').addEventListener('click', showOverlay);
    document.getElementById('fse-billing-request').addEventListener('click', openEmailTemplate);
    document.getElementById('fse-update').addEventListener('click', showOverlay);
    document.getElementById('mel-80-90').addEventListener('click', openEmailTemplate);
    document.getElementById('parts-order').addEventListener('click', showOverlay);
    document.getElementById('pm-billing-request').addEventListener('click', openEmailTemplate);
    document.getElementById('smart-services-confirmation').addEventListener('click', openEmailTemplate);
    document.getElementById('visumax').addEventListener('click', openEmailTemplate);
    document.getElementById('win-support').addEventListener('click', openEmailTemplate);

// Add event listeners to overlay confirmation buttons
document.getElementById('parts-order-proceed').addEventListener('click', openEmailTemplate);
document.getElementById('eos-proceed').addEventListener('click', openEmailTemplate);
document.getElementById('fse-update-proceed').addEventListener('click', openEmailTemplate);

// Add event listeners to the overlay close elements
document.getElementById('parts-order-close-overlay').addEventListener('click', closeOverlay);
document.getElementById('eos-close-overlay').addEventListener('click', closeOverlay);
document.getElementById('fse-update-close-overlay').addEventListener('click', closeOverlay);
*/