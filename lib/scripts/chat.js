var $ = require('./jquery');
// const Events = require('./event-listeners');

var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');


function Chat(username, message, id = Date.now()) {
  this.username = username;
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
    `)
};

var ChatRoom = {
  chatArray: [],

  collectNewChat: function(chat) {
    this.chatArray.unshift(chat);
  },

  messageToPage: function() {
    $chatroomBody.html('');
    $chatroomBody.prepend(this.chatArray.map(function(chat) {
      return chat.addHtml();
    }));
  }

// sortById: function() {
// sort mesages in reverse chronological order
// }
};

function clearInputFields () {
  $chatInput.val('');
}

function inputBlank() {
  return $chatInput.value === '';
}

function disableButton() {
  $chatSendButton.disabled = true;
}

function enableButton() {
  $chatSendButton.disabled = false;
}

module.exports = Chat;
