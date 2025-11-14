const version = '3.1.22';
const project_home = 'https://github.com/divonpleasant/SNAP'

// Startup routine
var curr_date = new Date();
var utc_year = curr_date.getUTCFullYear();
var sandbox = '';

// Settings and Defaults
function generateSettings() {
    this.Settings = {
        "debug": {
            "mode": {
                "name": "Debug Mode",
                "default_value": false,
                "value": false,
                "type": "boolean",
                "cookie_key": "debugMode",
                "description": "Toggles whether debug mode is on or off (true = on; false = off). Impacts how much logging is done to the brower's console."
            },
            "console_clear": {
                "name": "Clear Console on Reset",
                "default_value": true,
                "value": true,
                "type": "boolean",
                "description": "Toggles whether the browser console is cleared when various operations (notably a Reset) are performed."
            }
        },
        "alerts": {
            "copy": {
                "name": "Alert on Copy",
                "default_value": true,
                "value": true,
                "type": "boolean",
                "cookie_key": "copyAlert",
                "description": "Toggles an alert whenever data is copied to the clipboard."
            },
            "xc": {
                "name": "Alert for Cross-Charge (XC)",
                "default_value": true,
                "value": true,
                "type": "boolean",
                "cookie_key": "xcAlert",
                "description": "Toggles whether an alert is sent when the Cross-Charge (XC) billing type option is selected."
            }
        },
        "ui": {
            "dark_mode": {
                "name": "Dark Mode",
                "default_value": false,
                "value": false,
                "type": "boolean",
                "cookie_key": "darkMode",
                "description": "Toggles a UI stylesheet using light text on darker backgrounds."
            },
            "copy_description": {
                "name": "Copy CRM Description on Export",
                "default_value": false,
                "value": false,
                "type": "boolean",
                "cookie_key": "copyCrmDescrSttng",
                "description": "Toggles whether or not to copy a derived sample CRM description string (assembled from the serial number, billing type, and first sentence of the problem description) when an export operation is executed."
            },
            "solutions_score_threshold": {
                "name": "Solutions Score Threshold",
                "default_value": 0,
                "value": 0,
                "type": "integer",
                "cookie_key": "solScoreThresh",
                "description": "Numerical value to set the minimum score value displayed in the possible solutions list."
            }
        },
        "process": {
            "fse_sla": {
                "name": "Field Service Break/Fix SLA",
                "default_value": 4,
                "value": 4,
                "type": "numeric",
                "cookie_key": "fseSlaBreakFix",
                "description": "Sets the duration of the SLA for how long a customer should expect to wait for a scheduling call from a Field Service Engineer for a break/fix dispatch."
            },
            "fse_pm_sla": {
                "name": "Field Service PM SLA",
                "default_value": 48,
                "value": 48,
                "type": "numeric",
                "cookie_key": "fseSlaPM",
                "description": "Sets the duration of the SLA for how long a customer should expect to wait for a scheduling call from a Field Service Engineer for a preventative maintenance dispatch."
            }
        },
        "system": {
            "tag": {
                "name": "Variant Tag",
                "default_value": "",
                "value": "",
                "type": "string",
                "description": "Descriptive text for a specific variant of the SNAP application, e.g. 'sandbox' or 'release-candidate'."
            },
            "stylesheet": {
                "name": "Current Stylesheet",
                "default_value": "main",
                "value": "main",
                "type": "string",
                "description": "Text mapping to a specific stylesheet."
            },
            "pce_phase": {
                "name": "PCE Phase",
                "default_value": 2,
                "value": 1,
                "type": "numeric",
                "description": "Phase of the PCE (Potential/Preventing Customer Escalation) process rollout. Phase 1 applies PCE data only for Warrantied or Contracted devices; Phase 2 applies PCE data for all devices."
            }
        },
        "user": {
            "username": {
                "name": "User Name",
                "default_value": "anonymous",
                "value": "anonymous",
                "type": "string",
                "cookie_key": "usrName",
                "description": "Arbitrary username string"
            },
            "fullname": {
                "name": "Full Name",
                "default_value": "[Name] [LastName]",
                "value": "[Name] [LastName]",
                "type": "string",
                "cookie_key": "fullName",
                "description": "First and last name, should match user account in CZM."
            },
            "casual_name": {
                "name": "Informal Name",
                "default_value": "",
                "value": "",
                "type": "string",
                "cookie_key": "casName",
                "description": "This is a derived value from 'fullname' or manually set, so there is no default value. Generally is set to first name of the 'fullname' value."
            },
            "private_inbox": {
                "name": "Email Address",
                "default_value": "declined@zeiss.com",
                "value": "declined@zeiss.com",
                "type": "string-email",
                "cookie_key": "persEmail",
                "description": "Individual TSE's email address, not for use in templates that are customer-facing. Must be a valid email address."
            },
            "contact_inbox": {
                "name": "Team Email",
                "default_value": "dl.med-usmedtechnicalsupport.us@zeiss.com",
                "value": "dl.med-usmedtechnicalsupport.us@zeiss.com",
                "type": "string-email",
                "cookie_key": "teamEmail",
                "description": "Customer-facing email address (usually a monitored inbox). Must be a valid email address."
            },
            "email_sig": {
                "name": "Email Signature",
                "default_value": "",
                "value": "",
                "type": "string",
                "cookie_key": "emailSig",
                "description": "Either a user-inputted string or a derived value from various other user information."
            },
            "sign_email": {
                "name": "Sign Outgoing Email",
                "default_value": false,
                "value": false,
                "type": "boolean",
                "cookie_key": "signEmail",
                "description": "Toggle to determine whether to include signature (email_sig) in email templates."
            },
            "use_custom_scripts": {
                "name": "Use Custom Scripts",
                "default_value": false,
                "value": false,
                "type": "boolean",
                "cookie_key": "useCustomScr",
                "description": "Toggle to determine whether to use user-defined scripts in script prompts."
            }
        }
    }
}

const so = new generateSettings();

var final_style = '';
var user_logged_in = false;

// sb (sandbox) constant should only be defined by the sandbox index file
function checkTag() {
    if (typeof sb !== 'undefined') {
        sandbox = sb;
        so.Settings.system.tag.value = ' - Sandbox';
        so.Settings.system.stylesheet.value = 'sandbox';
        tag = ' - Sandbox';
        style_sheet = 'sandbox';
    } else {
        tag = '';
        sandbox = false;
    }
}

// Check sandbox tag
checkTag();

function procSettingValues() {
    console.debug('Executing procSettingValues...');
    console.debug(so.Settings);
    for (let sgroup in so.Settings) {
        if (sgroup !== 'system') {
            for (let skey in so.Settings[sgroup]) {
                if (typeof so.Settings[sgroup][skey].cookie_key !== 'undefined') {
                    if (so.Settings[sgroup][skey].type === 'boolean') {
                        so.Settings[sgroup][skey].value = (document.cookie) ? boolCookieValue(getCookie(so.Settings[sgroup][skey].cookie_key)) : so.Settings[sgroup][skey].default_value;
                    } else {
                        if (document.cookie) {
                            so.Settings[sgroup][skey].value = (getCookie(so.Settings[sgroup][skey].cookie_key) !== '') ? getCookie(so.Settings[sgroup][skey].cookie_key) : so.Settings[sgroup][skey].default_value;
                        } else {
                            so.Settings[sgroup][skey].value = so.Settings[sgroup][skey].default_value;
                        }
                    }
                }
                //console.log('so.Settings.' + sgroup + '.' + skey + '.value: ' + so.Settings[sgroup][skey].value);
            }
        }
    }

    if (so.Settings.user.username !== 'anonymous') {
        user_logged_in = true;
        var name_array = so.Settings.user.fullname.value.split(' ');
        so.Settings.user.casual_name.value = (so.Settings.user.casual_name.value === '') ? name_array[0] : so.Settings.user.casual_name.value;
        var signature = "-----\n" +
                    so.Settings.user.fullname.value + "\n" +
                    "Zeiss Technical Support Engineer\n" +
                    "Phone: 800-341-6968\n" +
                    "Email: " + so.Settings.user.contact_inbox.value + "\n\n"
        if (so.Settings.user.sign_email.value && so.Settings.user.email_sig.value === '') {
            so.Settings.user.email_sig.value = signature;
        }
    }
}

var passed_values = {};
function startUp(style_refresh = false, page_reload = false) {
    procSettingValues();
    if (style_refresh) {
        so.Settings.system.stylesheet.value = (sandbox) ? 'sandbox' : 'main';
    }
    // Message formatting
    underline = "=".repeat(version.length + so.Settings.system.tag.value.length + 5);

    var settings_list = ''
    for (grp in so.Settings) {
        settings_list += grp.charAt(0).toUpperCase();
        settings_list += grp.substr(1,);
        settings_list += "\n";
        settings_list += "-".repeat(grp.length);
        settings_list += "\n";
        for (i in so.Settings[grp]) {
            settings_list += so.Settings[grp][i].name + ': ' + so.Settings[grp][i].value + "\n";
        }
        settings_list += "\n";
    }
    // Startup Message
    startup_message = `SNAP ${version}${tag}
${underline}
Script and Note Automation Process
Copyright (c) Zeiss Meditec ${utc_year}
Originally developed by Divon Pleasant (divon.pleasant@zeiss.com)

Please see ${project_home} for complete documentation, bug reporting, and code contributions.

Settings
========
${settings_list}
`;

    // Process dates and styles
    export_date = curr_date.toLocaleString("en-US", {weekday: "long", day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "numeric", second: "numeric"});
    simple_date = curr_date.toDateString();
    if (so.Settings.ui.dark_mode.value) {
        so.Settings.system.stylesheet.value += '_darkmode';
    }
    if (sandbox) {
        document.getElementById('page-title').innerHTML = 'SNAP [Sandbox]';
        document.getElementById('header-tag').innerHTML = '[Sandbox]';
        document.getElementById('current-version').innerHTML = version + '-sandbox';
    } else {
        document.getElementById('current-version').innerHTML = version;
    }
    final_style = 'assets/css/' + so.Settings.system.stylesheet.value + '.css';

    debug_message = `Debugging
---------
date = ${curr_date}
export_date = ${export_date}
simple_date = ${simple_date}
stylesheet: ${final_style}
`;
    console.log(startup_message);
    (so.Settings.debug.mode.value) ? console.log(debug_message) : console.debug(debug_message);
    
    (page_reload) ? window.location.reload() : '';
    
    passed_values = new URLSearchParams(window.location.search);
    logHistoryEvent('New SNAP form initialized');
}
startUp();

// Page outputs
document.getElementById('copyright-year').innerHTML = utc_year;
document.getElementById("project-link").href = project_home;
document.getElementById('pagestyle').setAttribute('href', final_style);
(user_logged_in) ? document.getElementById('user-account').innerHTML = so.Settings.user.username.value : '';

// LIB FUNCTIONS
function clipBoarder(text_to_clip, clip_label) {
    if (text_to_clip === '') {
        var empty_txt_clip = 'No text to copy for ' + clip_label;
        console.warn('clipBoarder: ' + empty_txt_clip);
        updateSystemBox(empty_txt_clip);
        return false;
    }
    navigator.clipboard.writeText(text_to_clip).then(function() {
        (so.Settings.alerts.copy.value) ? updateSystemBox(clip_label + ' copied to clipboard') : '';
    }).catch(function(err) {
        updateSystemBox('Failed to copy ' + clip_label + ' to clipboard: ' + err);
        console.error(err);
        return false;
    });
    console.log('Copied ' + clip_label + " to clipboard: '" + text_to_clip + "'");
    return true;
}

// Use Instrument/Product and Model/Version fields to create a unified instrument-model string
function getInstrumentModel() {
    if (document.getElementById('model').value === '' && document.getElementById('instrument').value === '') {
        // neither instrument nor model is selected; return an empty string
        return '';
    } else if (document.getElementById('model').value === '') {
        // instrument is selected but model is not
        return document.getElementById('instrument').value;
    } else {
        // instrument and model are both selected
        return document.getElementById('model').value;
    }
}

// Process CCT strings
function proc_template_cct(tix) {
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
function proc_template_serial(sn) {
    if (sn !== "") {
        serial_str = ' with serial number ' + sn;
        subj_serial = ' S/N: ' + sn;
        paren_serial = '(#' + sn + ') ';
    } else {
        serial_str = '';
        subj_serial = '';
        paren_serial = '';
    }
    var instrument_str = (getInstrumentModel() === '') ? 'Zeiss instrument' + serial_str : getInstrumentModel() + serial_str;
    var serials_data = [subj_serial, instrument_str, paren_serial];
    console.debug({serials_data});
    return serials_data;
}
var serial_strings = proc_template_serial('');

// Handle Reset button
/*
Note: there are additional resetButton actions taken in:
    stopwatch.js
*/
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('snap-form').reset();
    // Update all field bg colors
    document.querySelectorAll('input[type="text"], textarea, select').forEach(function (input) {
        input.style.backgroundColor = '';
    });
    // Reset everything
    curr_date = new Date();
    hideAllDynamicFields();
    hideSystemBox();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Clear console if using 'Developer' debug level
    (so.Settings.debug.console_clear.value) ? console.clear() : '';
    // Re-run startup to establish everything again
    startUp(true);
    document.getElementById('instrument').selectedIndex = 0;
})

function calculateZipCode(use_unknown = false) {
    if (document.getElementById('instrument-address').value !== '') {
        var zc = document.getElementById('instrument-address').value.split(' ').at(-1).split('-')[0];
        return zc;
    } else {
        console.warn('No address populated in Instrument/Shipping Address field, cannot calculate Zip Code/Time Zone; default is ZICC Zip Code/PT');
        return (use_unknown) ? '94568' : false;
    }
}

function attemptRegionDiscovery(use_unknown = false) {
    var regions_list = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC', 'GU', 'MH', 'MP', 'PR', 'VI'];
    var valid_state = false;
    if (document.getElementById('instrument-address').value !== '') {
        var region = document.getElementById('instrument-address').value.match(/ ([ACDFGHIKLMNOPRSTUVW][ACDEHIJKLMNOPRSTUVXYZ]) /);
        valid_state = (regions_list.includes(region[1])) ? true : false;
    } else {
        console.warn('No address populated in Instrument/Shipping Address field, cannot attempt region discovery; default is ZICC region');
        return (use_unknown) ? 'CA' : false;
    }
    if (valid_state) {
        return region[1];
    } else {
        console.warn('Could not determine state/region from Instrument/Shipping Address field (discovered region was ' + region[1] + '); default is ZICC region');
        return (use_unknown) ? 'CA' : false;
    }
}

function getContractRepInfo(group) {
    const p = new generatePersonnelData();
    console.log(`personnelData loaded...
  Schema: v${p.people.schema_version}
    Data: v${p.people.data_version}`);
    var e_id = 'customer-regional-' + group + '-rep';
    var rep_data = p.people.contract_rep[document.getElementById(e_id).value];
    console.log({rep_data});
    var rep_output = '';
    rep_output = 'Contract Representative (' + group.toUpperCase() + ")\nName: " + rep_data['name'] + "\nPhone: " + rep_data['phone'] + "\nEmail: " + rep_data['email'];
    return rep_output;
}

// Handle Clipboard Template select box
document.getElementById('clipboard-templates').addEventListener('change', () => {
    var clipboard_select = document.getElementById('clipboard-templates').value;
    var context = [];
    var use_templ = false;
    var cliboard_title = 'Unspecified';
    switch (clipboard_select) {
        case 'address-change':
            clip_string = address_change_data;
            clipboard_title = 'Address Change Data';
            break;
        case 'cct-description':
            clip_string = procCctDescription();
            clipboard_title = 'CCT Description';
            break;
        case 'contract-rep-mcs':
            clip_string = getContractRepInfo('mcs');
            clipboard_title = 'Contract Rep (MCS)';
            break;
        case 'contract-rep-oph':
            clip_string = getContractRepInfo('oph');
            clipboard_title = 'Contract Rep (OPH)';
            break;
        case 'ci-rejection':
            console.log('CI Rejection string requested...');
            (document.getElementById('sustaining-ticket').checked) ? document.getElementById('sustaining-message').innerHTML = "Young revenue product selected<br/ >Ticket may not be critical but should be sustaining" : console.log('Sustaining ticket value: ' + document.getElementById('sustaining-ticket').checked);
            context[0] = document.getElementById('ci-reject-string').value;
            use_templ = true;
            clipboard_title = 'CI Rejection';
            break;
        case 'deferred-billing':
            use_templ = true;
            clipboard_title = 'Deferred Billing';
            break;
        case 'instrument-code':
            clip_string = document.getElementById('instrument-code').value;
            clipboard_title = 'Instrument Code';
            break;
        case 'serial-number':
            clip_string = document.getElementById('serial').value;
            clipboard_title = 'Serial Number';
            break;
        case 'zip-code':
            if (document.getElementById('instrument-address').value !== '') {
                var zip = calculateZipCode();
                clip_string = (zip) ? zip : '00000';
                clipboard_title = 'ZIP Code';
            } else {
                clip_string = '';
            }
            break;
        case 'teamviewer-info-all':
            use_templ = true;
            clipboard_title = 'TeamViewer Info (all)';
            break;
        default:
            break;
    }
    if (use_templ) {
        console.log({context});
        const ct = new generateTemplates(context);
        clip_string = ct.templates.clipboard[clipboard_select];
    }
    if (clipBoarder(clip_string, clipboard_title)) {
        document.getElementById('clipboard-templates').selectedIndex = 0;
    } else {
        console.error('Error when processing clipboard select (copy to clipboard failed)');
    }
});

// Handle copy TV info links
function copyTVInfo(field_num) {
    console.log("copyTVInfo ... \n" + {field_num});
    const tvc = new generateTemplates([]);
    var tv_index = 'teamviewer-info' + field_num;
    var tv_str = tvc.templates.clipboard[tv_index];
    clipBoarder(tv_str, `TeamViewer Info for TV Field ${field_num}`);
    return false;
}

function iconCopy(copy_data, label) {
    clipBoarder(copy_data, label);
    return false;
}

// Determine POC communication preferences
function outputCommunicationPref() {
    var ph_exist = (document.getElementById('phone').value !== '') ? true : false;
    var em_exist = (document.getElementById('email').value !== '') ? true : false;
    var phone_pref = document.getElementById('prefer-phone').checked;
    var email_pref = document.getElementById('prefer-email').checked;
    console.debug({phone_pref});
    console.debug({email_pref});
    if (ph_exist && em_exist) {
        var cust_pref_str = 'Customer has no communication preference';
        if (phone_pref && !email_pref) {
            cust_pref_str = 'Customer prefers phone communication';
        } else if (!phone_pref && email_pref) {
            cust_pref_str = 'Customer prefers email communication';
        }
        console.debug({cust_pref_str});
        return cust_pref_str;
    } else {
        return '';
    }
}

// Calculate instruments' available disk space
function processDiskSpace(test_field) {
    console.debug("Executing processDiskSpace ...\n  test_field: " + test_field);
    var test_value = document.getElementById(test_field).value;
    var drive_array = test_field.split('-');
    console.debug({drive_array});
    // drive_array[0] is for instrument name; drive_array[1] is drive letter
    var instr_code = drive_array[0];
    var base_drive = drive_array[1];
    console.debug({instr_code});
    console.debug({base_drive});
    var drive = base_drive.toUpperCase();
    var disk_string;
    if (test_value != '') {
        console.debug('test_value (' + test_value + ') is not empty; processing string');
        console.debug('Drive: ' + drive + ":\ ");
        var free_value = document.getElementById(instr_code + '-' + base_drive + '-drive-free').value;
        console.debug({free_value});
        var free_units = document.getElementById(instr_code + '-' + base_drive + '-drive-free-size').value;
        console.debug({free_units});
        var total_value = document.getElementById(instr_code + '-' + base_drive + '-drive-total').value;
        console.debug({total_value});
        var total_units = document.getElementById(instr_code + '-' + base_drive + '-drive-total-size').value;
        console.debug({total_units});
        disk_string = free_value + ' ' + free_units.toUpperCase() + ' of ' + total_value + ' ' + total_units.toUpperCase();
        console.debug({disk_string});
        return disk_string;
    } else {
       console.debug('test_field: ' + test_field + ' is empty; exiting');
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
    console.debug('bill_type.options[bill_type.selectedIndex].value: ' + bill_type.options[bill_type.selectedIndex].value);
    switch (bill_type.options[bill_type.selectedIndex].value) {
        case '':
            console.debug('Billing type is not set; no billing info output');
            break;
        case 'W':
            console.debug("Billing type is 'Warranty'; no billing info output");
            break;
        case 'CNTRCT':
            if (document.getElementById('billing-contact').checked) {
                console.debug("Billing type is 'Contract' and billing contact is specified; including billing info in Internal Notes");
                output = createBillingString(billing_poc_name, billing_phone, billing_email);
            } else {
                console.debug("Billing type is 'Contract' but no billing contact is specified; no billing info output");
            }
            break;
        default:
            console.debug("Billing type is either 'Billable' or 'Cross-Charge'; including billing info in Internal Notes");
            output = createBillingString(billing_poc_name, billing_phone, billing_email);
            break;
    }
    return output;
}

// String Manipulation Functions
function htmlEscape(str) {
    let escapeStr = str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
    return escapeStr;
}

function htmlUnEscape(str) {
    let unescapeStr = str.replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
    return unescapeStr;
}

// Cookie Functions
function setCookie(c_name, c_val, exp_days) {
    const d = new Date();
    d.setTime(d.getTime() + (exp_days * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    var cookie_str = c_name + "=" + c_val + ";" + expires + ";path=/";
    console.debug({cookie_str});
    document.cookie = cookie_str;
}

function getCookie(c_name) {
    console.debug("Executing getCookie ...\n  c_name: " + c_name);
    let name = c_name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.debug('c.indexOf(' + name + '): ' + c.indexOf(name));
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function boolCookieValue(c_name) {
    return (c_name === 'true') ? true : false;
}

function checkCookie() {
    let user = getCookie('username');
    if (user != '') {
        alert('Welcome again ' + user);
    } else {
        user = prompt('Please enter your name:', '');
        if (user != '' && user != null) {
            setCookie('username', user, 365);
        }
    }
}

function newSnap() {
    window.location.assign(window.location.href);
}

function logHistoryEvent(msg) {
    var hist = document.getElementById('case-history').value;
    console.log({hist});
    const date_opts = { timeZone: "America/Los_Angeles", timeZoneName: "short", hour12: false, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 3 };
    var logdate = new Date().toLocaleDateString("en", date_opts);
    console.log({logdate});
    var new_field_data = '[' + logdate + '] ' + msg + "\n" + hist;
    console.log({new_field_data});
    document.getElementById('case-history').value = new_field_data;
}
