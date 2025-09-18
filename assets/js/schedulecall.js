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
    const instrument = getInstrumentModel();
    const serial = document.getElementById('serial').value;
    const poc = document.getElementById('local-contact-person').value;
    const account = document.getElementById('account').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('instrument-address').value;
    const cct = document.getElementById('cct').value;
    const description = document.getElementById('description').value;
    const billing = document.getElementById('billing-type').value;

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
            billing: billing
        }
    };

    generateICS(eventData, serial);
    logHistoryEvent(`Call back scheduled for ${new Date(dateTime).toISOString()}`);
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
BEGIN:VALARM
TRIGGER:-PT15M
REPEAT:1
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
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