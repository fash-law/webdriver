/// <reference types="cypress" />

describe("Validate webdriver radiobutton, checkbox and dropdown", () => {
    it("confirm Radiobutton", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#radio-buttons').find('input[type="radio"]').eq(1).check()
        cy.get('#radio-buttons').find('input[type="radio"]').eq(2).should('not.be.checked')

    });
    it('confirm checkboxes', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#checkboxes').find('[type="checkbox"]').eq(0).check()
        cy.get('#checkboxes').find('[type="checkbox"]').eq(1).check()
        cy.get('#checkboxes').find('[type="checkbox"]').eq(2).uncheck()
        cy.get('#checkboxes').find('[type="checkbox"]').eq(0).should('be.checked')
        cy.get('#checkboxes').find('[type="checkbox"]').eq(2).should('not.be.checked')
    })
    it('confirm dropdown and select', () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
        cy.get('#dropdowm-menu-1').select('sql')
        cy.get('#dropdowm-menu-1').contains('SQL').should('be.selected')
        cy.get('#dropdowm-menu-1').contains('JAVA').should('not.be.selected')
        //Assignment select from a dropdown and assert it

    })


})