// Dynamic display of instrument fields by Instrument Model drop-down
// Support Functions
function fetchAndRevealDynamicFields (field_class) {
    var selector_class_name = '.' + field_class + '-field';
    var hidden_fields = document.querySelectorAll(selector_class_name);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields: ' + hidden_fields);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields.length: ' + hidden_fields.length);
    hidden_fields.forEach(element => {
        debugmsg(5, 'fetchAndToggleHiddenFields::element.className: ' + element.className);
    });
    hidden_fields.forEach(element => {
        element.classList.remove('dynamic-hidden');
    });
}

function fetchAndHideDynamicFields (field_class) {
    var selector_class_name = '.' + field_class + '-field';
    var hidden_fields = document.querySelectorAll(selector_class_name);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields: ' + hidden_fields);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields.length: ' + hidden_fields.length);
    hidden_fields.forEach(element => {
        debugmsg(5, 'fetchAndToggleHiddenFields::element.className: ' + element.className);
    });
    hidden_fields.forEach(element => {
        if (element.classList.contains('dynamic-hidden')) {
            debugmsg(5, 'element.className ' + element.className + "does contain 'dynamic-hidden' class");
        } else {
            element.classList.add('dynamic-hidden');
        }
    });
}

function fetchAndAdjustSerialTooltip (sample_text) {
    debugmsg(5, 'sample_text: ' + sample_text);
    var tooltip_field = document.getElementById('serial-tooltip');
    debugmsg(5, 'tooltip_field: ' + tooltip_field);
    tooltip_field.innerHTML = sample_text;
}

function clearSerialTooltip () {
    fetchAndAdjustSerialTooltip('');
}

function hideAllDynamicFields () {
    var instrument_elements = ['oct', 'cirrus-photo', 'clarus', 'hfa3', 'iolmaster', 'visucam', 'visucam-pro', 'atlas-500', 'atlas-9000', 'stratus', 'forum', 'review-station', 'remote-support', 'billing-contact'];
    for (var i = 0; i < instrument_elements.length; i++) {
        var selector_class_name = '.' + instrument_elements[i] + '-field';
        fetchAndHideDynamicFields(instrument_elements[i]);
    }
}

function addToggle (toggle_id, toggle_class) {
    var toggle = document.getElementById(toggle_id);
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            fetchAndRevealDynamicFields(toggle_class);
        } else {
            fetchAndHideDynamicFields(toggle_class);
        }
    }, false);
}

// Hide dynamic fields by default
hideAllDynamicFields();
// Handle instrument select field
var instrument_select = document.getElementById("instrument-model");
debugmsg(5, 'Starting selected element: ' + instrument_select.selectedIndex);
instrument_select.addEventListener("change", function() {
    hideAllDynamicFields();
    fetchAndAdjustSerialTooltip('Select an Instrument to see serial number tips');
    document.getElementById('serial').disabled = false;
    // reset checkboxes before contextual changes
    document.querySelector('#forum_checkbox').style.display = 'block';
    // change form field visibility based on selection
	switch (this.selectedIndex) {
        case 0:
            break;
		case 1:
            // Cirrus HD-OCT
            fetchAndRevealDynamicFields('oct');
            fetchAndHideDynamicFields('archive');
            var tt_text = "Models: 400|4000|500|5000|6000<br />" +
                          "Serial Number Format: &lt;Model&gt;&ndash;&lt;Sequence Number&gt;<br />" +
                          "Sequence Number: 4+ Digits<br />" +
                          "<ul><li>Example: 5000&dash;12345</li></ul>" +
                          "In Software: Help > About<br />" +
                          "On Device: Behind connector panel on baseplate";
            fetchAndAdjustSerialTooltip(tt_text);
            
			break;
		case 2:
            // Cirrus photo
            fetchAndRevealDynamicFields('cirrus-photo');
            var tt_text = "Models: 600|800<br />" +
                          "Serial Number Format: 1&lt;6-Digit Number&gt;<br />" +
                          "<ul><li>Example: 1081607</li></ul>" +
                          "On Device: Back of device, near the bottom";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 3:
            // Clarus
            fetchAndRevealDynamicFields('clarus');
            var tt_text = "Models: 500|700<br />" +
                          "Serial Number Format: CL&lt;Model&gt;&ndash;&lt;Sequence Number&gt;<br />" +
                          "Sequence Number: 4+ Digits<br />" +
                          "<ul><li>Example: CL700&dash;12345</li></ul>" +
                          "In Software: Settings > System Information<br />" +
                          "On Device: Below device head, in front of joystick";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 4:
            // HFA3
            fetchAndRevealDynamicFields('hfa3');
            var tt_text = "Models: 830|840|850|860<br />" +
                          "Serial Number Format: &lt;Model&gt;&ndash;&lt;Sequence Number&gt;<br />" +
                          "Sequence Number: 4+ Digits<br />" +
                          "<ul><li>Example: 860&dash;12345</li></ul>" +
                          "In Software: Settings > System Information<br />" +
                          "On Device: On back of device, in the recessed panel";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 5:
            // IOLMaster
            fetchAndRevealDynamicFields('iolmaster');
            var tt_text = "Models: 500|700<br />" +
                          "Serial Number Format (Older 500 Models): &lt;7-Digit Number&gt;<br />" +
                          "Serial Number Format (Newer 500 Models): 9206&lt;6-Digit Number&gt;<br />" +
                          "Serial Number Format (Older 700 Models): 1&lt;6-Digit Number&gt;<br />" +
                          "Serial Number Format (Newer 700 Models): 9&lt;Number&gt;<br />" +
                          "<ul><li>Older 500 Example: 1234567</li>" +
                          "<li>Newer 500 Example: 9206123456</li>" +
                          "<li>Older 700 Example: 1234567</li>" +
                          "<li>Newer 700 Example: 912345678</li></ul>" +
                          "In Software: Settings > System Information<br />" +
                          "On Device: Below the chinrest";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 6:
            // Visucam
            fetchAndRevealDynamicFields('visucam');
            var tt_text = "Models: FA|224|524<br />" +
                          "Serial Number Format: &lt;6- or 7-Digit Number&gt;<br />" +
                          "<ul><li>Example: 1234567</li></ul>" +
                          "In Software: Help > About<br />" +
                          "On Device: Below the chinrest";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 7:
            // Visucam Pro
            fetchAndRevealDynamicFields('visucam-pro');
            var tt_text = "Models: Pro|ProNM<br />" +
                          "Serial Number Format: &lt;6- or 7-Digit Number&gt;<br />" +
                          "<ul><li>Example: 1234567</li></ul>" +
                          "In Software: Help > About<br />" +
                          "On Device: Below the chinrest";
            fetchAndAdjustSerialTooltip(tt_text);
			break;
		case 8:
            // Atlas 500
            fetchAndRevealDynamicFields('atlas-500');
            fetchAndAdjustSerialTooltip('This device does not yet have serial number data');
			break;
		case 9:
            // Atlas 9000
            fetchAndRevealDynamicFields('atlas-9000');
            fetchAndAdjustSerialTooltip('This device does not yet have serial number data');
			break;
		case 10:
            // Stratus
            fetchAndRevealDynamicFields('stratus');
            fetchAndAdjustSerialTooltip('This device does not yet have serial number data');
			break;
		case 11:
            // FORUM
            fetchAndRevealDynamicFields('forum');
            document.querySelector('#forum_checkbox').style.display = 'none';
            document.getElementById('serial').disabled = true;
            fetchAndAdjustSerialTooltip('FORUM does not use instrument serial numbers');
			break;
		default:
			console.error('[ERROR] Got to default in ' + this + '; something went wrong');
			break;
	}
}, false);

// Handle billing select field
document.getElementById('billing-type').addEventListener('change', function () {
    debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    switch (this.options[this.selectedIndex].value) {
        case 'XC':
            var consoleAlertText = (xc_alert) ? "Sending " : "Not sending (due to settings) ";
            var alertText = 'Note: Use XC code ONLY IF Remote Fixed AND Billable!';
            console.log(consoleAlertText + 'alert: `' + alertText + '`');
            (xc_alert) ? alert(alertText) : '';
            document.getElementById('service-contract').setAttribute('disabled', true);
            break;
        case 'CNTRCT':
            document.getElementById('service-contract').removeAttribute('disabled');
            break;
        default:
            document.getElementById('service-contract').setAttribute('disabled', true);
            break;
    }
}, false);

// Handle archive select fields
var archive_select = document.getElementById('oct-archive-mode');
archive_select.addEventListener('change', function() {
    // change form field visibility based on selection
    switch (this.selectedIndex) {
        case 0:
            fetchAndHideDynamicFields('archive');
            break;
        case 1:
            // Native Mode
            fetchAndRevealDynamicFields('archive');
            break;
        case 2:
            // DICOM Mode
            fetchAndHideDynamicFields('archive');
            break;
        default:
            console.error('[ERROR] Got to default in ' + this + '; something went wrong');
            break;
    }
}, false);

addToggle('add_forum', 'forum');
addToggle('remote-support', 'remote-support');
addToggle('include-review-station', 'review-station');
addToggle('billing-contact', 'billing-contact');