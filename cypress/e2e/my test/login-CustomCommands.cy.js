///  <reference types = "cypress" />

describe('Test contact form', () => {
    it('visit the page and click on the contact us', () => {
        cy.visit("/" + 'Login-Portal/index.html');
        cy.login('aybaba', "12345")

    });
})