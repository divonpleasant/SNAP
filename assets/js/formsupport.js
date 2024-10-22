function selectChangeAlert(selectBox, optionAlert, alertText, debugOn) {
	if (debugOn) {
        console.log("[DEBUG] optionAlert: " + optionAlert);
        console.log("[DEBUG] alertText: " + alertText);
        console.log("[DEBUG] selectBox.selectedIndex: " + selectBox.selectedIndex);
        console.log("[DEBUG] selectBox.options[selectBox.selectedIndex].value: " + selectBox.options[selectBox.selectedIndex].value);
        console.log("[DEBUG] selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert): " + selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert));
	}
	if (selectBox.options[selectBox.selectedIndex].value.localeCompare(optionAlert) === 0 && selectBox.selectedIndex != 0) {
        consoleAlertText = (xc_alert) ? "Sending " : "Not sending (due to settings) ";
		console.log(consoleAlertText + 'alert: `' + alertText + '`');
		(xc_alert) ? alert(alertText) : '';
	}
}