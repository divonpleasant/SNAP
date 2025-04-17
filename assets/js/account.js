// Account support
function accountOverlay(event) {
    event.preventDefault();
    console.log('Executing accountOverlay...');
    // Get existing settings and set form elements appropriately
    /*
    console.info({so.Settings.user.username.value});
    console.info({so.Settings.user.fullname.value});
    console.info({so.Settings.user.private_inbox.value});
    console.info({so.Settings.user.contact_inbox.value});
    console.info({so.Settings.user.email_sig.value});
    console.info({so.Settings.user.sign_email.value});
    */
    document.getElementById('username').value = so.Settings.user.username.value;
    document.getElementById('fullname').value = so.Settings.user.fullname.value;
    document.getElementById('private-email').checked = so.Settings.user.private_inbox.value;
    document.getElementById('team-email').checked = so.Settings.user.contact_inbox.value;
    document.getElementById('email-signature').checked = so.Settings.user.email_sig.value;

    document.getElementById('account-overlay').style.display = 'flex';
}

function processAccount() {
}

document.getElementById('user-account').addEventListener('click', accountOverlay);
document.getElementById('account-save').addEventListener('click', processAccount);
document.getElementById('account-close-overlay').addEventListener('click', function () {
    debugmsg(5, 'closing account overlay...');
    document.getElementById('account-overlay').style.display = 'none';

});