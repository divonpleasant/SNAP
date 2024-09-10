function fseupdate(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var cct = document.getElementById('cct').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "Field Service Engineer Status Inquiry - SVO# " + cct ;
    var body = "Hi Team, \n\n" +
               "The customer " + localContactPerson + " has called requesting a status update on the dispatch of the Field Service Engineer for Service Request " + cct + ". \n" +
               "Can someone reach out to the customer and provide the lastest update to the customer? \n\n" +
               "    Local Contact Person: " + localContactPerson + "\n" +
               "    Contact Phone Number: " + phone + "\n" +
               "    Email Address: " + email + "\n\n" +
               "Thank you for your prompt attention to this matter \n\n" +
               "Regards,";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:fieldservicedispatchinquiries.med.us@zeiss.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('fseupdateLink').addEventListener('click', fseupdate);
