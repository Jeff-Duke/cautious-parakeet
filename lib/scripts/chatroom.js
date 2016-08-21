const Message = require('./message');
const _globals = require('./global-variables');

var ChatRoom = {
  messageArray: [],

  generateNewMessage: function(username, message) {
    message = new Message(username, message);
    this.messageToPage(message);
    this.messageToArray(message);
  },

  messageToPage: function(message) {
    if (message.username === _globals.$usernameField.text()) {
      this.userMessageToHtml(message);
    }
    else {
      this.otherMessageToHtml(message);
    }
  },

  messageToArray: function(message) {
    this.messageArray.push(message);
    this.storeTheMessageArray(this.messageArray);
  },

  storeTheMessageArray: function() {
    localStorage.setItem('messageArray', JSON.stringify(this.messageArray));
  },

  retrieveMessageArray: function() {
    var storedMessages = JSON.parse(localStorage.getItem('messageArray'));
    if (storedMessages) {
      this.messageArray = storedMessages.map(function(i) {
        return new Message(i.username, i.message, i.id);
      });
    }
    for (var i = 0; i < this.messageArray.length; i++) {
      this.messageToPage(this.messageArray[i]);
    }
  },

  otherMessageToHtml: function(message) {
    _globals.$chatroomBody.append(message.addOtherHtml());
  },

  userMessageToHtml: function(message) {
    _globals.$chatroomBody.append(message.addUserHtml());
  },

  findMessageById: function(id) {
    return this.messageArray.find(function(message) {
      return message.id === id;
    });
  },
//
//   editBody: function(id, newBody) {
//   id = parseInt(id);
//   var idea = this.findIdeaById(id);
//   idea.body = newBody;
//   this.storeTheArray();
// },

  editMessage: function(id, newMessage) {
    id = parseInt(id);
    var editedMessage = this.findMessageById(id); 
    editedMessage.message = newMessage;
    this.storeTheMessageArray();
  },

  removeMessage: function(id) {
    id = parseInt(id);
    this.messageArray = this.messageArray.filter(function(i) {
      return i.id !== id;
    });
    this.storeTheMessageArray();
  },



  clearInputFields: function () {
    _globals.$messageInput.val('');
  },

  disableSendButton: function () {
    _globals.$messageSendButton.prop('disabled', true);
  },

  enableSendButton: function () {
    _globals.$messageSendButton.prop('disabled', false);
  },

  updateCharacterCount: function() {
    _globals.$charCount.text(_globals.$messageInput.val().length);
  },

  updateSendButtonState: function() {
    if (_globals.$messageInput.val() === '') {
      this.disableSendButton();
    }
    else {
      this.enableSendButton();
    }
  },

  sendMessage: function() {
    ChatRoom.generateNewMessage(_globals.$usernameField.text(), _globals.$messageInput.val());
    ChatRoom.clearInputFields();
    ChatRoom.updateSendButtonState();
    ChatRoom.updateCharacterCount();
    ChatRoom.storeTheMessageArray();
  },

  pageLoad: function() {
    this.retrieveMessageArray();
  }
};

_globals.$(document).ready(function() {
  ChatRoom.pageLoad();
});

// setInterval(ChatRoom.botMessage.bind(ChatRoom), 10000);

module.exports = ChatRoom;
