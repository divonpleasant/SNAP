const version = "3.0.34";
const project_home = "https://github.com/divonpleasant/SNAP"

// Startup routine
var curr_date = new Date();
var utc_year = curr_date.getUTCFullYear();
var debug_mode = true;
var debug_level = 5; // Range of 0 (same as debug_mode = false) to 5 (all debug messages)
var copy_alert = true;
var xc_alert = true;

function startUp() {
    // Message formatting
    underline = "=".repeat(version.length + 5);

    // Startup Message
    startup_message = `SNAP ${version}
${underline}
Script and Note Automation Process
Copyright (c) Zeiss Meditec ${utc_year}
Originally developed by Divon Pleasant (divon.pleasant@zeiss.com)

Please see ${project_home} for complete documentation, bug reporting, and code contributions.


Settings
--------
DEBUG_MODE: ${debug_mode}
DEBUG_LEVEL: ${debug_level}
COPY_ALERT: ${copy_alert}
XC_ALERT: ${xc_alert}

    `;

    export_date = curr_date.toUTCString();
    debug_message = `Debugging
---------
date = ${curr_date}
export_date = ${export_date}
`;
    console.log(startup_message);
    (debug_mode) ? console.log(debug_message) : '';
}
startUp();

// Page outputs
document.getElementById("current-version").innerHTML = version;
document.getElementById("copyright-year").innerHTML = utc_year;
document.getElementById("project-link").href = project_home;

// LIB FUNCTIONS
// Output debugging messages based on debug_mode and debug_level settings
/* Usage:
    Levels are intended to help define various developer-specific
    logging.
        0 : Any non-positive integer will result in an error
            message; debugmsg level should never be set to a value less
            than 1.
        1 : Overview. These are a step away from default console logs 
            (i.e. things every developer will want to see, always)
        2 : Top-level troubleshooting. Error messages, fatal
            conditions, etc.
        3 : Deep troubleshooting. Warnings, API messages, etc.
        4 : Developer mode. Default level for any descriptions of code
            activity.
        5 : Coding mode. Should only be used for messages intended to
            aid initial development or bug resolution. Any messaging
            generated from within a control loop, e.g.
*/
function debugmsg(level, output) {
    if (level <= 0) {
        console.log('[ERROR] Function debugmsg should never use message level 0 ... reserved for disabling messaging');
        return;
    }
    if (debug_mode) {
        if (debug_level >= level) {
            console.log("[DEBUG-" + level + "] " + output);
        }
    }
}

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
    debugmsg(5, 'serials_data[0]: ' + serials_data[0]);
    debugmsg(5, 'serials_data[1]: ' + serials_data[1]);
    return serials_data;
}

const resetFunc = document.getElementById('resetButton');
resetFunc.addEventListener('click', () => {
    curr_date = new Date();
    console.clear();
    startUp();
})