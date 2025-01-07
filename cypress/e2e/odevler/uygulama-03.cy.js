/*
Aşağıdaki testi CSS Selector kullanarak yapınız.
1. https://automationteststore.com adresini ziyaret et
2. Login ol
a. Login Name = techpro
b. Password = techpro!
3. "Login" butonuna tıkla
4. "Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
*/

describe("Uygulama 03", () => {
  it("Test03", () => {
    //1. https://automationteststore.com adresini ziyaret et
    cy.visit("https://automationteststore.com");
    //2. Login ol
    cy.get("#customer_menu_top > li > a").click();
    //a. Login Name = techpro
    cy.get("#loginFrm_loginname").type("techpro");
    //b. Password = techpro!
    cy.get("#loginFrm_password").type("techpro!");
    //3. "Login" butonuna tıkla
    cy.get("#loginFrm > fieldset > .btn").click();
    //4. "Welcome back" metni ile login işleminin başarılı olduğunu kontrol et
    cy.get(".alert").should("have.text", "Welcome back");
  });
});
