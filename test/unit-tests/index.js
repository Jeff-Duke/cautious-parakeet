const assert = require('chai').assert;
const Chat = require('../../lib/scripts/chatroom');
const ChatRoom = require('../../lib/scripts/chatroom');

describe('our test bundle', function() {
  it('should work', function() {
    assert(true);
  });

  it.skip('should create a new message when createNewMessage() is called', function(username,message) {
    ChatRoom.createNewMessage(username, message);
    assert.equal(chat, true);
  });

  it.skip('should store a chat in the chatArray when collectNewChat is called', function(chat) {
    chat = new Chat();
    ChatRoom.collectNewChat(chat);
    assert.equal(ChatRoom.chatArray.length, 1);
  });

  it.skip('should store the array in localStorage when storeTheChatArray() is called', function() {
    storeTheChatArray(ChatRoom.chatArray);
    assert.equal(localStorage, chatArray);
  });

  it.skip('should disable the chatSendButton when disableButton() is called', function() {
    ChatRoom.disableButton();
    assert.equal($chatSendButton, disabled);
  });

  it.skip('should enable the chatSendButton when enableButton() is called', function() {
    ChatRoom.enableButton();
    assert.equal($chatSendButton, enabled);
  });

});
