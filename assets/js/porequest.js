function prevmaintemail(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email= document.getElementById('email').value;

    const po_serial_num_strings = proc_template_serial(serial);
    (debug_mode) ? console.log("[DEBUG] po_serial_num_strings: " + po_serial_num_strings) : '';
    var subj_serial = po_serial_num_strings[0];
    var instrument_str = po_serial_num_strings[1];
    (debug_mode) ? console.log("[DEBUG] subj_serial: " + subj_serial) : '';
    (debug_mode) ? console.log("[DEBUG] instrument_str: " + instrument_str) : '';

    // Construct the subject line and body of the email
    var subject = "ZEISS Preventative Maintenance" + subj_serial;
    var body = "Dear " + localContactPerson + ",\n\n" +
               "According to our records, your " + instrument_str + " is currently not covered under Warranty or Service Contract. " +
               "In order to proceed with this service request, we will need your approval of the payment method:\n\n" +
               "        [ a ]  Payment with a Credit Card\n" +
               "        [ b ]  Payment with a Hard Copy Purchase Order (PO)\n\n" +
               "This approval would be for the minimum amount of $1,600.00 USD [Preventative Maintenance].\n\n" +
               "If payment is by Credit Card, you will be invoiced after services are performed and/or parts are replaced by a Zeiss Technician. " +
               "The Zeiss Technician will contact the office within four (4) business days to schedule the visit. " +
               "At which time, they will answer all questions regarding specific prices, hourly rates, and travel time. Or, after discussing pricing with your FSE, you may cancel the service request.\n\n" +
               "Regards,\n\n";

    // Construct the mailto link with encoded data
    var mailtoLink = "mailto:" + encodeURIComponent(email) +
                     "?subject=" + encodeURIComponent(subject) +
                     "&body=" + encodeURIComponent(body);

    // Open the mailto link
    window.location.href = mailtoLink;
}

// Add event listener to the link
document.getElementById('prevmaintemailLink').addEventListener('click', prevmaintemail);
