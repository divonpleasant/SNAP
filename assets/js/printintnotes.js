document.getElementById('printintnotes').addEventListener('click', function(event) {
    event.preventDefault();

	/* Process OCT Disk Space */
	function process_disk_space(test_field) {
		debugmsg(5, 'test_field: ' + test_field);
		var test_value = document.getElementById(test_field).value;
        var drive_array = test_field.split('-');
        debugmsg(5, 'drive_array: ' + drive_array);
		// drive_array[0] is for instrument name; drive_array[1] is drive letter
        var instr_code = drive_array[0];
        var base_drive = drive_array[1]; 
		debugmsg(5, 'base_drive: ' + base_drive);
		var drive = base_drive.toUpperCase();
		var disk_string;
		if (test_value != '') {
			debugmsg(5, 'test_value (' + test_value + ') is not empty; processing string');
			debugmsg(5, 'Drive: ' + drive + ":\ ");
			var free_value = document.getElementById(instr_code + '-' + base_drive + '-drive-free').value;
			debugmsg(5, 'free_value: ' + free_value);
			var free_units = document.getElementById(instr_code + '-' + base_drive + '-drive-free-size').value;
			debugmsg(5, 'free_units: ' + free_units);
			var total_value = document.getElementById(instr_code + '-' + base_drive + '-drive-total').value;
			debugmsg(5, 'total_value: ' + total_value);
			var total_units = document.getElementById(instr_code + '-' + base_drive + '-drive-total-size').value;
			debugmsg(5, 'total_units: ' + total_units);
			disk_string = free_value + ' ' + free_units.toUpperCase() + ' of ' + total_value + ' ' + total_units.toUpperCase();
			debugmsg(5, disk_string);
			return disk_string;
		} else {
			debugmsg(5, 'test_field: ' + test_field + ' is empty; exiting');
			return "";
		}
	}
	var oct_c_space = process_disk_space('oct-c-drive-free');
	var oct_e_space = process_disk_space('oct-e-drive-free');
    
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

Cirrus HD-OCT/Review Workstation Status: ${document.getElementById('oct-work-station-status').value}
OS (C Drive): ${oct_c_space}
Data (E Drive): ${oct_e_space}

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
