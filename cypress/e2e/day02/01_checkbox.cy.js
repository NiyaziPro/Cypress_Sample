//https://testcenter.techproeducation.com/index.php?page=checkboxes

describe('checkbox', () => {
  it('checkbox', () => {
    cy.visit('https://testcenter.techproeducation.com/index.php?page=checkboxes');
    cy.get('#box1').check();
    cy.get('#box2').check().should('be.checked');
    cy.get('input[type="checkbox"]').uncheck().debug();

  });
  
});
