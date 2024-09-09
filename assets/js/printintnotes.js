document.getElementById('printintnotes').addEventListener('click', function(event) {
    event.preventDefault();

    var date = new Date().toLocaleDateString();

    var fields = [
        { label: "Time Spent", value: document.getElementById('remote-time').value },
        { label: "Device Module", value: document.getElementById('device-module').value },
        { label: "Sub-Module", value: document.getElementById('sub-module').value },
        { label: "Error Code Group", value: document.getElementById('error-group').value },
        { label: "Error Code", value: document.getElementById('error-code').value },
        { label: "Action Code", value: document.getElementById('action-code').value },
        { label: "Cirrus HD-OCT/Review Workstation Status", value: document.getElementById('work-station-status').value },
        { label: "OS (C:)", value: document.getElementById('c-drive').value },
        { label: "Data (E:)", value: document.getElementById('e-drive').value },
        { label: "Other Internal Notes", value: document.getElementById('other-internal-notes').value }
    ];

    var data = `
Time Spent: ${document.getElementById('remote-time').value}
Device Module: ${document.getElementById('device-module').value}
Sub Module: ${document.getElementById('sub-module').value}
Error Code Group: ${document.getElementById('error-group').value}
Error Code: ${document.getElementById('error-code').value}
Action Code: ${document.getElementById('action-code').value}

Request came from ${document.getElementById('local-contact-person1').value}, the customer.
Local Contact Person: ${document.getElementById('local-contact-person1').value}
Mobile/Office Phone Number: ${document.getElementById('phone1').value}
Email Address: ${document.getElementById('email1').value}
${document.getElementById('other-internal-notes').value}

FSE Search: 
Primary FSE: ${document.getElementById('primary-fse').value}
Field Service Supervisor: ${document.getElementById('field-service-supervisor').value}
Was Remote Support Provided? ${document.getElementById('remote-support').checked ? "Yes" : "No"}
Cirrus HD-OCT/Review Workstation Status: ${document.getElementById('work-station-status').value}
OS (C:): ${document.getElementById('c-drive').value}
Data (E:): ${document.getElementById('e-drive').value}
`;

    // Remove empty lines
    var nonEmptyData = data.split('\n').filter(line => !line.match(/: $/)).join('\n');

    // Copy data to clipboard
    navigator.clipboard.writeText(nonEmptyData).then(function() {
        alert('Internal Notes copied to clipboard!');
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
});
