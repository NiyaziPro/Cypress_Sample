describe("Drag and Drop", () => {
  it("Test 01", () => {
    /*
            https://www.npmjs.com/package/@4tw/cypress-drag-drop

            Install using npm:

            npm install --save-dev @4tw/cypress-drag-drop

            Before Cypress is loaded put the following line:

                require('@4tw/cypress-drag-drop')

        */

    cy.visit("https://testcenter.techproeducation.com/index.php");

    cy.get(":nth-child(10) > a").click();

    cy.get("#column-a").drag("#column-b");

    cy.get(":nth-child(11) > a");
  });

  it.only("Test 02", () => {
    cy.visit("https://testcenter.techproeducation.com/index.php");

    cy.get(":nth-child(10) > a").click();
    const dataTransfer = new DataTransfer();
    cy.get("#column-a").trigger("dragstart", { dataTransfer });
    cy.get("#column-b").trigger("drop", { dataTransfer });
  });

  it("Test 03", () => {
    cy.visit("https://testcenter.techproeducation.com/index.php");

    cy.get(":nth-child(11) > a").click();

    cy.get("#draggable").drag("#droptarget");
  });
});
