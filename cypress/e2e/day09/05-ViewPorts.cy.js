/// <reference types="cypress"/>

describe("View Ports", () => {
  it("View Ports", () => {
    cy.visit("https://www.google.com");
    cy.viewport("iphone-8");
    cy.wait(3000)
    cy.viewport('macbook-16')
  });
});
