// Settings support
function settingsOverlay(event) {
    event.preventDefault();
    debugmsg(5, 'displaying settings overlay...');
    // Get existing settings
    var settings_cookie = document.cookie;
    debugmsg(5, 'debug_mode: ' + debug_mode);
    debugmsg(4, 'settings_cookie: ' + settings_cookie);
    var debugSttng = (getCookie('debugMode') != '') ? getCookie('debugMode') : debug_mode;
    var debugLvlSttng = (getCookie('debugLevel') != '') ? getCookie('debugLevel') : debug_level;
    var alrtCpySttng = (getCookie('copyAlert') != '') ? getCookie('copyAlert') : copy_alert;
    var alrtXcSttng = (getCookie('xcAlert') != '') ? getCookie('xcAlert') : xc_alert;
    var darkMode = (getCookie('darkMode') != '') ? getCookie('darkMode') : dark_mode;
    var signEmail = (getCookie('signEmail') != '') ? getCookie('signEmail') : sign_email;
    debugmsg(5, 'debugSttng: ' + debugSttng);
    debugmsg(5, 'debugLvlSttng: ' + debugLvlSttng);
    debugmsg(5, 'alrtCpySttng: ' + alrtCpySttng);
    debugmsg(5, 'alrtXcSttng: ' + alrtXcSttng);
    debugmsg(5, 'darkMode: ' + darkMode);
    debugmsg(5, 'signEmail: ' + signEmail);
    
    (alrtCpySttng) ? document.getElementById('alert-on-copy').checked = true : '';
    (alrtXcSttng) ? document.getElementById('alert-for-xc').checked = true : '';
    (debugSttng) ? document.getElementById('debug-toggle').checked = true : '';
    (darkMode) ? document.getElementById('dark-mode').checked = true : '';
    (signEmail) ? document.getElementById('sign-email').checked = true : '';
    document.getElementById('debug-level').getElementsByTagName('option')[debugLvlSttng].selected = 'selected';

    document.getElementById('settings-overlay').style.display = 'flex';
}

function processSettings(event) {
    event.preventDefault();
    
    var user_set_alrtCpySttng = (document.getElementById('alert-on-copy').value == 'on') ? 'true' : 'false';
    var user_set_alrtXcSttng = (document.getElementById('alert-for-xc').value == 'on') ? 'true' : 'false';
    var user_set_debugSttng = (document.getElementById('debug-toggle').value == 'on') ? 'true' : 'false';
    var user_set_darkModeSttng = (document.getElementById('dark-mode').value == 'on') ? 'true' : 'false';
    var user_set_signEmailSttng = (document.getElementById('sign-email').value == 'on') ? 'true' : 'false';
    var user_set_debugLvlSttng = document.getElementById('debug-level').value;
    debugmsg(5, 'user_set_alrtCpySttng: ' + user_set_alrtCpySttng);
    debugmsg(5, 'user_set_alrtXcSttng: ' + user_set_alrtXcSttng);
    debugmsg(5, 'user_set_debugSttng: ' + user_set_debugSttng);
    debugmsg(5, 'user_set_debugLvlSttng: ' + user_set_debugLvlSttng);
    
    setCookie('copyAlert', user_set_alrtCpySttng, 365);
    setCookie('xcAlert', user_set_alrtXcSttng, 365);
    setCookie('darkMode', user_set_darkModeSttng, 365);
    setCookie('signEmail', user_set_signEmailSttng, 365);
    setCookie('debugMode', user_set_debugSttng, 365);
    setCookie('debugLevel', user_set_debugLvlSttng, 365);
    
    let cooky = document.cookie;
    debugmsg(5, 'Cookie check: ' + cooky);

    // Hide the overlay after proceeding
    document.getElementById('settings-overlay').style.display = 'none';
}

document.getElementById('settings').addEventListener('click', settingsOverlay);
document.getElementById('settings-save').addEventListener('click', processSettings);
document.getElementById('settings-close-overlay').addEventListener('click', function () {
    debugmsg(5, 'closing settings overlay...');
    document.getElementById('settings-overlay').style.display = 'none';

});
