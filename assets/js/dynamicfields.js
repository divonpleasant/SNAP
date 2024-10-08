var instrument_select = document.getElementById("instrument-model");
(debug_mode) ? console.log('[DEBUG] instrument_select: ' + instrument_select) : '';
(debug_mode) ? console.log('[DEBUG] Starting selected element: ' + instrument_select.selectedIndex) : '';
instrument_select.addEventListener("change", function() {
	var instrument_elements = document.querySelectorAll('#cirrus_oct_form, #cirrus_photo_form, #clarus_form, #hfa3_form, #iolmaster_form, #visucam_form, #visucam_pro_form, #atlas_500_form, #atlas_9000_form, #stratus_form, #forum_form');
	for (var i = 0; i < instrument_elements.length; i++) {
		(debug_mode) ? console.log('[DEBUG] instrument_elements[' + i + ']: ' + instrument_elements[i]) : '';
		instrument_elements[i].style.display = 'none';
	}
	(debug_mode) ? console.log('this.selectedIndex: ' + this.selectedIndex) : '';
	switch (this.selectedIndex) {
        case 0:
            break;
		case 1:
			(debug_mode) ? console.log('[DEBUG] setting #cirrus_oct_form to display = block') : '';
			document.querySelector("#cirrus_oct_form").style.display = 'block';
			// document.getElementById('serial').placeholder = "Three- or four-digit number starting with 4, 5, or 6; a dash; then a sequence of digits";
			break;
		case 2:
            (debug_mode) ? console.log('[DEBUG] setting #cirrus_photo_form to display = block') : '';
			document.querySelector('#cirrus_photo_form').style.display = 'block';
			break;
		case 3:
            (debug_mode) ? console.log('[DEBUG] setting #clarus_form to display = block') : '';
			document.querySelector('#clarus_form').style.display = 'block';
			break;
		case 4:
            (debug_mode) ? console.log('[DEBUG] setting #hfa3_form to display = block') : '';
			document.querySelector('#hfa3_form').style.display = 'block';
			break;
		case 5:
            (debug_mode) ? console.log('[DEBUG] setting #iolmaster_form to display = block') : '';
			document.querySelector('#iolmaster_form').style.display = 'block';
			break;
		case 6:
            (debug_mode) ? console.log('[DEBUG] setting #visucam_form to display = block') : '';
			document.querySelector('#visucam_form').style.display = 'block';
			break;
		case 7:
            (debug_mode) ? console.log('[DEBUG] setting #visucam_pro_form to display = block') : '';
			document.querySelector('#visucam_pro_form').style.display = 'block';
			break;
		case 8:
            (debug_mode) ? console.log('[DEBUG] setting #atlas_500_form to display = block') : '';
			document.querySelector('#atlas_500_form').style.display = 'block';
			break;
		case 9:
            (debug_mode) ? console.log('[DEBUG] setting #atlas_9000_form to display = block') : '';
			document.querySelector('#atlas_9000_form').style.display = 'block';
			break;
		case 10:
            (debug_mode) ? console.log('[DEBUG] setting #stratus_form to display = block') : '';
			document.querySelector('#stratus_form').style.display = 'block';
			break;
		case 11:
            (debug_mode) ? console.log('[DEBUG] setting #forum_form to display = block') : '';
			document.querySelector('#forum_form').style.display = 'block';
			break;
		default:
			console.error('[ERROR] Got to default in ' + this + '; something went wrong');
			break;
	}
}, false);