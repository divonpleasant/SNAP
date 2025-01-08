const version = "3.0.52";
const project_home = "https://github.com/divonpleasant/SNAP"

// Startup routine
var curr_date = new Date();
var utc_year = curr_date.getUTCFullYear();
// Setting Defaults
var debug_mode = true;
var debug_level = 4; // Range of 0 (same as debug_mode = false) to 5 (all debug messages)
var copy_alert = false;
var xc_alert = true;
var copy_descr = true;
var con_clear = true;
var dark_mode = false;
var sign_email = false;
var tag = '';
var style_sheet = 'main';
// sb (sandbox) constant should only be defined by the sandbox index file
if (typeof sb !== 'undefined') {
    var sandbox = sb;
    var tag = ' - Sandbox';
    style_sheet = 'sandbox';
} else {
    var sandbox = false;
}
// User Defaults
var username = 'unknown';
var fullname = 'TechSupport Engineer';
var name_array = fullname.split(' ');
var casual_name = name_array[0];
var private_inbox = 'declined@zeiss.com';
var contact_inbox = 'dl.med-usmedtechnicalsupport.us@zeiss.com';
var email_sig = '';
var final_style = '';
var use_custom_scripts = false;

if (email_sig == '' && sign_email) {
    email_sig = "-----\n" +
                fullname + "\n" +
                "Zeiss Technical Support Engineer\n" +
                "Phone: 800-341-6968\n" +
                "Email: " + contact_inbox + "\n\n"
}

function startUp(style_refresh = false) {
    if (style_refresh) {
        style_sheet = (sandbox) ? 'sandbox' : 'main';
    }
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
Copy CRM Description on Export: ${copy_descr}
Clear Console on Reset: ${con_clear}
Dark Mode: ${dark_mode}
Sign Outgoing Email: ${sign_email}

User Settings
-------------
Login Name: ${username}
Full Name: ${fullname}
Name: ${casual_name}
Personal Email: ${private_inbox}
Contact Email: ${contact_inbox}
Custom Scripts: ${use_custom_scripts}
Email Signature: 
${email_sig}
    `;

    // Process dates and styles
    export_date = curr_date.toLocaleString("en-US", {weekday: "long", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric"});
    simple_date = curr_date.toDateString();
    if (dark_mode) {
        style_sheet = style_sheet + '_darkmode';
    }
    if (sandbox) {
        document.getElementById('page-title').innerHTML = 'SNAP [Sandbox]';
        document.getElementById('header-tag').innerHTML = '[Sandbox]';
        document.getElementById("current-version").innerHTML = version + '-sandbox';
    }
    final_style = 'assets/css/' + style_sheet + '.css';

    debug_message = `Debugging
---------
date = ${curr_date}
export_date = ${export_date}
simple_date = ${simple_date}
stylesheet: ${final_style}
`;
    console.log(startup_message);
    (debug_mode) ? console.log(debug_message) : '';
}
startUp();

// Page outputs
document.getElementById("current-version").innerHTML = version;
document.getElementById("copyright-year").innerHTML = utc_year;
document.getElementById("project-link").href = project_home;
document.getElementById('pagestyle').setAttribute('href', final_style);

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

// Process CCT strings
function proc_template_cct (tix) {
    if (tix != "") {
        subj_incl = 'CCT #' + tix;
        subj_prefix = '[' + subj_incl + '] ';
        subj_suffix = ' ' + subj_incl;
    } else {
        subj_incl = '';
        subj_prefix = '';
        subj_suffix = '';
    }
    var cct_data = [subj_incl, subj_prefix, subj_suffix];
    return cct_data;
}

// Process instrument/serial number strings
function proc_template_serial (sn) {
    if (sn != "") {
        serial_str = ' with serial number ' + sn;
        subj_serial = ' S/N: ' + sn;
        paren_serial = '(#' + sn + ') ';
    } else {
        serial_str = '';
        subj_serial = '';
        paren_serial = '';
    }
    var instrument_str;
    switch (document.getElementById('instrument-model').value) {
        case 'Cirrus OCT': 
            instrument_str = 'Cirrus OCT' + serial_str;
            break;
        case 'Cirrus Photo': 
            instrument_str = 'Cirrus Photo' + serial_str;
            break;
        case 'Clarus': 
            instrument_str = 'Clarus' + serial_str;
            break;
        case 'HFA3': 
            instrument_str = 'HFA' + serial_str;
            break;
        case 'IOLMaster': 
            instrument_str = 'IOLMaster' + serial_str;
            break;
        case 'Visucam 224/524': 
            instrument_str = 'Visucam' + serial_str;
            break;
        case 'Visucam Pro/NM/NMFA': 
            instrument_str = 'Visucam' + serial_str;
            break;
        case 'Atlas 500': 
            instrument_str = 'Atlas' + serial_str;
            break;
        case 'Atlas 9000': 
            instrument_str = 'Atlas' + serial_str;
            break;
        case 'Stratus 3000/Visante 1000 (old)': 
            instrument_str = 'device' + serial_str;
            break;
        default:
            instrument_str = 'Zeiss instrument' + serial_str;
            break;
    }
    var serials_data = [subj_serial, instrument_str, paren_serial];
    debugmsg(5, 'serials_data[0]: ' + serials_data[0]);
    debugmsg(5, 'serials_data[1]: ' + serials_data[1]);
    debugmsg(5, 'serials_data[2]: ' + serials_data[2]);
    return serials_data;
}
var serial_strings = proc_template_serial('');

// Handle Reset button
const resetFunc = document.getElementById('resetButton');
resetFunc.addEventListener('click', () => {
    curr_date = new Date();
    hideAllDynamicFields();
    // clear console if using 'Developer' debug level
    (con_clear) ? console.clear() : '';
    startUp(true);
})

// Handle CI Reject button
document.getElementById('copy-ci-rejection').addEventListener('click', () => {
    if (document.getElementById('ci-reject-string').value == '') {
        console.warn('[WARNING] ci-reject-string cannot be empty when copying CI Rejection');
        alert('The CI Rejection String field cannot be empty');
    } else {
        debugmsg(4, 'ci-reject-string is not empty: ' + document.getElementById('ci-reject-string').value);
        var reject_str = document.getElementById('ci-reject-string').value;
        var copy_str = "The text '" + reject_str + "' flagged for this ticket is not associated with any adverse event or product malfunction that could lead to any sort of injury or death.";
        navigator.clipboard.writeText(copy_str).then(function() {
            (copy_alert) ? alert('CI rejection string copied to clipboard!') : '';
        }).catch(function(err) {
            alert('Failed to copy data to clipboard: ', err);
        });
        debugmsg(2, "Copied text to clipboard: '" + copy_str + "'");
    }
});

// Handle Deferred Billing button
document.getElementById('copy-deferred-billing').addEventListener('click', () => {
    var deferred_billing_str = 'Customer is not prepared with payment information. Provided the customer with the ticket number and advised to contact our SVCOPS team via email when they are ready to proceed with service.';
    navigator.clipboard.writeText(deferred_billing_str).then(function() {
        (copy_alert) ? alert('Deferred billing verbiage copies to clipboard!') : '';
    }).catch(function(err) {
        alert('Failed to copy data to clipboard: ', err);
    });
    debugmsg(2, "'Copied text to clipboard: '" + deferred_billing_str + "'");
});


// Determine POC communication preferences
function outputCommunicationPref() {
    var phone_num = document.getElementById('phone');
    debugmsg(5, 'phone_num.value: ' + phone_num.value);
    var ph_exist = (phone_num.value != '') ? true : false;
    var email_adr = document.getElementById('email');
    debugmsg(5, 'email_adr.value: ' + email_adr.value);
    var em_exist = (email_adr.value != '') ? true : false;
    debugmsg(5, 'ph_exist: ' + ph_exist);
    debugmsg(5, 'em_exist: ' + em_exist);
    var phone_pref = document.getElementById('prefer-phone').checked;
    var email_pref = document.getElementById('prefer-email').checked;
    debugmsg(5, 'phone_pref: ' + phone_pref);
    debugmsg(5, 'email_pref: ' + email_pref);
    if (ph_exist && em_exist) {
        var cust_pref_str = 'Customer has no communication preference';
        if (phone_pref && !email_pref) {
            cust_pref_str = 'Customer prefers phone communication';
        } else if (!phone_pref && email_pref) {
            cust_pref_str = 'Customer prefers email communication';
        }
        debugmsg(5, 'cust_pref_str: ' + cust_pref_str);
        return cust_pref_str;
    } else {
        return '';
    }
}

// Calculate instruments' available disk space
function process_disk_space(test_field) {
    debugmsg(5, 'test_field: ' + test_field);
    var test_value = document.getElementById(test_field).value;
    var drive_array = test_field.split('-');
    debugmsg(5, 'drive_array: ' + drive_array);
    // drive_array[0] is for instrument name; drive_array[1] is drive letter
    var instr_code = drive_array[0];
    var base_drive = drive_array[1];
    debugmsg(5, 'instr_code: ' + instr_code);
    debugmsg(5, 'base_drive: ' + base_drive);
    var drive = base_drive.toUpperCase();
    var disk_string;
    if (test_value != '') {
        debugmsg(5, 'test_value (' + test_value + ') is not empty; processing string');
        debugmsg(5, 'Drive: ' + drive + ":\ ");
        var free_value = document.getElementById(instr_code + '-' + base_drive + '-drive-free').value;
        debugmsg(5, 'free_value: ' + free_value);
        var free_units = document.getElementById(instr_code + '-' + base_drive + '-drive-free-size').value;
        debugmsg(5, 'free_units: ' + free_units);
        var total_value = document.getElementById(instr_code + '-' + base_drive + '-drive-total').value;
        debugmsg(5, 'total_value: ' + total_value);
        var total_units = document.getElementById(instr_code + '-' + base_drive + '-drive-total-size').value;
        debugmsg(5, 'total_units: ' + total_units);
        disk_string = free_value + ' ' + free_units.toUpperCase() + ' of ' + total_value + ' ' + total_units.toUpperCase();
        debugmsg(5, disk_string);
        return disk_string;
    } else {
        debugmsg(5, 'test_field: ' + test_field + ' is empty; exiting');
        return "";
    }
}

// Process Billing Contact
function createBillingString(bName, bPhone, bEmail) {
    bill_str = "-- Billing Contact --\n" +
               'Name: ' + bName + "\n" +
               'Phone: ' + bPhone + "\n" +
               'Email: ' + bEmail + "\n";
    return bill_str;
}
function generateBillingContact() {
    var billing_poc_name = document.getElementById('local-contact-person').value;
    var billing_phone = document.getElementById('phone').value;
    var billing_email = document.getElementById('email').value;
    if (document.getElementById('billing-contact').checked) {
        billing_poc_name = document.getElementById('billing-contact-person').value;
        billing_phone = document.getElementById('billing-phone').value;
        billing_email = document.getElementById('billing-email').value;
    }
    var bill_type = document.getElementById('billing-type');
    var output = '';
    debugmsg(5, 'bill_type.options[bill_type.selectedIndex].value: ' + bill_type.options[bill_type.selectedIndex].value);
    switch (bill_type.options[bill_type.selectedIndex].value) {
        case '':
            debugmsg(4, 'Billing type is not set; no billing info output');
            break;
        case 'W':
            debugmsg(4, "Billing type is 'Warranty'; no billing info output");
            break;
        case 'CNTRCT':
            if (document.getElementById('billing-contact').checked) {
                debugmsg(4, "Billing type is 'Contract' and billing contact is specified; including billing info in Internal Notes");
                output = createBillingString(billing_poc_name, billing_phone, billing_email);
            } else {
                debugmsg(4, "Billing type is 'Contract' but no billing contact is specified; no billing info output");
            }
            break;
        default:
            debugmsg(4, "Billing type is either 'Billable' or 'Cross-Charge'; including billing info in Internal Notes");
            output = createBillingString(billing_poc_name, billing_phone, billing_email);
            break;
    }
    return output;
}

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