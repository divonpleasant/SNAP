document.getElementById('printintnotes').addEventListener('click', function(event) {
    event.preventDefault();

    /* Process comm preferences */
    var comm_preference = outputCommunicationPref();
    /* Process billing POC */
    var billing_str = generateBillingContact();

    var fields = [
        { label: "Time Spent", value: document.getElementById('remote-time').value },
		{ label: "Request Came From", value: document.getElementById('request-came-from').value },
		{ label: "Request Source", value: document.getElementById('request-source').value },
        { label: "Error Code Group", value: document.getElementById('error-group').value },
        { label: "Error Code", value: document.getElementById('error-code').value },
        { label: "Action Code", value: document.getElementById('action-code').value },
        { label: "Other Internal Notes", value: document.getElementById('other-internal-notes').value }
    ];

    var data = `Was Remote Support Provided? ${document.getElementById('remote-support').checked ? "Yes" : "No"}
Time Spent: ${document.getElementById('remote-time').value}
Device Module: Network/Connectivity
Sub Module: N/A*

Contact Made By: ${document.getElementById('request-came-from').value}
Contact Method: ${document.getElementById('request-source').value}

Point of Contact: ${document.getElementById('local-contact-person').value}
Phone Number: ${document.getElementById('phone').value}
Email Address: ${document.getElementById('email').value}
${comm_preference}

${billing_str}

Error Code Group: ${document.getElementById('error-group').value}
Error Code: ${document.getElementById('error-code').value}
Action Code: ${document.getElementById('action-code').value}

${document.getElementById('other-internal-notes').value}`;

	console.log("DATA\n====\n" + data);

    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');
    debugmsg(4, "NON-EMPTY DATA\n=========================\n" + nonEmptyData);
    var lineClearData = nonEmptyData.replace(/\n{3,}/g, '\n\n');
    var singleLineData = lineClearData.replace(/\n{1,}$/, '\n');
    var processedData = singleLineData.replace(/\n$/, '');
	debugmsg(5, "PROCESSED DATA\n========================\n" + processedData);

    // Copy data to clipboard
    navigator.clipboard.writeText(processedData).then(function() {
        (copy_alert) ? alert('Internal Notes copied to clipboard!') : '';
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
});
