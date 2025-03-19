document.getElementById('schedulecall').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('schedule-overlay').style.display = 'flex';
});

document.getElementById('schedule-close-overlay').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('schedule-overlay').style.display = 'none';
});

document.getElementById('modalContinue').addEventListener('click', function (event) {
    event.preventDefault();

    const dateTime = document.getElementById('scheduledDateTime').value;
    const instrument = document.getElementById('instrument-model').value;
    const serial = document.getElementById('serial').value;
    const poc = document.getElementById('local-contact-person').value;
    const account = document.getElementById('account').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('instrument-address').value;
    const cct = document.getElementById('cct').value;
    const description = document.getElementById('description').value;
    const billing = document.getElementById('billing-type').value;
    const problemDescription = document.getElementById('problem-description').value;
    const errorMessage = document.getElementById('error-message-details').value;
    const actualProblemDifferent = document.getElementById('same-as-reported').checked ? "Yes" : "No";
    const actualProblemDescription = document.getElementById('actual-problem-description').value;
    const frequency = document.getElementById('frequency-selector').value;
    const frequencyDetails = document.getElementById('frequency-problem').value;
    const problemStarted = document.getElementById('problem-started').value;
    const problemChanged = document.getElementById('problem-changed').value;
    const troubleshootingPerformed = document.getElementById('troubleshooting-performed').value;
    const deviceRepaired = document.getElementById('device-repaired').checked ? "Yes" : "No";
    const exchangeDate = document.getElementById('exchange-date').value;
    const logsAttached = document.getElementById('logs-attached').checked ? "Yes" : "No";
    const logsNotAttachedReason = document.getElementById('logs-not-attached-reason').value;
    const screenshotsAttached = document.getElementById('screenshots-attached').checked ? "Yes" : "No";
    const screenshotsNotAttachedReason = document.getElementById('screenshots-attached-reason').value;
    const extendedInoperability = document.getElementById('extended-inoperability-check').checked ? "Yes" : "No";
    const inoperabilityDuration = document.getElementById('inoperability-duration').value;
    const powerCycleResolve = document.getElementById('power-cycle-resolve').checked ? "Yes" : "No";
    const remoteResolution = document.getElementById('remote-resolution').checked ? "Yes" : "No";
    const currentSoftwareVersion = document.getElementById('current-software-version').checked ? "Yes" : "No";
    const currentSoftwareReason = document.getElementById('current-software-reason').value;
    const verifiedFunctionality = document.getElementById('verified-normal-functionality').checked ? "Yes" : "No";
    const verifiedNetworkConnectivity = document.getElementById('verified-network-connectivity').checked ? "Yes" : "No";

    if (!dateTime) {
        alert('Please select a date and time.');
        return;
    }

    const eventData = {
        title: `Customer Call Back: ${poc} (${phone})`,
        start: new Date(dateTime).toISOString(),
        end: new Date(new Date(dateTime).getTime() + 30 * 60 * 1000).toISOString(), // 30min event
        details: {
            instrument: instrument,
            serial: serial,
            poc: poc,
            account: account,
            phone: phone,
            email: email,
            address: address,
            cct: cct,
            description: description,
            billing: billing,
            problemDescription: problemDescription,
            errorMessage: errorMessage,
            actualProblemDifferent: actualProblemDifferent,
            actualProblemDescription: actualProblemDescription,
            frequency: frequency,
            frequencyDetails: frequencyDetails,
            problemStarted: problemStarted,
            problemChanged: problemChanged,
            troubleshootingPerformed: troubleshootingPerformed,
            deviceRepaired: deviceRepaired,
            exchangeDate: exchangeDate,
            logsAttached: logsAttached,
            logsNotAttachedReason: logsNotAttachedReason,
            screenshotsAttached: screenshotsAttached,
            screenshotsNotAttachedReason: screenshotsNotAttachedReason,
            extendedInoperability: extendedInoperability,
            inoperabilityDuration: inoperabilityDuration,
            powerCycleResolve: powerCycleResolve,
            remoteResolution: remoteResolution,
            currentSoftwareVersion: currentSoftwareVersion,
            currentSoftwareReason: currentSoftwareReason,
            verifiedFunctionality: verifiedFunctionality,
            verifiedNetworkConnectivity: verifiedNetworkConnectivity
        }
    };

    generateICS(eventData, serial);
    document.getElementById('schedule-overlay').style.display = 'none';
});

// Function to generate ICS file
function generateICS(event, serial) {
    const bodyContent = `
Instrument: ${event.details.instrument}
Serial Number: ${event.details.serial}
Point of Contact: ${event.details.poc}
Account Name: ${event.details.account}
Phone Number: ${event.details.phone}
Email: ${event.details.email}
Address: ${event.details.address}
Customer Care Ticket #: ${event.details.cct}
Problem Description: ${event.details.description}
Billing Type: ${event.details.billing}

REQUEST NOTES:
R - ${event.details.problemDescription}
A - Specific Error Message: ${event.details.errorMessage}
    ${event.details.actualProblemDifferent}
    ${event.details.actualProblemDescription}
F - Details: ${event.details.frequency}
    ${event.details.frequencyDetails}
    Problem Started: ${event.details.problemStarted}
    What Changed?:${event.details.problemChanged}
T - ${event.details.troubleshootingPerformed}
A - Device Repaired: ${event.details.deviceRepaired}
    Exhanged Date: ${event.details.exchangeDate}
    Logs Attached: ${event.details.logsAttached}
    Reason Why No Logs Attached: ${event.details.logsNotAttachedReason}
    Screen Shots Attached: ${event.details.screenshotsAttached}
    Reason Why No Screenshots: ${event.details.screenshotsNotAttachedReason}
    Extended Period of Inoperability (>1 day): ${event.details.extendedInoperability}
    Inoperability Period: ${event.details.inoperabilityDuration}
    Power Cycle Resolution: ${event.details.powerCycleResolve}
    Remote Resolution: ${event.details.remoteResolution}
    Device Running Current Software Version: ${event.details.currentSoftwareVersion}
    Reason Why Not: ${event.details.currentSoftwareReason}
    Verified Normal Device Functionality: ${event.details.verifiedFunctionality}
    Verified Connectivity to Network/Shares: ${event.details.verifiedNetworkConnectivity}

`;

    // Ensure the correct format for DTSTART and DTEND
    const dtStart = event.start.replace(/[-:]/g, '').slice(0, 15) + 'Z';
    const dtEnd = event.end.replace(/[-:]/g, '').slice(0, 15) + 'Z';

    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${event.title}
DTSTART:${dtStart}
DTEND:${dtEnd}
DESCRIPTION:${bodyContent.replace(/\n/g, '\\n')}
END:VEVENT
END:VCALENDAR
`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `event_${serial}.ics`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}