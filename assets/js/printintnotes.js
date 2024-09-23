document.getElementById('printintnotes').addEventListener('click', function(event) {
    event.preventDefault();

    var date = new Date().toLocaleDateString();
	
	/* Process OCT Disk Space */
	function process_disk_space(test_field) {
		console.log('test_field: ' + test_field);
		var test_value = document.getElementById(test_field).value;
		var base_drive = test_field.substr(0,1);
		console.log('base_drive: ' + base_drive);
		var drive = base_drive.toUpperCase();
		var disk_string;
		if (test_value != '') {
			console.log('test_value (' + test_value + ') is not empty; processing string');
			console.log('Drive: ' + drive + ":\ ");
			var free_value = document.getElementById(base_drive + '-drive-free').value;
			console.log('free_value: ' + free_value);
			var free_units = document.getElementById(base_drive + '-drive-free-size').value;
			console.log('free_units: ' + free_units);
			var total_value = document.getElementById(base_drive + '-drive-total').value;
			console.log('total_value: ' + total_value);
			var total_units = document.getElementById(base_drive + '-drive-total-size').value;
			console.log('total_units: ' + total_units);
			disk_string = free_value + ' ' + free_units.toUpperCase() + ' of ' + total_value + ' ' + total_units.toUpperCase();
			console.log(disk_string);
			return disk_string;
		} else {
			console.log('test_field: ' + test_field + ' is empty; exiting');
		}
	}
	var c_space = process_disk_space('c-drive-free');
	var e_space = process_disk_space('e-drive-free');

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

Contact made by ${document.getElementById('request-came-from').value} via ${document.getElementById('request-source').value}
Request came from ${document.getElementById('local-contact-person1').value}, the customer.
Local Contact Person: ${document.getElementById('local-contact-person1').value}
Mobile/Office Phone Number: ${document.getElementById('phone1').value}
Email Address: ${document.getElementById('email1').value}

Device Module: Network/Connectivity
Sub Module: N/A*
Error Code Group: ${document.getElementById('error-group').value}
Error Code: ${document.getElementById('error-code').value}
Action Code: ${document.getElementById('action-code').value}

Cirrus HD-OCT/Review Workstation Status: ${document.getElementById('work-station-status').value}
OS (C Drive): ${document.getElementById('c-drive').value}
Data (E Drive): ${document.getElementById('e-drive').value}

${document.getElementById('other-internal-notes').value}`;

    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');

    // Copy data to clipboard
    navigator.clipboard.writeText(nonEmptyData).then(function() {
        alert('Internal Notes copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
});
