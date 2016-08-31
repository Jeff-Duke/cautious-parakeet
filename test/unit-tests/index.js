const assert = require('chai').assert;
const Chat = require('../../lib/scripts/chatroom');
const ChatRoom = require('../../lib/scripts/chatroom');
const _globals = require('../../lib/scripts/global-variables');

describe('chat room methods', function() {
  it.skip('should create a new message when generateNewMessage() is called', function(username,message) {
    ChatRoom.generateNewMessage(username='test', message='hello');
    assert.equal('.user-message', true);
  });

  it('should store a chat in the messageArray when messageToArray is called', function(done) {
    ChatRoom.messageArray = [];
    ChatRoom.generateNewMessage('test', 'hello');
    assert.equal(ChatRoom.messageArray.length, 1);
    done();
  });

  it('should store the array in localStorage when storeTheMessageArray() is called', function() {
    ChatRoom.messageArray = [];
    ChatRoom.generateNewMessage('test', 'hello');
    var test = JSON.parse(localStorage.messageArray)
    assert.equal(test[0].id, ChatRoom.messageArray[0].id);
    assert.equal(test[0].username, ChatRoom.messageArray[0].username);
    assert.equal(test[0].message, ChatRoom.messageArray[0].message);
  });

});
