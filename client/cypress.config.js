const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Update with your app's URL
    setupNodeEvents(on, config) {
      // Add webpack alias configuration for path aliases
      config.webpackOptions = {
        resolve: {
          alias: {
            "@": `${process.cwd()}/src`, // Fix the path by removing the dot before the slash
            // Add other aliases as needed
          },
        },
      };

      return config;
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
