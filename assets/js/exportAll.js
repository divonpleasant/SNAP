document.getElementById('exportall').addEventListener('click', function(event) {
    event.preventDefault();
    var date = curr_date.toLocaleDateString();
	
	/* Process Actual Problem */
	function use_actual_description() {
		console.log('same-as-reported: ' + document.getElementById('same-as-reported'));
		if (document.getElementById('same-as-reported').checked) {
			return "N/A, same as reported";
		} else {
			return document.getElementById('actual-problem-description').value;
		}
	}
	var actual_problem = use_actual_description();
	console.log("actual_problem: " + actual_problem);

    var fields = [
        { label: "Date", value: date },
        { label: "Instrument", value: document.getElementById('instrument-model').value },
        { label: "Serial Number", value: document.getElementById('serial').value },
        { label: "Customer Care Ticket#", value: document.getElementById('cct').value },
        { label: "Account Name", value: document.getElementById('account').value },
        { label: "Shipping Address", value: document.getElementById('instrument-address').value },
        { label: "Local Contact Person", value: document.getElementById('local-contact-person').value },
        { label: "Phone Number", value: document.getElementById('phone').value },
        { label: "Email Address", value: document.getElementById('email').value },
        { label: "What are the issues? List below", value: document.getElementById('description').value },
        { label: "Billing Type", value: document.getElementById('billing-type').value },
		{ label: "Service Contract", value: document.getElementById('service-contract').value },
        { label: "Instrument: Username", value: document.getElementById('teamviewer-username1').value },
        { label: "Instrument: Password", value: document.getElementById('teamviewer-password1').value },
        { label: "Review Station: Username", value: document.getElementById('teamviewer-username2').value },
        { label: "Review Station: Password", value: document.getElementById('teamviewer-password2').value },
        { label: "Forum: Username", value: document.getElementById('teamviewer-username3').value },
        { label: "Forum: Password", value: document.getElementById('teamviewer-password3').value },
        { label: "Email Request came from", value: document.getElementById('request-came-from').value },
        { label: "Source", value: document.getElementById('request-source').value },
        { label: "Was Remote Support Provided?", value: document.getElementById('remote-support').checked ? "Yes" : "No" },
		{ label: "Zeiss Smart Services?", value: document.getElementById('smart-service').checked ? "Yes" : "No" },
		{ label: "Teleservice?", value: document.getElementById('teleservice').checked ? "Yes" : "No" }, 
        { label: "Time Spent", value: document.getElementById('remote-time').value },
        { label: "Error Code Group", value: document.getElementById('error-group').value },
        { label: "Error Code", value: document.getElementById('error-code').value },
        { label: "Action Code", value: document.getElementById('action-code').value },
		/* Cirrus HD-OCT Fields */
        { label: "Cirrus HD-OCT/Review Workstation Status", value: document.getElementById('work-station-status').value },
        { label: "OS (C:) Free", value: document.getElementById('c-drive-free').value },
		{ label: "OS (C:) Free Size", value: document.getElementById('c-drive-free-size').value },
		{ label: "OS (C:) Total", value: document.getElementById('c-drive-total').value },
		{ label: "OS (C:) Total Size", value: document.getElementById('c-drive-total-size').value },
        { label: "Data (E:) Free", value: document.getElementById('e-drive-free').value },
		{ label: "Data (E:) Free Size", value: document.getElementById('e-drive-free-size').value },
		{ label: "Data (E:) Total", value: document.getElementById('e-drive-total').value },
		{ label: "Data (E:) Total Size", value: document.getElementById('e-drive-total-size').value },
		{ label: "Current Archive Label", value: document.getElementById('current-archive-label').value },
		{ label: "Current Archive Description", value: document.getElementById('current-archive-description').value },
        { label: "Current Archive Path", value: document.getElementById('current-archive-path').value },
        { label: "Current Archive Mapping", value: document.getElementById('current-archive-mapping').value },
        { label: "Current Archive Server Hostname", value: document.getElementById('current-archive-server-hostname').value },
        { label: "Current Archive Server IP", value: document.getElementById('current-archive-server-ip').value },
        { label: "Old Archive Label", value: document.getElementById('old-archive-label').value },
        { label: "Old Archive Description", value: document.getElementById('old-archive-description').value },
        { label: "Old Archive Path", value: document.getElementById('old-archive-path').value },
        { label: "Old Archive Mapping", value: document.getElementById('old-archive-mapping').value },
		/* END OCT Fields */
        { label: "Other Internal Notes", value: document.getElementById('other-internal-notes').value },
        { label: "Device Software Version", value: document.getElementById('device-software-version').value },
        { label: "Archive Mode", value: document.getElementById('archive-mode').value },
        { label: "Windows Version", value: document.getElementById('windows-version').value },
        { label: "Review Station Software Version", value: document.getElementById('review-station-software-version').value },
        { label: "Review Station Archive Mode", value: document.getElementById('review-station-archive-mode').value },
        { label: "Review Station Windows Version", value: document.getElementById('review-station-windows-version').value },
        { label: "Problem Description", value: document.getElementById('problem-description').value },
        { label: "Specific Error Message", value: document.getElementById('error-message-details').value },
        { label: "Actual Problem if different than Reported Problem", value: document.getElementById('actual-problem-description').value },
        { label: "Frequency of Problem", value: document.getElementById('frequency-problem').value },
        { label: "The problem first started", value: document.getElementById('problem-started').value },
        { label: "What Changed?", value: document.getElementById('problem-changed').value },
        { label: "Troubleshooting Performed", value: document.getElementById('troubleshooting-performed').value },
        { label: "Device Repaired?", value: document.getElementById('device-repaired').checked ? "Yes" : "No" },
        { label: "Has the device recently been exchanged or repaired?", value: document.getElementById('exchange-date').value },
        { label: "Are logs attached?", value: document.getElementById('logs-attached').checked ? "Yes" : "No" },
        { label: "If not why?", value: document.getElementById('logs-not-attached-reason').value },
        { label: "Screenshots Attached?", value: document.getElementById('screenshots-attached').checked ? "Yes" : "No" },
        { label: "Reason screenshots weren't attached?", value: document.getElementById('screenshots-attached-reason').value },
        { label: "Extended period of inoperability (>1 day)?", value: document.getElementById('extended-inoperability-check').checked ? "Yes" : "No" },
        { label: "If yes, how long?", value: document.getElementById('inoperability-duration').value },
        { label: "Power Cycle Resolve", value: document.getElementById('power-cycle-resolve').checked ? "Yes" : "No" },
        { label: "Remote Resolution?", value: document.getElementById('remote-resolution').checked ? "Yes" : "No" },
        { label: "Device running the current Software Version", value: document.getElementById('current-software-version').checked ? "Yes" : "No" },
        { label: "If not, why?", value: document.getElementById('current-software-reason').value },
        { label: "Verified normal device functionality (if phone fixed)", value: document.getElementById('verified-normal-functionality').checked ? "Yes" : "No" },
        { label: "Verified connectivity to office network/shares (if applicable)?", value: document.getElementById('verified-network-connectivity').checked ? "Yes" : "No" },
        { label: "Device Hostname", value: document.getElementById('device-hostname').value },
        { label: "Devices DHCP or Static IP", value: document.getElementById('device-ip').value },
        { label: "Review Station Hostname", value: document.getElementById('review-station-hostname').value },
        { label: "Review Station DHCP or Static IP", value: document.getElementById('review-station-ip').value },
        { label: "Forum Software Version", value: document.getElementById('forum-software-version').value },
        { label: "Forum Windows Version", value: document.getElementById('forum-windows-version').value },
        { label: "Forum Server Hostname", value: document.getElementById('forum-server-hostname').value },
        { label: "Forum Server IP", value: document.getElementById('forum-server-ip').value },
        { label: "Forum Server Settings", value: document.getElementById('server-settings').value },
        { label: "Number of Stations", value: document.getElementById('number-of-stations').value },
        { label: "Dicom Test Pass?", value: document.getElementById('dicom-tests-pass').checked ? "Yes" : "No" },
        { label: "Any Changes to Environment?", value: document.getElementById('changes-to-environment').checked ? "Yes" : "No" },
        { label: "Affected Devices", value: document.getElementById('affected-devices').value },
        { label: "Architecture", value: document.getElementById('architecture').value }
    ];

	/* Process CCT Description */
	if (document.getElementById('billing-type').value == "CNTRCT") {
		bt = document.getElementById('service-contract').value;
	} else {
		bt = document.getElementById('billing-type').value;
	}
	var serialnum = document.getElementById('serial').value;
	var raw_description = document.getElementById('description').value;
	var desc_arr = raw_description.split(".");
	var description = desc_arr[0].substring(0, 20);
	var cct_description = serialnum + " " + bt + " " + description;
	console.log("Summary: " + cct_description);
	
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

    var data = `
Date: ${date}
Instrument: ${document.getElementById('instrument-model').value}
Serial Number: ${document.getElementById('serial').value}
Customer Care Ticket#: ${document.getElementById('cct').value}
Account Name: ${document.getElementById('account').value}
Shipping Address: ${document.getElementById('instrument-address').value}
Local Contact Person: ${document.getElementById('local-contact-person').value}
Mobile/Office Phone Number: ${document.getElementById('phone').value}
Email Address: ${document.getElementById('email').value}
Issue Description:
${document.getElementById('description').value}
Billing Type: ${document.getElementById('billing-type').value}
Service Contract: ${document.getElementById('service-contract').value}

CCT DESCRIPTION.......................................................:
${cct_description}

REMOTE CONNECTION.....................................................:
Zeiss Smart Services: ${document.getElementById('smart-service').checked ? "Yes" : "No"}
Teleservice: ${document.getElementById('teleservice').checked ? "Yes" : "No"}

TEAMVIEWER............................................................:
Instrument: Username: ${document.getElementById('teamviewer-username1').value} Password: ${document.getElementById('teamviewer-password1').value}
Review Station: Username: ${document.getElementById('teamviewer-username2').value} Password: ${document.getElementById('teamviewer-password2').value}
Forum: Username: ${document.getElementById('teamviewer-username3').value} Password: ${document.getElementById('teamviewer-password3').value}

REQUEST NOTES.........................................................:

REPORTED INCIDENT:
  Device Serial Number: ${document.getElementById('device-serial-number').value}
  Device Software Version: ${document.getElementById('device-software-version').value}
  Archive Mode: ${document.getElementById('archive-mode').value}
  Windows Version: ${document.getElementById('windows-version').value}
  Review Station Software Version: ${document.getElementById('review-station-software-version').value}
  Review Station Archive Mode: ${document.getElementById('review-station-archive-mode').value}
  Review Station Windows Version: ${document.getElementById('review-station-windows-version').value}
  Problem Description: ${document.getElementById('problem-description').value}
  Specific Error Message: ${document.getElementById('error-message-details').value}
ACTUAL PROBLEM:
  Description: ${actual_problem}
FREQUENCY OF PROBLEM:
  Frequency: ${document.getElementById('frequency-selector').value}
  Details: ${document.getElementById('frequency-problem').value}
  Problem First Started: ${document.getElementById('problem-started').value}
  What Changed: ${document.getElementById('problem-changed').value}
TROUBLESHOOTING PERFORMED:
  ${document.getElementById('troubleshooting-performed').value}
ADDITIONAL INFORMATION:
  Has the device recently been repaired? ${document.getElementById('device-repaired').checked ? "Yes" : "No"}
  Exhanged Date: ${document.getElementById('exchange-date').value}
  Are logs attached? ${document.getElementById('logs-attached').checked ? "Yes" : "No"}
  Screenshots Attached? ${document.getElementById('screenshots-attached').checked ? "Yes" : "No"}
  Extended period of inoperability (>1 day)? ${document.getElementById('extended-inoperability-check').checked ? "Yes" : "No"}
  If yes, how long? ${document.getElementById('inoperability-duration').value}
  Power Cycle Resolve: ${document.getElementById('power-cycle-resolve').checked ? "Yes" : "No"}
  Remote Resolution? ${document.getElementById('remote-resolution').checked ? "Yes" : "No"}

INTERNAL NOTES........................................................:
Time Spent: ${document.getElementById('remote-time').value}
Device Module: Network Connectivity
Sub Module: N/A*
Error Code Group: ${document.getElementById('error-group').value}
Error Code: ${document.getElementById('error-code').value}
Action Code: ${document.getElementById('action-code').value}

Contact Made By: ${document.getElementById('request-came-from').value}
Contact Method: ${document.getElementById('request-source').value}

Point of Contact: ${document.getElementById('local-contact-person').value}
Phone Number: ${document.getElementById('phone').value}
Email Address: ${document.getElementById('email').value}

${document.getElementById('other-internal-notes').value}

Remote Support Provided: ${document.getElementById('remote-support').checked ? "Yes" : "No"}

TECHNICAL SUPPORT CALL CHECKLIST:
Device Running Current Software Version: ${document.getElementById('current-software-version').checked ? "Yes" : "No"}
Reason Not Running Current Version: ${document.getElementById('current-software-reason').value}
Verified Normal Device Functionality (if phone fixed): ${document.getElementById('verified-normal-functionality').checked ? "Yes" : "No"}
Verified Connectivity to Office Network/Shares: ${document.getElementById('verified-network-connectivity').checked ? "Yes" : "No"}
Device Hostname: ${document.getElementById('device-hostname').value}
Devices DHCP or Static IP: ${document.getElementById('device-ip').value}
Review Station Hostname: ${document.getElementById('review-station-hostname').value}
Review Station DHCP or Static IP: ${document.getElementById('review-station-ip').value}
Cirrus HD-OCT/Review Workstation Status: ${document.getElementById('work-station-status').value}
OS (C:): ${c_space}
Data (E:): ${e_space}
Current Archive Label: ${document.getElementById('current-archive-label').value}
Current Archive Description: ${document.getElementById('current-archive-description').value}
Current Archive Path: ${document.getElementById('current-archive-path').value}
Current Archive Mapping: ${document.getElementById('current-archive-mapping').value}
Current Archive Server Hostname: ${document.getElementById('current-archive-server-hostname').value}
Current Archive Server IP: ${document.getElementById('current-archive-server-ip').value}
Old Archive Label: ${document.getElementById('old-archive-label').value}
Old Archive Description: ${document.getElementById('old-archive-description').value}
Old Archive Path: ${document.getElementById('old-archive-path').value}
Old Archive Mapping: ${document.getElementById('old-archive-mapping').value}

FORUM SETTINGS (IF APPLICABLE) VERIFIED AND RECORDED (SCREENSHOTS PREFERRED):
Forum Software Version: ${document.getElementById('forum-software-version').value}
Forum Windows Version: ${document.getElementById('forum-windows-version').value}
Forum Server Hostname: ${document.getElementById('forum-server-hostname').value}
Forum Server IP: ${document.getElementById('forum-server-ip').value}
Forum Server Settings: ${document.getElementById('server-settings').value}
Number of Stations: ${document.getElementById('number-of-stations').value}
Dicom Test Pass: ${document.getElementById('dicom-tests-pass').checked ? "Yes" : "No"}
Changes to Environment: ${document.getElementById('changes-to-environment').checked ? "Yes" : "No"}
Affected Devices: ${document.getElementById('affected-devices').value}
Architecture: ${document.getElementById('architecture').value}
`;
	console.log("DATA\n====\n" + data);

    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');
	console.log("PROCESSED DATA\n==============\n" + nonEmptyData);

    var blob = new Blob([nonEmptyData], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${document.getElementById('serial').value || 'export'}.txt`;
    link.click();
});
