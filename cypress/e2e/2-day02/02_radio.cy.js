describe('radio', () => {
    it('radio', () => {
      cy.visit('https://testcenter.techproeducation.com/index.php?page=radio-buttons');
      cy.get('#yellow').check();
      cy.get('#football').check();

      cy.screenshot('radio button screenshot');
  
    });
    
  });