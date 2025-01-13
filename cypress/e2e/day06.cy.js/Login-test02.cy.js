/// <reference types="cypress"/>
/// <reference types="cypress-xpath"/>

describe('Login Test', () => {
    it('Test Case 01', () => {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();

        //1.YOL
        cy.get(':nth-child(1) > label').should('contain','Email address');
    });
  });