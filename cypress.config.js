const { defineConfig } = require("cypress");
const Preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // Tambahkan plugin Cucumber preprocessor
  await Preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Gunakan browserify untuk memproses file
  on("file:preprocessor", browserify.default(config));

  // Tambahkan event listener lainnya jika diperlukan
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 200000,
  e2e: {
    specPattern: "**/*.feature", // Mendukung file {js,feature}
    supportFile: false,
    testIsolation: false,
    watchForFileChanges: false,
    setupNodeEvents,
  },
});
