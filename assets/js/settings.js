// Settings support
function settingsOverlay(event) {
    event.preventDefault();
    console.debug('Executing settingsOverlay ...');
    // Get existing settings and set form elements appropriately
    console.debug('so.Settings.alerts.copy: ' + so.Settings.alerts.copy.value);
    console.debug('so.Settings.debug.mode: ' + so.Settings.debug.mode.value);
    document.getElementById('alert-on-copy').checked = so.Settings.alerts.copy.value;
    document.getElementById('alert-for-xc').checked = so.Settings.alerts.xc.value;
    document.getElementById('copy-crm-description').checked = so.Settings.ui.copy_description.value;
    document.getElementById('debug-toggle').checked = so.Settings.debug.mode.value;
    document.getElementById('dark-mode').checked = so.Settings.ui.dark_mode.value;
    document.getElementById('sign-email').checked = so.Settings.user.sign_email.value;
    document.getElementById('fse-sla').value = so.Settings.process.fse_sla.value;
    document.getElementById('pm-sla').value = so.Settings.process.fse_pm_sla.value;
    document.getElementById('solution-score-threshold').value = so.Settings.ui.solutions_score_threshold.value;
    document.getElementById('settings-overlay').style.display = 'flex';
}

function processSettings(event) {
    event.preventDefault();
    
    console.debug("document.getElementById('alert-on-copy').checked (at time of processSettings execution): " + document.getElementById('alert-on-copy').checked);
    var user_set_alrtCpySttng = document.getElementById('alert-on-copy').checked;
    var user_set_alrtXcSttng = document.getElementById('alert-for-xc').checked;
    var user_set_copyCrmDescrSttng = document.getElementById('copy-crm-description').checked;
    var user_set_debugSttng = document.getElementById('debug-toggle').checked;
    var user_set_darkModeSttng = document.getElementById('dark-mode').checked;
    var user_set_signEmailSttng = document.getElementById('sign-email').checked;
    var user_set_fseSlaBreakFix = document.getElementById('fse-sla').value;
    var user_set_fseSlaPM = document.getElementById('pm-sla').value;
    var user_set_solScoreThresh = document.getElementById('solution-score-threshold').value;
    console.debug({user_set_alrtCpySttng});
    console.debug({user_set_alrtXcSttng});
    console.debug({user_set_copyCrmDescrSttng});
    console.debug({user_set_debugSttng});
    
    setCookie('copyAlert', user_set_alrtCpySttng, 365);
    setCookie('xcAlert', user_set_alrtXcSttng, 365);
    setCookie('copyCrmDescrSttng', user_set_copyCrmDescrSttng, 365);
    setCookie('darkMode', user_set_darkModeSttng, 365);
    setCookie('signEmail', user_set_signEmailSttng, 365);
    setCookie('debugMode', user_set_debugSttng, 365);
    setCookie('fseSlaBreakFix', user_set_fseSlaBreakFix, 365);
    setCookie('fseSlaPM', user_set_fseSlaPM, 365);
    setCookie('solScoreThresh', user_set_solScoreThresh, 365);
    
    console.debug('Cookie check: ' + document.cookie);
    
    startUp(true, true);
    
    // Hide the overlay after proceeding
    document.getElementById('settings-overlay').style.display = 'none';
}

document.getElementById('settings').addEventListener('click', settingsOverlay);
document.getElementById('settings-save').addEventListener('click', processSettings);
document.getElementById('settings-close-overlay').addEventListener('click', function () {
    console.debug('closing settings overlay...');
    document.getElementById('settings-overlay').style.display = 'none';

});
