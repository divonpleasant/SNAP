// FUNCTIONS
// Process parts list data
function procPartsList(parts) {
    if (parts == '') {
        return "NO PARTS DEFINED\n";
    }
    parts_array = parts.split("\n");
    var final_part_str = '';
    for (let i = 0; i < parts_array.length; i++) {
        var counter = i + 1;
        var part_split = parts_array[i].split(';');
        var part_name = part_split[0];
        var part_number = part_split[1];
        var part_str_counter = '[' + counter + ' of ' + parts_array.length + ']    ';
        var name_str = part_name + "\n";
        var part_num_str = " ".repeat(part_str_counter.length) + part_number + "\n";
        final_part_str = final_part_str + part_str_counter + name_str + part_num_str;
    }
    return final_part_str;
}

function setPreferredComm() {
    var comm_pref = outputCommunicationPref();
    switch (comm_pref) {
        case 'Customer prefers phone communication':
            return 'p';
            break;
        case 'Customer prefers email communication':
            return 'e';
            break;
        case '':
        case 'Customer has no communication preference':
            return '';
            break;
        default:
            console.error('outputCommunicationPref() returned invalid result: ' + comm_pref);
            return '';
            break;
    }
}

// Check if required data was supplied and device is in fact EoS
function eosPreCheck() {
    console.log('Executing eosPreCheck');
    // if (document.getElementById('eos-instrument-type').value === '' || document.getElementById('eos-instrument-model').value === '') {
    if (document.getElementById('instrument').value === '' || document.getElementById('model').value === '') {
        var type_model_msg = 'The instrument and/or model were not selected or could not be found.';
        console.error(type_model_msg);
        alert(type_model_msg);
        return false;
    } else {
        if (typeof products.pdata.instruments[document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id] === 'undefined') {
            console.warn("The product '" + document.getElementById('model').value + "' is either a software product or is not a standard Zeiss instrument. Cannot deliver EOS message for non-instrument products");
            return false;
        } else if (products.pdata.instruments[document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id].models[document.getElementById('model')[document.getElementById('model').selectedIndex].id].supported) {
            console.warn("The device '" + document.getElementById('model').value + "' is still supported. Cannot deliver EOS message for actively supported devices");
            return false;
        } else {
            return true;
        }
    }
}

// Retrieve EoS data from Devices object
function fetchEosData() {
    console.info('Retrieving Devices object');
    var active_eos_model = products.pdata.instruments[document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id];
    return active_eos_model;
}

/* This function processes various model data and returns contextual strings to
be sent to the template as context. This context is flattened into the final
context array (with the 0 index being the device's short name) in these
indices:
    1: End of Support Notice - type of support end and date of Eo[G]S, if applicable
    2: Optional notification regarding service agreements and contracts
    3: Optional link to EoS announcement document, if available
*/
function eosProcContext(data) {
    console.debug("Executing eosProcContext...\n  data: " + JSON.stringify(data));
    //var model_data = data.models[document.getElementById('eos-instrument-model').value];
    var model_data = products.pdata.instruments[document.getElementById('instrument')[document.getElementById('instrument').selectedIndex].id].models[document.getElementById('model')[document.getElementById('model').selectedIndex].id];
    console.debug({model_data});
    var model_id = document.getElementById('model')[document.getElementById('model').selectedIndex].id;
    // declarations
    var detail_page = '';
    var end_of_support_notice = '';
    var support_context_str = '';
    var output_eos_date = '';
    var use_date = false;
    var use_terminated_agreements_clause = false;
    // process
    if (model_data.eos_url != '') {
        detail_page = "For more detailed information on your system's support, please visit this page:\n" + model_data.eos_url + "\n\n";
    }
    if (model_data.eos_date != '') {
        var eos_date = new Date(model_data.eos_date);
        support_context_str = 'has officially ended support';
        use_date = true;
        use_terminated_agreements_clause = true;
    } else if (model_data.eogs_date != '') {
        var eos_date = new Date(model_data.eogs_date);
        support_context_str = 'has officially ended guaranteed support';
        use_date = true;
    } else {
        support_context_str = 'may have modified full support';
    }
    console.log({eos_date});
    output_eos_date = (use_date) ? ', as of ' + eos_date.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ', ' : ' ';
    agreements_str = (use_date) ? 'All existing service agreements for the ' + model_data.full_name + ' systems were terminated as of ' + eos_date.toLocaleString("en-US", {month: "long", day: "numeric", year: "numeric"}) + ". If you had a prepaid service agreement extending beyond this date, ZEISS has already issued credits accordingly.\n\n" : '';
    end_of_support_notice = output_eos_date + 'ZEISS ' + support_context_str;
    agreements_notice = (use_terminated_agreements_clause) ? agreements_str : "\n\n";
    console.debug({end_of_support_notice});
    console.debug({agreements_str});
    console.debug({detail_page});
    var processed_verbiage = [end_of_support_notice, agreements_str, detail_page];
    return processed_verbiage;
}

// OBJECTS
// Template References (re-usable HTML blobs)
TRef = {
    "cct_in_crm": "<a href=\"https://p8cmain.zeiss.org/sap(bD1lbiZjPTAxMCZkPW1pbg==)/crm_logon/default.htm\" target=\"_blank\">Create CCT in CRM</a>",
    "cct": "<a href=\"https://p8cmain.zeiss.org/sap(bD1lbiZjPTAxMCZkPW1pbg==)/crm_logon/default.htm\" target=\"_blank\">CCT</a>",
    "crm": "<a href=\"https://p8cmain.zeiss.org/sap(bD1lbiZjPTAxMCZkPW1pbg==)/crm_logon/default.htm\" target=\"_blank\">CRM</a>",
    "admin_pm_req": "<a href=\"#\" onclick=\"manualOpenEmailTemplate('service-admin-contract-pm-request')\">Admin PM Request</a>",
    "po_auth": "<a href=\"#\" onclick=\"manualOpenEmailTemplate('fse-billing-request')\">PO Authorization</a>",
    "proaim_pm_auth": "<a href=\"#\" onclick=\"manualOpenEmailTemplate('proaim-pm-request')\">PROAIM PM Request</a>",
    "address_change_form": "<a href=\"#\" onclick=\"manualOverlay('address-change')\">Address Change Form</a>",
    "proc_create_task": "<a href=\"#\" onclick=\"manualActivateProcess('crm', 'tasks', 'create-task-task')\">Create a Task</a>"
}
