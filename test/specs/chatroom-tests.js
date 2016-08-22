const assert =  require('assert');


describe('chatroom page', function() {
  browser.url('/chatroom.html');

  context('input tests', function() {
    it('should have a message input field', function() {
      var messageInput = browser.isExisting('#message-field');
      assert.equal(messageInput, true);
    });

    it('should have a send button', function() {
      var send = browser.isExisting('#message-send-button');
      assert.equal(send, true);
    });

    it('should have the send button disabled by default', function() {
      var send = browser.isEnabled('#message-send-button');
      assert.equal(send, false);
    });

    it('should have the send button enabled when text is entered', function() {
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      var send = browser.isEnabled('#message-send-button');
      assert.equal(send, true);
    });

    it('should clear the message input field when a message is sent', function() {
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#message-send-button');
      assert.equal(messageInput.getValue(), '');
    });
  });
  
  context('chat-body tests', function() {
    it('should have a section for displaying chat messages', function() {
      var chatRoomBody = browser.isExisting('#chatroom-body');
      assert.equal(chatRoomBody, true);
    });

    it('should append a message to the page on submit', function() {
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#message-send-button');
      var messageOnPage = browser.getText('.user-message-text');
      assert.equal(messageOnPage[0], 'here is an example chat');
    });

    it('should have a way of making messages unique to the submitter', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.element('#message-field');
      messageInput.setValue('here is an example chat');
      browser.click('#message-send-button');
      var messageUnique = browser.isExisting('.user-message-username');

      assert.equal(messageUnique, true);
    });
  });
});
