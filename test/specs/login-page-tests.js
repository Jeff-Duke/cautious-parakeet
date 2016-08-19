const assert =  require('assert');

describe('welcome page', function(){
  browser.url('/');
  it('should be able to grab the page title', function(){
    var title = browser.getTitle();
    assert.equal(title, 'Cautious Parakeet Login');
  });
});
