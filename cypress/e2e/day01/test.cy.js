/// <reference types="cypress" />

// describe yerine context kullanabiliriz
context("My first test", () => {
  it("Url Test", () => {
    cy.visit("/");
    //visit (url): istenen url ye gider
    cy.url().should("include", "google");
    //should assertion yapmak icin kullaniliyor
    //include: icermek demek
  });
});
