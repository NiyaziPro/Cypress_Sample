describe("Multiple Window", () => {
  it("Removing Attribute", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=multiple-windows"
    );

    cy.get(".example > a").invoke("removeAttr", "target").click();

    cy.get("h3").should("have.text", "New Window");
  });

  it.only("New Url", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=multiple-windows"
    );

    cy.get(".example > a").then((element) => {
      const newUrl = element.prop("href");
      // prop() -> href degerini aldi
      cy.visit(newUrl);
    });
  });
});
