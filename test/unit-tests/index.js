const assert = require('chai').assert;
const Chat = require('../../lib/scripts/chatroom');
const ChatRoom = require('../../lib/scripts/chatroom');
const _globals = require('../../lib/scripts/global-variables')

describe('chat room methods', function() {
  it.skip('should create a new message when createNewMessage() is called', function(username,message) {
    ChatRoom.generateNewMessage(username='test', message='hello');
    assert.equal('.user-message', true);
  });

  it.skip('should store a chat in the chatArray when collectNewChat is called', function(chat) {
    ChatRoom.messageArray = [];
    ChatRoom.generateNewMessage(username='test', message='hello');
    assert.equal(ChatRoom.messageArray.length, 1);
  });

  it.skip('should store the array in localStorage when storeTheChatArray() is called', function() {
    ChatRoom.generateNewMessage(username='test', message='hello');
    assert.equal(localStorage, messageArray);
  });

  it.skip('should disable the chatSendButton when disableButton() is called', function() {
    ChatRoom.disableSendButton();
    assert.equal(_globals.$messageSendButton.prop('disabled'), true);
  });

  it.skip('should enable the chatSendButton when enableButton() is called', function() {
    ChatRoom.enableSendButton();
    assert.equal(_globals.$messageSendButton.prob('disabled'), false);
  });

});
