describe("Checkboxes", () => {
  it("Single Checkbox", () => {
    cy.visit(
      "https://testcenter.techproeducation.com/index.php?page=checkboxes"
    );

    cy.get("#box1").check();
    cy.get("#box2").uncheck();

    cy.wait(3000);

    cy.get("#box1").uncheck();
    cy.get("#box2").check();

    cy.wait(3000);

    cy.get("#box1").check();
    cy.get("#box2").uncheck();

    cy.get("#box1").then(($checkbox) => {
      if ($checkbox.is(":checked")) {
        cy.wrap($checkbox).uncheck();
      }
    });

    cy.get("#box2").then(($checkbox2) => {
      if (!$checkbox2.is(":checked")) {
        cy.wrap($checkbox2).check();
      }
    });

    cy.get("#box1").should("not.be.checked");
    cy.get("#box2").should("be.checked");

    cy.wait(3000);

    // Tum Checkboxlari check et
    cy.get('input[type="checkbox"]').check();

    cy.get("#box1").should("be.checked");
    cy.get("#box2").should("be.checked");

    cy.wait(3000);

    // Tum Checkboxlari uncheck et
    cy.get('input[type="checkbox"]').uncheck();

    cy.get("#box1").should("not.be.checked");
    cy.get("#box2").should("not.be.checked");

    ///////////////////////////////

    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");

    cy.get('input[type="checkbox"]').eq(0).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').eq(1).uncheck().should("not.be.checked");

    ////////////////////////////////
    cy.get('input[type="checkbox"]').click({ multiple: true });

    cy.get('input[type="checkbox"]').parent().should('have.class','checked');
  });
});
