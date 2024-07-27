///  <reference types = "cypress" />
/// / <reference types = "cypress-xpath"/>

describe('Test contact form', () => {
    it('visit the page and click on the contact us', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        //cy.xpath("/html//a[@id='contact-us']//h1[.='CONTACT US']").click
        cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true})
        cy.title().should('include', "WebDriver | Contact Us")
        cy.url().should('include', 'contactus');
       
    });
    it('should successfully input and send message', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('young')
        cy.get('[name="last_name"]').type("John")
        cy.get('.feedback-input').eq(2).type("juju@lagos.com")
        cy.get('textarea.feedback-input').type('testing cypress input')
        cy.get('.contact_button').eq(1).click()
        cy.get('h1').should('contain', "Thank You for your Message!").and('be.visible')
        //.should('be.visible')
        //ASSIGNMENT
        //WRITE A TEST FOR A NEGATIVE SCENE

    })
})