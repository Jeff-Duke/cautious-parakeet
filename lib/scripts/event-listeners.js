var $ = require('./jquery');
const Chat = require('./chat');


var $usernameField = $('#username-field');
var $loginSubmitButton = $('#login-submit-button');
var $logoutButton = $('#logout-button');
var $chatroomBody = $('#chatroom-body');
var $chatInput = $('#message-field');
var $chatSendButton = $('#chat-send-button');

// append message to page when click send
// clear message input field when click send
$chatSendButton.on('click', function () {
  Chat.messageToPage();
  Chat.clearInputFields();
});

// $chatInput.on('keyup', function () {
//   if (Chat.inputBlank()) { return disableButton(); }
//   return enableButton();
// });

// module.exports = Events;
