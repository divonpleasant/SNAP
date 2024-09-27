function fsepoauth(event) {
    // Prevent the default action (which is following the link)
    event.preventDefault();

    // Retrieve form values
    var serial = document.getElementById('serial').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var email= document.getElementById('email').value;
	
	// Process instrument/serial number strings
	if (serial != "") {
		serial_str = " with serial number " + serial;
		subj_serial = " S/N: " + serial;
	} else {
		serial_str = "";
		subj_serial = "";
	}
	var instrument_str;
	switch (document.getElementById('instrument-model').value) {
		case "Cirrus OCT": 
			instrument_str = "Cirrus OCT" + serial_str;
			break;
		case "Cirrus Photo": 
			instrument_str = "Cirrus Photo" + serial_str;
			break;
		case "Clarus": 
			instrument_str = "Clarus" + serial_str;
			break;
		case "HFA3": 
			instrument_str = "HFA" + serial_str;
			break;
		case "IOLMaster": 
			instrument_str = "IOLMaster" + serial_str;
			break;
		case "Visucam 224/524": 
			instrument_str = "Visucam" + serial_str;
			break;
		case "Visucam Pro/NM/NMFA": 
			instrument_str = "Visucam" + serial_str;
			break;
		case "Atlas 500": 
			instrument_str = "Atlas" + serial_str;
			break;
		case "Atlas 9000": 
			instrument_str = "Atlas" + serial_str;
			break;
		case "Stratus 3000/Visante 1000 (old)": 
			instrument_str = "device" + serial_str;
			break;
		default:
			instrument_str = "instrument" + serial_str;
			break;
	}
	console.log("instrument_str: " + instrument_str);

    // Construct the subject line and body of the email
    var subject = "ZEISS Field Service Request" + subj_serial;
    var body = "Dear " + localContactPerson + ",\n\n" +
               "According to our records, your " + instrument_str + " is currently not covered under Warranty or Service Contract. " +
               "In order to proceed with this service request, we will need your approval of the payment method:\n\n" +
               "          [ a ]  Payment with a Credit Card\n" +
               "          [ b ]  Payment with a Hard Copy Purchase Order (PO)\n\n" +
               "…in the minimum amount of $3,500.00. (Dispatch a Field Service Engineer (FSE)).\n\n" +
               "If payment is by Credit Card, you will be billed after services are performed and/or parts are replaced by a Zeiss Technician. " +
               "The Zeiss Technician will contact the office within four business hours to schedule the visit. " +
               "At which time, they will answer all questions regarding specific prices, hourly rates, and travel time. Or, after discussing pricing with your FSE, you may cancel the service request.\n\n" +
               "Regards,\n\n";

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
document.getElementById('fsepoauthLink').addEventListener('click', fsepoauth);
