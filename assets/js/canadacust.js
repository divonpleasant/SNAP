function canadacustomer(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var cct = document.getElementById('cct').value;
    var account = document.getElementById('account').value;
    var address = document.getElementById('instrument-address').value;
    var model = document.getElementById('instrument-model').value;
    var winver = document.getElementById('windows-version').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var description = document.getElementById('description').value;
    var troubleshooting = document.getElementById('troubleshooting-performed').value;

    // Construct the subject line and body of the email
    var subject = "Service Request - Calgary, AB CCT# " + cct + " SN: " + serial;
    var body = "Hi Zeiss Canada Technical Support Team, \n\n" +
               "This Canadian Customer needs a Service Request \n\n" +
               "Business Location Details \n\n" +
               "        Account Name: " + account + "\n" +
               "        Address: " + address + "\n" +
               "        Serial Number: " + serial + "\n" +
               "        Instrument Description: " + model+ "\n" +
               "        Windows Version: " + winver + "\n\n" +
               "Contact Details  \n\n" +
               "        Contact Name: " + localContactPerson + "\n" +
               "        Office Phone Number: " + phone + "\n" +
               "        Email Address: " + email + "\n" +
               "        Problem Description: " + description + "\n" +
               "        Troubleshooting Performed: " + troubleshooting + "\n\n" +
               "Regards,";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:service_canada@zeiss.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('canadacustomerLink').addEventListener('click', canadacustomer);
