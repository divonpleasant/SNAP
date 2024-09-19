document.getElementById('fseupdateLink').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('overlay').style.display = 'flex';
    } else {
        document.getElementById('overlay').style.display = 'none';
    }
});

document.getElementById('close-overlay').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});
