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
/*  Note: Address needs to be at the end of the content text. CRM 
    addresses typically include a slash ( / ) character to separate 
    the street address from the city/state/ZIP code; this slash 
    interferes with the regular expression executed below when 
    assigning the icsContent value. While the regex could be updated 
    or an auto-formatter (similar to the one executed on the phone 
    number field) could be applied, putting the address--which isn't 
    nearly as vital in a scheduled callback calendar event as some of 
    the other data--at the end elegantly works around the issue. */
function generateICS(event, serial) {
    const bodyContent = `
Instrument: ${event.details.instrument}
Serial Number: ${event.details.serial}
Point of Contact: ${event.details.poc}
Account Name: ${event.details.account}
Phone Number: ${event.details.phone}
Email: ${event.details.email}
Customer Care Ticket #: ${event.details.cct}
Problem Description: ${event.details.description}
Billing Type: ${event.details.billing}
Address: ${event.details.address}
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