/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Selectors Examples", () => {
  it("Css Selectors", () => {
    cy.visit("https://www.amazon.com/");

    // 1) By Tag Name
    //cy.get("input");

    // 2) By id
    cy.get("#twotabsearchtextbox");

    // 3) By class
    cy.get(".nav-search-field");

    // 4) By Attribute name and Value
    cy.get("input[type='text']");

    // 5) By 2 Attribute
    cy.get("[type='text'][id='twotabsearchtextbox']");
  });

  it.only("Xpath", () => {
    cy.visit("https://www.google.com");

    cy.get("#W0wltc > .QS5gu").click();

    // 6) By Xpath
    cy.xpath("//*[@class='gLFyf']");

    cy.xpath("(//a[@class='gb_W'])[1]").should("include.text", "Gmail");

    // /// <reference types="cypress-xpath"/>
    // xpath() algilanmaz ise 1. satira usteki kodu yazabilirsiniz

    // require('cypress-xpath')
    // yukaridaki kodu support/e2e.js dosyasina eklenilir

    //cy.xpath("//a[@class='gb_W']").click({multiple:true});
  });
});
