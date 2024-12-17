/// <reference types="cypress" />

import loginPage from "../pages/login.page";
import dashboard from "../pages/dashboard";

Given('je suis sur la page orangeHRM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('je rentre le username correct', () => {
    loginPage.elements.username("Admin");
});

When('je rentre le password correct', () => {
    loginPage.elements.password('admin123');
});

When('je clique sur le bouton login', () => {
    loginPage.elements.boutonLogin().click();
});

Then('je suis redirigé vers le dashboard', () => {
   
    dashboard.Dashboard.should('be.visible').and('contain.text', 'Dashboard');
});





