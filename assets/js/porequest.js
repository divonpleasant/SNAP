function porequest(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing porequest.js...');

    // Retrieve form values
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email= document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "ZEISS Purchase Order Information";
    var body = "Dear " + localContactPerson + ",\n\n" +
               "Thank you for being a valuable Zeiss customer. You are receving this message because you inquired about payment via Purchase Order (PO) for Zeiss goods or services.\n\n" +
               "To make a payment by Purchase Order, email the hard copy of the PO to ZEISS MED Service Operations Admin US at billableservicerequest@zeiss.com\n" +
               "Reference any Customer Care Ticket number you were provided and, if applicable, include the serial number of your Zeiss instrument on the Purchase Order to expedite the request.\n\n" +
               "Regards,\n\n" + email_sig + "\n";

    // Construct the mailto link with encoded data
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('porequestLink').addEventListener('click', porequest);
