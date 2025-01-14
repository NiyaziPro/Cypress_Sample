/// <reference types="cypress"/>
///<reference types="cypress-iframe" />

describe("IFrame", () => {
  it("Test Case", () => {
    cy.visit("https://testcenter.techproeducation.com/index.php?page=iframe");

    /*
        1) Plugin download

        https://www.npmjs.com/package/cypress-iframe

        npm install -D cypress-iframe

        2) Import plugin

        import 'cypress-iframe';
             or
        require('cypress-iframe');  

        If you have overridden them, or if it otherwise doesn't work out-of-the-box, you will also either want to:

        Add ///<reference types="cypress-iframe" /> to the top of your cypress
        Add a globals.d.ts in the root of your cypress directory and add ///<reference types="cypress-iframe" /> to it

        */

    cy.frameLoaded("iframe");

    cy.iframe().find('a[href="index.php?page=droppable"]').click();

    //cy.iframe().find('div[id="draggable"]');
  });
});
