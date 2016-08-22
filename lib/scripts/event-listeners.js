const ChatRoom = require('./chatroom');
const Message = require('./message');
const _globals = require('./global-variables');

_globals.$messageSendButton.on('click', function () {
  ChatRoom.sendMessage();
  ChatRoom.botMessage();
});

_globals.$messageInput.on('keyup', function() {
  ChatRoom.updateSendButtonState();
  ChatRoom.updateCharacterCount();
});

_globals.$messageInput.on('keypress', function(e) {
  if(e.which == 13) {
    e.preventDefault();

  }
  if(e.which == 13 && $(this).val() !== '' ) {
    ChatRoom.sendMessage();
    ChatRoom.botMessage();
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
