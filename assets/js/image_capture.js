
document.getElementById('screenshot-upload').addEventListener('paste', function (event) {
    var items = (event.clipboardData || event.originalEvent.clipboardData).items;
    var container = document.getElementById('screenshot-container');
    var screenshotsData = [];

    for (var index in items) {
        var item = items[index];
        if (item.kind === 'file') {
            var blob = item.getAsFile();
            var reader = new FileReader();
            reader.onload = function (event) {
                var base64Data = event.target.result;
                // Display the image in the container (for preview purposes)
                var img = document.createElement('img');
                img.src = base64Data;
                container.appendChild(img);

                // Add base64 data to array
                screenshotsData.push(base64Data);
                // Store all screenshots data as a JSON string
                document.getElementById('screenshot-data').value = JSON.stringify(screenshotsData);
            };
            reader.readAsDataURL(blob);
        }
    }
});
