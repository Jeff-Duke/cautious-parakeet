var $ = require('./jquery');

var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');

var ChatRoom = {
  messageArray: [],

  collectNewMessage: function(message) {
    this.messageArray.unshift(message);
    this.storeTheChatArray(this.messageArray);
  },

  messageToPage: function(username, message) {
    var message = new Message(username, message);
    $chatroomBody.append(message.addUserHtml());
    this.collectNewChat(message);
  },

  //localStorage Setup
  // whenever a chat message is created by anyone it should get pushed to the chatroom array
  // as soon as a chat is pushed to the array, the array should be JSON stringified and sent to local storage
  storeTheMessageArray: function() {
    localStorage.setItem('messageArray', JSON.stringify(this.messageArray));
  },
  // we need to create a new function that JSON parses the array, creates a new array (.map)
  // then iterate over that array, create new chats, put the chats on the page.
  retrieveMessageArray: function() {
    var storedMessages = JSON.parse(localStorage.getItem('messageArray'));
    if (storedMessages) {
      this.messageArray = storedChats.map(function(i) {
        return new Message(i.username, i.message, i.id);
      });
    }
    this.messageToPage();
  },

  findMessageById: function(id) {
    return this.messageArray.find(function(message) {
      return chat.id === id;
    });
  },

  removeMessage: function(id) {
    id = parseInt(id);
    this.messageArray = this.messageArray.filter(function(i) {
      return i.id !== id;
    });
    this.storeTheChatArray();
  },

  //      if statements for if username is your username run the addUserHtml function
  //      if username !== your username run the addOtherHtml function
  // that function should only be called on page load

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

  botMessage: function() {
    var botMessage = new Message(username = 'Bot', message = 'Hello!');
    this.collectNewMessage(botMessage);
    $chatroomBody.append(botMessage.addOtherHtml());
  },
};

setInterval(ChatRoom.botMessage.bind(ChatRoom), 10000);

module.exports = ChatRoom;
