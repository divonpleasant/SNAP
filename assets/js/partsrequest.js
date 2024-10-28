// Function to open the overlay when the fseupdateLink is clicked
function showPartsOverlay(event) {
    event.preventDefault();
    document.getElementById('parts-overlay').style.display = 'flex';
}

// Function to process parts list
function procPartsList(parts) {
    parts_array = parts.split("\n");
    (debug_mode) ? console.log('[DEBUG] parts_array: ' + parts_array) : '';
    var num_parts = parts_array.length;
    (debug_mode) ? console.log('[DEBUG] num_parts: ' + num_parts) : '';
    var final_part_str = "";
    for (let i = 0; i < parts_array.length; i++) {
        var counter = i + 1;
        (debug_mode) ? console.log('[DEBUG] parts_array[' + i + ']: ' + parts_array[i]) : '';
        var part_split = parts_array[i].split(';');
        var part_name = part_split[0];
        var part_number = part_split[1];
        (debug_mode) ? console.log('[DEBUG] part_name: ' + part_name) : '';
        (debug_mode) ? console.log('[DEBUG] part_number: ' + part_number) : '';
        var part_str_counter = '[' + counter + ' of ' + num_parts + ']    ';
        var name_str = part_name + "\n";
        var part_num_str = " ".repeat(part_str_counter.length) + part_number + "\n";
        final_part_str = final_part_str + part_str_counter + name_str + part_num_str;
    }
    return final_part_str;
}

// Function to send an email after "Proceed" is clicked
function proceedToSendEmail(event) {
    event.preventDefault();
    
    // Retrieve form values
    
    var serial = document.getElementById('serial').value;
    var cct = document.getElementById('cct').value;
    var localContactPerson = document.getElementById('local-contact-person').value;
    var accountName = document.getElementById('account').value;
    var shippingAddress = document.getElementById('instrument-address').value;
    var parts_raw = document.getElementById('part-list').value;
    var order_name = document.getElementById('order-name').value;
    (debug_mode) ? console.log('[DEBUG] order_name: ' + order_name) : '';
    var parts_array = parts_raw.split('\n')
    var part_indicator = (parts_array.length > 1) ? "s" : '';
    (debug_mode) ? console.log('[DEBUG] parts_array: ' + parts_array) : '';
    var foc = document.getElementById('foc').value;
    (debug_mode) ? console.log('[DEBUG] foc: ' + foc) : '';
    var delivery_type = document.getElementById('delivery-type').value;
    (debug_mode) ? console.log('[DEBUG] delivery_type: ' + delivery_type) : '';
    var foc_subj = (foc == "on") ? 'FOC ' : '';
    var parts_data = procPartsList(parts_raw);

    // Construct the subject line and body of the email
    var subject = "[CCT #" + cct + "] " + foc_subj + order_name + " for " + serial;
    var body = "Hello Parts Team,\n\n" +
               "Please ship the following part" + part_indicator + "...\n\n" + parts_data + "\n" +
               "Customer Care Ticket Number: " + cct + "\n" +
               "Instrument Serial Number: " + serial + "\n\n" +
               "Account Name: " + accountName + "\n" +
               "Address:\n" +
               "    Attention: " + shippingAddress + "\n\n" +
               "Shipment: " + delivery_type + "\n\n" +
               "Thank you for your prompt attention to this matter.\n\n" +
               "Regards,";

    // Encode the subject and body
    subject = encodeURIComponent(subject);
    body = encodeURIComponent(body);

    // Construct the mailto link
    var mailtoLink = "mailto:c.osparts@zeiss.com" +
        "?subject=" + subject +
        "&body=" + body;

    // Open the mailto link
    window.location.href = mailtoLink;

    // Hide the overlay after proceeding
    document.getElementById('parts-overlay').style.display = 'none';
}

// Add event listener to the partsorderLink for showing the overlay
document.getElementById('partsorderLink').addEventListener('click', showPartsOverlay);

// Add event listener to the "Proceed" button for sending the email
document.getElementById('parts-proceed').addEventListener('click', proceedToSendEmail);

// Close button functionality for the overlay
document.getElementById('parts-close-overlay').addEventListener('click', function() {
    document.getElementById('parts-overlay').style.display = 'none';
});

