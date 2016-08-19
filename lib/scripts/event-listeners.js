var $ = require('./jquery');
const ChatRoom = require('./chatroom');
const Message = require('./message');

var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');
var $userChat = $('.user-chat');
var $deleteChatButton = $('.remove-chat-button');

// append message to page when click send
// clear message input field when click send
$chatSendButton.on('click', function () {
  ChatRoom.messageToPage($usernameField.val(), $chatInput.val());
  ChatRoom.clearInputFields();
});

$chatInput.on('keyup', function () {
  if ($chatInput.val() === '') { ChatRoom.disableButton(); }
    else { ChatRoom.enableButton(); }
});

$chatroomBody.on('click', $deleteChatButton, function() {
  var id = $(this).children($userChat).attr('id');
  ChatRoom.removeMessage(id);
});
