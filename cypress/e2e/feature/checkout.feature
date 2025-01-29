Feature: Checkout Process

  Scenario: Complete purchase flow
    Given I am logged in as a standard user
    When I add an item to the cart
    And I complete the checkout process
    Then I should see the order confirmation
    And I should be able to logout