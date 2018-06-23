const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("./support/reporter");

exports.config = {
    seleniumAddress: "http://localhost:4444/wd/hub",
    baseUrl: "http://www.way2automation.com/angularjs-protractor/registeration/#/login",
    capabilities: {
        browserName: process.env.TEST_BROWSER_NAME || "chrome"
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: ["./features/123_login.feature","./features/123_login2.feature"],
    //exclude: "../features/database.feature",
    // resultJsonOutputFile: "./reports/json/protractor_report.json",
    onPrepare: function() {
        //browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        global.expect = chai.expect;
        Reporter.createDirectory(jsonReports);
    },
    cucumberOpts: {
        strict: true,
        format: 'json:./reports/json/cucumber_report.json',
        require: ["./stepDefinitions/*.js", "./support/*.js"]
    },
    onComplete: function() {
        Reporter.createHTMLReport();
    }
};