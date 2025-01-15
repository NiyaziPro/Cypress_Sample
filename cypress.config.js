const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    video:true,
    //watchForFileChanges : false,
    //defaultCommandTimeout : 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl: "https://www.google.com"
    //baseUrl tanimlandiginda kullanmak istenildiginde :  cy.visit('/');
  },
});
