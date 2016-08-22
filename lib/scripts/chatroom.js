const Message = require('./message');
const _globals = require('./global-variables');

var ChatRoom = {
  messageArray: [],

  generateNewMessage: function(username, message) {
    message = new Message(username, message);
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
    this.renderMessages();
  },

  renderMessages: function() {
    _globals.$chatroomBody.empty();
    if (this.messageArray.length > 10) {
      this.showTenMessages();
    }
    else {
      this.showAllMessages();
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

  showTenMessages: function() {
    for (var i = this.messageArray.length - 10; i < this.messageArray.length; i++) {
      this.messageToPage(this.messageArray[i]);
      this.enableShowOlderButton();
    }
  },

  showAllMessages: function() {
    for (var i = 0; i < this.messageArray.length; i++) {
      this.messageToPage(this.messageArray[i]);
    }
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

  enableShowOlderButton: function () {
    _globals.$showOlderButton.prop('disabled', false);
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
    this.generateNewMessage(_globals.$usernameField.text(), _globals.$messageInput.val());
    this.renderMessages();
    this.clearInputFields();
    this.updateSendButtonState();
    this.updateCharacterCount();
    this.storeTheMessageArray();
  },

  botMessage: function() {
    this.generateNewMessage('bot', 'parakeet-tweet!');
    this.renderMessages();
  },

  pageLoad: function() {
    this.retrieveMessageArray();
  }
};

_globals.$(document).ready(function() {
  ChatRoom.pageLoad();
});

module.exports = ChatRoom;
