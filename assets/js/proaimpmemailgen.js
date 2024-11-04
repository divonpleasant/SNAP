function proaimpmemailgen(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var cct = document.getElementById('cct').value;
    var description = document.getElementById('description').value;
    var serial = document.getElementById('serial').value;
    var instrumentAddress = document.getElementById('instrument-address').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
    var soa_email = "serviceoperationsadmin.med.us@zeiss.com";
	
	// Construct the subject line and body of the email
	var subject = "PROAIM Preventative Maintenance (PM) Request";
	var body = "Dear Team, \n\n" +
            "Please send to PROAIM to proceed with on-site service \n\n" +
            "Zeiss Ticket Number (CCT #): " + cct + "\n" +
            "Problem Description: " + description + "\n" +
            "Ticket Creation Date: " + simple_date + "\n" +
            "Serial Number: " + serial + "\n" +
            "Customer Site: " + instrumentAddress + "\n" +
            "Contact Person: " + localContactPerson + "\n" +
            "Phone Number: " + phone + "\n" +
            "Email Address: " + email + "\n" +
            "Type of Request: Phone request for PM.\n\n"
    
    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);
	
	// Construct the mailto link
	var mailtoLink = "mailto:" + encodeURIComponent(soa_email) +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link in the user's default email client
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('proaimpmemailgenLink').addEventListener('click', proaimpmemailgen);
