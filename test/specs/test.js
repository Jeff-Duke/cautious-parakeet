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
      var send = browser.isEnabled('#chat-send-button');
      assert.equal(send, false);
    });

    it('should clear the message input field when a message is sent', function() {
      browser.url('/chatroom.html');
      var messageInput = browser.getValue()
      //get the message input field
      //insert some text
      //click the send button
      //test that the field is now empty
    });
  });
  context('chat-body tests', function() {
    it('should have a section for displaying chat messages', function() {
      //verify chat-room-body section isExisting
    });

    it('should append a message to the page on submit', function() {
      //get the message input
      //add text and send
      //verify a new article exists in the chat body

    });

    it('should have messages appended in reverse-chron order', function() {
      //add a messages
      //add another messages
      //verify message 2 is found on page before message 1

    });

    it('should have a way of making messages unique to the submitter', function() {
      //add a messages
      //verify the message css is a certain way
      //verify the message displays the username of the sender
    });
  });
});
