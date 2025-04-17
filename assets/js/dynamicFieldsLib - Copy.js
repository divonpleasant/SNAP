// Dynamic display of instrument fields by Instrument Model drop-down
// Support Functions
function fetchAndRevealDynamicFields (field_class) {
    var selector_class_name = '.' + field_class + '-field';
    var hidden_fields = document.querySelectorAll(selector_class_name);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields: ' + hidden_fields);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields.length: ' + hidden_fields.length);
    hidden_fields.forEach(element => {
        debugmsg(5, 'fetchAndToggleHiddenFields::element.className: ' + element.className);
    });
    hidden_fields.forEach(element => {
        element.classList.remove('dynamic-hidden');
    });
}

function fetchAndHideDynamicFields (field_class) {
    var selector_class_name = '.' + field_class + '-field';
    var hidden_fields = document.querySelectorAll(selector_class_name);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields: ' + hidden_fields);
    debugmsg(5, 'fetchAndToggleHiddenFields::hidden_fields.length: ' + hidden_fields.length);
    hidden_fields.forEach(element => {
        debugmsg(5, 'fetchAndToggleHiddenFields::element.className: ' + element.className);
    });
    hidden_fields.forEach(element => {
        if (element.classList.contains('dynamic-hidden')) {
            debugmsg(5, 'element.className ' + element.className + "does contain 'dynamic-hidden' class");
        } else {
            element.classList.add('dynamic-hidden');
        }
    });
}

function fetchAndAdjustSerialTooltip (sample_text) {
    debugmsg(5, 'sample_text: ' + sample_text);
    var tooltip_field = document.getElementById('serial-tooltip');
    debugmsg(5, 'tooltip_field: ' + tooltip_field);
    tooltip_field.innerHTML = sample_text;
}

function clearSerialTooltip () {
    fetchAndAdjustSerialTooltip('');
}

function excludeMetaDataKeysFilter(k) {
    debugmsg(5, 'Executing excludeMetaDataKeysFilter...');
    debugmsg(5, 'k: ' + k);
    var meta_keys = ['meta', 'DEFAULT', 'serial', 'support', 'asset_id'];
    var filter_msg = (meta_keys.includes(k)) ? 'Found ' + k + ' in meta_keys, returning false' : 'Did not find ' + k + ' in meta_keys, returning true';
    debugmsg(5, filter_msg);
    return (meta_keys.includes(k)) ? false : true;
}

function hideAllDynamicFields() {
    var instrument_elements = Object.keys(products.pdata.instruments).filter(excludeMetaDataKeysFilter);
    // TODO: Make the population of the extra field identifiers dynamic
    var temporary_additional_fields = ['forum', 'review-station', 'remote-support', 'billing-contact'];
    instrument_elements = instrument_elements.concat(temporary_additional_fields);
    //var instrument_elements = ['oct', 'cirrus-photo', 'clarus', 'hfa3', 'iolmaster', 'visucam', 'visucam-pro', 'atlas-500', 'atlas-9000', 'stratus', 'forum', 'review-station', 'remote-support', 'billing-contact'];
    debugmsg(5, 'instrument_elements: ' + JSON.stringify(instrument_elements));
    for (var i = 0; i < instrument_elements.length; i++) {
        var selector_class_name = '.' + instrument_elements[i] + '-field';
        fetchAndHideDynamicFields(instrument_elements[i]);
    }
}

function addToggle (toggle_id, toggle_class) {
    var toggle = document.getElementById(toggle_id);
    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            fetchAndRevealDynamicFields(toggle_class);
        } else {
            fetchAndHideDynamicFields(toggle_class);
        }
    }, false);
}

function checkModelSerial(icode, m_id, skey) {
    debugmsg(4, 'icode: ' + icode);
    debugmsg(4, 'skey: ' + skey);
    debugmsg(5, 'products.pdata.instruments[' + icode + '].models[m_id].model_serial: ' + products.pdata.instruments[icode].models[m_id].model_serial);
    return (typeof products.pdata.instruments[icode].models[m_id].model_serial[skey] != undefined) ? products.pdata.instruments[icode].models[m_id].model_serial[skey] : products.pdata.instruments[icode].models.serial[skey];
}

// Create new productData object
const products = new generateProductData();

// Functions to work with the productData object
function generateTooltipText (instrument_code, model_id = '') {
    debugmsg(4, 'instrument_code: ' + instrument_code);
    debugmsg(4, 'model_id: ' + model_id);
    tt_text = (model_id === '') ? 'Models: ' : 'Model: ' + model_id + ' ';
    try {
        if (model_id === '') {
            // Generic Instrument Tooltip (includes all models and uses instruments.instrument_code.serial data)
            var model_list = excludeMetaDataKeysFilter(products.pdata.instruments[instrument_code].models);
            debugmsg(4, 'model_list: ' + JSON.stringify(model_list));
            for (model_id in model_list) {
                tt_text += model_id + ' | ';
                debugmsg(5, 'tt_text: ' + tt_text);
            }
            tt_text = tt_text.substr(0, tt_text.length - 3);
            debugmsg(4, 'tt_text: ' + tt_text);
            tt_text += '<br />Serial Number Format: ' + htmlEscape(products.pdata.instruments[instrument_code].models.serial.format) + '<br />';
            tt_text += 'Sequence Number: ' + htmlEscape(products.pdata.instruments[instrument_code].models.serial.sequence_format) + '<br />';
            tt_text += 'Example: ' + htmlEscape(products.pdata.instruments[instrument_code].models.serial.example) + '<br />';
            tt_text += 'In Software: ' + htmlEscape(products.pdata.instruments[instrument_code].models.serial.software_location) + '<br />';
            tt_text += 'On Device: ' + htmlEscape(products.pdata.instruments[instrument_code].models.serial.hardware_location);
        } else {
            // Model-specific Tooltip (includes only selected model and uses instruments[instrument_code].models[model_id].model_serial data where available)
            tt_text += '<br />Serial Number Format: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'format')) + '<br />';
            tt_text += 'Sequence Number: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'sequence_format')) + '<br />';
            tt_text += 'Example: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'example')) + '<br />';
            tt_text += 'In Software: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'software_location')) + '<br />';
            tt_text += 'On Device: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'hardware_location'));
        }
    } catch (e) {
        console.error('generateTooltipText failed: ' + e);
    }
    return tt_text;
}

function sortSelectItems(si_list, method, exempt = [], reverse_order = true) {
    debugmsg(5, "sortSelectItems ...\nsi_list: " + JSON.stringify(si_list) + "\nmethod: " + method + "\nreverse_order: " + reverse_order + "\nexempt: " + exempt);
    switch (method) {
        case 'numeric':
            var sorted_si_list = Object.keys(si_list).sort((a, b) => (a - b)).reduce(
                (obj, key) => {
                    debugmsg(5, 'key: ' + key);
                    (!exempt.includes(key)) ? obj[key] = si_list[key] : '';
                    return obj;
                }, {}
            );
            break;
        case 'alpha':
        default:
            var sorted_si_list = Object.keys(si_list).sort().reduce(
                (obj, key) => {
                    debugmsg(5, 'key: ' + key);
                    (!exempt.includes(key)) ? obj[key] = si_list[key] : '';
                    return obj;
                }, {}
            );
            break;
    }
    debugmsg(5, 'sorted_si_list: ' + JSON.stringify(sorted_si_list));
    final_list = (reverse_order) ? Object.keys(sorted_si_list).sort().reverse().reduce((obj, key) => { obj[key] = sorted_si_list[key]; return obj; }, {}) : sorted_si_list;
    debugmsg(5, 'final_list: ' + JSON.stringify(final_list));
    return final_list;
}

function retrieveDataSet(eval_index, data_obj) {
    debugmsg(5, "retrieveDataSet ...\neval_index: " + eval_index + "\ndata_obj: " + JSON.stringify(data_obj));
    set_items = sortSelectItems(data_obj[eval_index], data_obj[eval_index].meta.sort_method, data_obj[eval_index].meta.exemptions);
    return set_items
}

function filterOnKey(data_obj, key_to_eval, value_to_filter, reverse = false) {
    /*
        By default, reverse is OFF, meaning the data is filtered (i.e. NOT 
        RETURNED) if the key_to_eval matches the value_to_filter. If the 
        reverse flag is set to true and reverse is ON, the data will only be 
        filtered if the key_to_eval value DOES NOT match the value_to_filter.
    */
    debugmsg(5, "filterOnKey ...\ndata_obj: " + JSON.stringify(data_obj) + "\nkey_to_eval: " + key_to_eval + "\nvalue_to_filter: " + value_to_filter + "\nreverse: " + reverse);
    var filtered_data_obj = Object.keys(data_obj).reduce(
        (obj, key) => {
            if (reverse) {
                (data_obj[key][key_to_eval] !== value_to_filter) ? obj[key] = data_obj[key] : '';
                return obj;
            } else {
                (data_obj[key][key_to_eval] === value_to_filter) ? obj[key] = data_obj[key] : '';
                return obj;
            }
        }, {}
    );
    debugmsg(5, 'filtered_data_obj: ' + JSON.stringify(filtered_data_obj));
    return filtered_data_obj;
}

function populateSelectField(field_id, processed_data_obj, name_key, value_key, empty_first = false) {
    debugmsg(5, "populateSelectField ...\nfield_id: " + field_id + "\nprocessed_data_obj: " + JSON.stringify(processed_data_obj) + "\nname_key: " + name_key + "\nvalue_key: " + value_key + "\nempty_first: " + empty_first);
    pop_field = document.getElementById(field_id);
    (empty_first) ? enableAndReset(pop_field, 1) : '';
    for (item in processed_data_obj) {
        pop_field.add(new Option(processed_data_obj[item][name_key], processed_data_obj[item][value_key]), pop_field.options[1]);
    }
}

// Hide dynamic fields by default
hideAllDynamicFields();
// Handle instrument select field
debugmsg(5, 'Starting selected element: ' + document.getElementById('instrument').selectedIndex);
// Onchange listener effects for instrument field
document.getElementById('instrument').addEventListener('change', function() {
    hideAllDynamicFields();
    fetchAndAdjustSerialTooltip('Select an Instrument and/or Model to see serial number tips');
    document.getElementById('serial').disabled = false;
    // reset checkboxes before contextual changes
    document.querySelector('#forum-checkbox').style.display = 'block';
    // change form field visibility based on selection
    var tooltip = generateTooltipText(this[this.selectedIndex].id);
    debugmsg(4, 'tooltip: ' + tooltip);
    fetchAndAdjustSerialTooltip(tooltip);
    var model_data = retrieveDataSet('models', products.pdata.instruments[this[this.selectedIndex].id]);
    var eos_filtered_data = filterOnKey(model_data, 'eos_date', '');
    debugmsg(5, 'eos_filtered_data: ' + JSON.stringify(eos_filtered_data));
    populateSelectField('model', eos_filtered_data, 'full_name', 'full_name', true);
    fetchAndRevealDynamicFields(this[this.selectedIndex].id);
}, false);

// Handle model select field
document.getElementById('model').addEventListener('change', function() {
    hideAllDynamicFields();
    var inst_field = document.getElementById('instrument');
    var model_tooltip = generateTooltipText(inst_field[inst_field.selectedIndex].id, this[this.selectedIndex].id);
    fetchAndAdjustSerialTooltip(model_tooltip);
}, false);

// Handle billing select field
document.getElementById('billing-type').addEventListener('change', function () {
    debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    switch (this.options[this.selectedIndex].value) {
        case 'XC':
            var consoleAlertText = (so.Settings.alerts.xc.value) ? "Sending " : "Not sending (due to settings) ";
            var alertText = 'Note: Use XC code ONLY IF Remote Fixed AND Billable!';
            console.log(consoleAlertText + 'alert: `' + alertText + '`');
            (so.Settings.alerts.xc.value) ? alert(alertText) : '';
            document.getElementById('service-contract').setAttribute('disabled', true);
            break;
        case 'CNTRCT':
            document.getElementById('service-contract').removeAttribute('disabled');
            break;
        default:
            document.getElementById('service-contract').setAttribute('disabled', true);
            break;
    }
}, false);

// Handle archive select fields
var archive_select = document.getElementById('oct-archive-mode');
archive_select.addEventListener('change', function() {
    // change form field visibility based on selection
    switch (this.selectedIndex) {
        case 0:
            fetchAndHideDynamicFields('archive');
            break;
        case 1:
            // Native Mode
            fetchAndRevealDynamicFields('archive');
            break;
        case 2:
            // DICOM Mode
            fetchAndHideDynamicFields('archive');
            break;
        default:
            console.error('[ERROR] Got to default in ' + this + '; something went wrong');
            break;
    }
}, false);

addToggle('add-forum', 'forum');
addToggle('remote-support', 'remote-support');
addToggle('include-review-station', 'review-station');
addToggle('billing-contact', 'billing-contact');