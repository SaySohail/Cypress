const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  // const pathToConfigFile = path.resolve('..//config', `${file}.json`);
  const pathToConfigFile = path.resolve(__dirname, 'config', `${file}.json`);
  if(!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found at path: " + pathToConfigFile);
    return {};
  }
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  projectId: 'ohjnk3',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || '';
      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern:"cypress/e2e/other/*.js",
    baseUrl:"https://www.webdriveruniversity.com",
    chromeWebSecurity:false,
    experimentalSessionAndOrigin:true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json'
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env:{
      first_name: "Sarah",
      webdriveruni_homepage: "https://www.webdriveruniversity.com",
      autoStore_homepage: "https://automationteststore.com/",
    }
  },
  
});
