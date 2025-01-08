/// <references types="cypress" />

describe("My first test", () => {
  it("Url Test", () => {
    cy.visit("https://www.google.com/");
  });
});
