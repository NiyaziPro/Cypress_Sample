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


describe('Login and Add to Cart', () => {

    const url = 'https://www.saucedemo.com/';

    before(()=>{
        cy.visit(url)
        cy.get('#user-name').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    });


    it('Assert Login', () => {
        cy.get('[data-test="title"]').should('have.text','Products')
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="item-quantity"]').should('have.text','1')
        cy.get('[data-test="inventory-item-name"]').should('have.text','Sauce Labs Backpack')
        cy.url().should('include','/cart.html')

    });

  });