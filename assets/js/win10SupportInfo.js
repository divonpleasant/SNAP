function win10support(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing win10SupportInfo.js...');

    // Retrieve form values
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email = document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "Zeiss Windows Support";
    var body = "Dear " + localContactPerson + ",\n\n" +
               "You are receiving this message because you inquired about Zeiss's intentions regarding Windows 10 and/or Windows 11 support.\n\n" +
               "The Zeiss HFA3, CIRRUS, CLARUS and PLEXElite devices are currently shipping with Windows 10 1607 (LTSC). We have extended support from Microsoft for that operating system until October 2026.\n\n" +
               "This coming calendar year (2025) we plan to start shipping new devices with Windows 10 IoT Enterprise LTSC 2021 as well as making it available as an upgrade pathway for existing devices already deployed. The Windows 10 IoT Enterprise LTSC 2021 operating system will be supported by Microsoft until January 2032.\n\n" +
               "With regards to Windows 11... Microsoft Windows 11 IoT Enterprise LTSC 2024 is not backwards compatible with the hardware in some of Zeiss's products and will, therefore, require a hardware upgrade. This will require additional engineering time for hardware development and will cost more to upgrade. As a result, Zeiss has made a decision to provide a Windows 10 IoT Enterprise LTSC 2021 based solution that is supported by Microsoft until 2032 ensuring a timely, supported solution is available for our customers.\n\n" +
               "Regards,\n\n" + email_sig + "\n";

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
(sandbox) ? '' : document.getElementById('winSupportLink').addEventListener('click', win10support);
