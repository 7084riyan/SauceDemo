import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../e2e/Pages/LoginPage';
import InventoryPage from '../../e2e/Pages/InventoryPage';

Given('I am on the login page', () => {
  LoginPage.visit();
});

When('I login with valid credentials', () => {
  LoginPage.fillUsername('standard_user');
  LoginPage.fillPassword('secret_sauce');
  LoginPage.clickLogin();
});

When('I login with invalid credentials', () => {
  LoginPage.fillUsername('invalid_user');
  LoginPage.fillPassword('wrong_password');
  LoginPage.clickLogin();
});

Then('I should be redirected to the inventory page', () => {
  cy.url().should('include', '/inventory.html');
  InventoryPage.elements.title().should('contain', 'Products');
});

Then('I should see an error message', () => {
  LoginPage.elements.errorMessage().should(
    'contain',
    'Epic sadface: Username and password do not match any user in this service'
  );
});