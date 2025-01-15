/// <reference types="cypress" />

// saucedemo.spec.js
/* 
Test Case 1: Başarılı Giriş Yapma
Amaç:
Kullanıcının geçerli kullanıcı adı ve şifreyle başarıyla giriş yaptığını doğrulamak.

Adımlar:
1. Tarayıcıyı aç ve https://www.saucedemo.com/ adresine git.
2. Kullanıcı adı alanına standard_user yaz.
3. Şifre alanına secret_sauce yaz.
4. Login butonuna tıkla.
5. Kullanıcının Products sayfasına yönlendirildiğini doğrula:
6. URL: /inventory.html içermeli.
7. Sayfanın başlığında "Products" yazmalı.
8. Products sayfasında, ilk ürünü (örneğin, Sauce Labs Backpack) bul.
9. Add to Cart butonuna tıkla.
10. Sepet simgesindeki ürün sayısını doğrula:
11. Sepet simgesi üzerinde 1 yazmalı.
12. Sepet simgesine tıkla ve sepete git.
13. Sepet sayfasında ürünün doğru bir şekilde listelendiğini doğrula:
14. URL: /cart.html içermeli.
15. Ürün adı "Sauce Labs Backpack" olmalı.
Beklenen Sonuç:
Ürün başarıyla sepete eklenir ve doğru ürün sepet sayfasında görüntülenir.


*/
describe("SauceDemo Login and Add to Cart Test", () => {
  const url = "https://www.saucedemo.com/";

  beforeEach(() => {
    // 1. Tarayıcıyı aç ve https://www.saucedemo.com/ adresine git.
    cy.visit(url);
    // 2. Kullanıcı adı alanına standard_user yaz.
    //3. Şifre alanına secret_sauce yaz.
    //4. Login butonuna tıkla.
    cy.get('[data-test="username"]').type("standard_user");
    cy.get('[data-test="password"]').type("secret_sauce");
    cy.get('[data-test="login-button"]').click();
  });

  it("Login oldugunu doğrulama", () => {
    //5. Kullanıcının Products sayfasına yönlendirildiğini doğrula:
    //6. URL: /inventory.html içermeli.

    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("have.text", "Products");
  });

  it("urun sepete ekleme", () => {
    //7. Sayfanın başlığında "Products" yazmalı.
    cy.url().should("include", "/inventory.html");

    // 9. Add to Cart butonuna tıkla.
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    //10. Sepet simgesindeki ürün sayısını doğrula:
    //11. Sepet simgesi üzerinde 1 yazmalı.
    cy.get(".shopping_cart_badge").should("have.text", "1");

    // 12. Sepet simgesine tıkla ve sepete git.
    cy.get(".shopping_cart_link").click();
    //13. Sepet sayfasında ürünün doğru bir şekilde listelendiğini doğrula:
    cy.get(".cart_item").should("have.length", 1);
    //14. URL: /cart.html içermeli.
    cy.url().should("include", "/cart.html");

    //15. Ürün adı "Sauce Labs Backpack" olmalı.
    cy.get(".inventory_item_name").should("have.text", "Sauce Labs Backpack");
  });
});
