

/*
1. https://www.amazon.com sitesine git
2. Arama motorunda 'iphone' kelimesini ara
3. Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula
*/
describe('Amazon Search Test', () => {
    it('Searches for "iphone" and verifies the results', () => {
      // 1. https://www.amazon.com sitesine git
      cy.visit('https://www.amazon.com');
  
      // 2. Arama motorunda 'iphone' kelimesini ara
      cy.get('#twotabsearchtextbox').type('iphone'); 
      cy.get('#nav-search-submit-button').click();
  
      // 3. Arama sonuç sayfasında 'iphone' kelimesinin arandığını doğrula
      cy.url().should('include', 'iphone');
      cy.get('span.a-color-state').should('contain.text', 'iphone'); // 'iphone' kelimesini içermeli
    });
  });