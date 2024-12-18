@Regression
Feature: OrangeHRM Login functionality

@positif
  Scenario: Login with correct username and correct password
    Given I am on the OrangeHRM login page
    When I log in with username "Admin" and password "admin123"
    Then I should see the dashboard with header "Dashboard"
@negatif
  Scenario: Login with incorrect username and correct password
    Given I am on the OrangeHRM login page
    When I log in with username "WrongUser" and password "admin123"
    Then I should see an alert message "Invalid credentials"
@negatif
  Scenario: Login with correct username and incorrect password
    Given I am on the OrangeHRM login page
    When I log in with username "Admin" and password "wrongPassword"
    Then I should see an alert message "Invalid credentials"


