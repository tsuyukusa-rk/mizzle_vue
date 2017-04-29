'use strict';

import helloWorld from '../assets/scripts/utils/sample.js';

describe('First test', () => {

  it('should return a [ Hello World! ]', () => {
    expect(helloWorld()).to.equal('Hello World!');
  });

});
