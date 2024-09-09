document.addEventListener("DOMContentLoaded", function() {
    var localContactPerson = document.getElementById("local-contact-person");
    var localContactPerson1 = document.getElementById("local-contact-person1");
    var phone = document.getElementById("phone");
    var phone1 = document.getElementById("phone1");
    var email = document.getElementById("email");
    var email1 = document.getElementById("email1");

    localContactPerson.addEventListener("input", function() {
        localContactPerson1.value = localContactPerson.value;
    });

    phone.addEventListener("input", function() {
        phone1.value = phone.value;
    });

    email.addEventListener("input", function() {
        email1.value = email.value;
    });

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
