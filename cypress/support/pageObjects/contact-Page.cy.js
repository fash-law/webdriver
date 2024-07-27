class ContactPage {
    visit() {
      cy.visit('/' + "Contact-Us/contactus.html");
    }
  
    enterFirstname(firstname) {
      cy.get('input[name="first_name"]').type(firstname);
    }
  
    enterLastname(lastname) {
      cy.get('input[name="last_name"]').type(lastname);
    }

    enterEmail(email) {
      cy.get('.feedback-input').eq(2).type(email)
    }
    enterMessage(message) {
      cy.get('textarea.feedback-input').type(message)
    }
  
    submit() {
      cy.get('.contact_button').eq(1).click();
    }
  }
  
  export default ContactPage;
  