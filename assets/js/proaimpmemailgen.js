function proaimpmemailgen(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var cct = document.getElementById('cct').value;
    var description = document.getElementById('description').value;
    var date = new Date().toLocaleDateString(); // This gets the current date
    var serial = document.getElementById('serial').value;
    var instrumentAddress = document.getElementById('instrument-address').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    
    // Construct the mailto link
    var mailtoLink = "mailto:serviceoperationsadmin.med.us@zeiss.com" +
        "&subject=" + encodeURIComponent("PROAIM Preventative Maintenance (PM) Quote") +
        "&body=" + encodeURIComponent(
            "Customer needs quote for dispatching Field Service Engineer (FSE) onsite service. The Customer prefers email contact.\n\n" +
            "Zeiss Ticket Number (CCT#): " + cct + "\n" +
            "Problem Description: " + description + "\n" +
            "Ticket Creation Date: " + date + "\n" +
            "Serial Number: " + serial + "\n" +
            "Customer Site: " + instrumentAddress + "\n" +
            "Contact Person: " + localContactPerson + "\n" +
            "Phone Number: " + phone + "\n" +
            "Email Address: " + email + "\n" +
            "Type of Request: Phone request for PM Quote.\n\n"
        );

    // Open the mailto link in the user's default email client
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('proaimpmemailgenLink').addEventListener('click', proaimpmemailgen);
