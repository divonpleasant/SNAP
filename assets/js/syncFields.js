document.addEventListener("DOMContentLoaded", function() {
    // New event listener description
    var description = document.getElementById("description");
    var problemDescription = document.getElementById("problem-description");

    description.addEventListener("input", function() {
        problemDescription.value = description.value;
    });
});
