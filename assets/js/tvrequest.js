function tvrequest(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email = document.getElementById('email').value;

    // Construct the subject line and body of the email
    var subject = "TeamViewer Request ";
    var body = "Hi " + localContactPerson + ", \n\n" +
               "What specific issues are you encountering? \n\n" +
               "Please give us access to your Cirrus HD-OCT Instrument, via the TeamViewer App, so, we can investifate your issue(s). \n\n" +
               "Just in case if the TeamViewer App isn't available on the instruent: \n\n" +
               "        1. Open a browser (Google Chrome) on your Cirrus HD-OCT Instrument, then type this in the URL: \n\n" +
               "            tiny.cc/zeissqs \n\n" +
               "        2. It will automatically initiate a download \n\n" +
               "        3. A small pop-up window will show on the right-hand corner: TeamViewerQS.exe \n\n" +
               "        4. Double Click on the TeamViewerQS.exe application. \n\n" +
               "You can give us the TeamViewer's Partner ID, Password, and Date/Time. \n" +
               "Just make sure no one is using the Zeiss instrument when we login. \n\n" +
               "Regards,";

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
