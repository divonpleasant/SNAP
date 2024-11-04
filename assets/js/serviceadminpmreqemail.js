function showOverlay(event) {
    event.preventDefault();
    document.getElementById('overlay-pmreq').style.display = 'flex';
}

function proceedToSendEmail(event) {
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
	var account = document.getElementById('account').value;
	var instrumentAddress = document.getElementById('instrument-address').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var localContactPhone = document.getElementById('phone').value;
    var contract = document.getElementById('contract-number').value.trim();

    // Construct the subject line and body of the email
    var subject = "Preventative Maintenance Request S/N: " + serial;
    var body = "Hi Admin Team,\n\n" +
			   "Customer has called in to request a contract PM with the following info:\n\n" +
			   "Customer Name: " + account + "\n\n" +
			   "Site Location: " + instrumentAddress + "\n\n" +
			   "Contact Name/Phone Number: " + localContactPerson + " / " + localContactPhone + "\n\n" +
               "Serial Number: " + serial + "\n\n" +
               "Contract #: " + contract + "\n\n" +
               "Date PM Requested: " + simple_date + "\n\n" +
               "Regards,";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:serviceoperationsadmin.med.us@zeiss.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Hide the overlay after proceeding
    document.getElementById('overlay-pmreq').style.display = 'none';
}

// Add event listener to the fseupdateLink for showing the overlay
document.getElementById('serviceadminpmreqemailLink').addEventListener('click', showOverlay);

// Add event listener to the "Proceed" button for sending the email
document.getElementById('pm-proceed-button').addEventListener('click', proceedToSendEmail);

// Close button functionality for the overlay
document.getElementById('close-overlay-pmreq').addEventListener('click', function () {
    document.getElementById('overlay-pmreq').style.display = 'none';

});