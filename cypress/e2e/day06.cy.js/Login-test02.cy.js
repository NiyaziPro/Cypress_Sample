/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Login Test", () => {
  it("Test Case 01", () => {
    cy.visit("https://allovercommerce.com/");
    cy.get(".login").click();

    //1.YOL
    cy.get("#signin > .woocommerce-form > :nth-child(1) > label").should(
      "contain",
      "email address"
    );

    //2.YOL
    cy.get("#signin > .woocommerce-form > :nth-child(1) > label").then(
      (emailtext) => {
        expect(emailtext.text()).to.contains("Username or email address");
      }
    );

    //3.YOL
    cy.get("#signin > .woocommerce-form > :nth-child(1) > label")
      .invoke("text")
      .then((emailtext2) => {
        expect(emailtext2).to.contains("Username or email address");
      });
  });
});
