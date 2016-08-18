var $ = require('./jquery');
const ChatRoom = require('./chat');



var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');

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
