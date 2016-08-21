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
  // if(_globals.$messageInput !== '')
  //   ChatRoom.sendMessage();
});

_globals.$chatroomBody.on('click', '.remove-message-button', function() {
  var id = $(this).parent(_globals.$userMessage).attr('id');
  ChatRoom.removeMessage(id);
  ChatRoom.storeTheMessageArray();
  $(this).closest('.user-message').remove();
});
