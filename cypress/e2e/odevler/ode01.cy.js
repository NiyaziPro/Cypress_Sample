/*
Aşağıdaki testi CSS Selector kullanarak yapınız.
1. https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
2. İletişim Formunu doldur
3. "SUBMIT" butonuna tıkla
4. Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
*/

describe("Test Cypress Odev 01", () => {
  it("Test webdriveruniversity", () => {
    //1. https://www.webdriveruniversity.com/Contact-Us/contactus.html adresini ziyaret et
    cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //2. İletişim Formunu doldur
    cy.get('[name="first_name"]').type("Nikko");
    cy.get('[name="last_name"]').type("Tester");
    cy.get('[name="email"]').type("niktester@mail.com");
    cy.get("textarea.feedback-input").type("This is test!");
    //3. "SUBMIT" butonuna tıkla
    cy.get('[type="submit"]').click();
    //4. Teşekkür mesajının "Thank You for your Message!" metni olduğunu kontrol et
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
