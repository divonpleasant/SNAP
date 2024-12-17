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
    // Find correct template
    var device_context = [];
    switch (template_id) {
        case 'mel-80-90':
            template_id = 'smile-device';
            device_context = ['MEL 80/90'];
            break;
        case 'parts-proceed':
            device_context.push((document.getElementById('foc').checked) ? 'FOC ' : '');
            device_context.push((document.getElementById('part-list').value.split('\n').length > 1) ? "s" : '');
            device_context.push(procPartsList(document.getElementById('part-list').value));
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
    debugmsg(4, 'Using template: ' + t.templates.email[template_id].name);

    // Construct the mailto link
    var mailto_link = 'mailto:' + encodeURIComponent(t.templates.email[template_id].recipient) + '?';
    var firstarg = true;
    for (copy_type of ['cc', 'bcc']) {
        console.log(t.templates.email[template_id][copy_type]);
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
document.getElementById('canada-service-request').addEventListener('click', openEmailTemplate);
document.getElementById('mel-80-90').addEventListener('click', openEmailTemplate);
document.getElementById('parts-order').addEventListener('click', showOverlay);
document.getElementById('smart-services-confirmation').addEventListener('click', openEmailTemplate);
document.getElementById('visumax').addEventListener('click', openEmailTemplate);
document.getElementById('win-support').addEventListener('click', openEmailTemplate);

// Add event listeners to overlay confirmation buttons
document.getElementById('parts-proceed').addEventListener('click', openEmailTemplate);

// Add event listeners to the overlay close elements
document.getElementById('parts-order-close-overlay').addEventListener('click', closeOverlay);