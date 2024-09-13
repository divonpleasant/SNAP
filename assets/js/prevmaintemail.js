function prevmaintemail(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email= document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "ZEISS Preventative Maintenance S/N: " + serial;
    var body = "Hi " + localContactPerson + ",\n\n" +
               "According to our records, Serial Number " + serial + " is currently not covered under Warranty or Service Contract. " +
               "In order to proceed with this service request, we will need your approval of the Payment Method… \n\n" +
               "         A.  Payment with a Credit Card  or  \n" +
               "         B.  Payment with a Hard Copy Purchase Order(PO) \n\n" +
               "… in the minimum amount of $1,600.00.( Preventive Maintenance ).  /  $3,500.00.( Dispatch a Field Service Engineer( FSE )).\n\n" +
               "If payment is by Credit Card, you will be invoiced after services are performed and/or parts are replaced by a Zeiss Technician. \n\n" +
               "If payment is by PO, email the hard copy of the Purchase Order to ZEISS MED Service Operations Admin US \n" +
               "serviceoperationsadmin.med.us@zeiss.com \n\n" +
               "The Zeiss Technician will contact the office within four business hours to schedule the visit. \n" +
               "At which time, they will answer all questions regarding specific prices, hourly rates, travel time or you may cancel the service request.\n";
               "Regards, \n";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('prevmaintemailLink').addEventListener('click', prevmaintemail);
