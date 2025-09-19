function readFile(event) {
    console.log('Executing readFile ...');
    console.debug({event});
    var formlist = ['secondary-form', 'snap-form'];
    for(f = 0; f < formlist.length; f++) {
        if (document.getElementById(formlist[f]) === null) {
            console.warn('Form with id ' + formlist[f] + ' not found.');
            return;
        } else {
            var form = document.getElementById(formlist[f]);
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(event.target.result, 'text/xml');
            console.log({form});
            populateData(form, xmlDoc);
        }
    }
    /*
    var form = document.getElementById('snap-form');
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(event.target.result, 'text/xml');
    console.log({form});
    populateData(form, xmlDoc);
    */
}

var loadedFile = '';
function changeFile() {
    console.log('Executing changeFile ...');
    var file = document.getElementById('upload').files[0];
    loadedFile = file;
    console.debug('file: ' + JSON.stringify(file));
    var reader = new FileReader();
    reader.addEventListener('load', readFile);
    console.debug('file typecheck: ' + typeof(file));
    reader.readAsText(file);
    reader.onload = function() {
        (so.Settings.debug.level >= 5) ? console.debug('reader.result: ' + reader.result) : '';
    };
}

function populateData(form, xmlDom) {
    console.log("Executing populateData ... \nform: " + form.id + "\nxmlDom: " + xmlDom.documentElement.nodeName);
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
        updateSystemBox('Successfully imported ' + loadedFile.name);
        logHistoryEvent(`XML Form Data Imported from ${loadedFile.name}`);
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded Listener triggered... ');
    document.querySelector('[type=file]').onchange = changeFile;
});
