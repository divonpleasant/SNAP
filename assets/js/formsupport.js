function selectChangeAlert(selectBox, optionAlert, alertText) {
	for (var i, j = 0; i = selectBox.options[j]; j++) {
		if (i.value == optionAlert && selectBox.selectedIndex != 0) {
			alert(alertText);
			console.log("Sending alert: " + alertText);
		}
	}
}