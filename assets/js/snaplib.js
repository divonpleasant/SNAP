const version = "3.0.38";
const project_home = "https://github.com/divonpleasant/SNAP"

// Startup routine
var curr_date = new Date();
var utc_year = curr_date.getUTCFullYear();
// Setting Defaults
var debug_mode = true;
var debug_level = 4; // Range of 0 (same as debug_mode = false) to 5 (all debug messages)
var copy_alert = false;
var xc_alert = true;
var con_clear = true;
var tag = '';
// sb (sandbox) constant should only be defined by the sandbox index file
if (typeof sb !== 'undefined') {
    var sandbox = sb;
    var tag = ' - Sandbox';
} else {
    var sandbox = false;
}

function startUp() {
    // Message formatting
    underline = "=".repeat(version.length + tag.length + 5);

    // Startup Message
    startup_message = `SNAP ${version}${tag}
${underline}
Script and Note Automation Process
Copyright (c) Zeiss Meditec ${utc_year}
Originally developed by Divon Pleasant (divon.pleasant@zeiss.com)

Please see ${project_home} for complete documentation, bug reporting, and code contributions.


Settings
--------
Debug Mode: ${debug_mode}
Debug Level: ${debug_level}
Alert on Copy: ${copy_alert}
Alert for Cross-Charge (XC): ${xc_alert}
Clear Console on Reset: ${con_clear}

    `;

    export_date = curr_date.toUTCString();
    simple_date = curr_date.toDateString();
    debug_message = `Debugging
---------
date = ${curr_date}
export_date = ${export_date}
simple_date = ${simple_date}
`;
    console.log(startup_message);
    (debug_mode) ? console.log(debug_message) : '';
}
startUp();

// Page outputs
document.getElementById("current-version").innerHTML = version;
document.getElementById("copyright-year").innerHTML = utc_year;
document.getElementById("project-link").href = project_home;
if (sandbox) {
    document.getElementById('header-tag').innerHTML = '[Sandbox]';
    document.getElementById("current-version").innerHTML = version + '-sandbox';
}

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
    hideAllDynamicFields();
    // clear console if using 'Developer' debug level
    (con_clear) ? console.clear() : '';
    startUp();
})

// Cookie Functions
function setCookie(cName, cVal, exp_days) {
    const d = new Date();
    d.setTime(d.getTime() + (exp_days * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    var cookie_str = cName + "=" + cVal + ";" + expires + ";path=/";
    debugmsg(5, 'cookie_str: ' + cookie_str);
    document.cookie = cookie_str;
}

function getCookie(cName) {
    debugmsg(5, 'Checking cookie for ' + cName);
    let name = cName + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            debugmsg(5, 'c.indexOf(' + name + '): ' + c.indexOf(name));
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/* function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
} */