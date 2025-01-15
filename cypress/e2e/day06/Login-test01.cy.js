/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe("Koala Resort Hotel", () => {
  it("Login Test 01", () => {
    cy.visit("https://allovercommerce.com/");

    //1) contains('Text')
    cy.contains("Sign In").click();

    //2) contains('locator','Text')
    //cy.contains('.login > span','Sign In').click();
    //cy.contains('[class="login inline-type"]','Sign In').click();

    //3) contains('text')
    //cy.contains('sign in',{matchCase:false}).click();
    // Buyuk kucuk harf dikkate almadan, metin olarak sign in iceren web elementini arar

    // ASSERT

    cy.get("#customer_login > .tab > .nav > :nth-child(1) > .nav-link").should(
      "have.text",
      "Sign In"
    );
    // locate edilen yerdeki metinde 'Sign In ' yaziyor mu? Var mi?

    //cy.url().should('include','')

    //cy.get('#signin > .woocommerce-form > .woocommerce-button').should('be.visible');

    // find() : Belirli bir html seciminin alt elemanlari bulmak icin
    //cy.get('i').find('.wishlist > span').should('have.text','Wishlist')

    //within()

    /*
    NOT: Web Elementleri ilk olarak get ile buluyoruz. Eger get()  ile bulamazsak
    find() ile deniyoruz. Onunlada bulamazsak within() ile deniyoruz.
    */
  });
});
