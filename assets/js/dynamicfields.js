var instrument_select = document.getElementById("instrument-model");
debugmsg(4, 'instrument_select: ' + instrument_select);
debugmsg(4, 'Starting selected element: ' + instrument_select.selectedIndex);
instrument_select.addEventListener("change", function() {
	var instrument_elements = document.querySelectorAll('#cirrus_oct_form, #cirrus_photo_form, #clarus_form, #hfa3_form, #iolmaster_form, #visucam_form, #visucam_pro_form, #atlas_500_form, #atlas_9000_form, #stratus_form, #forum_form');
	for (var i = 0; i < instrument_elements.length; i++) {
        debugmsg(5, 'instrument_elements[' + i + ']: ' + instrument_elements[i]);
		instrument_elements[i].style.display = 'none';
	}
	debugmsg(4, 'this.selectedIndex: ' + this.selectedIndex);
    // reset checkboxes before contextual changes
    document.querySelector('#forum_checkbox').style.display = 'block';
    // change form field visibility based on selection
	switch (this.selectedIndex) {
        case 0:
            break;
		case 1:
			debugmsg(4, 'setting #cirrus_oct_form to display = block');
			document.querySelector("#cirrus_oct_form").style.display = 'block';
			// document.getElementById('serial').placeholder = "Three- or four-digit number starting with 4, 5, or 6; a dash; then a sequence of digits";
			break;
		case 2:
            debugmsg(4, 'setting #cirrus_photo_form to display = block');
			document.querySelector('#cirrus_photo_form').style.display = 'block';
			break;
		case 3:
            debugmsg(4, 'setting #clarus_form to display = block');
			document.querySelector('#clarus_form').style.display = 'block';
			break;
		case 4:
            debugmsg(4, 'setting #hfa3_form to display = block');
			document.querySelector('#hfa3_form').style.display = 'block';
			break;
		case 5:
            debugmsg(4, 'setting #iolmaster_form to display = block');
			document.querySelector('#iolmaster_form').style.display = 'block';
			break;
		case 6:
            debugmsg(4, 'setting #visucam_form to display = block');
			document.querySelector('#visucam_form').style.display = 'block';
			break;
		case 7:
            debugmsg(4, 'setting #visucam_pro_form to display = block');
			document.querySelector('#visucam_pro_form').style.display = 'block';
			break;
		case 8:
            debugmsg(4, 'setting #atlas_500_form to display = block');
			document.querySelector('#atlas_500_form').style.display = 'block';
			break;
		case 9:
            debugmsg(4, 'setting #atlas_9000_form to display = block');
			document.querySelector('#atlas_9000_form').style.display = 'block';
			break;
		case 10:
            debugmsg(4, 'setting #stratus_form to display = block');
			document.querySelector('#stratus_form').style.display = 'block';
			break;
		case 11:
            debugmsg(4, 'setting #forum_form to display = block');
			document.querySelector('#forum_form').style.display = 'block';
            debugmsg(4, 'setting #forum_checkbox to display = none');
            document.querySelector('#forum_checkbox').style.display = 'none';
			break;
		default:
			console.error('[ERROR] Got to default in ' + this + '; something went wrong');
			break;
	}
}, false);

var forum_toggle = document.getElementById("add_forum");
debugmsg(4, 'forum_toggle: ' + forum_toggle);
forum_toggle.addEventListener("change", function() {
    debugmsg(4, 'forum_toggle.checked: ' + forum_toggle.checked);
    if (forum_toggle.checked) {
        document.querySelector('#forum_form').style.display = 'block';
        debugmsg(4, 'setting #forum_checkbox to display = block (from checkbox)');
    } else {
        document.querySelector('#forum_form').style.display = 'none';
        debugmsg(4, 'setting #forum_checkbox to display = none (from checkbox)');
    }
}, false);