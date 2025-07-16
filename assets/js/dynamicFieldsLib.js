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

function hideInstrumentDynamicFields() {
    var instrument_elements = Object.keys(products.pdata.instruments).filter(excludeMetaDataKeysFilter);
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
    debugmsg(4, "checkModelSerial ...\nicode: " + icode + "\nm_id: " + m_id + "\nskey: " + skey);
    var prod_type = checkProductType(icode);
    debugmsg(4, 'prod_type: ' + prod_type);
    if (prod_type) {
        switch (prod_type) {
            case 'instrument':
                if (checkProductHasSubcategory(products.pdata.instruments[icode].models[m_id], 'model_serials')) {
                    debugmsg(4, 'checkModelSerial model_serial found ...');
                    if (checkProductHasSubcategory(products.pdata.instruments[icode].models[m_id].model_serials, skey)) {
                        debugmsg(4, 'checkModelSerial model_serials found for ' + skey + ' ...');
                        debugmsg(5, 'returning: products.pdata.instruments[' + icode + '].models[m_id].model_serials[skey]: ' + products.pdata.instruments[icode].models[m_id].model_serials[skey]);
                        return products.pdata.instruments[icode].models[m_id].model_serials[skey];
                    } else {
                        debugmsg(4, 'checkModelSerial could not find model_serials for ' + skey + ' ...');
                        debugmsg(5, 'returning: products.pdata.instruments[' + icode + '].models.serial[skey]: ' + products.pdata.instruments[icode].models.serial[skey]);
        return products.pdata.instruments[icode].models.serial[skey];
                        return '';
                    }
                } else {
                    debugmsg(4, 'checkModelSerial could not find model_serials for instrument ' + icode + ' and model ' + m_id + ' ... using instrument generic data');
                    debugmsg(5, 'returning: products.pdata.instruments[' + icode + '].models.serial[skey]: ' + products.pdata.instruments[icode].models.serial[skey]);
                    return products.pdata.instruments[icode].models.serial[skey];
                    //return '';
                }
                break;
            case 'software':
            default:
                debugmsg(4, "prod_type '" + prod_type + "' did not match 'instrument' when evaluated from icode '" + icode + "', returning blank value");
                return '';
                break;
        }
    } else {
        console.warn("checkModelSerial :: prod_type '" + prod_type + "' could not be evaluated, no model_serials returned.");
        return '';
    }
}

function checkProductType(product) {
    debugmsg(4, "checkProductType ... \nproduct: " + product);
    try {
        if (typeof products.pdata.instruments[product] === 'undefined') {
            if (typeof products.pdata.software[product] === 'undefined') {
                return false;
            } else {
                debugmsg(4, 'products.pdata.software[' + product + '] was not undefined, returning value: software');
                debugmsg(5, 'products.pdata.instruments[' + product + ']: ' + JSON.stringify(products.pdata.instruments[product]));
                return 'software';
            }
        } else {
            debugmsg(4, 'products.pdata.instruments[' + product + '] was not undefined, returning value: instrument');debugmsg(5, 'products.pdata.instruments[' + product + ']: ' + JSON.stringify(products.pdata.instruments[product]));
            return 'instrument';
        }
    } catch (e) {
        console.error('checkProductType failed: ' + e);
        return false;
    }
}

function checkProductHasSubcategory(product_obj, category_to_check) {
    debugmsg(4, "checkProductHasSubcategory ... \nproduct_obj: " + JSON.stringify(product_obj) + "\ncategory_to_check: " + JSON.stringify(category_to_check));
    try {
        if (typeof product_obj !== 'undefined') {
            debugmsg(4, 'product_obj[caetegory_to_check]: ' + JSON.stringify(product_obj[category_to_check]));
            return (typeof product_obj[category_to_check] === 'undefined' || product_obj[category_to_check] === '') ? false : true;
        } else {
            return false;
        }
    } catch (e) {
        console.error('checkProductHasSubcategory failed: ' + e);
    }
}

// Create new productData object
const products = new generateProductData();
console.log(`productData loaded...
  Schema: v${products.pdata.schema_version}
    Data: v${products.pdata.data_version}`);

// Functions to work with the productData object
const default_sn_tt = 'Select an Instrument and/or Model to see serial number tips';
const default_sw_tt = 'Zeiss software solutions do not use serial numbers<br />IBase listings can be found from Account Management in CRM Business Role';
function generateTooltipText (instrument_code, model_id = '') {
    debugmsg(4, "generateTooltipText ... \ninstrument_code: " + instrument_code + "\nmodel_id: " + model_id);
    var prod_type = checkProductType(instrument_code);
    debugmsg(4, 'prod_type: ' + prod_type);
    if (instrument_code === '') {
        return default_sn_tt;
    } else if (prod_type === 'software') {
        // handle software listings more elegantly in the future
        return default_sw_tt;
    }
    tt_text = (model_id === '') ? 'Models: ' : 'Model: ';
    try {
        if (model_id === '') {
            // Generic Instrument Tooltip (includes all models and uses instruments.instrument_code.serial data)
            var model_list = Object.keys(products.pdata.instruments[instrument_code].models).filter(excludeMetaDataKeysFilter);
            
            debugmsg(4, 'model_list: ' + JSON.stringify(model_list));
            for (var i = 0; i < model_list.length; i++) {
                tt_text += (products.pdata.instruments[instrument_code].models[model_list[i]].supported) ? model_list[i] + ' | ' : '';
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
            tt_text += model_id + '<br />';
            tt_text += 'Serial Number Format: ' + htmlEscape(checkModelSerial(instrument_code, model_id, 'format')) + '<br />';
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

function prePopulateSerialField() {
    var model_num = document.getElementById('model')[document.getElementById('model').selectedIndex].id;
    var instr_key = document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id;
    var prefix_value = checkModelSerial(instr_key, model_num, 'prefix_format');
    debugmsg(4, 'model_num: ' + model_num);
    debugmsg(4, 'instr_key: ' + instr_key);
    debugmsg(4, 'prePopulateSerialField::prefix_value: ' + prefix_value);
    if (document.getElementById('serial').value === '') {
        if (typeof prefix_value !== 'undefined') {
            debugmsg(4, 'prefix_value is NOT type `undefined`, populating serial field');
            document.getElementById('serial').value = prefix_value;
        }
    }
}

function populateICField() {
    var model_num = document.getElementById('model')[document.getElementById('model').selectedIndex].id;
    var instr_val = document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].value;
    var instr_key = document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id;
    console.log({model_num, instr_key, instr_val});
    var ic_output = '';
    debugmsg(4, 'product type is: ' + checkProductType(instr_key));
    if (checkProductType(instr_key) === 'instrument') {
        if (products.pdata.instruments[instr_key].models[model_num].instrument_codes !== 'undefined') {
            for (const ic of products.pdata.instruments[instr_key].models[model_num].instrument_codes) {
                ic_output += ic + ' ';
            }
            debugmsg(4, 'ic_output: ' + ic_output);
        }
        document.getElementById('instrument-code').value = ic_output.trimEnd();
    }
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

function retrieveDataSet(eval_index, data_obj, reverse_order = true) {
    debugmsg(5, "retrieveDataSet ...\neval_index: " + eval_index + "\ndata_obj: " + JSON.stringify(data_obj));
    set_items = sortSelectItems(data_obj[eval_index], data_obj[eval_index].meta.sort_method, data_obj[eval_index].meta.exemptions, reverse_order);
    return set_items
}

function filterOnKey(data_obj, key_to_eval, value_to_filter, reverse = false, include_meta = false, honor_exemptions = false) {
    /*
        By default, reverse is OFF, meaning the data is filtered (i.e. NOT 
        RETURNED) if the key_to_eval matches the value_to_filter. If the 
        reverse flag is set to true and reverse is ON, the data will only be 
        filtered if the key_to_eval value DOES NOT match the value_to_filter.
    */
    debugmsg(5, "filterOnKey ...\ndata_obj: " + JSON.stringify(data_obj) + "\nkey_to_eval: " + key_to_eval + "\nvalue_to_filter: " + value_to_filter + "\nreverse: " + reverse + "\ninclude_meta: " + include_meta + "\nhonor_exemptions: " + honor_exemptions);
    var filtered_data_obj = Object.keys(data_obj).reduce(
        (obj, key) => {
            debugmsg(5, 'key: ' + key);
            if (reverse) {
                (data_obj[key][key_to_eval] !== value_to_filter) ? obj[key] = data_obj[key] : '';
            } else {
                (data_obj[key][key_to_eval] === value_to_filter) ? obj[key] = data_obj[key] : '';
            }
            if (include_meta) {
                (key === 'meta') ? '' : delete obj[key];
            } else {
                (key === 'meta') ? delete obj[key] : '';
            }
            //honor_exemptions code goes here
            debugmsg(5, 'obj[' + key + ']: ' + JSON.stringify(obj[key]));
            return obj;
        }, {}
    );
    debugmsg(5, 'filtered_data_obj: ' + JSON.stringify(filtered_data_obj));
    return filtered_data_obj;
}

function populateSelectField(field_id, processed_data_obj, name_key, value_key, empty_first = false, id_key = '') {
    console.debug("populateSelectField ...\nfield_id: " + field_id + "\nprocessed_data_obj: " + JSON.stringify(processed_data_obj) + "\nname_key: " + name_key + "\nvalue_key: " + value_key + "\nempty_first: " + empty_first + "\nid_key: " + id_key);
    pop_field = document.getElementById(field_id);
    (empty_first) ? enableAndReset(pop_field, 1) : '';
    for (item in processed_data_obj) {
        console.debug({item});
        pop_field.add(new Option(processed_data_obj[item][name_key], processed_data_obj[item][value_key]), pop_field.options[1]);
        if (id_key !== '') {
            document.querySelectorAll('#' + field_id + ' option')[1].id = processed_data_obj[item][id_key];
        } else {
            document.querySelectorAll('#' + field_id + ' option')[1].id = item;
        }
    }
}

function checkSupportEndDateAndStatus(instr_obj) {
    for (m in instr_obj) {
        if (m !== 'serial' && m !== 'meta') {
            if (instr_obj[m].eos_date !== '') {
                var set_eos_date = new Date(instr_obj[m].eos_date);
                // console.debug(`Checking ${set_eos_date.getTime()} (EoS date) is less than ${curr_date.getTime()} (current date)...`);
                if (set_eos_date.getTime() >= curr_date.getTime()) {
                    if (!instr_obj[m].supported) {
                        console.warn(`Note: The 'supported' boolean for ${instr_obj[m].full_name} is false, but the configured End of Service date (${instr_obj[m].eos_date}) has not yet passed. Verify if supported value should be updated in productData.js`);
                    }
                } else {
                    if (instr_obj[m].supported) {
                        console.warn(`Note: The 'supported' boolean for ${instr_obj[m].full_name} is true, but the configured End of Service date (${instr_obj[m].eos_date}) has passed. Verify if supported value should be updated in productData.js`);
                    }
                }
            }
        }
    }
}

function populateInstrumentField(i_list, is_hardware = true) {
    for (i in i_list) {
        // console.debug('i_list[' + i + ']: ' + JSON.stringify(i_list[i]));
        (is_hardware) ? checkSupportEndDateAndStatus(i_list[i].models) : '';
        document.getElementById('instrument').add(new Option(i_list[i].product.short_name, i_list[i].product.short_name, document.getElementById('instrument').options[document.getElementById('instrument').length - 1]));
        document.querySelectorAll('#instrument option')[document.getElementById('instrument').length - 1].id = i_list[i].product.identifier;
    }
}

// Hide dynamic fields by default
hideAllDynamicFields();
// Handle instrument select field
debugmsg(5, 'Starting selected element: ' + document.getElementById('instrument').selectedIndex);
// First, populate the field
var instruments_list_obj = retrieveDataSet('instruments', products.pdata, false);
var software_list_obj = retrieveDataSet('software', products.pdata, false);
let active_instruments = {};
let inactive_instruments = {};
let active_software = {};
for (inst in instruments_list_obj) {
    // console.debug('instruments_list_obj[' + inst + ']: ' + JSON.stringify(instruments_list_obj[inst]));
    (instruments_list_obj[inst].support.active_models) ? active_instruments[inst] = instruments_list_obj[inst] : inactive_instruments[inst] = instruments_list_obj[inst];
}
for (sw in software_list_obj) {
    // console.debug('software_list_obj[' + sw + ']: ' + JSON.stringify(software_list_obj[sw]));
    (software_list_obj[sw].support.active_items) ? active_software[sw] = software_list_obj[sw] : '';
}
/*
console.debug('active_instruments: ' + JSON.stringify(active_instruments));
console.debug('inactive_instruments: ' + JSON.stringify(inactive_instruments));
console.debug('active_software: ' + JSON.stringify(active_software));
*/
populateInstrumentField(active_instruments);
populateInstrumentField(active_software, false);
document.getElementById('instrument').add(new Option('– Unsupported –', ''));
document.getElementById('instrument').options[document.getElementById('instrument').length - 1].style.cssText = 'font-style: italic';
populateInstrumentField(inactive_instruments);

// Onchange listener effects for instrument field
document.getElementById('instrument').addEventListener('change', function() {
    let clear_field = true;
    var selected_inst_id = this[this.selectedIndex].id;
    hideInstrumentDynamicFields();
    fetchAndAdjustSerialTooltip(default_sn_tt);
    document.getElementById('serial').disabled = false;
    // reset checkboxes before contextual changes
    document.querySelector('#forum-checkbox').style.display = 'block';
    // change form field visibility based on selection
    var tooltip = generateTooltipText(selected_inst_id);
    console.debug({tooltip});
    fetchAndAdjustSerialTooltip(tooltip);
    var model_data = {};
    if (typeof products.pdata.instruments[selected_inst_id] === 'undefined') {
        console.debug('Cannot find index ' + selected_inst_id + ' in products list, checking if product is software...');
        if (typeof products.pdata.software[selected_inst_id] === 'undefined') {
            console.error('ERROR: instrument and software index both undefined, cannot populate Model/Version field');
        } else {
            console.debug('products.pdata.software[' + selected_inst_id + ']: ' + products.pdata.software[selected_inst_id]);
            model_data = retrieveDataSet('versions', products.pdata.software[selected_inst_id]);
        }
    } else {
        model_data = retrieveDataSet('models', products.pdata.instruments[selected_inst_id]);
    }
    var eos_filtered_data = filterOnKey(model_data, 'supported', true);
    var unsupported_data = filterOnKey(model_data, 'supported', false);
    delete unsupported_data['serial'];
    if (Object.keys(unsupported_data).length > 0) {
        //populateSelectField('model', unsupported_data, 'full_name', 'full_name', true, 'model_number');
        populateSelectField('model', unsupported_data, 'full_name', 'full_name', true);
        document.getElementById('model').add(new Option("– Unsupported –", ''), document.getElementById('model').options[1]);
        document.getElementById('model').add(new Option(' ', ''), document.getElementById('model').options[1]);
        clear_field = false;
    }
    //populateSelectField('model', eos_filtered_data, 'full_name', 'full_name', clear_field, 'model_number');
    populateSelectField('model', eos_filtered_data, 'full_name', 'full_name', clear_field);
    fetchAndRevealDynamicFields(selected_inst_id);
    updateReferenceBoxContents('instrument');
}, false);

// Handle model select field
document.getElementById('model').addEventListener('change', function() {
    var inst_field = document.getElementById('instrument');
    var model_tooltip = generateTooltipText(inst_field[inst_field.selectedIndex].id, this[this.selectedIndex].id);
    debugmsg(4, 'model_tooltip: ' + model_tooltip);
    fetchAndAdjustSerialTooltip(model_tooltip);
    prePopulateSerialField();
    populateICField();
}, false);

// Handle billing select field
document.getElementById('billing-type').addEventListener('change', function () {
    debugmsg(4, 'this.options[this.selectedIndex].value: ' + this.options[this.selectedIndex].value);
    switch (this.options[this.selectedIndex].value) {
        case 'XC':
            var consoleAlertText = (so.Settings.alerts.xc.value) ? "Sending " : "Not sending (due to settings) ";
            var alertText = 'Note: Use XC code <em>only if</em> Remote Fixed <em>and</em> Billable!';
            console.log(consoleAlertText + 'alert: `' + alertText + '`');
            (so.Settings.alerts.xc.value) ? updateSystemBox(alertText) : '';
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

function addHoursToDate(date, hours) {
    return new Date(date.getTime() + hours * 3600000);
}

function dateCompare(sample, delta) {
    /*
        sample ... a valid, Date-parseable format string (e.g. "2077-12-25")
        delta  ... one of the following:
            g (greater, i.e. curr_date is later than dst_active for checking start time)
            l (lesser, i.e. curr_date is earlier than dst_inactive for checking end time)
            ge (greater than or equal to)
            le (less than or equal to)
            e (exact match)
    */
    console.log("Executing dateCompare ...\n  sample: " + sample + "\n  delta: " + delta);
    var sample_date = new Date(sample);
    switch (delta) {
        case 'g':
            return (curr_date > sample_date) ? true : false;
            break;
        case 'l':
            return (curr_date < sample_date) ? true : false;
            break;
        case 'ge':
            return (curr_date >= sample_date) ? true : false;
            break;
        case 'le':
            return (curr_date <= sample_date) ? true : false;
            break;
        case 'e':
        default:
            return (curr_date == sample_date) ? true : false;
            break;
    }
}

function isDST(tz) {
    console.log("Executing isDST ...\n  tz: " + JSON.stringify(tz));
    var last_active_dst = '';
    var last_inactive_dst = '';
    var dst = false;
    if (tz.daylight_savings.applies) {
        for (var a = 0; a < tz.daylight_savings.dst_active.length; a++) {
            if (dateCompare(tz.daylight_savings.dst_active[a], 'g')) {
                last_active_dst = tz.daylight_savings.dst_active[a];
            } else {
                console.debug('Current date is earlier than ' + tz.daylight_savings.dst_active[a] + ', exiting');
                break;
            }
        }
        console.debug({last_active_dst});
        for (var b = 0; b < tz.daylight_savings.dst_inactive.length; b++) {
            if (dateCompare(tz.daylight_savings.dst_inactive[b], 'g')) {
                last_inactive_dst = tz.daylight_savings.dst_inactive[b];
            } else {
                console.debug('Current date is earlier than ' + tz.daylight_savings.dst_inactive[b] + ', exiting');
                break;
            }
        }
        console.debug({last_inactive_dst});
        dst = (last_inactive_dst < last_active_dst) ? true : false;
    }
    return dst;
}

function findTimeZoneOffset(tz, dst_known = '') {
    console.log("Executing findTimeZoneOffset ...\n  tz: " + JSON.stringify(tz));
    var dst = (dst_known === '') ? isDST(tz) : dst_known;
    return (dst) ? tz.daylight_savings.daylight_offset : tz.daylight_savings.standard_offset;
}

function mapZipCodeToTimeZone(zip) {
    if (zip === '' || typeof zip === 'undefined' || zip === false) {
        return false;
    }
    let ac = new generateTimeZoneData();
    var tzones = Object.keys(ac.tz);
    console.debug(JSON.stringify(tzones));
    var cust_tzone = [];
    for (var z = 0; z < tzones.length; z++) {
        if (ac.tz[tzones[z]].zipcodes.includes(zip)) {
            console.log('Customer Time Zone is: ' + ac.tz[tzones[z]].id);
            cust_tzone.push(ac.tz[tzones[z]].id);
            cust_tzone.push(ac.tz[tzones[z]].name);
            cust_tzone.push(ac.tz[tzones[z]].short_name);
            cust_tzone.push(isDST(ac.tz[tzones[z]]));
            cust_tzone.push(findTimeZoneOffset(ac.tz[tzones[z]], cust_tzone[3]));
            break;
        } else {
            console.debug('Zip Code ' + zip + ' is not in ' + ac.tz[tzones[z]].name);
        }
    }
    console.debug({cust_tzone});
    return (cust_tzone.length !== 0) ? cust_tzone : [false, false, false, '', false];
}

function localizeOffset(target_offset, local_offset = -7) {
    var base_offset = (target_offset - local_offset);
    var output = ''
    output = (base_offset >= 0) ? base_offset + ' hours ahead' : Math.abs(base_offset) + ' hours behind';
    console.debug({output});
    return output;
}

function checkEndOfBusiness(date, ctz) {
    console.debug('Executing checkEndOfBusiness...');
    console.debug({date});
    console.debug({ctz});
    var adjusted_day = date.getDay().toLocaleString('en-US', { timeZone: ctz });
    console.debug({adjusted_day});
    if (adjusted_day === '6' || adjusted_day === '0') {
        return 'weekend';
    } else {
        var adjusted_time = date.getHours().toLocaleString('en-US', { timeZone: ctz, hour12: false, timeStyle: 'short' });
        console.debug({adjusted_time});
        var remaining_sla_time = 17 - adjusted_time;
        console.debug({remaining_sla_time});
        return (remaining_sla_time <= 0) ? 'eob:' + Math.abs(remaining_sla_time) : false;
    }
}

function roundFifteenMinutes(m, h) {
    console.debug('Executing roundFifteenMinutes...');
    min = (((m + 7.5)/15 | 0) * 15) % 60;
    hrs = (((m/105 + .5) | 0) + h) % 24;
    return hrs + ":" + min;
}

// Handle FSS select field
document.getElementById('fss-name').addEventListener('change', function() {
    console.debug('Handling eventListener for fss-name change event...');
    var selected_fss = document.getElementById('fss-name')[document.getElementById('fss-name').selectedIndex].value;
    console.debug('selected_fss: ' + selected_fss);
    const personnel = new generatePersonnelData();
    var fss_data = personnel.people.fss[selected_fss];
    console.debug(JSON.stringify(fss_data));
    var fss_contact_string = fss_data.name + ' (' + fss_data.email + ')';
    console.debug({fss_contact_string});
    var customer_time_zone = mapZipCodeToTimeZone(calculateZipCode());
    console.debug({customer_time_zone});
    d = new Date();
    // determine sla to use
    var sla = (document.getElementById('is-pm').checked) ? so.Settings.process.fse_pm_sla.value : so.Settings.process.fse_sla.value;
    console.debug({sla});
    var sla_date = addHoursToDate(d, sla);
    console.debug({sla_date});
    console.debug(sla_date.toLocaleString('en-US', { timeZone: customer_time_zone[0] }));
    var fss_context = [];
    var eob_status = checkEndOfBusiness(sla_date, customer_time_zone[0]);
    console.debug({eob_status});
    if (eob_status === false) {
        console.log('SLA is within normal business hours');
        cutoff_time.toString().padStart(2, '0') = roundFifteenMinutes(sla_date.getMinutes(), sla_date.getHours());
        console.debug({cutoff_time});
        fss_context.push(cutoff_time + ' today');
    } else if (eob_status.match(/^eob/)) {
        console.log('SLA is past EOB');
        var eob_results = eob_status.split(':');
        var sla_overrun = (parseInt(eob_results[1]) + 8); // Assuming the average clinic opening hour is 8:00 am
        console.debug({sla_overrun});
        fss_context.push(sla_overrun + ':00 tomorrow');
    } else if (eob_status === 'weekend') {
        console.log('SLA is past EOB and extends into weekend');
        fss_context.push('10:00 Monday'); // Setting a reasonable post-weekend window
    } else {
        console.error('checkEndOfBusiness function returned a non-valid result: ' + eob_status);
    }
    for (let fc = 0; fc < fss_context.length; fc++) {
        console.debug(fss_context[fc]);
    }
    fss_context.push(fss_contact_string);
    const fsst = new generateTemplates(fss_context);
    var cust_note_fss_text = fsst.templates.system.customer_notes.fss_contact;
    console.debug({cust_note_fss_text});
    var cn_sep = (document.getElementById('customer-notes').value === '') ? '' : "\n";
    console.debug({cn_sep});
    var final_fss_str = cn_sep + cust_note_fss_text;
    console.debug({final_fss_str});
    document.getElementById('customer-notes').value += final_fss_str;
});

function toggleFieldMenu(menu) {
    var current_display = document.getElementById(menu).style.display;
    console.debug({current_display});
    document.getElementById(menu).style.display = (current_display === 'none' || current_display === '') ? 'flex' : 'none';
}

function commonActionToField(a_id, field) {
    var action_data = (a_id === '0000') ? '' : document.getElementById(a_id).innerHTML;
    console.debug({action_data});
    //var line_break = (document.getElementById(field).value === '') ? '' : "\n"
    var line_break = "\n";
    document.getElementById(field).value += line_break + "    • " + action_data;
}

function expandNav() {
    console.debug('Executing expandNav...');
    if (document.getElementById('toggle-exp-nav').innerHTML === 'Expand') {
        document.querySelectorAll('.expanded-nav').forEach(a=>a.style.display = 'block');
        document.getElementById('toggle-exp-nav').innerHTML = 'Collapse';
    } else if (document.getElementById('toggle-exp-nav').innerHTML === 'Collapse') {
        document.querySelectorAll('.expanded-nav').forEach(a=>a.style.display = 'none');
        document.getElementById('toggle-exp-nav').innerHTML = 'Expand';
    } else {
        console.warn('expandNav :: Unexpected condition reached, please report this to the admins');
    }
}

addToggle('add-forum', 'forum');
addToggle('remote-support', 'remote-support');
addToggle('include-review-station', 'review-station');
addToggle('billing-contact', 'billing-contact');