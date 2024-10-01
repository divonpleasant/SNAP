function selectChangeAlert(selectBox, optionAlert, alertText, debugOn) {
	if (debugOn) {
        console.log("optionAlert: " + optionAlert);
        console.log("alertText: " + alertText);
        console.log("selectBox.selectedIndex: " + selectBox.selectedIndex);
        console.log("selectBox.options[selectBox.selectedIndex].value: " + selectBox.options[selectBox.selectedIndex].value);
        console.log("selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert): " + selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert));
	}
	if (selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert) === 0 && selectBox.selectedIndex != 0) {
		console.log("Sending alert: " + alertText);
		alert(alertText);
	}
}