const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'vu1mc8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://petstore.swagger.io/v2/user"
  },
});
