BrowserACtions = function() {


    this.clickOn = function(oElement, message) {
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


    this.type = function(oElement, value, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Enter data';
        return oElement.clear().then(function(iscleared) {
            logger.info('Text fieled cleared' + iscleared);
            return oElement.sendKeys(value).then(function(status) {
                logger.info('PASS', message);
                return status;

            });

        });


    };




    this.waitAndFindElement = function(oElement, timeout) {
        browser.controlFlow().execute(function() {
            timeout = typeof timeout !== 'undefined' ? timeout : 40000;

            browser.wait(function() {
                return oElement.isDisplayed().then(function(displayed) {
                    browser.sleep(500);
                    return displayed;
                });
            }, timeout);

            browser.wait(function() {
                return oElement.isEnabled().then(function(enabled) {
                    browser.sleep(500);
                    return enabled;
                });
            }, timeout);
        });

    };



    /**
     *  verify radio/Checkbox is checked on current page
     */
    this.isChecked = function(oElement, message) {
        this.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false
        message = message || 'Perform isChecked Operation verify checked status';
        oElement.getAttribute('checked').then(function(value) {
            expect(value).toBe('true');
            if (value) {
                logger.info('PASS', message);
                result = true;
            } else {
                logger.info('FAIL', message);
                result = false;
            }
        });

    };
    /**
     *  Select radio button on current page
     */
    this.selectRadioOprtion = function(oElement, message) {

        utility.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Perform selectRadioOprtion Operation to select radio button on page';
        oElement.select();
        oElement.getAttribute('checked').then(function(value) {
            expect(value).toBe('true');
            if (value) {
                logger.info('PASS', message);
                result = true;
            } else {
                logger.info('FAIL', message);
                result = false;
            }
        });

    };
    /**
     *    Check radio button on current page
     */
    this.selectCheckBox = function(oElement, message) {


        utility.waitAndFindElement(oElement, MAXWAITTIME);

        message = message || 'Perform checkCheckBox Operation to check CheckBox on page';
        oElement.click().then(function(value) {
            // expect(value).toBeTruthy();
            logger.info('PASS', message);
            return value;
        });
    };

    /**
     *  Get all items from dropdown list
     */
    this.getAllOptionsDropdown = function(oElement, message) {

        utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    this.getSelectedOptions = function(oElement, message) {

        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    this.selectByIndexValue = function(oElement, indexvalue, message) {

        try {
            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    this.selectByPartialText = function(oElement, inputText, message) {

        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    this.selectItemByTextvalue = function(oElement, inputText, message) {

        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    this.getItemCount = function(oElement, message, onStepFailure) {


        try {
            var oElement = utility.setObject(oElement, true);
            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
     * Enter text in Web Edit box
     * @param oElement
     * @param inputText
     */
    this.enterText = function(oElement, inputText, message) {
        try {
            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform enterText Operation to enter text from dropdown list on page';
            return oElement.clear().then(function() {
                return oElement.sendKeys(inputText).then(function() {
                    logger.info('PASS', message + "   action performed  - Entered " + inputText + "  text in text field.");
                    return true;
                })
            });
        } catch (err) {

            logger.info('FAIL', message + "  action performed  unable to enter text " + inputText + "  in text field.");
            logger.info('ERROR', "Failed to execute  enterText action due to " + err.message);
            return false;
        };
    };




    /**
     *Click And Wait operation on object button , link, text box, text area ...etc.  on current page
     */
    this.clickAndWait = function(oElement, waittime, message) {



        try {
            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform Click Operation and wait for' + waittime + '  second(s)';
            oElement.click().then(function() {
                browser.sleep(waittime);
                logger.info('PASS', message);
            })

        } catch (err) {
            logger.info('ERROR', "Failed to execute  clickAndWait action due to " + err.message);

        }

    };

    /**
     * Click And Wait operation on object button , link, text box, text area ...etc.  on current page
     */

    this.clickAndVerify = function(oElement, oExpElement, strTextSearch, matchCriteria, message) {

        utility.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false;
        matchCriteria = matchCriteria || 'CONTAIN'
        message = message || 'Perform Click Operation and verify text ' + strTextSearch + '  on navigated poage';
        oElement.click().then(function() {
            var expElement = this.setElement(oExpElement, dynamicText);
            expElement.getText().then(function(strExpText) {
                switch (matchCriteria.toUpperCase()) {
                    case 'EXACT':
                        expect(strExpText).toEqual(strTextSearch, message);
                        result = utility.textCompare(strExpText, strTextSearch, 'EXACT', message);
                        break;
                    case 'CONTAIN':
                        expect(strExpText).toContain(strTextSearch, message);
                        result = utility.textCompare(strExpText, strTextSearch, 'CONTAIN', message);
                        break;
                    default:
                        expect(strExpText).toBe(strTextSearch, message);
                        result = utility.textCompare(strExpText, strTextSearch, 'TOBE', message);
                        break;
                }
            })

        });

    };

    /**
     * perform contextClick
     */
    this.contextClick = function(oElement, message) {


        try {
            message = message || 'Performing context click on element';

            utility.waitAndFindElement(oElement, MAXWAITTIME);
            browser.actions().mouseMove(oElement).perform();
            browser.actions().click(protractor.Button.RIGHT).perform().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to right click on element due to " + err.message);
            result = false;
        }

    };

    //Check is element present on current page
    this.isElementPresent = function(oElement, message) {
        message = message || 'Perform isElementPresent Operation on current page';
        return oElement.isDisplayed().then(function(expStatus) {
            console.log("expStatus " + expStatus);
            expect(expStatus).toBeTruthy();
            if (expStatus) {
                logger.info('PASS', message);
                result = true;
                return result;
            } else {
                logger.info('FAIL', message);
                result = false;

            }
        });

    };

    //Check is element enable status on current page
    //Check is element NOT present on current page
    this.isElementNOTPresent = function(oElement, message) {
        message = message || 'Perform isElementNOTPresent Operation on current page';
        oElement.isDisplayed().then(function(expStatus) {
            expect(oElement.isDisplayed()).toBe(false);
            if (expStatus == false) {
                logger.info('PASS', message);
                result = true;
            } else {
                logger.info('FAIL', message);
                result = false;
            }
        });
    };

    /**
     * Check is element disable status on current page
     */
    this.isElementDisabled = function(oElement, message) {
        utility.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false;
        message = message || 'Perform isElementDisabled Operation on current page';
        oElement.isEnabled().then(function(expStatus) {
            expect(expStatus).toBeFalsy();
            logger.info('INFO', message + ':' + expStatus);
            return expStatus;
        });

    };

    //Check is element enable status on current page
    this.isElementEnabled = function(oElement, message) {


        utility.waitAndFindElement(oElement, MAXWAITTIME);
        var result = false;
        message = message || 'Perform isElementEnabled Operation on current page';
        oElement.isEnabled().then(function(expStatus) {
            expect(expStatus).toBeTruthy();
            logger.info('INFO', message + ':' + expStatus);
            return expStatus;
        });
    };


    /**
     * Check is element visible on current page
     */
    this.isElementVisible = function(oElement, message) {


        utility.waitAndFindElement(oElement, MAXWAITTIME);

        message = message || 'Perform isElementVisible Operation on current page';
        oElement.isDisplayed().then(function(expStatus) {

            if (expStatus) {
                logger.info('PASS', message);
                result = true;
            } else {
                logger.info('FAIL', message);
                result = false;
            }
        });

    };
    /**
     * Perform Double Click Operation on page control    
     * @param oElement
     * @param message
     * @returns {boolean}
     */
    this.doubleClickOn = function(oElement, message) {
        try {
            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Perform Double Click Operation on page control';
            return browser.actions().doubleClick(oElement).perform().then(function() {
                logger.info('PASS', message);
                return true;
            });

        } catch (err) {
            logger.info('ERROR', "Failed to execute  doubleClickOn Operation on page control due to " + err.message);
            result = false;
        };
    };

    /**
     * Gets the text from page control    
     * @param oElement
     * @param message
     * @returns <string>
     */
    this.getElementText = function(oElement, message) {

        try {
            message = message || 'Reading inner text of' + oElement;
            utility.waitAndFindElement(oElement, MAXWAITTIME);
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
    /**
     * Gets the count of the elements    
     * @param oElement
     * @param message
     * @returns <count>
     */
    this.getElementCount = function(oElement, strExpText, matchCriteria, message, onStepFailure) {
        try {
            message = message || 'Getting the count of the elements' + oElement;
            return oElement.count().then(function(eleCount) {
                return eleCount;
            })
        } catch (err) {

            logger.info('Failed to get count of the elements due to  ' + err.message);
            return false;
        };
    };

    /**
     * Mouse over on the element    
     * @param oElement
     * @param message
     * @returns {boolean}
     */
    this.mouseOver = function(oElement, message) {
        try {

            message = message || 'Mouse overing on the element' + oElement;
            return browser.actions().mouseMove(oElement).perform();
        } catch (err) {
            logger.info('Failed to Mouse overing on the element due to  ' + err.message);

            return false;
        };
    };

    /**
     * Check is element not visible on current page
     */
    this.isElementNotVisible = function(oElement, message) {
        message = message || 'Perform isElement Not Visible Operation on current page';
        oElement.isDisplayed().then(function(expStatus) {
            if (!expStatus) {
                logger.info('PASS', message);
                result = true;
            } else {
                logger.info('FAIL', message);
                result = false;
            }
        });

    };
    /**
     * Drag and Drop element
     * @param Source element
     * @param Target element or position like { x: 500, y: 00 }
     * @param message
     * @returns {boolean}
     */
    this.dragAndDropTo = function(oElement, oElement2, message) {


        try {

            utility.waitAndFindElement(oElement1, MAXWAITTIME);
            utility.waitAndFindElement(oElement2, MAXWAITTIME);
            message = message || 'Drag element from' + oElement1 + 'and drop at' + oElement2;
            return browser.actions().dragAndDrop(oElement1, oElement2).perform().then(function() {
                return true;
            })

        } catch (err) {
            logger.info('Failed to Mouse overing on the element due to  ' + err.message);

            return false;
        };

    };

    /**
     * To return the value of the given attribute for a web element
     * unless that attribute is not present, in which case the
     * value of the property with the same name is returned. If neither value is
     * set, null is returned
     *
     * @param {webdriver.Locator} locator The most relevant locater to identify
     *   element
     *
     * @param {string} attributeName The name of the attribute to query.
     * @return {!webdriver.promise.Promise.<?string>} A promise that will be
     *  resolved with the attribute's value. The returned value will always be
     *     either a string or null.
     */
    this.getAttribute = function(oElement, attribute, message) {
        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Getting the attribute value from the element' + oElement;
            return oElement.getAttribute(attribute).then(function(attributeValue) {
                return attributeValue;
            })

        } catch (err) {
            logger.info('Failed to getting the attribute value from the element due to' + err.message);

            return false;
        };
    };

    /**
     * Clears text in the textbox
     * @returns {boolean}
     */

    this.clearText = function(oElement, message) {
        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Clearing the text field for the element' + oElement;
            return oElement.clear().then(function() {
                return true;
            })

        } catch (err) {
            logger.info('Failed to clear the text field for the element due to' + err.message);

            return false;
        };
    };

    /**
     * To return the value of the given text box web element
     * @param {webdriver.Locator} locator The most relevant locater to identify
     * @param oElement
     * @param {message}
     * @return {string} .
     */

    this.getInlineText = function(oElement, message) {
        try {

            utility.waitAndFindElement(oElement, MAXWAITTIME);
            message = message || 'Getting the inlineText from the element' + oElement;
            return oElement.getAttribute('value').then(function(inlineText) {
                return inlineText;
            })
        } catch (err) {
            logger.info('Failed to getting the inlineText from the element due to' + err.message);

            return false;
        };
    };

    /**
     *Uncheck radio button/Check box on current page
     *@param {webdriver.Locator} locator The most relevant locater to identify
     @param oElement
     * @param {message}
     * @return {boolean} .
     */
    this.unSelectCheckBox = function(oElement, message) {
        utility.waitAndFindElement(oElement, MAXWAITTIME);
        message = message || 'Perform unCheckCheckBox Operation to Uncheck CheckBox on page';
        return oElement.isSelected().then(function(yes) {
                if (yes) {
                    return oElement.click().then(function() {
                        logger.info('PASS - un-selecting Check box', message);
                        return true;
                    })
                } else {
                    logger.info(oElement.toString() + ' Check box is already un-selected', message);
                }
            }),
            function(err) {
                logger.info('ERROR', "Failed to execute  checkCheckBox action due to " + err.message);
            };

    };


    //=====================================Alert Operations==========================

    /**
     * Click on OK Button on JavaScript Alert
     * @param timeout
     * @param message
     * @return {boolean}
     */

    this.acceptAlert = function(timeout, message, onStepFailure) {

        try {
            var timeout = timeout || 5000;
            message = message || 'Perform acceptAlert Operation to JavaScript Alert box on Clicking OK button';
            var alertBox = protractor.ExpectedConditions;
            browser.wait(alertBox.alertIsPresent(), timeout);
            return browser.switchTo().alert().accept().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to execute  acceptAlert action due to " + err.message);
            return false;
        }

    };

    /**
     * Click on Cancel Button on JavaScript Alert
     * @param timeout
     * @param message
     * @return {boolean}
     */
    this.dismissAlert = function(timeout, message, onStepFailure) {


        try {
            var timeout = timeout || 5000;
            message = message || 'Perform dismissAlert Operation to JavaScript Alert box on Clicking Cancel button';
            var alertBox = protractor.ExpectedConditions;
            browser.wait(alertBox.alertIsPresent(), timeout);
            return browser.switchTo().alert().dismiss().then(function() {
                logger.info('PASS', message);
                return true;
            })

        } catch (err) {
            logger.info('ERROR', "Failed to execute  dismissAlert action due to " + err.message);

            return false;
        }
    };

    /**
     * get text from JavaScript Alert
     * @param timeout
     * @param message
     * @return <String>
     */
    this.getAlertText = function(timeout, message) {
        try {
            var timeout = timeout || 5000;
            message = message || 'alert present, retrieving text in it';
            return utility.switchAlert(timeout).then(function(alert) {
                return alert.getText().then(function(text) {
                    logger.info('PASS', message);
                    return text;
                });
            })
        } catch (err) {
            logger.info('ERROR', "Failed to retrieving text from alert due to " + err.message);
            return false;
        }
    };

    /**
     * verify JavaScript Alert present
     * @param timeout
     * @param message
     * @return {boolean}
     */
    this.isAlertPresent = function(timeout, message, onStepFailure) {


        try {
            var timeout = timeout || 5000;
            message = message || 'JavaScript Alert present';
            return utility.switchAlert(timeout).then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to retrieving text from alert due to " + err.message);

            return false;
        }

    };

    //=====================================Frame Operations==========================

    /**
     * To switch the focus of all future commands to another
     * frame on the page.
     *
     * If the frame is specified by a number, the command will switch to the frame
     * by its (zero-based) index into
     * [window.frames](https://developer.mozilla.org/en-US/docs/Web/API/Window.frames).
     *
     * If the specified frame can not be found, the deferred result will errback
     * with a {@link bot.ErrorCode.NO_SUCH_FRAME} error.
     *
     * @param {number} index The frame locator.
     * @param message
     * @return {boolean}
     */
    this.safeSwitchToFrame = function(index, message, onStepFailure) {
        try {
            message = message || 'Switching to fame with index' + index;
            return browser.switchTo().frame(index).then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching frame with index due to " + err.message);
            return false;
        }
    };

    this.safeSwitchToFrameByLoc = function(oElement, message) {

        try {
            message = message || 'Switching to frame with locator:' + oElement.toString();
            return browser.switchTo().frame(oElement).then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching frame with locator due to " + err.message);

            return false;
        }

    };

    this.safeSwitchToFrameByNameOrId = function(nameOrId, message, onStepFailure) {

        try {
            message = message || 'Switching to frame with id:' + nameOrId;
            return browser.switchTo().frame(nameOrId).then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching frame with name/id due to " + err.message);

            return false;
        }

    };

    /**
     * Switched to default frame in the current window
     */
    this.safeSwitchToDefaultContent = function(onStepFailure) {
        try {
            message = message || 'Switching to default frame in the page';
            return browser.switchTo().defaultContent().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to switching default frame in the page due to " + err.message);

            return false;
        }
    };

    //=====================================Window Operations==========================

    /**
     * Switch to window with index
     * @param index
     * @param message
     * @return {boolean}
     */

    this.switchToWindow = function(index, message) {
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
    /**
     * Setting the browser size
     * @param browserSize (maximize or 'screen.width,screen.height')
     * @returns {boolean}
     */
    this.setBrowserSize = function(browserSize, onStepFailure) {
        try {
            message = message || 'Changing browser size';
            if (browserSize == maximize) {
                browser.manage().window().maximize().then(function() {
                    logger.info("PASS", message);
                    return true;
                })
            } else {
                sWidth = browserSize.split(',')[0];
                sHeight = browserSize.split(',')[1];
                browser.manage().window().setSize(sWidth, sHeight).then(function() {
                    logger.info("PASS", message);
                    return true;
                })
            }

        } catch (err) {
            logger.info('ERROR', 'Failed to open the application due to  ' + err.message);
            return false;
        }

    };

    /**
     * @param urlToNavigate
     * @param {message}
     * @returns {boolean}
     */
    this.navigateToUrl = function(urlToNavigate, message, onStepFailure) {
        try {
            message = message || "navigating to url:" + urlToNavigate;
            browser.navigate().to(urlToNavigate).then(function() {
                logger.info("PASS", message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', 'Failed to navigate the specified URL due to  ' + err.message);

            return false;
        }
    };
    /**
     *  Change URL location
     *  @return {boolean}
     */
    this.changePageUrlLocation = function(locationurl) {
        try {
            logger.info('INFO', 'Change  application url location to  ' + locationurl);
            browser.setLocation(locationurl).then(function() {
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to Change  application url location  due to  " + err.message);
            return false;
        }
    };
    /**
     * Gets the isDisplayed property of a link
     * @param oElement
     * @param message
     * @returns link(value of href attribute) of the element
     * @example
     * Driver.getUrl(oLogicalName, oElement, inputText, message);
     * @example
     * Action.getUrl();
     * returns the current URL
     */

    this.getUrl = function(oElement, message) {
        try {
            message = message || "Getting the element link/page url";
            if (!oElement) {

                utility.waitAndFindElement(oElement, MAXWAITTIME);
                return element(this.locator).getAttribute('href').then(function(url) {
                    logger.info("PASS", message)
                    return url;
                })
            } else {
                return browser.getCurrentUrl().then(function(url) {
                    logger.info("PASS", message)
                    return url;
                });
            }
        } catch (err) {

            logger.info("ERROR", 'Failed to get the element link/page url due to  ' + err.message);
            return false;
        }

    };

    /**
     * restart application
     * @return {boolean}
     */
    this.restart = function() {
        try {
            logger.info('INFO', 'restart application ');
            browser.restart.then(function() {
                return true;
            })
        } catch (err) {
            logger.info('ERROR', 'failed to restart application due to' + err.message);
            return false;
        }
    };

    /**
     * refresh browser application
     * @return {boolean}
     */
    this.refresh = function() {
        try {
            logger.info('INFO', 'Refresh application ');
            browser.refresh.then(function() {
                return true;
            })
        } catch (err) {
            logger.info('ERROR', "Failed to refresh application  due to  " + err.message);
            return false;
        }
    };
    /**
     * Goto previous web page based on browser histoty
     * @param {message}
     * @returns {boolean}
     */
    this.browserBack = function(message, onStepFailure) {
        try {
            message = message || 'Performing back operation on browser';
            return browser.navigate().back().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {
            logger.info('ERROR', 'Failed to navigate back due to  ' + err.message);
            return false;
        }
    };

    /**
     * Goto next web page based on browser histoty
     * @param {message}
     * @returns {boolean}
     */
    this.browserForward = function(message, onStepFailure) {
        try {
            message = message || 'Performing forward operation on browser';
            return browser.navigate().forward().then(function() {
                logger.info('PASS', message);
                return true;
            })
        } catch (err) {

            logger.info('ERROR', 'Failed to navigate forward due to  ' + err.message);
            return false;
        }
    };
    /**
     * Press page Up Key
     * @returns {boolean}
     */

    this.pageUp = function() {
        try {
            logger.info('INFO', 'Pressing Page Up Key from Keyboard');
            return browser.actions().sendKeys(protractor.Key.PAGE_UP).perform().then(function() {
                return true;
            })
        } catch (err) {
            logger.info('ERROR', 'Failed to press Page Up Key due to  ' + err.message);
            return false;
        }
    };

    /**
     * Press page Down Key
     * @returns {boolean}
     */
    this.pageDown = function() {
        try {
            logger.info('INFO', 'Pressing Page Down Key from Keyboard');
            return browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform().then(function() {
                return true;
            })
        } catch (err) {
            logger.info('Failed to press Page Down Key due to ' + err.message);
            return false;
        }
    };
    /**
     * Scrolls to the bottom of the page. x=0, y=scrollHeight
     * @returns {Promise<R>}
     */
    this.scrollToBottom = function() {
        return element(by.tagName('body')).getAttribute('scrollHeight').then(function(scrollHeight) {
            var scrollCommand = "window.scrollTo(" + 0 + "," + scrollHeight + ");";
            logger.info('INFO', 'utility.scroll: scrollCommand=' + scrollCommand);
            return browser.executeScript(scrollCommand);
        });
    };

    /**
     * Scrolls to the top of the page. x=0, y= -scrollHeight
     * @returns {Promise<R>}
     */
    this.scrollToTop = function() {
        return element(by.tagName('body')).getAttribute('scrollHeight').then(function(scrollHeight) {
            var scrollCommand = "window.scrollTo(" + 0 + "," + -scrollHeight + ");";
            logger.info('INFO', 'utility.scroll: scrollCommand=' + scrollCommand);
            return browser.executeScript(scrollCommand);
        });
    };

    /**
     * Scrolls to the Left of the page. x= -scrollWidth, y=0
     * @returns {Promise<R>}
     */
    this.scrollToLeftMost = function() {
        return element(by.tagName('body')).getAttribute('scrollWidth').then(function(scrollWidth) {
            var scrollCommand = "window.scrollTo(" + -scrollWidth + "," + 0 + ");";
            logger.info('INFO', 'utility.scroll: scrollCommand=' + scrollCommand);
            return browser.executeScript(scrollCommand);
        });
    };

    /**
     * Scrolls to the Left of the page. x= scrollWidth, y=0
     * @returns {Promise<R>}
     */
    this.scrollToRightMost = function() {
        return element(by.tagName('body')).getAttribute('scrollWidth').then(function(scrollWidth) {
            var scrollCommand = "window.scrollTo(" + scrollWidth + "," + 0 + ");";
            logger.info('INFO', 'utility.scroll: scrollCommand=' + scrollCommand);
            return browser.executeScript(scrollCommand);
        });
    };
    /**
     * Scrolls the window based on the percentage of width and height provided.
     * Percentage is relative to scrollHeight and scrollWidth of the body tag
     * @param widthPercent
     * @param heightPercent
     * @returns {Promise<R>}
     */
    this.scroll = function(widthPercent, heightPercent) {
        widthPercent = widthPercent || 0;
        heightPercent = heightPercent || 0;
        return browser.manage().window().getSize().then(function(size) {
            var width = size.width;
            var height = size.height;
            return element(by.tagName('body')).getAttribute('scrollHeight').then(function(scrollHeight) {
                return element(by.tagName('body')).getAttribute('scrollWidth').then(function(scrollWidth) {
                    var scrollCommand = "window.scrollBy(" + (widthPercent * scrollWidth / 100) + "," + (heightPercent * scrollHeight / 100) + ");";
                    logger.info('utility.scroll: widthPercent=' + widthPercent + ' heightPercent=' + heightPercent + ' scrollHeight=' + scrollHeight + ' scrollWidth=' + scrollWidth);
                    logger.info('utility.scroll: scrollCommand=' + scrollCommand);
                    return browser.executeScript(scrollCommand);
                });
            });
        });
    };
    /**
     * Delete all cookies
     */
    this.deleteCookies = function() {
        try {
            logger.info('INFO', 'Deleting all cookies');
            return browser.manage().deleteAllCookies().then(function() {
                return true;
            })
        } catch (err) {
            logger.info('ERROR', 'Failed to delete Cookies due to ' + err.message);
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
    this.randomNo = function(type, length) {
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


    this.pressKey = function(keyValue, message, onStepFailure) {
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




module.exports.BrowserACtions = BrowserACtions;
