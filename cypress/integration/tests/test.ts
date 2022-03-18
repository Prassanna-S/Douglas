/// <reference types="cypress" />
import pageObjects from "../Objects/pageObjects";

let email = 'arrunprasanna@gmail.com';
let pass = 'Tom&Jerry94';

describe('Task to Automate', () => {
    beforeEach(() => {
        cy.visit(pageObjects.url)
        cy.get(pageObjects.popUpButton).click();
        cy.get(pageObjects.userButton).click();
    })

    afterEach(() => {
        cy.wait(2000);
    })

    it('Verify Forgot Password button', () => {
        cy.get(pageObjects.forgot_password).then(
            (button) => cy.wrap(button).should('be.visible').click());
        cy.get(pageObjects.forgot_password_dialog).then(
            (dialog) =>
                cy.wrap(dialog).should('be.visible'))
            .get(pageObjects.forgot_pass_email).should('be.visible')
            .type(email)
            .get(pageObjects.email_reset_pass_link).click()
            .get(pageObjects.forgot_pass_confirmation).should('be.visible')
            .get(pageObjects.link_sent_to).should('have.text',email);

    })

    it('Check login with correct credentials', () => {
        cy.get(pageObjects.email_box).type(email);
        cy.get(pageObjects.password_box).type(pass);
        cy.get(pageObjects.login_button).click();
        cy.wait(2000).get(pageObjects.login_success).then(
            (login_mark) => cy.wrap(login_mark).should('be.visible'));
    })

    it('Verify error message for wrong credentials', () => {
        cy.get(pageObjects.email_box).type(email);
        cy.get(pageObjects.password_box).type('Tom&Jerry945');
        cy.get(pageObjects.login_button).click();
        cy.get(pageObjects.wrong_creds_error).then(
            (login_mark) => cy.wrap(login_mark).should('be.visible'));
    })


})
