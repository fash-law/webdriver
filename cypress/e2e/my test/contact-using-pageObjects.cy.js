import ContactPage from "../../support/pageObjects/Contact-Page.cy";


describe('Testing pageObjects model', () => {
  const contactpage = new ContactPage();

  it('should fill the contact form', () => {
    contactpage.visit();
    contactpage.enterFirstname('young');
    contactpage.enterLastname('John');
    contactpage.enterEmail('juju@lagos.com')
    contactpage.enterMessage('testing cypress input')
    contactpage.submit();

    // Add assertions to verify successful login
    cy.url().should('include', 'contact-form-thank-you');
    cy.contains('Thank You for your Message!').should('be.visible');
  });

  it('negative scene for POM', () => {
    contactpage.visit();
    contactpage.enterLastname('John');
    contactpage.enterEmail('juju@lagos.com')
    contactpage.enterMessage('testing cypress input')
    contactpage.submit();

    // Add assertions to verify error message
    cy.contains('Error: all fields are required').should('be.visible');
  });
});
