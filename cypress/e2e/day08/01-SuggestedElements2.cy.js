describe("Suggested Elements 2", () => {
  it("Test Case 1", () => {
    cy.visit("https://amazon.com");

    cy.get("#twotabsearchtextbox").type("dress");

    cy.contains("shirts for men").click();

    cy.get(".a-color-state").should("include.text", "dress shirts for men");
  });
});
