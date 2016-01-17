var assert = require('assert');
var url = require('../js/helper/url');

describe('url', function() {
  describe('getRootUrl', function () {
    it('should return the absolute project path', function () {
      assert.equal(url.getRootUrl('/Users/Christian/Development/electron-quick-start/src/js'),
        '/Users/Christian/Development/electron-quick-start/src');
    });
  });
});
