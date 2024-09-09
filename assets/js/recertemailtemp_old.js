function recertemailtemp(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;

    // Construct the subject line and body of the email
    var subject = "Zeiss Recertification for S/N:" + serial;
    var body = "Dear " + localContactPerson + ",\n\n" +
               "Thank you for your recent service inquiry. According to our records, serial number " + serial + 
               " is not registered to your place of business in our database. It is our responsibility to ensure the product " +
               "meets or exceeds technical specifications and is safe for use on patients. Please review the information below " +
               "about our Re-Certification program and complete the attached form to begin the process.\n" +
               "Please send the form to recertification@zeiss.com\n\n" +
               "If there are any questions, please contact us at 1-800-341-6968.\n\n" +
               "What is Re-Certification?\n" +
               "The process to register a Zeiss product that gives CZMI the opportunity to ensure the device meets the manufacturers " +
               "specifications for safe use on patients. In addition, to maintain compliance with the Food & Drug Administration (FDA) " +
               "and International Standard for Organization (ISO).\n\n" +
               "What are the customer benefits for Re-Certification?\n" +
               "If the Zeiss product qualifies for re-certification and meets or exceeds the manufacturer's specifications, the customer " +
               "will receive access to the following:\n" +
               "• National Technical Support team\n" +
               "• Ability to provide remote support (Teamviewer, Teleservice, etc.)\n" +
               "• Software updates, if applicable (This does not include billable software and/or licenses)\n" +
               "• Factory repair\n" +
               "• National Field Service Team of experts\n" +
               "• Clinical Application Specialists (Trainers)\n" +
               "• Service agreement options\n" +
               "• Consumables";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:customeremail@email.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('recertemailtempLink').addEventListener('click', recertemailtemp);
