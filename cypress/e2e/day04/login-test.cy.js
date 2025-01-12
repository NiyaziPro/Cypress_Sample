/// <reference types="cypress"/>

context("Get Land Estate", () => {
  it("Log in Test", () => {
    cy.visit("http://64.227.123.49/");
    cy.get('[data-rr-ui-event-key="5"]').click();
    cy.get(".user-input").type("nadmin@mail.com");
    cy.get(".user-password-input").type("Ntester123#");
    cy.get(".submit-button").click();
    cy.get(".back-site > .d-none").click();
    cy.get('[data-rr-ui-event-key="4"]').click();
    cy.get("#firstName").type("Nyz");
    cy.get("#lastName").type("Tester");
    cy.get("#email").type("ntester@mail.com");
    cy.get("#message").type("Hello, Cypress :)");
    cy.get(".dynamic-button").click();
    cy.get(".p-toast-message-text").should("be.visible", "Success");
  });
});
