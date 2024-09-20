document.querySelectorAll('input[type="text"], textarea').forEach(function (input) {
    if (input.id !== "problem-description") {
        input.addEventListener('input', function () {
            if (this.value) {
                this.style.backgroundColor = '#e6f2ff';
            } else {
                this.style.backgroundColor = ''; // Reset background color
            }
        });
    }
});
