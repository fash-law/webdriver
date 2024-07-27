///  <reference types = "cypress" />
/// / <reference types = "cypress-xpath"/>

describe('Verify Autocomplete dropdownlist list via webdriver uni', () => {
    it.only('select specific products via autocomplete list', () => {
        cy.visit("/");
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('B')
        cy.get('#myInputautocomplete-list').contains('acon').click()
        cy.get("#submit-button").click()
        cy.url().should('include', 'Bacon')
        // cy.get('#myInputautocomplete-list > :nth-child(2)').click()
        // cy.get('#submit-button').click();

    });

    it.only('using javascript to select specific product to autocomplete', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#autocomplete-textfield").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const prodSelect = 'Apple';


            if (prod === prodSelect) {
                //$el.click(); using the trigger command cos .click is deprecated 
                
                $el.trigger("click");
                cy.get("#submit-button").click();
                cy.url().should('include', prodSelect);
            };
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text();
                const prodSelect = 'Grapes';


                if (prod === prodSelect) {
                    //$el.click();

                    
                    $el.trigger("click");
                    cy.get("#submit-button").click();
                    cy.url().should('include', prodSelect);
                };

            });

        });
    });
})