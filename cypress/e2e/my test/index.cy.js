///  <reference types = "cypress"/>

describe('my first page', () => {
    it('visit testing page', () => {
        cy.visit("https://parabank.parasoft.com/");
        cy.url().should('include', 'https://parabank.parasoft.com/')
        cy.title() // => true
       
    });
})