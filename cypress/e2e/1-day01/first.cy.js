describe('ilk testimiz',()=>{
   
    it('amazon',()=>{
        cy.visit('https://www.amazon.com/');
        //cy.get('#nav-link-accountList').click();
        cy.get('#twotabsearchtextbox').type('kitap')

    })

})