describe("Suggested Elements", () => {
  it("Test Case 1", () => {
    cy.visit("https://www.google.com");

    cy.get("#W0wltc > .QS5gu").click();

    cy.get("#APjFqb").type("Yahoo");

    // 1) YOL
    //cy.get('#sBQTL > .wM6W7d > span > b').contains('mail login').click()

    // 2) YOL
    cy.get("li span b").contains("finance").click();
  });
});
