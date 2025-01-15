/// <reference types="cypress" />

const { faker } = require("@faker-js/faker");

describe("Get Land Estate Test", () => {
  it("Login Test", () => {
    cy.visit("http://64.227.123.49/");

    cy.contains("Register").click();
    // DOM'da Register textini bulur. Metni text olarak arar

    cy.get(":nth-child(1) > .user-input").type(faker.person.firstName());
    cy.get(":nth-child(2) > .user-input").type(faker.person.lastName());
    cy.get(":nth-child(3) > .user-input").type(
      faker.phone.number("##########")
    );
    cy.get(":nth-child(4) > .user-input").type(faker.internet.email());
    const password = "Tester123#";
    cy.xpath('//input[@name="password"]').type(password);
    cy.xpath('//input[@name="confirmPassword"]').type(password);
    cy.get("#terms").check();
    cy.get(".form-submit-button").click();
    cy.get(".p-toast-detail").should(
      "contain.text",
      "Your registration has been completed"
    );
  });
});
