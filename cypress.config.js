const { defineConfig } = require('cypress');
// import { defineConfig } from 'cypress';

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://int.sandandsky.com',
    specPattern: 'cypress/testFile/**/*.cy.js',
  },
});
