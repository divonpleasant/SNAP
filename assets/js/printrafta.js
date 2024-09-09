document.getElementById('printrafta').addEventListener('click', function(event) {
    event.preventDefault();

    var fields = [
        { label: "Problem Description", value: document.getElementById('problem-description').value },
        { label: "Specific Error Message", value: document.getElementById('error-message-details').value },
        { label: "Actual Problem if different than Reported Problem", value: document.getElementById('actual-problem-description').value },
        { label: "Frequency of Problem", value: document.getElementById('frequency-problem').value },
        { label: "The problem first started", value: document.getElementById('problem-started').value },
        { label: "What Changed?", value: document.getElementById('problem-changed').value },
        { label: "Troubleshooting Performed", value: document.getElementById('troubleshooting-performed').value },
        { label: "Device Exchanged?", value: document.getElementById('device-exchanged').checked ? "Yes" : "No" },
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

    var data = `
R - ${document.getElementById('problem-description').value}
    Specific Error Message: ${document.getElementById('error-message-details').value}
A - ${document.getElementById('actual-problem-description').value}
F - ${document.getElementById('frequency-problem').value}
    Problem Started: ${document.getElementById('problem-started').value}
    What Changed?: ${document.getElementById('problem-changed').value}
T - ${document.getElementById('troubleshooting-performed').value}
A - Device Exchanged: ${document.getElementById('device-exchanged').checked ? "Yes" : "No"}
    Exhanged Date: ${document.getElementById('exchange-date').value}
    Logs Attached: ${document.getElementById('logs-attached').checked ? "Yes" : "No"}
    If not why: ${document.getElementById('logs-not-attached-reason').value}
    Screen Shots Attached: ${document.getElementById('screenshots-attached').checked ? "Yes" : "No"}
    If not why: ${document.getElementById('screenshots-attached-reason').value}
    Extended period of inoperability (?1 day): ${document.getElementById('extended-inoperability-check').checked ? "Yes" : "No"}
    If yes, how long: ${document.getElementById('inoperability-duration').value}
    Power Cycle Resolve: ${document.getElementById('power-cycle-resolve').checked ? "Yes" : "No"}
    Remote Resolution: Remote Resolution? ${document.getElementById('remote-resolution').checked ? "Yes" : "No"}
    Device Running Current Software Version: ${document.getElementById('current-software-version').checked ? "Yes" : "No"}
    If not why: ${document.getElementById('current-software-reason').value}
    Verified normal device functionality (if phone fixed): ${document.getElementById('verified-normal-functionality').checked ? "Yes" : "No"}
    Verified connectivity to office network/shares (if applicable): ${document.getElementById('verified-network-connectivity').checked ? "Yes" : "No"}
`;

    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');

    // Copy data to clipboard
    navigator.clipboard.writeText(nonEmptyData).then(function() {
        alert('RAFTA copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
});
