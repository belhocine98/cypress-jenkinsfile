/// <reference types="cypress" />
class Dashboard {
    elements = {
        dashboard: () => cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module'),

    }
    Dashboard (){
        this.elements.dashboard()
    }
}
export default new Dashboard();