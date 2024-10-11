function endofsupportoct4000(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
	var email = document.getElementById('email').value; // Retrieve the email from the input field
    
    var serial_str = "\n\n";
    if (serial != "") {
        serial_str = "\n\nSerial Number: " + serial + "\n\n";
    }

    // Construct the subject line and body of the email
    var subject = "End of Support, CIRRUS® 400 and 4000 Systems";
    var body = "Hi " + localContactPerson + "," + serial_str +
               "We want to inform you that, as of April 30, 2022, ZEISS has officially ended support for the CIRRUS® 400 and 4000 systems. " +
               "This change means that we no longer offer technical expertise, parts, or service for these devices. Additionally, it is no longer " +
               "possible to extend, renew, or create new service agreements for these systems.\n\n" +
               "All existing service agreements for the CIRRUS® 400 and 4000 systems were terminated as of April 30, 2022. If you had a prepaid service " +
               "agreement extending beyond this date, ZEISS has already issued credits accordingly.\n\n" +
               "If you need guidance on how to manage your CIRRUS devices or are exploring alternative solutions, our sales team, including [****ENTERSALESREP***], " +
               "are here to assist you. They can provide detailed information on your options and help you find the best path forward for your needs.\n\n" +
               "For more detailed information, please visit this page:\n\n" +
               "https://www.zeiss.com/content/dam/med-hcp/usa/customer-care/end-of-lifecycle-info/opt/final_eos_cirrus_400_4000.pdf/_jcr_content/renditions/original.media_file.download_attachment.file/final_eos_cirrus_400_4000.pdf\n\n" +
               "Thank you for your continued partnership with ZEISS.\n\n" +
               "Sincerely,";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link using the dynamic email
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('endofsupportoct4000Link').addEventListener('click', endofsupportoct4000);
