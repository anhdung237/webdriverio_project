var path = require("path");

exports.config = {
    
    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './features/**/*.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    
    /**
     * Follow the link https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD/blob/master/test/config/suite.appium.conf.js
     * to setup running test cases on mobile but we have to start Appium manually
     * 
     */
    capabilities: [{
        appiumVersion: '1.7.1',
        platformVersion: '7.0',
        platformName: 'Android',
        browserName: 'chrome',
        deviceName: 'Android Emulator',
        chromeOptions: {
            args: ['--no-managed-user-acknowledgment-check', '--no-user-gesture-required', '--oobe-force-show-screen ⊗']
          },
    }],

    /**
     * in link https://github.com/amiya-pattnaik/webdriverIO-with-cucumberBDD/blob/master/test/config/suite.appium.conf.js
     * it sets the host is host: '0.0.0.0',  but it does not run
     * we change host to: host: '127.0.0.1', and it runs 
     */    
    host: '127.0.0.1',
    port: '4723',

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // By default WebdriverIO commands are executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // e.g. using promises you can set the sync option to false.
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'error',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    screenshotPath: './errorShots/',
    
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Initialize the browser instance with a WebdriverIO plugin. The object should have the
    // plugin name as key and the desired plugin options as properties. Make sure you have
    // the plugin installed before running any tests. The following plugins are currently
    // available:
    // WebdriverCSS: https://github.com/webdriverio/webdrivercss
    // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
    // Browserevent: https://github.com/webdriverio/browserevent
    // plugins: {
    //     webdrivercss: {
    //         screenshotRoot: 'my-shots',
    //         failedComparisonsRoot: 'diffs',
    //         misMatchTolerance: 0.05,
    //         screenWidth: [320,480,640,1024]
    //     },
    //     webdriverrtc: {},
    //     browserevent: {}
    // },
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['selenium-standalone'],//
    seleniumLogs: './logs',

    // services: ['appium'],
    
    //   appium: {
    //     args: {
    //       address: '127.0.0.1',
    //       commandTimeout: '7200',
    //       sessionOverride: true,
    //       debugLogSpacing: true,
    //       platformVersion: '7.0',
    //       platformName: 'Android',
    //       browserName: 'Chrome',
    //       showIosLog: true,
    //     //   deviceName: 'iPhone 6',
    //     //   nativeInstrumentsLib: true,
    //     //   isolateSimDevice: true,
    //     //   app: APP_PATH
    //     }
    //   },

    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html

    // // đang dùng 3 loại reports spec, json và cucumber cùng 1 lúc với nhau và cả 3 loại đểu chạy tốt
    // reporters: ['spec', 'json', 'cucumber'],//
    // reporterOptions: {
    //     outputDir: './jsonReport/'
    // },

    // đây là report mặc định của WebdriverIO, nó chính là dot report
    // reporters: ['dot'],

    reporters: ['cucumber'],//
    
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: [
            './features/step-definitions/given.js',
            './features/step-definitions/when.js',
            './features/step-definitions/then.js',
        ],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 20000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.

    // Gets executed before test execution begins. At this point you can access
    // all global variables, such as `browser`. It is the perfect place to
    // define custom commands.
    before: function before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require('chai');

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    },
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onPrepare: function (config, capabilities) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, specs) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    
    /**
     * Runs before a Cucumber feature
     * @param {Object} feature feature details
     */
    // beforeFeature: function (feature) {
    // },
    /**
     * Runs before a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // beforeScenario: function (scenario) {
    // },
    /**
     * Runs before a Cucumber step
     * @param {Object} step step details
     */
    // beforeStep: function (step) {
    // },
    /**
     * Runs after a Cucumber step
     * @param {Object} stepResult step result
     */
    // afterStep: function (stepResult) {
    // },
    /**
     * Runs after a Cucumber scenario
     * @param {Object} scenario scenario details
     */
    // afterScenario: function (scenario) {
    // },
    /**
     * Runs after a Cucumber feature
     * @param {Object} feature feature details
     */
    // afterFeature: function (feature) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    // onComplete: function(exitCode, config, capabilities) {
    // }


     /**
     * This function is used to capture image when Cucumber step is failed
     * Follow link https://github.com/webdriverio/webdriverio/issues/2190 and fgiroud's comment 
     * This function can capture screenshot on mobile when test is failed on mobile
     */

    afterStep: function afterStep(stepResult) {
        if (stepResult.status != "passed") {
            var path = browser.options.screenshotPath;
            var featureName = stepResult.step.scenario.uri
                .replace(process.cwd(), "")
                .split("/")
                .join("_")
                .replace(".feature", "");

            var fileName =
                path +
                "/ERROR_" +
                browser.options.desiredCapabilities.browserName +
                featureName +
                ".png";
            browser.saveScreenshot(fileName);
        }
    },

    /**
     * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
     * @param {Object} test test details
     * This is another way to capture image when test failed
     * follow link https://github.com/webdriverio/webdriverio/issues/269
     * but we change something, change function (test) -> function (stepResult)
     * 
     */
    // afterStep: function (stepResult) {
    //     // if test passed, ignore, else take and save screenshot.
    //     if (stepResult.status != "passed") {
    //         return;
    //     }
    //     // build file path
    //     var filePath = 'testimage.png';
    //     // save screenshot
    //     browser.saveScreenshot(filePath);
    //     console.log('\n\tScreenshot location:', filePath, '\n');
    // },
}
