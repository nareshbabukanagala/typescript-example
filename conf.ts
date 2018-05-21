
import {Config} from 'protractor';
const xlsxj = require("xlsx-2-json");
const testFolder = './testData/';
const fs = require('fs');

fs.readdirSync(testFolder).forEach(file => {
    console.log(file);
    if (file.includes('xlsx')) {
        var n = file.split('.');
        console.log(n[0])
        xlsxj({
            input: "./testData/" + n[0] + ".xlsx",
            output: "./testData/" + n[0] + ".json",
            sheet: "Sheet2"
        }, function(err, result) {
            if (err) {
                console.error(err);
            } else {
                console.log(result);
            }
        });
    }
})

export let config: Config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ './specs/spec.js' ],
  onPrepare:()=>{
  //  var gvar='global variable in onprepare section';
   

  },
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
