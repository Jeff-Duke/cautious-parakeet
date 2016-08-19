var $ = require('./jquery');

function Message(username, message, id = Date.now()) {
  this.username = username || 'jeff';
  this.message = message;
  this.id = id;
}

Message.prototype.addUserHtml = function () {
  return $(`
    <article class="user-chat" id=${this.id}>
      <h2 class="chat-username" contenteditable="true">${this.username}</h2>
      <p class="chat-message" contenteditable="true">${this.message}</p>
      <button class="remove-chat-button" type="button"></button>
    </article>
    `);
};

Message.prototype.addOtherHtml = function () {
  return $(`
    <article class="other-chat" id=${this.id}>
      <h2 class="chat-username" contenteditable="false">${this.username}</h2>
      <p class="chat-message" contenteditable="false">${this.message}</p>
    </article>
    `);
};

module.exports = Message;
