document.getElementById('printrafta').addEventListener('click', function(event) {
    event.preventDefault();

	/* Process Actual Problem */
	function use_actual_description() {
		debugmsg(5, 'same-as-reported: ' + document.getElementById('same-as-reported'));
		if (document.getElementById('same-as-reported').checked) {
			return "N/A";
		} else {
			return document.getElementById('actual-problem-description').value;
		}
	}
	var actual_problem = use_actual_description();
	debugmsg(5, 'actual_problem: ' + actual_problem);

    var fields = [
        { label: "Problem Description", value: document.getElementById('problem-description').value },
        { label: "Specific Error Message", value: document.getElementById('error-message-details').value },
		{ label: "Actual Problem different?", value: document.getElementById('same-as-reported').checked ? "Yes" : "No" },
        { label: "Actual Problem if different than Reported Problem", value: document.getElementById('actual-problem-description').value },
		{ label: "Frequency of Problem", value: document.getElementById('frequency-selector').valye },
        { label: "Frequency Details", value: document.getElementById('frequency-problem').value },
        { label: "The problem first started", value: document.getElementById('problem-started').value },
        { label: "What Changed?", value: document.getElementById('problem-changed').value },
        { label: "Troubleshooting Performed", value: document.getElementById('troubleshooting-performed').value },
        { label: "Device Exchanged?", value: document.getElementById('device-repaired').checked ? "Yes" : "No" },
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
        { label: "Verified connectivity to office network/shares (if applicable)?", value: document.getElementById('verified-network-connectivity').checked ? "Yes" : "No" }
    ];

    var data = `R - ${document.getElementById('problem-description').value}
    Specific Error Message: ${document.getElementById('error-message-details').value}
A - ${actual_problem}
F - ${document.getElementById('frequency-selector').value}
    Details: ${document.getElementById('frequency-problem').value}
    Problem Started: ${document.getElementById('problem-started').value}
    What Changed?: ${document.getElementById('problem-changed').value}
T - ${document.getElementById('troubleshooting-performed').value}
A - Device Repaired: ${document.getElementById('device-repaired').checked ? "Yes" : "No"}
    Exhanged Date: ${document.getElementById('exchange-date').value}
    Logs Attached: ${document.getElementById('logs-attached').checked ? "Yes" : "No"}
    Reason Why No Logs Attached: ${document.getElementById('logs-not-attached-reason').value}
    Screen Shots Attached: ${document.getElementById('screenshots-attached').checked ? "Yes" : "No"}
    Reason Why No Screenshots: ${document.getElementById('screenshots-attached-reason').value}
    Extended Period of Inoperability (>1 day): ${document.getElementById('extended-inoperability-check').checked ? "Yes" : "No"}
    Inoperability Period: ${document.getElementById('inoperability-duration').value}
    Power Cycle Resolution: ${document.getElementById('power-cycle-resolve').checked ? "Yes" : "No"}
    Remote Resolution: ${document.getElementById('remote-resolution').checked ? "Yes" : "No"}
    Device Running Current Software Version: ${document.getElementById('current-software-version').checked ? "Yes" : "No"}
    Reason Why Not: ${document.getElementById('current-software-reason').value}
    Verified Normal Device Functionality: ${document.getElementById('verified-normal-functionality').checked ? "Yes" : "No"}
    Verified Connectivity to Network/Shares: ${document.getElementById('verified-network-connectivity').checked ? "Yes" : "No"}`;

	console.log("DATA\n====\n" + data);
	
    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');
	debugmsg(3, "PROCESSED DATA\n========================\n" + nonEmptyData);

    // Copy data to clipboard
    navigator.clipboard.writeText(nonEmptyData).then(function() {
        (copy_alert) ? alert('RAFTA copied to clipboard!') : '';
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
});
