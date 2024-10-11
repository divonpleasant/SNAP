const version = "3.0.29";
const curr_date = new Date();
const utc_year = curr_date.getUTCFullYear();
const project_home = "https://github.com/divonpleasant/SNAP"
const debug_mode = true;

// Message formatting
underline = "=".repeat(version.length + 5);

// Startup Message
startup_message = `
SNAP ${version}
${underline}
Script and Note Automation Process
Copyright (c) Zeiss Meditec ${utc_year}
Originally developed by Divon Pleasant (divon.pleasant@zeiss.com)

Please see ${project_home} for complete documentation, bug reporting, and code contributions.


Settings
--------
DEBUG_MODE: ${debug_mode}
`;
console.log(startup_message);

// Page outputs
document.getElementById("current-version").innerHTML = version;
document.getElementById("copyright-year").innerHTML = utc_year;
document.getElementById("project-link").href = project_home;

// LIB FUNCTIONS
// Process instrument/serial number strings
function proc_template_serial (sn) {
    if (sn != "") {
        serial_str = " with serial number " + sn;
        subj_serial = " S/N: " + sn;
    } else {
        serial_str = "";
        subj_serial = "";
    }
    var instrument_str;
    switch (document.getElementById('instrument-model').value) {
        case "Cirrus OCT": 
            instrument_str = "Cirrus OCT" + serial_str;
            break;
        case "Cirrus Photo": 
            instrument_str = "Cirrus Photo" + serial_str;
            break;
        case "Clarus": 
            instrument_str = "Clarus" + serial_str;
            break;
        case "HFA3": 
            instrument_str = "HFA" + serial_str;
            break;
        case "IOLMaster": 
            instrument_str = "IOLMaster" + serial_str;
            break;
        case "Visucam 224/524": 
            instrument_str = "Visucam" + serial_str;
            break;
        case "Visucam Pro/NM/NMFA": 
            instrument_str = "Visucam" + serial_str;
            break;
        case "Atlas 500": 
            instrument_str = "Atlas" + serial_str;
            break;
        case "Atlas 9000": 
            instrument_str = "Atlas" + serial_str;
            break;
        case "Stratus 3000/Visante 1000 (old)": 
            instrument_str = "device" + serial_str;
            break;
        default:
            instrument_str = "instrument" + serial_str;
            break;
    }
    var serials_data = [subj_serial, instrument_str];
    (debug_mode) ? console.log("[DEBUG] serials_data[0]: " + serials_data[0]) : '';
    (debug_mode) ? console.log("[DEBUG] serials_data[1]: " + serials_data[1]) : '';
    return serials_data;
}
