# Automated Testing for E-commerce Authentication & Checkout Workflows 🧪
**End-to-End Test Automation** for login authentication and checkout processes of SauceDemo website. Demonstrates core QA engineering skills with Cypress and Behavior-Driven Development (BDD).

[![Cypress.io](https://img.shields.io/badge/Cypress-14.0.0-brightgreen)](https://www.cypress.io/)
[![Cucumber](https://img.shields.io/badge/Cucumber-BDD-%2323D96C)](https://cucumber.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![SauceDemo Website](https://img.shields.io/badge/Sauce_Demo-brightgreen.svg)](https://www.saucedemo.com/)

---

## 🚀 Key Features
- **BDD Approach** with Gherkin syntax
- **Page Object Model** design pattern
- Comprehensive test scenarios:
  - Login validation (positive/negative cases)
  - Cart management
  - Checkout process
  - Order confirmation
  - Session management (logout)
- CI/CD-ready structure

---

## 🧰 Tech Stack
**Core Technologies**  
| Tool | Purpose |
|------|---------|
| Cypress | End-to-End Testing |
| Cucumber | BDD Framework |
| JavaScript | Test Implementation |
| GitHub | Version Control |

**Supporting Tools**  
- Node.js (v20+)
- npm Package Manager
- Visual Studio Code
- Chrome Browser
---

## ⚙️ Installation
```bash
# Clone repository
git clone https://github.com/your-username/SauceDemo.git
cd SauceDemo

# Install dependencies
npm install
```

---

## 🧪 Running Tests
**Interactive Mode** (GUI)  
```bash
npx cypress open
```

**Headless Mode** (CI/CD)  
```bash
npx cypress run
```

**Run Specific Features**  
```bash
npx cypress run --spec "cypress/e2e/Features/authentication.feature"
```

---

## 🧩 Test Scenarios
### Authentication Workflow
```gherkin
Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I login with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I login with invalid credentials
    Then I should see an error message
```
Click to start the video demo
[![Test Demo](https://img.youtube.com/vi/0Y2AFOIa504/maxresdefault.jpg)](https://www.youtube.com/embed/0Y2AFOIa504)
```

```
### Checkout Workflow
```gherkin
Feature: Checkout Process

  Scenario: Complete purchase flow
    Given I am logged in as a standard user
    When I add an item to the cart
    And I complete the checkout process
    Then I should see the order confirmation
    And I should be able to logout
```
Click to start the video demo
[![Test Demo](https://img.youtube.com/vi/LS5XUYblF0Q/maxresdefault.jpg)](https://www.youtube.com/embed/LS5XUYblF0Q)
```
```
## 🤝 Contributing
Pull requests welcome! For major changes, please open an issue first to discuss proposed changes.

---

## 📄 License
[MIT](https://choosealicense.com/licenses/mit/)

---

## 📬 Contact
**Riyan** - [GitHub Profile](https://github.com/7084riyan)  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/mohamad-riyan-maulana-83770425a/)
```
