var $ = require('./jquery');

function Message(username, message, id = Date.now()) {
  this.username = username;
  this.message = message;
  this.id = id;
}

Message.prototype.addUserHtml = function() {
  return $(`
    <article class="user-message" id=${this.id}>
    <header class="user-message-header">
    <h4 class="user-message-username" contenteditable="false">${this.username}</h4>
    </header>
    <body class = "user-message-body">
    <p class="user-message-text" contenteditable="false">${this.message}</p>
    </body>
    <button class="remove-message-button" type="button"></button>
    <button class="edit-message-button" type="button"></button>
    </article>
    `);
  };

  Message.prototype.addOtherHtml = function() {
    return $(`
      <article class="other-message" id=${this.id}>
      <header class="other-message-header">
      <h4 class="other-message-username message-username" contenteditable="false">${this.username}</h4>
      </header>
      <p class="other-message-text" contenteditable="false">${this.message}</p>
      </article>
      `);
    };

    module.exports = Message;
