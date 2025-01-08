

describe('', () => {
    before(()=>{
        cy.log('Her test dosyasindan once bir kere calisir');
    });

    after(()=>{
        cy.log('Her test dosyasindan sonra bir kere calisir');
    });

    beforeEach(()=>{
        cy.log('Her testten once calisir');
    });

    afterEach(()=>{
        cy.log('Her testten sonra calisir');
    });

    it('Test 01', () => {
      cy.log('Test01')
  
    });

    it('Test 02', () => {
        cy.log('Test02')
    
      });

      it('Test 03', () => {
        cy.log('Test03')
    
      });

      it('Test 04', () => {
        cy.log('Test04')
    
      });
    
  });