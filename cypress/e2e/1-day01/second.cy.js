describe('second test',()=>{
    it('second test',()=>{
        cy.visit('https://testcenter.techproeducation.com/index.php?page=autocomplete')
        cy.get('#myCountry').type('turkiye')
        cy.get('.btn.btn-primary').click()
        cy.get('#result').contains('turkiye')
    })
})
