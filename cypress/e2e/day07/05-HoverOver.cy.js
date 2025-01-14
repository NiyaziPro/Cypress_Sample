describe("Hover Over", () => {
  it("Test Case", () => {
    cy.visit("https://www.amazon.com/");

    cy.get("#nav-link-accountList").trigger("mouseover");
    cy.wait(3000);
    cy.contains("Account").click();

    cy.wait(2000).go(-1);
    cy.get(".icp-nav-link-inner > .nav-line-2").click();
    cy.get(":nth-child(8) > .a-radio > label > .a-icon").click();
  });
});
