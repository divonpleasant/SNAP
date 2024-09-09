document.getElementById('screenshot-upload').addEventListener('paste', function(event) {
    var items = event.clipboardData.items;
    var screenshotContainer = document.getElementById('screenshot-container');
    for (var i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            var blob = items[i].getAsFile();
            var reader = new FileReader();
            reader.onload = function(event) {
                var dataUrl = event.target.result;

                // Create a new image element for each screenshot
                var img = document.createElement('img');
                img.src = dataUrl;
                img.style.maxWidth = '100%';
                img.style.height = 'auto';
                img.style.display = 'block';
                img.style.marginBottom = '10px';
                
                // Append the image to the screenshot container
                screenshotContainer.appendChild(img);

                // Append the data URL to the hidden input for form submission
                var hiddenInput = document.createElement('input');
                hiddenInput.type = 'hidden';
                hiddenInput.name = 'screenshot-data[]';
                hiddenInput.value = dataUrl;
                screenshotContainer.appendChild(hiddenInput);
            };
            reader.readAsDataURL(blob);
        }
    }
});