var { defineSupportCode } = require('cucumber');

var loginPage = require('../../pages/loginPage');
var mainPage = require('../../pages/mainPage');
var page = require('../../pages/page');

defineSupportCode (function ({Then}) {
    
    Then(/^I see the user icon with name "([^"]*)"$/, function (name) {
        expect(mainPage.username(name).waitForVisible()).toBe(true);
    });

    Then(/^I see the page "([^"]*)" displayed$/, function (page) {
        expect(mainPage.isPageDisplayed(page)).toBe(true);
    });
});