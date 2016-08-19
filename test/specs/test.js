const assert =  require('assert');

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
  	browser.url('/');
    var title = browser.getTitle();
    assert.equal(title, 'Cautious Parakeet Login');
  });
});

describe('chatroom page', function() {
  context('input tests', function() {
    it('should have a message input field', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.isExisting('#message-field');
      assert.equal(messageInput, true);
    });

    it('should see a logout button', function() {
      browser.url('/chatroom.html');
      var logout = browser.isExisting('#logout-button');
      assert.equal(logout, true);
    });

    it('should have a send button', function() {
      browser.url('/chatroom.html');
      var send = browser.isExisting('#chat-send-button');
      assert.equal(send, true);
    });

    it('should have the send button disabled by default', function() {
      browser.url('/chatroom.html');
      var send = browser.isEnabled('#chat-send-button');
      assert.equal(send, false);
    });

    it('should have the send button enabled when text is entered', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      var send = browser.isEnabled('#chat-send-button');
      assert.equal(send, true);
    });

    it('should clear the message input field when a message is sent', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#chat-send-button');
      assert.equal(messageInput.getValue(), '');
    });
  });
  context('chat-body tests', function() {
    it('should have a section for displaying chat messages', function() {
      browser.url('/chatroom.html');
      var chatRoomBody = browser.isExisting('#chatroom-body');
      assert.equal(chatRoomBody, true);
    });

    it('should append a message to the page on submit', function() {
      browser.url('/chatroom.html');

      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#chat-send-button');

      var messageOnPage = browser.getText('.chat-message');
      assert.equal(messageOnPage, 'here is an example chat');
    });

    it('should have a way of making messages unique to the submitter', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#chat-send-button');
      var messageUnique = browser.isExisting('.chat-username');

      assert.equal(messageUnique, true);
    });
  });
});
