// Account support
function accountOverlay(event) {
    event.preventDefault();
    console.debug('Executing accountOverlay ...');
    // Get existing settings and set form elements appropriately
    console.debug(JSON.stringify(so.Settings.user.username.value));
    console.debug(JSON.stringify(so.Settings.user.fullname.value));
    console.debug(JSON.stringify(so.Settings.user.private_inbox.value));
    console.debug(JSON.stringify(so.Settings.user.contact_inbox.value));
    console.debug(JSON.stringify(so.Settings.user.email_sig.value));
    console.debug(JSON.stringify(so.Settings.user.sign_email.value));
    document.getElementById('username').value = so.Settings.user.username.value;
    document.getElementById('fullname').value = so.Settings.user.fullname.value;
    document.getElementById('casual-name').value = so.Settings.user.casual_name.value;
    document.getElementById('private-email').value = so.Settings.user.private_inbox.value;
    document.getElementById('team-email').value = so.Settings.user.contact_inbox.value;
    document.getElementById('email-signature').value = so.Settings.user.email_sig.value;
    document.getElementById('sign-email-toggle').checked = so.Settings.user.sign_email.value;
    document.getElementById('custom-scripts-toggle').checked = so.Settings.user.use_custom_scripts.value;

    document.getElementById('account-overlay').style.display = 'flex';
}

function processAccount(event) {
    event.preventDefault();

    setCookie("usrName", document.getElementById('username').value, 90);
    setCookie("fullName", document.getElementById('fullname').value, 90);
    setCookie("casName", document.getElementById('casual-name').value, 90);
    setCookie("persEmail", document.getElementById('private-email').value, 90);
    setCookie("teamEmail", document.getElementById('team-email').value, 90);
    setCookie("emailSig", document.getElementById('email-signature').value, 90);
    setCookie("signEmail", document.getElementById('sign-email-toggle').checked, 90);
    setCookie("useCustomScr", document.getElementById('custom-scripts-toggle').checked, 90);
    
    console.debug('Cookie check: ' + document.cookie);
    
    startUp(false, true);
    
    // Hide the overlay after proceeding
    document.getElementById('settings-overlay').style.display = 'none';
}

function logoutAccount(event) {
    event.preventDefault();

    setCookie("usrName", '', -1);
    setCookie("fullName", '', -1);
    setCookie("casName", '', -1);
    setCookie("persEmail", '', -1);
    setCookie("teamEmail", '', -1);
    setCookie("emailSig", '', -1);
    setCookie("signEmail", '', -1);
    setCookie("useCustomScr", '', -1);
    
    console.debug('Cookie check: ' + document.cookie);
    
    startUp(false, true);
    
    // Hide the overlay after proceeding
    document.getElementById('settings-overlay').style.display = 'none';
}

document.getElementById('user-account').addEventListener('click', accountOverlay);
document.getElementById('account-save').addEventListener('click', processAccount);
document.getElementById('account-logout').addEventListener('click', logoutAccount);
document.getElementById('account-close-overlay').addEventListener('click', function () {
    console.debug('closing account overlay...');
    document.getElementById('account-overlay').style.display = 'none';

});