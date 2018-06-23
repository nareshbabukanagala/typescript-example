class BrowserACtions {

    waitAndFindElement(oElement, timeout) {
        browser.controlFlow().execute(function() {
            timeout = typeof timeout !== 'undefined' ? timeout : 40000;

            browser.wait(function() {
                return oElement.isDisplayed().then(function(displayed) {
                    // browser.sleep(500);
                    return displayed;
                });
            }, timeout);

            browser.wait(function() {
                return oElement.isEnabled().then(function(enabled) {
                    // browser.sleep(500);
                    return enabled;
                });
            }, timeout);
        });

    };

    clickOn(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        try {
            message = message || 'Perform Click Operation on page control';
            return oElement.click().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            message = message || 'Perform Click Operation on page control';
            logger.info('ERROR', "Failed to execute  clickOn action due to " + err.message);
            return false;
        }
    };

    clearText(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Clearing the text field for the element' + oElement;
        return oElement.clear().then(function() {
            return true;
        }, function(err) {
            logger.info('Failed to clear the text field for the element due to' + err.message);
            return false;
        });
    };

    type(oElement, value, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Enter data';
        return oElement.clear().then(function(iscleared) {
            logger.info('Text fieled cleared');
            return oElement.sendKeys(value).then(function(status) {
                logger.info('PASS', message);
                return status;
            });

        });
    };

    /**
     *  Get all items from dropdown list
     */
    getAllOptionsDropdown(oElement, message) {

        this.waitAndFindElement(oElement, MAXWAITTIME);
        try {
            message = message || 'Perform getOptionsDropdown Operation to get all option items from dropdown list on page';
            logger.info('PASS', message);
            return oElement.all(by.tagName('option')).then(function(values) {
                return values.getText();
            })
        } catch (err) {
            logger.info('ERROR', "Failed to execute  getOptionsDropdown action due to " + err.message);
            return null;
        };
    };
    /**
     * Get selected items from dropdown list
     */
    getSelectedOptions(oElement, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform getSelectedOptions Operation to get selected Items/Options from dropdown list on page';
            logger.info('PASS', message);
            return oElement.all(by.css('option[selected="selected"]')).then(function(values) {
                return values.getText();
            })
        } catch (err) {

            logger.info('ERROR', "Failed to execute  selectItemByText action due to " + err.message);
            return null;
        };

    };
    //Select item by Value/Index items from dropdown list
    selectByIndexValue(oElement, indexvalue, message) {

        try {
            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectByIndexValue Operation to select item / option by index from dropdown list on page';
            console.log("indexvalueddd" + indexvalue)
            oElement.all(by.css('option:nth-child("' + indexvalue + '")')).click().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('FAIL', message);
            logger.info('ERROR', "Failed to execute  selectByIndexValue action due to " + err.message);
            return false;
        };

    };
    //Select item by partial item text from dropdown list
    selectByPartialText(oElement, inputText, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectByPartialText Operation to select item / option by partial text from dropdown list on page';
            oElement.all(by.cssContainingText('option', inputText)).click().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {

            logger.info('FAIL', message);
            logger.info('ERROR', "Failed to execute  selectByPartialText action due to " + err.message);
            return false;
        }

    };
    //Select item by item text from dropdown list
    selectItemByTextvalue(oElement, inputText, message) {

        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform selectItemByTextvalue Operation to select item / option by text from dropdown list on page';
            oElement.all(by.xpath('//option[text()="' + inputText + '"]')).click().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {

            logger.info('FAIL', 'Failed to execute  selectItemByTextvalue action due to' + err.message);
            return false;
        };
    };

    /**
     * Get Item Count from dropdown list
     * @param oElement
     * @param message
     * @return {itencount}
     */
    getItemCount(oElement, message) {
        try {

            this.waitAndFindElement(oElement, MAXWAITTIME);
            var itencount = 0;
            message = message || 'Perform getItemCount Operation to select item / option by text from dropdown list on page';
            return oElement.all(by.tagName('option')).count().then(function(intItemsCount) {
                return intItemsCount;
            });

        } catch (err) {

            logger.info('ERROR', "Failed to execute  getItemCount action due to " + err.message);
        };

    };

    /**
     * Check is element disable status on current page
     */
    isElementDisabled(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false;
        message = message || 'Perform isElementDisabled Operation on current page';
        oElement.isEnabled().then(function(expStatus) {
            expect(expStatus).toBeFalsy();
            logger.info('INFO', message + ':' + expStatus);
            return expStatus;
        });

    };

    getElementText(oElement, message) {

        try {
            message = message || 'Reading inner text of' + oElement;
            this.waitAndFindElement(oElement, MAXWAITTIME);
            return oElement.getText().then(function(txt) {
                if (typeof txt === 'object') {
                    txt = txt.toString();
                };
                if (txt.length !== 0) {
                    logger.info('PASS', message);
                    return txt;
                } else return 'Blank';
            })
        } catch (err) {

            logger.info('Failed to open the application due to  ' + err.message);
            return false;
        };
    };


    //=====================window===============
    /**
     * Switch to window with index
     * @param index
     * @param message
     * @return {boolean}
     */

    switchToWindow(index, message) {
        try {
            message = message || 'Switching to window with index';
            return browser.getAllWindowHandles().then(function(handles) {
                if (handles.length > 1) {
                    return browser.switchTo().window(handles[index]).then(function() {
                        browser.sleep(500);
                        logger.info('PASS', message);
                        return true;
                    });
                }
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching window due to " + err.message);
            return false;
        }
    };
    //============================Commons================


    /**
     * To generate a random number of given length
     * @param  {String} type (Number or String)
     * @param  {Number} length of the string required
     * @return {Number or String} returns number/string of length provided with random alphabets
     */
    randomNo(type, length) {
        try {
            var oresult = undefined;
            switch (type.toUpperCase()) {
                case 'STRING':
                    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                    for (var i = 0; i < length; i++) {
                        oresult = oresult + str.charAt(Math.floor(Math.random() * str.length));
                    }
                    logger.info('random string of length ' + length + ' for is :' + oresult);
                    break;
                case 'NUMBER':
                    var oresult = Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));
                    logger.info('random number of length ' + length + ' for is :' + oresult);
                    break;
                default:
                    oresult = undefined;
                    break;
            }
        } catch (err) {
            logger.info('ERROR', "Failed to retrieving text from alert due to " + err.message);
            return false;
        }
        return oresult;
    };
    //==============================Key==========

    pressKey(keyValue, message) {
        var message = message || 'Enter the Key' + keyValue;
        try {
            switch (keyValue.toUpperCase()) {

                case 'ENTER':
                    browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function() {
                        logger.info('PASS', message);
                        return true;
                    })
                    break;

                case 'TAB':
                    browser.actions().sendKeys(protractor.Key.TAB).perform().then(function() {
                        logger.info('PASS', message);
                        return true;
                    })
                    break;

                default:
                    time = undefined;
                    break;
            }
        } catch (err) {
            console.log("catch error and the error is: " + err.message);
            logger.info('ERROR', "Failed to press Key due to " + err.message);
            return false;
        }
    };
}




module.exports = new BrowserACtions();