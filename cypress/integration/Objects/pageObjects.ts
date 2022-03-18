export default class pageObjects{

    static url = 'www.douglas.de';
    static popUpButton = 'div.uc-overlay__buttons > button.button.button__primary';
    static userButton = 'div.header-component__item.header-component__item--account > span > button';
    static email_box = 'div.input__container.login__email > div > input';
    static password_box = 'div.input__container.login__password > div > input';
    static login_button = '#loginForm > button';
    static login_success = 'svg.account-flyout__status.icon.icon--SVG_19.icon--color-success';
    static wrong_creds_error = 'div.login-page--login.col-sm-12.col-md-6 > div > div.alert.alert--error';
    static forgot_password = '#loginForm > div.login__link';
    static forgot_password_dialog = 'div.modal-overlay__root.modal-overlay__general.forgot-password.modal-overlay__transition-appear-done.modal-overlay__transition-enter-done';
    static forgot_pass_email = '#forgotPasswordForm > div > div > input';
    static email_reset_pass_link = '#forgotPasswordForm > div.row.forgot-password__buttons > div:nth-child(2) > button';
    static forgot_pass_confirmation = 'div.forgot-password__confirmation';
    static link_sent_to = 'div.forgot-password__confirmation-email';

}