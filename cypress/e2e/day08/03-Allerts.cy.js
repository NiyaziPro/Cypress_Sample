describe("Allerts", () => {
  it("Allert test", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=javascript-alerts"
    );

    cy.get('[onclick="jsAlert()"]').click();
    cy.get("#result").should("have.text", "You successfully clicked an alert");

    //Cypress otomatik olarak Allert lerde otomatik olarak Tamam(OK) butonuna tiklar
  });
  it("Accept Allert Test", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=javascript-alerts"
    );
    cy.get('[onclick="jsConfirm()"]').click();
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Dismiss Allert Test", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=javascript-alerts"
    );
    cy.get('[onclick="jsConfirm()"]').click();

    // on() -> jQuery bir fonksiyondur
    // browserda acilan pencerelerin kontrolu icin kullanilir

    cy.on("window:confirm", () => {
      return false;
      // return true -> default olarak tikla demek
    });

    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it.only("JS Prompt", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=javascript-alerts"
    );

    cy.window().then(($windowsElement) => {
      cy.stub($windowsElement, "prompt").returns("Cypress");
      cy.get('[onclick="jsPrompt()"]').click();
    });

    cy.get("#result").should("have.text", "You entered: Cypress");
  });
});
