function readFile(event) {
    var form = document.getElementById('snap-form');
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(event.target.result, 'text/xml');
    populateData(form, xmlDoc);
}

function changeFile() {
    var file = document.getElementById('upload').files[0];
    debugmsg(5, 'file: ' + JSON.stringify(file));
    var reader = new FileReader();
    reader.addEventListener('load', readFile);
    debugmsg(5, 'file typecheck: ' + typeof(file));
    reader.readAsText(file);
    reader.onload = function() {
        debugmsg(5, 'reader.result: ' + reader.result);
    };
}

function populateData(form, xmlDom) {
    try {
        var root = xmlDom.documentElement;
        var metadataNodes = root.querySelectorAll('customMetaData');
        var map = {};
        var change_event = new Event('change');
        metadataNodes.forEach(function(metadata) {
            var key = metadata.querySelector('key').textContent;
            var value = metadata.querySelector('value').textContent;
            map[key] = value;
        });
        for (var i = 0; i < form.elements.length; i++) {
            var input = form.elements[i];
            if (input.name) {
                if (input.type === 'checkbox') {
                    input.checked = (map[input.name] === "true") ? true : false;
                } else {
                    input.value = map[input.name] || '';
                }
                (map[input.name]) ? input.dispatchEvent(change_event) : '';
            }
        }
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    debugmsg(4, 'DOMContentLoaded Listener triggered... ');
    document.querySelector('[type=file]').onchange = changeFile;
});
