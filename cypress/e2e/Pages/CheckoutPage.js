class CheckoutPage {
  elements = {
    firstNameInput: () => cy.get('#first-name'),
    lastNameInput: () => cy.get('#last-name'),
    postalCodeInput: () => cy.get('#postal-code'),
    continueButton: () => cy.get('#continue'),
    finishButton: () => cy.get('#finish'),
    completeHeader: () => cy.get('.complete-header'),
    backHomeButton: () => cy.get('#back-to-products')
  }

  fillFirstName(firstName) {
    this.elements.firstNameInput().type(firstName);
  }

  fillLastName(lastName) {
    this.elements.lastNameInput().type(lastName);
  }

  fillPostalCode(postalCode) {
    this.elements.postalCodeInput().type(postalCode);
  }

  clickContinue() {
    this.elements.continueButton().click();
  }

  clickFinish() {
    this.elements.finishButton().click();
  }

  checkCompleteHeader() {
    this.elements.completeHeader().should('be.visible');
  }

  clickBackHome() {
    this.elements.backHomeButton().click();
  }

  fillInformation(firstName, lastName, postalCode) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillPostalCode(postalCode);
  }
}

export default new CheckoutPage();