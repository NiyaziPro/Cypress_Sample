/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

import data from "../../fixtures/credentials.json";

describe("Login Test ", () => {
  it("Positive Test", () => {
    const username = "eshawn.kolden@floodouts.com";
    const password = "Mikebastian1234";

    cy.visit("https://allovercommerce.com/");
    cy.get(".login").click();

    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#signin > .woocommerce-form > .woocommerce-button").click();

    cy.get(".login > span").should("have.text", "Sign Out");
  });

  it("Positive Test", () => {
    cy.visit("https://allovercommerce.com/");
    cy.get(".login").click();

    cy.get("#username").type(data.username);
    cy.get("#password").type(data.password);
    cy.get("#signin > .woocommerce-form > .woocommerce-button").click();

    cy.get(".login > span").should("contain", "Sign Out");
  });

  it.only("Negative Test", () => {
    const username = "eshawn.kolden@floodouts.co";
    const password = "Mikebastian12";

    cy.visit("https://allovercommerce.com/");
    cy.get(".login").click();

    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("#signin > .woocommerce-form > .woocommerce-button").click();

    cy.get("#signin > .woocommerce-form > .submit-status").should(
      "include.text",
      "Wrong username or password."
    );
  });
});
