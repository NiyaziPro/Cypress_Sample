describe("Suggested Elements", () => {
    it("Test Case 1", () => {

        cy.visit("https://www.google.com");

        cy.get('#W0wltc > .QS5gu').click();

        cy.get('#APjFqb').type('Yahoo');


    });
  });