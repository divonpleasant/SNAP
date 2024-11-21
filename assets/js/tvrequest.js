function tvrequest(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Self-identify for debugging
    debugmsg(1, 'Executing tvrequest.js...');

    // Retrieve form values
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email = document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "Zeiss TeamViewer Request";
    var body = "Dear " + localContactPerson + ",\n\n" +
               "To best help you, we'd like to request access to your instrument via the TeamViewer app so we can investigate your issue.\n\n" +
               "In case the TeamViewer app isn't already available on your instrument:\n\n" +
               "        1. Open a browser (Google Chrome or Firefox work best) on your instrument\n" +
               "        2. Copy and paste (or enter) the following into the browser's address bar:\n\n" +
               "                https://tiny.cc/zeissqs\n\n" +
               "        3. A download should automatically begin (although the screen won't necessarily change)\n" +
               "        4. When the file has finished downloading, you should see an indication of the new file, named TeamViewerQS.exe\n" +
               "        5. Double-click on the TeamViewerQS.exe file to run it\n" +
               "        6. Accept any license agreements\n\n" +
               "We will need the TeamViewer's Partner ID (a series of numbers), and password (an alphanumeric string) in order to make the connection. " +
               "Please also provide us with a convenient date and time window for us to remotely access the device. " +
               "Make sure no one is using the Zeiss instrument when we login.\n\n" +
               "If you have any problems getting TeamViewer installed, don't hesitate to reach out for help.\n\n" +
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
document.getElementById('tvrequestLink').addEventListener('click', tvrequest);
