/// <reference types="cypress"/>

describe("Amazon Search", () => {
  it("Amazon search", () => {
    cy.amazonSearch("macbook");
    cy.get(".a-color-state").should("have.text", '"macbook"');

    cy.get("#twotabsearchtextbox").should("have.value", "macbook");

    cy.screenshot()
  });
});
