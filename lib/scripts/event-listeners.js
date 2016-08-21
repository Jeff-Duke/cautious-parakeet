const ChatRoom = require('./chatroom');
const Message = require('./message');
const _globals = require('./global-variables');

_globals.$messageSendButton.on('click', function () {
  console.log('Send Button Clicked!');
  ChatRoom.sendMessage();

});

_globals.$messageInput.on('keyup', function (e) {
  ChatRoom.updateSendButtonState();
  ChatRoom.updateCharacterCount();
});

_globals.$messageInput.on('keydown', function(e) {
  if(e.which == 13) {
    e.preventDefault();
  }
});

_globals.$chatroomBody.on('click', _globals.$removeMessageButton, function() {
  var id = $(this).parent(_globals.$userMessage).attr('id');
  ChatRoom.removeMessage(id);
  ChatRoom.storeTheMessageArray();
  $(this).closest('.user-message').remove();
});

_globals.$chatroomBody.on('click', _globals.$editMessageButton, function() {
  $(this).siblings(_globals.$userMessageText).prop('contenteditable', true).focus();
});

_globals.$chatroomBody.on('focusout', _globals.$userMessageText, function() {
  var id = $(this).parent(_globals.$userMessage).attr('id');
  var newMessage = $(this).text();
  $(this).prop('contenteditable', false);
  ChatRoom.editMessage(id, newMessage);
});

_globals.$showOlderButton.on('click', function () {
  _globals.$chatroomBody.empty();
  ChatRoom.showAllMessages();
});
