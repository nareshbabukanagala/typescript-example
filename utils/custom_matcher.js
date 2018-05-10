class CustomMatcher {
    constructor() {
        this.customMatchers = {
            toEqualIgnoreCase: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }
                        var result = {};
                        result.pass = util.equals(actual.toUpperCase().trim(), expected.toUpperCase().trim(), customEqualityTesters);
                        if (result.pass) {
                            result.pass = "Expected \"" + actual.toUpperCase().trim() + "\" to Equal \"" + expected.toUpperCase().trim() + "\" (ignoring cases sensitive)";
                            result.message = "Expected " + actual.toUpperCase().trim() + " to Equal (ignoring cases sensitive) " + expected.toUpperCase().trim() + "";
                        } else {
                            result.message = "Expected " + actual.toUpperCase().trim() + ", but it is " + expected.toUpperCase().trim() + " (ignoring cases sensitive)" + " " + msg;
                        }
                        return result;
                    }
                };
            },
            toEqual: function(util, customEqualityTesters) {
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }

                        var result = {};
                        result.pass = util.equals(actual, expected, customEqualityTesters);
                        if (result.pass) {
                            result.pass = "Expected \"" + actual + "\" to Equal \"" + expected + "\"";
                            result.message = "Expected " + actual + " to Equal " + expected + "";
                        } else {
                            result.message = "Expected " + actual + ", but it is " + expected + "" + msg;
                        }
                        return result;
                    }
                };
            },
            toContain: function(util, customEqualityTesters) {
                customEqualityTesters = customEqualityTesters || [];
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }
                        var result = {};
                        result.pass = util.contains(actual, expected, customEqualityTesters)
                        if (result.pass) {
                            result.pass = "Expected \"" + actual + "\" to Contain \"" + expected + "\"";
                            result.message = "Expected " + actual + " to Contain " + expected + "";
                        } else {
                            result.message = "Expected " + actual + ", but it is " + expected + "" + msg;
                        }
                        return result;
                    }
                };
            },
            toContainSourceCode: function(util, customEqualityTesters) {
                customEqualityTesters = customEqualityTesters || [];
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }
                        var result = {};
                        result.pass = util.contains(actual, expected, customEqualityTesters)
                        if (result.pass) {
                            result.pass = "Source Code Contain \"" + expected + "\"";
                            result.message = "Expected " + actual + " to Contain " + expected + "";
                        } else {
                            result.message = "Source Code not  Contain \"" + expected + "" + msg;
                        }
                        return result;
                    }
                };
            },
            toContainPdfFile: function(util, customEqualityTesters) {
                customEqualityTesters = customEqualityTesters || [];
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }
                        var result = {};
                        result.pass = util.contains(actual, expected, customEqualityTesters)
                        if (result.pass) {
                            result.pass = "PDF file Contain \"" + expected + "\"";
                            result.message = "Expected " + actual + " to Contain " + expected + "";
                        } else {
                            result.message = "PDF file not  Contain \"" + expected + "" + msg;
                        }
                        return result;
                    }
                };
            },
            toContainIgnoreCase: function(util, customEqualityTesters) {
                customEqualityTesters = customEqualityTesters || [];
                return {
                    compare: function(actual, expected, msg) {
                        if (expected === undefined) {
                            expected = '';
                        }
                        if (msg === undefined) {
                            msg = '';
                        } else {
                            msg = " [" + msg + "]"
                        }
                        var result = {};
                        result.pass = util.contains(actual.toUpperCase().trim(), expected.toUpperCase().trim(), customEqualityTesters)
                        if (result.pass) {
                            result.pass = "Expected \"" + actual.toUpperCase().trim() + "\" to Contain \"" + expected.toUpperCase().trim() + "\" (ignoring cases sensitive)";
                            result.message = "Expected " + actual.toUpperCase().trim() + " to Contain " + expected.toUpperCase().trim() + "";
                        } else {
                            result.message = "Expected " + actual.toUpperCase().trim() + ", but it is " + expected.toUpperCase().trim() + " (ignoring cases sensitive)" + "" + msg;
                        }
                        return result;
                    }
                };
            }

        };
    }

}
module.exports = new CustomMatcher();