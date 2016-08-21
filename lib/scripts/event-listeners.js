var $ = require('./jquery');
const ChatRoom = require('./chatroom');
const Message = require('./message');

var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $messageInput = $('#message-field');
var $messageSendButton = $('#message-send-button');
var $charCount = $('#char-count');
var $userMessage = $('.user-message');
var $deleteMessageButton = $('.remove-message-button');

// append message to page when click send
// clear message input field when click send
$messageSendButton.on('click', function () {
  ChatRoom.messageToPage($usernameField.val(), $messageInput.val());
  ChatRoom.clearInputFields();
  ChatRoom.updateSendButtonState();
  ChatRoom.updateCharacterCount();
});

$messageInput.on('keyup', function () {
  ChatRoom.updateSendButtonState();
  ChatRoom.updateCharacterCount();
});

$chatroomBody.on('click', '.remove-message-button', function() {
  var id = $(this).parent($userMessage).attr('id');
  ChatRoom.removeMessage(id);
  $(this).closest('.user-message').remove();
});
