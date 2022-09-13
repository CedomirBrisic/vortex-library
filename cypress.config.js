const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'dio4vw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
