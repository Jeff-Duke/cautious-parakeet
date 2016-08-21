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
  $removeMessageButton: '.remove-message-button',
  $showOlderButton: $('#show-older-button'),
  $editMessageButton: '.edit-message-button',
  $userMessageText: '.user-message-text'
};

module.exports = _globals;
