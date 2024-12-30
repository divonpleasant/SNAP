// Deprecated in 3.0.50; functionality migrated to formSupport.js
document.querySelectorAll('input[type="text"], textarea').forEach(function (input) {
    if (input.id !== "problem-description") {
        input.addEventListener('input', function () {
            if (this.value) {
                if (dark_mode) {
                    this.style.backgroundColor = '#244a86';
                } else {
                    this.style.backgroundColor = '#e6f2ff';
                }
            } else {
                this.style.backgroundColor = ''; // Reset background color
            }
        });
    }
});

// To clear the background color
document.getElementById('resetButton').addEventListener('click', function () {
    document.querySelectorAll('input[type="text"], textarea').forEach(function (input) {
        input.style.backgroundColor = '';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

});