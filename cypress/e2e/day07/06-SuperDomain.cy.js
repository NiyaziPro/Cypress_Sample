describe("Super Domain", () => {
  it("Test Case", () => {
    cy.visit("https://www.amazon.com/");

    cy.wait(2000);
    cy.visit("https://www.google.com");

    cy.get("#W0wltc > .QS5gu").click();

    cy.wait(2000);
    cy.visit("https://www.youtube.com");

    cy.get(
      ".eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill"
    ).click();

    cy.wait(2000);
    cy.visit("https://www.cypress.io");
  });
});
