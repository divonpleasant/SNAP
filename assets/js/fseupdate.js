// Function to open the overlay when the fseupdateLink is clicked
function showOverlay(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
}

// Function to send an email after "Proceed" is clicked
function proceedToSendEmail() {
    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var svoDate = document.getElementById('svo-date').value;
    var svoTicket = document.getElementById('svo-ticket').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "Field Service Engineer Status Inquiry - SVO #" + svoTicket;
    var body = "Hi Team,\n\n" +
               "The customer " + localContactPerson + " has called requesting a status update on the dispatch of the Field Service Engineer for Service Request " + svoTicket + ". \n" +
               "Can someone please reach out and provide the lastest update to the customer?\n\n" +
               "    Local Contact Person: " + localContactPerson + "\n" +
               "    Contact Phone Number: " + phone + "\n" +
               "    Email Address: " + email + "\n" +
               "    Created On: " + svoDate + "\n" +
               "    SVO #: " + svoTicket + "\n\n" +
               "Thank you for your prompt attention to this matter.\n\n" +
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

    // Hide the overlay after proceeding
    document.getElementById('overlay').style.display = 'none';
}

// Add event listener to the fseupdateLink for showing the overlay
document.getElementById('fseupdateLink').addEventListener('click', showOverlay);

// Add event listener to the "Proceed" button for sending the email
document.getElementById('proceed-button').addEventListener('click', proceedToSendEmail);

// Close button functionality for the overlay
document.getElementById('close-overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
