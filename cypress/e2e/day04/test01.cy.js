/// <reference types="cypress" />

context("Deneme", () => {
  beforeEach(() => {
    cy.visit("/");
    //visit (url): istenen url ye gider
  });
  it("Test01", () => {
    cy.url().should("include", "google");
    //should assertion yapmak icin kullaniliyor
    //include: icermek demek
    cy.title().should("equal", "Google");
    cy.get("#W0wltc > .QS5gu").click();
    cy.get("#APjFqb").type("Cypress.io{enter}");
    // get(): lacate aliyoruz
    // type(): metin gonderiyoruz (SendKeys)
    // {enter} : ENTER tusuna bas (Keys.ENTER)
  });

  it("Search", () => {
    cy.get("#W0wltc > .QS5gu").click();
    cy.get("#APjFqb", { timeout: 3000 }).type("Cypress.io{enter}");
  });
});
