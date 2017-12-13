var { defineSupportCode } = require('cucumber');

var loginPage = require('../../pages/loginPage');
var mainPage = require('../../pages/mainPage');

defineSupportCode (function ({Given}) {
    
    Given(/^I login the app with username "([^"]*)" and pass "([^"]*)"$/, function (username, pass) {
        loginPage.open();
        loginPage.buttonLogIn.click();
        loginPage.login(username, pass);
    });
    
});