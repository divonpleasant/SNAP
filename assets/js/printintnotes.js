document.getElementById('printintnotes').addEventListener('click', function(event) {
    event.preventDefault();

    var date = new Date().toLocaleDateString();

    var fields = [
        { label: "Time Spent", value: document.getElementById('remote-time').value },
        { label: "Error Code Group", value: document.getElementById('error-group').value },
        { label: "Error Code", value: document.getElementById('error-code').value },
        { label: "Action Code", value: document.getElementById('action-code').value },
        { label: "Other Internal Notes", value: document.getElementById('other-internal-notes').value }
    ];

    var data = `
Time Spent: ${document.getElementById('remote-time').value}
Device Module: Network/Connectivity
Sub Module: N/A*
Error Code Group: ${document.getElementById('error-group').value}
Error Code: ${document.getElementById('error-code').value}
Action Code: ${document.getElementById('action-code').value}

Request came from ${document.getElementById('local-contact-person').value}, the customer.
Local Contact Person: ${document.getElementById('local-contact-person').value}
Mobile/Office Phone Number: ${document.getElementById('phone').value}
Email Address: ${document.getElementById('email').value}
${document.getElementById('other-internal-notes').value}

Was Remote Support Provided? ${document.getElementById('remote-support').checked ? "Yes" : "No"}
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
