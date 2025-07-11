/* Process Actual Problem */
function useActualDescription() {
    debugmsg(5, 'same-as-reported: ' + document.getElementById('same-as-reported').checked);
    if (document.getElementById('same-as-reported').checked) {
        return "N/A";
    } else {
        return document.getElementById('actual-problem-description').value;
    }
}

/* Process CCT Description */
function procCctDescription (descr_only = false) {
    if (document.getElementById('billing-type').value == "CNTRCT") {
        bt = document.getElementById('service-contract').value;
    } else {
        bt = document.getElementById('billing-type').value;
    }
    var serialnum = document.getElementById('serial').value;
    var raw_description = document.getElementById('description').value;
    console.debug({serialnum});
    console.debug('serialnum.length: ' + serialnum.length);
    if (document.getElementById('instrument').value === 'FORUM' && serialnum === '') {
        serialnum = 'FORUM';
    }
    console.debug({bt});
    console.debug('bt.length: ' + bt.length);
    var prefix_len = serialnum.length + bt.length;
    console.debug({prefix_len});
    var avail_chars = 40 - prefix_len; // tested description field in CRM for 40 characters total
    var desc_arr = raw_description.split(".");
    var description = desc_arr[0].substring(0, avail_chars);
    if (descr_only) {
        console.debug({descr_only});
        return description;
    } else {
        var cct_descr = serialnum + " " + bt + " " + description;
        console.debug({cct_descr});
        return cct_descr;
    }
}

/*
    Clean up data provided by merging template with form data and processed 
    strings via data functions.
*/
function cleanData(t_data) {
    debugmsg(3, "DATA\n====\n" + t_data);

    // Remove empty lines
    var non_empty_data = t_data.split('\n').filter(line => !line.match(/: $/)).join('\n');
    debugmsg(4, "NON-EMPTY DATA\n=========================\n" + non_empty_data);
    var line_clear_data = non_empty_data.replace(/\n{3,}/g, '\n\n');
    var single_line_data = line_clear_data.replace(/\n{1,}$/, '\n');
    var processed_data = single_line_data.replace(/\n$/, '');
    debugmsg(5, "PROCESSED DATA\n========================\n" + processed_data);
    return processed_data;
}

function exportToFile(clean_data, extension, filename = 'export') {
    var blob = new Blob([clean_data], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    if (document.getElementById('serial').value != '') {
        filename = document.getElementById('serial').value;
    } else if (document.getElementById('cct').value != '') {
        filename = document.getElementById('cct').value;
    }
    link.download = `${filename}${extension}`;
    link.click();
}

/*
    This function copies a subset of the form data to various output formats 
    using the template object.
*/
function copyCrmData (data_subset) {
    var data_context = [];
    debugmsg(4, 'data_subset: ' + data_subset);
    switch (data_subset) {
        case 'rafta':
            data_context.push(useActualDescription()); // actual_description
            break;
        case 'interaction':
            data_context.push(procCctDescription()); // cct_description
            data_context.push(useActualDescription()); // actual_problem
            data_context.push(outputCommunicationPref()); // comm_preference
            data_context.push(generateBillingContact()); // billing_str
            data_context.push(processDiskSpace('oct-c-drive-free')); // oct_c_space
            data_context.push(processDiskSpace('oct-e-drive-free')); // oct_e_space
            clipBoarder(data_context[0], 'CCT description string');
            break;
        case 'internal':
            data_context.push(outputCommunicationPref()); // comm_preference
            data_context.push(generateBillingContact()); // billing_str
            break;
        default:
            break;
    }
    debugmsg(4, 'data_context: ' + data_context);
    const crmt = new generateTemplates(data_context);
    debugmsg(5, 'Checking crmt.templates...');
    console.log(crmt.templates);
    template_data = crmt.templates.export[data_subset].format;
    cleaned_data = cleanData(template_data);
    switch (crmt.templates.export[data_subset].export_type) {
        case "copy":
            clipBoarder(cleaned_data, crmt.templates.export[data_subset].name);
            break;
        case "save":
            exportToFile(cleaned_data, crmt.templates.export[data_subset].file_ext);
            break;
        default:
            debugmsg(1, 'Did not find an export type in ' + data_subset + ', no action taken');
            break;
    }
}