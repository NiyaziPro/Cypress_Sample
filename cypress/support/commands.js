// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// https://www.allovercommerce.com  sitesi icin function'lar
Cypress.Commands.add("login", (username, password) => {
  cy.visit("https://allovercommerce.com/");
  cy.get(".login").click();
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#signin > .woocommerce-form > .woocommerce-button").click();
});

Cypress.Commands.add("verifyLogin", () => {
  cy.get(".login > span").should("have.text", "Sign Out");
});

// Amazon sitesi icin function'lar

Cypress.Commands.add("amazonSearch", (productName) => {
  cy.visit("https://www.amazon.com/");
  cy.get("#twotabsearchtextbox").type(productName);
  cy.get('#nav-search-submit-button').click();
});
