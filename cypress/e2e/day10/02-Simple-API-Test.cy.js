/// <reference types="cypress"/>


describe("Simple API Test", () => {
    const requestUrl = "https://jsonplaceholder.cypress.io/comments"
    it("Header Assert 1", () => {
        cy.request(requestUrl).its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
    });

    it("Header Assert 2", () => {
        cy.request({
            url: requestUrl,
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            expect(response.headers).to.have.property('content-type', 'application/json; charset=utf-8');
        });
    });
    
  });