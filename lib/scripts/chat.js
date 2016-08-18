var $ = require('./jquery');
// const Events = require('./event-listeners');

var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');


function Chat(username, message, id = Date.now()) {
  this.username = username || 'jeff';
  this.message = message;
  this.id = id;
}

Chat.prototype.addHtml = function () {
  return $(`
    <article class="chat" id=${this.id}>
      <h2 class="chat-username" contenteditable="true">${this.username}</h2>
      <p class="chat-message" contenteditable="true">${this.message}</p>
      <button class="remove-chat" type="button"></button>
    </article>
    `);
};

var ChatRoom = {
  chatArray: [],

  collectNewChat: function(chat) {
    this.chatArray.unshift(chat);
    storeTheChatArray(this.chatArray);
  },

  messageToPage: function(username, message) {
    var chat = new Chat(username, message);
    $chatroomBody.prepend(chat.addHtml());
    collectNewChat(chat);
  },

  storeTheChatArray: function() {
    localStorage.setItem('chatArray', JSON.stringify(this.chatArray));
  },

// sortById: function() {
// sort mesages in reverse chronological order
// }

  clearInputFields: function () {
    $chatInput.val('');
  },

  inputBlank: function () {
    return $chatInput.value === '';
  },

  disableButton: function () {
    $chatSendButton.prop('disabled', true);
  },

  enableButton: function () {
    $chatSendButton.prop('disabled', false);
  }
};

module.exports = Chat;
module.exports = ChatRoom;
