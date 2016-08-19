var $ = require('./jquery');

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

Chat.prototype.addUserHtml = function () {
  return $(`
    <article class="chat" id=${this.id}>
      <h2 class="chat-username" contenteditable="true">${this.username}</h2>
      <p class="chat-message" contenteditable="true">${this.message}</p>
      <button class="remove-chat" type="button"></button>
    </article>
    `);
};

Chat.prototype.addOtherHtml = function () {
  return $(`
    <article class="chat" id=${this.id}>
      <h2 class="chat-username" contenteditable="false">${this.username}</h2>
      <p class="chat-message" contenteditable="false">${this.message}</p>
    </article>
    `);
};

var ChatRoom = {
  chatArray: [],

  collectNewChat: function(chat) {
    this.chatArray.unshift(chat);
    this.storeTheChatArray(this.chatArray);
  },

  messageToPage: function(username, message) {
    var chat = new Chat(username, message);
    $chatroomBody.prepend(chat.addUserHtml());
    this.collectNewChat(chat);
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
  },

  botChat: function() {
    var botChat = new Chat(username = 'bot', message = 'Hello!');
    this.collectNewChat(botChat);
    $chatroomBody.prepend(botChat.addOtherHtml());
  },

//localStorage Setup
// whenever a chat message is created by anyone it should get pushed to the chatroom array
// as soon as a chat is pushed to the array, the array should be JSON stringified and sent to local storage
// we need to create a new function that JSON parses the array, creates a new array (.map)
// then iterate over that array, create new chats, put the chats on the page.
//      if statements for if username is your username run the addUserHtml function
//      if username !== your username run the addOtherHtml function
// that function should only be called on page load


};

setInterval(ChatRoom.botChat.bind(ChatRoom), 10000);

//timeout function (every 10 seconds?)
// create new Chat(username=bot,message)
// "hello i'm still here!  are you lonely?"

module.exports = Chat;
module.exports = ChatRoom;
