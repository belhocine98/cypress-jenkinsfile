/// <reference types="cypress" />
export class LoginOrangeRMHPage {
    constructor() {
      this.url = "https://opensource-demo.orangehrmlive.com/web/auth/login";
      this.usernameCssLocator = "input[name='username']";
      this.passwordCssLocator = "input[name='password']";
      this.submitButtonCssLocator = "button[type='submit']";
      this.dashboardCssLocator = "h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
      this.alertMessageCssLocator = ".oxd-text.oxd-text--p.oxd-alert-content-text";
    }
  
    visit() {
      cy.visit(this.url);
    }
  
    enterUsername(username) {
      cy.get(this.usernameCssLocator).clear().type(username);
    }
  
    enterPassword(password) {
      cy.get(this.passwordCssLocator).clear().type(password);
    }
  
    submit() {
      cy.get(this.submitButtonCssLocator).click();
    }
  
    verifyDashboardHeader(text) {
      cy.get(this.dashboardCssLocator).should("have.text", text);
    }
  
    verifyAlertMessage(text) {
      cy.get(this.alertMessageCssLocator).should("have.text", text);
    }
  }