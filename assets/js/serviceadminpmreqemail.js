function serviceadminpmreqemail(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
	var account = document.getElementById('account').value;
	var instrumentAddress = document.getElementById('instrument-address').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
	var localContactPhone = document.getElementById('phone').value;

    // Construct the subject line and body of the email
    var subject = "Preventative Maintenance Request";
    var body = "Hi Admin Team,\n\n" +
			   "Customer has called in to request a contract PM with the following info:\n\n" +
			   "Customer Name: " + account + "\n\n" +
			   "Site Location: " + instrumentAddress + "\n\n" +
			   "Contact Name/Phone Number: " + localContactPerson + " / " + localContactPhone + "\n\n" +
			   "Serial Number: " + serial + "\n\n" +
			   "Contract #: \n\n" +
			   "Date PM Requested: \n\n";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:serviceoperationsadmin.med.us@zeiss.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('serviceadminpmreqemailLink').addEventListener('click', serviceadminpmreqemail);
