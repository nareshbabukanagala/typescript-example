// local import of the exported AngularPage class
import {AngularHomepage} from '../pages/angularPage';
const frisby = require('frisby');

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  it('should greet the named user', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    angularHomepage.setName('Julie');
    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    
  });

  it ('should return a status of 200', function (done) {
    frisby
      .get('http://google.com')
      .expect('status', 200)
      .done(done);
  });
});
