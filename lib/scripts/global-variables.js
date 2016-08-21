var $ = require('./jquery');

_globals = {
  $: require('./jquery'),
  $usernameField: $('#username-field'),
  $loginSubmitButton: $('#login-submit-button'),
  $logoutButton: $('#logout-button'),
  $chatroomBody: $('#chatroom-body'),
  $messageInput: $('#message-field'),
  $messageSendButton: $('#message-send-button'),
  $charCount: $('#char-count'),
  $userMessage: $('.user-message'),
  $deleteMessageButton: $('.remove-message-button')
};

module.exports = _globals;
