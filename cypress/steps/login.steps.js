/// <reference types="cypress" />

  import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
  import { LoginOrangeRMHPage } from '../pages/login.page';
  
  const loginPage = new LoginOrangeRMHPage();
  
  Given('I am on the OrangeHRM login page', () => {
    loginPage.visit();
  });
  
  When('I log in with username {string} and password {string}', (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
    loginPage.submit();
  });
  
  Then('I should see the dashboard with header {string}', (headerText) => {
    loginPage.verifyDashboardHeader(headerText);
  });
  
  Then('I should see an alert message {string}', (message) => {
    loginPage.verifyAlertMessage(message);
  });


When('I log in with username {string} and password {string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

Given('I am on the OrangeHRM login page', () => {
  // Write code here that turns the phrase above into concrete actions
})



