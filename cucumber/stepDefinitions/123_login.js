"use strict";
const login = require("../pages/loginPage");
var tData = require("../testData/1234_login.json");

const { Given, When, Then } = require("cucumber");

Given(/^I open application$/, function() {
    browser.get(tData.url);
});

// it('I open application', function() {
//     browser.get(tData.url);
// });

When(/^I type username$/, function() {
    return login.userName.sendKeys(tData.username);
});
When(/^I type password$/, function() {
    return login.password.sendKeys(tData.password);
});
When(/^I type username2$/, function() {
    return login.userName2.sendKeys(tData.username2);
})

When(/^I click on login button$/, function() {
    return login.login.click();
});

Then(/^title should contains "(.*?)"$/, function(text) {
    expect(browser.getTitle()).to.contain(text);
});

// When(/^I type "(.*?)" in username field$/, function(text,callback) {
// login.userName.sendKeys(text);
// callback();

// })
When(/^I type "(.*?)" in username field$/, function(string, callback) {
    // Write code here that turns the phrase above into concrete actions
    login.userName.sendKeys(string);
    callback();
});

When(/^I type "(.*?)" in password field$/, function(text, callback) {
    login.password.sendKeys(text);
    callback();
})
When(/^I type "(.*?)" in username2 field$/, function(text, callback) {
    login.userName2.sendKeys(text);
    callback();

});
// Then(/^title should contains "(.*?)"$/, function(text, callback) {
//     expect(browser.getTitle()).to.contain(text);
//     callback();

// });


