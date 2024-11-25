function smileEscalationVisumax(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing smileescalate.js::smileEscalationVisumax...');

// Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var cct = document.getElementById('cct').value;
    var account = document.getElementById('account').value;
    var address = document.getElementById('instrument-address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;
    var troubleshooting = document.getElementById('troubleshooting-performed').value;

    // Construct the subject line and body of the email
    var subject = "SMILE Device (VISUMAX) Service Request";
    var body = "Hi Terry,\n" +
               "The following customer needs a service request for a VISUMAX device, please.\n\n" +
               "Business Location Details\n\n" +
               "        Account Name: " + account + "\n" +
               "        Address: " + address + "\n" +
               "        Serial Number: " + serial + "\n\n" +
               "Contact Details\n\n" +
               "        Contact Name: " + localContactPerson + "\n" +
               "        Phone Number: " + phone + "\n" +
               "        Email Address: " + email + "\n" +
               "        Problem Description: " + description + "\n" +
               "        Troubleshooting Performed: " + troubleshooting + "\n\n" +
               "Regards,\n\n" + email_sig + "\n";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:dl.med-servicerefractive.us@zeiss.com" +
        "?cc=serviceoperationsadmin.med.us@zeiss.com" +
        "&subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

function smileEscalationMel80(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing smileescalate.js::smileEscalationMel80...');

// Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var cct = document.getElementById('cct').value;
    var account = document.getElementById('account').value;
    var address = document.getElementById('instrument-address').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;
    var troubleshooting = document.getElementById('troubleshooting-performed').value;

    // Construct the subject line and body of the email
    var subject = "SMILE Device (MEL 80/90) Service Request";
    var body = "Hi Terry,\n" +
               "The following customer needs a service request for a MEL 80/90 device, please.\n\n" +
               "Business Location Details\n\n" +
               "        Account Name: " + account + "\n" +
               "        Address: " + address + "\n" +
               "        Serial Number: " + serial + "\n\n" +
               "Contact Details\n\n" +
               "        Contact Name: " + localContactPerson + "\n" +
               "        Phone Number: " + phone + "\n" +
               "        Email Address: " + email + "\n" +
               "        Problem Description: " + description + "\n" +
               "        Troubleshooting Performed: " + troubleshooting + "\n\n" +
               "Regards,\n\n" + email_sig + "\n";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:dl.med-servicerefractive.us@zeiss.com" +
        "?cc=serviceoperationsadmin.med.us@zeiss.com" +
        "&subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listeners to the links
document.getElementById('visumaxLink').addEventListener('click', smileEscalationVisumax);
document.getElementById('mel80Link').addEventListener('click', smileEscalationMel80);