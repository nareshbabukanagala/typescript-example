
import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  specs: [ './specs/specPageObjects.js' ],
  onPrepare:()=>{
  //  var gvar='global variable in onprepare section';
   

  },
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};
