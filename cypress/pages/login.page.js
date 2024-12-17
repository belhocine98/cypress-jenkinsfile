/// <reference types="cypress" />
class LoginPage {
    elements = {
        username: ()=> cy.get('.oxd-input.oxd-input--active[name="username"]'),
        password: ()=> cy.get('.oxd-input.oxd-input--active[name="password"]'),
        boutonLogin: () => cy.get('button[type="submit"]'),
        msg: ()=> cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text'),
    }
    Login(username,password){
        this.elements.username().type(username)
        this.elements.password().type(password)
        this.elements.boutonLogin().click()
    }

} 
export default new LoginPage();