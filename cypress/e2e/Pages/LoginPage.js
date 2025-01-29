class LoginPage {

  elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  visit() {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit('https://www.saucedemo.com/');
  }


  fillUsername(username) {
    this.elements.usernameInput().type(username);
  }

  fillPassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }

  checkErrorMessage(message) {
    this.elements.errorMessage().should('contain', message);
  }
}

export default new LoginPage();