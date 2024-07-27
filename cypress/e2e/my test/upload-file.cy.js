///  <reference types = "cypress" />
/// / <reference types = "cypress-xpath"/>

describe('Verify Upload file on webdriver', () => {
    it('Upload a file ', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#myFile').selectFile("cypress/fixtures/photo.jpg");
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
            
         
        })

        
    });
    it('Upload no file ', () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({ force: true })
        cy.get('#submit-button').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })

    })



})