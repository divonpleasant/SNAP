/*
// <select name="instrument-model" id="instrument-model" onchange="show_instrument_fields('oct');">
function show_instrument_fields(inst) {
	console.log('show_instrument_fields');
	switch (inst) {
		case 'oct':
			console.log('Activating OCT Fields');
			document.getElementsByClassName('oct_instrument_fields').style.display = 'block';
			break;
		default:
			break;
	}
	return true;
}
*/

var instrument_select = document.getElementById("instrument-model");
console.log('instrument_select: ' + instrument_select);
instrument_select.addEventListener("change", function() {
	var instrument_elements = document.querySelectorAll('#cirrus_oct_form, #cirrus_photo_form, #clarus_form, #hfa3_form, #iolmaster_form, #visucam_form, #visucam_pro_form, #atlas_500_form, #atlas_9000_form, #stratus_form, #forum_form');
	for (var i = 0; i < instrument_elements.length; i++) {
		console.log('instrument_elements[' + i + ']: ' + instrument_elements[i]);
		instrument_elements[i].style.display = 'none';
	}
	console.log('this.selectedIndex: ' + this.selectedIndex);
	switch (this.selectedIndex) {
		case 1:
			console.log('setting #cirrus_oct_form to display = block');
			document.querySelector("#cirrus_oct_form").style.display = 'block';
			// document.getElementById('serial').placeholder = "Three- or four-digit number starting with 4, 5, or 6; a dash; then a sequence of digits";
			break;
		case 2:
			document.querySelector('#cirrus_photo_form').style.display = 'block';
			break;
		case 3:
			document.querySelector('#clarus_form').style.display = 'block';
			break;
		case 4:
			document.querySelector('#hfa3_form').style.display = 'block';
			break;
		case 5:
			document.querySelector('#iolmaster_form').style.display = 'block';
			break;
		case 6:
			document.querySelector('#visucam_form').style.display = 'block';
			break;
		case 7:
			document.querySelector('#visucam_pro_form').style.display = 'block';
			break;
		case 8:
			document.querySelector('#atlas_500_form').style.display = 'block';
			break;
		case 9:
			document.querySelector('#atlas_9000_form').style.display = 'block';
			break;
		case 10:
			document.querySelector('#stratus_form').style.display = 'block';
			break;
		case 11:
			document.querySelector('#forum_form').style.display = 'block';
			break;
		default:
			console.log('[ERROR] Got to default; something went wrong');
			break;
	}
}, false);