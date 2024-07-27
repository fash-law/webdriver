const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": "mochawesome",
  e2e: {
    baseUrl: "https://www.webdriveruniversity.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true,
  "videoCompression": 32,
  "screenshotOnRunFailure": true,
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true
  }
});

