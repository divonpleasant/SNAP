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
    debugmsg(4, 'sample_text: ' + sample_text);
    var tooltip_field = document.getElementById('serial-tooltip');
    console.log(tooltip_field);
    tooltip_field.innerHTML = sample_text;
}

function clearSerialTooltip () {
    fetchAndAdjustSerialTooltip('');
}

function hideAllDynamicFields () {
    var instrument_elements = ['oct', 'cirrus-photo', 'clarus', 'hfa3', 'iolmaster', 'visucam', 'visucam-pro', 'atlas-500', 'atlas-9000', 'stratus', 'forum', 'review-station', 'remote-support'];
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
    (sandbox) ? clearSerialTooltip() : '';
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
            var tt_text = "Format: &lt;Model&gt;&ndash;&lt;Sequence Number&gt;<br />" +
                          "Models: 400|4000|500|5000|6000<br />" +
                          "Sequence Number: 4+ Digits<br />" +
                          "<ul><li>Example: 5000&dash;12345</li></ul>" +
                          "In Software: Help > About<br />" +
                          "On Device: Behind connector panel on baseplate";
            (sandbox) ? fetchAndAdjustSerialTooltip(tt_text) : '';
            
			break;
		case 2:
            // Cirrus photo
            fetchAndRevealDynamicFields('cirrus-photo');
			break;
		case 3:
            // Clarus
            fetchAndRevealDynamicFields('clarus');
			break;
		case 4:
            // HFA3
            fetchAndRevealDynamicFields('hfa3');
			break;
		case 5:
            // IOLMaster
            fetchAndRevealDynamicFields('iolmaster');
			break;
		case 6:
            // Visucam
            fetchAndRevealDynamicFields('visucam');
			break;
		case 7:
            // Visucam Pro
            fetchAndRevealDynamicFields('visucam-pro');
			break;
		case 8:
            // Atlas 500
            fetchAndRevealDynamicFields('atlas-500');
			break;
		case 9:
            // Atlas 9000
            fetchAndRevealDynamicFields('atlas-9000');
			break;
		case 10:
            // Stratus
            fetchAndRevealDynamicFields('stratus');
			break;
		case 11:
            // FORUM
            fetchAndRevealDynamicFields('forum');
            document.querySelector('#forum_checkbox').style.display = 'none';
			break;
		default:
			console.error('[ERROR] Got to default in ' + this + '; something went wrong');
			break;
	}
}, false);

var archive_select = document.getElementById('archive-mode');
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