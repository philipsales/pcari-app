// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/custom.config.js',
    //'./e2e/login/login.e2e-spec.js',
    './e2e/biobank/biobank.e2e-spec.js'
    //'./e2e/admin/admin.e2e-spec.js'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': [
      'show-fps-counter=true'
     // '--window-size=900,800'
    ]
    }
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
  /*
  framework: 'mocha',
  mochaOpts: {
    reporter: "spec",
    slow: 3000
  },
  onPrepare() {
    require('ts-node').register({
      project: 'tsconfig.json'
    });
  }
  */
};
