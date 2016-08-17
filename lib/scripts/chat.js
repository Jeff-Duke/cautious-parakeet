var $ = require('./jquery');

var $usernameField = $('#username-field');
var $submitButton = $('.submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSubmitButton = $('#chat-submit-button');


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

var ChatRoom= {
  chatArray: [],

  collectNewChat: function(chat) {
    this.chatArray.unshift(chat);
  },

// talk through method below
  messageToPage: function() {
    $chatroomBody.html('');
    $chatroomBody.prepend(this.chatArray.map(function(chat) {
      return chat.addHtml();
    }));
  }

};

module.exports = Chat;

//
// function ChatRoom() {
//   this.chatArray = [];
//
//   this.collectNewChat = function(chat) {
//     this.chatArray.unshift(chat);
//   };
//
// // talk through method below
//   this.messageToPage = function() {
//     $chatroomBody.html('');
//     $chatroomBody.prepend(this.chatArray.map(function(chat) {
//       return chat.addHtml();
//     }));
//   };
//
// }
//
// module.exports = Chat;
// module.exports = ChatRoom;
