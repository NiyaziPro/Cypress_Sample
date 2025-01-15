/// <reference types="cypress"/>

import data from "../../fixtures/credentials.json";

describe("Custom Command", () => {
  it("Positive Login", () => {
    cy.visit("https://allovercommerce.com/");
    cy.get(".login").click();

    cy.get("#username").type(data.username);
    cy.get("#password").type(data.password);
    cy.get("#signin > .woocommerce-form > .woocommerce-button").click();

    cy.get(".login > span").should("have.text", "Sign Out");
  });

  it("Positive login with created function", () => {
    cy.login(data.username, data.password);
    cy.verifyLogin();
  });

  it("Negative Login Test", () => {
    cy.login(data.username, "1234Abcv");
    cy.get("#signin > .woocommerce-form > .submit-status").should("be.visible");
  });
});
