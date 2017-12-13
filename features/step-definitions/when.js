var { defineSupportCode } = require('cucumber');

var loginPage = require('../../pages/loginPage');
var mainPage = require('../../pages/mainPage');
var page = require('../../pages/page');

defineSupportCode (function ({When}) {
    
    When(/^I click on the user icon$/, function () {
        mainPage.userIcon.click();
    });
    
    When(/^I select the option "([^"]*)"$/, function (option) {
        mainPage.option(option).click();
    });

});