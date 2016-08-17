const assert = require('chai').assert
const Chat = require('../../lib/scripts/chat')

describe('our test bundle', function () {
  it('should work', function () {
    assert(true);
  });
  it('should gather input values and add new chat to chatArray', function () {
    var username = 'login2';
    var message = 'good morning';
    var chat = new Chat(username, message);

    Chat.ChatRoom.collectNewChat(chat);
    assert.equal(ChatRoom.chatArray, [chat]);
  });
});

// collectNewChat: function(chat) {
//   this.chatArray.unshift(chat);
// },
//

// collectNewChat: function() {
//   this.chatArray.unshift(new Chat($usernameField.val(), $chatInput.val()));
// },
