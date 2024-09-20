document.querySelectorAll('input[type="text"], textarea').forEach(function (input) {
    if (input.id !== "problem-description") {
        input.addEventListener('input', function () {
            if (this.value) {
                this.style.backgroundColor = '#8f8f8f';
            } else {
                this.style.backgroundColor = ''; // Reset background color
            }
        });
    }
});
