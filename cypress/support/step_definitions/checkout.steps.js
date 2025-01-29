import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import InventoryPage from '../../e2e/Pages/InventoryPage'
import CartPage from '../../e2e/Pages/CartPage'
import CheckoutPage from '../../e2e/Pages/CheckoutPage'
import LoginPage from '../../e2e/Pages/LoginPage'

Given('I am logged in as a standard user', () => {
    LoginPage.visit()
    LoginPage.fillUsername('standard_user')
    LoginPage.fillPassword('secret_sauce')
    LoginPage.clickLogin()
})

When('I add an item to the cart', () => {
    InventoryPage.addFirstItemToCart()
    InventoryPage.checkCartItemCount('1')
})

When('I complete the checkout process', () => {
    InventoryPage.openCart()
    CartPage.clickCheckout()
    CheckoutPage.fillInformation('Test', 'User', '12345')
    CheckoutPage.clickContinue()
    CheckoutPage.clickFinish()
})

Then('I should see the order confirmation', () => {
    CheckoutPage.checkCompleteHeader()
})

Then('I should be able to logout', () => {
    InventoryPage.logout()
    cy.url().should('eq', 'https://www.saucedemo.com/')
})