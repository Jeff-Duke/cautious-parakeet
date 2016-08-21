var $ = require('./jquery');

function Message(username, message, id = Date.now()) {
  this.username = username;
  this.message = message;
  this.id = id;
}

Message.prototype.addUserHtml = function () {
  return $(`
    <article class="user-message" id=${this.id}>
      <h4 class="message-username" contenteditable="false">${this.username}</h4>
      <p class="user-message-text" contenteditable="true">${this.message}</p>
      <button class="remove-message-button" type="button"></button>
    </article>
    `);
};

Message.prototype.addOtherHtml = function () {
  return $(`
    <article class="other-message" id=${this.id}>
      <h4 class="message-username" contenteditable="false">${this.username}</h4>
      <p class="user-message-text" contenteditable="false">${this.message}</p>
    </article>
    `);
};

module.exports = Message;
