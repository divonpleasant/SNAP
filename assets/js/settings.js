// Settings support
function settingsOverlay(event) {
    event.preventDefault();
    debugmsg(3, 'Executing settingsOverlay...');
    // Get existing settings and set form elements appropriately
    debugmsg(4, 'so.Settings.alerts.copy: ' + so.Settings.alerts.copy.value);
    debugmsg(4, 'so.Settings.debug.mode: ' + so.Settings.debug.mode.value);
    debugmsg(4, 'so.Settings.debug.level: ' + so.Settings.debug.level.value);
    document.getElementById('alert-on-copy').checked = so.Settings.alerts.copy.value;
    document.getElementById('alert-for-xc').checked = so.Settings.alerts.xc.value;
    document.getElementById('copy-crm-description').checked = so.Settings.ui.copy_description.value;
    document.getElementById('debug-toggle').checked = so.Settings.debug.mode.value;
    document.getElementById('dark-mode').checked = so.Settings.ui.dark_mode.value;
    document.getElementById('sign-email').checked = so.Settings.user.sign_email.value;
    document.getElementById('debug-level').getElementsByTagName('option')[so.Settings.debug.level.value].selected = true;
    document.getElementById('fse-sla').value = so.Settings.process.fse_sla.value;
    document.getElementById('pm-sla').value = so.Settings.process.fse_pm_sla.value;

    document.getElementById('settings-overlay').style.display = 'flex';
}

function processSettings(event) {
    event.preventDefault();
    
    debugmsg(4, "document.getElementById('alert-on-copy').checked (at time of processSettings execution): " + document.getElementById('alert-on-copy').checked);
    var user_set_alrtCpySttng = document.getElementById('alert-on-copy').checked;
    var user_set_alrtXcSttng = document.getElementById('alert-for-xc').checked;
    var user_set_copyCrmDescrSttng = document.getElementById('copy-crm-description').checked;
    var user_set_debugSttng = document.getElementById('debug-toggle').checked;
    var user_set_darkModeSttng = document.getElementById('dark-mode').checked;
    var user_set_signEmailSttng = document.getElementById('sign-email').checked;
    var user_set_debugLvlSttng = document.getElementById('debug-level').value;
    var user_set_fseSlaBreakFix = document.getElementById('fse-sla').value;
    var user_set_fseSlaPM = document.getElementById('pm-sla').value;
    debugmsg(5, 'user_set_alrtCpySttng: ' + user_set_alrtCpySttng);
    debugmsg(5, 'user_set_alrtXcSttng: ' + user_set_alrtXcSttng);
    debugmsg(5, 'user_set_copyCrmDescrSttng: ' + user_set_copyCrmDescrSttng);
    debugmsg(5, 'user_set_debugSttng: ' + user_set_debugSttng);
    debugmsg(5, 'user_set_debugLvlSttng: ' + user_set_debugLvlSttng);
    
    setCookie('copyAlert', user_set_alrtCpySttng, 365);
    setCookie('xcAlert', user_set_alrtXcSttng, 365);
    setCookie('copyCrmDescrSttng', user_set_copyCrmDescrSttng, 365);
    setCookie('darkMode', user_set_darkModeSttng, 365);
    setCookie('signEmail', user_set_signEmailSttng, 365);
    setCookie('debugMode', user_set_debugSttng, 365);
    setCookie('debugLevel', user_set_debugLvlSttng, 365);
    setCookie('fseSlaBreakFix', user_set_fseSlaBreakFix, 365);
    setCookie('fseSlaPM', user_set_fseSlaPM, 365);
    
    debugmsg(5, 'Cookie check: ' + document.cookie);
    
    startUp(true, true);
    
    // Hide the overlay after proceeding
    document.getElementById('settings-overlay').style.display = 'none';
}

document.getElementById('settings').addEventListener('click', settingsOverlay);
document.getElementById('settings-save').addEventListener('click', processSettings);
document.getElementById('settings-close-overlay').addEventListener('click', function () {
    debugmsg(5, 'closing settings overlay...');
    document.getElementById('settings-overlay').style.display = 'none';

});
