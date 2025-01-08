describe("form", () => {
  it("form", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=form-authentication"
    );
    cy.get("#exampleInputEmail1").type("techproed");
    cy.get("#exampleInputPassword1").type("SuperSecretPassword ");
    cy.get(".btn").click();
    cy.get("h2").should("contain.text", "Secure Area");
  });
});
