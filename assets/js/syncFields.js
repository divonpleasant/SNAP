document.addEventListener("DOMContentLoaded", function() {
    // New event listeners for serial and description
    var serial = document.getElementById("serial");
    var deviceSerialNumber = document.getElementById("device-serial-number");
    var description = document.getElementById("description");
    var problemDescription = document.getElementById("problem-description");

    serial.addEventListener("input", function() {
        deviceSerialNumber.value = serial.value;
    });

    description.addEventListener("input", function() {
        problemDescription.value = description.value;
    });
});
