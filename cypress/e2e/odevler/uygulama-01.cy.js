/*
1. https://www.kitapyurdu.com sitesine git
2. 'Üye Ol' bağlantısına tıkla
3. Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
*/

describe("Uygulama 01", () => {
  it("Test 01", () => {
    //1. https://www.kitapyurdu.com sitesine git
    cy.visit("https://www.kitapyurdu.com");
    //2. 'Üye Ol' bağlantısına tıkla
    cy.get(".register > a").click();
    //3. Kayıt formunda 'Ad' alanına bir isim yaz ve doğrula
    cy.get("#register-name").type("Nikko").should("have.value", "Nikko");
  });
});
