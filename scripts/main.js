'use strict';
function findIndex(messageList, currentMessage) {
  return Array.prototype.indexOf.call( // Индекс текущего Li в Ul
    messageList.children, currentMessage
  );
}
// Идентификация ключа для localStorage:
// ключ меняется в зависимости от <title> страницы
const STORAGE_KEY = document.querySelector('title').textContent.split(' - ')[1];

const vm = new Vue({
  el: '.chat',
  data: {
    auth: false,
    // Пользователи
    user: {},
    users: {
      'sp@gmail.com': { login: 'Саша', password: 'poetry' },
    },

    // Сообщения
    message: '',
    messages: storage.fetch(),

    // Редактирование сообщения
    edit: '',
  },

  methods: {
    sentMessage: function() {
      this.messages.push(
        {
          name: this.user.login,
          text: this.message,
          date: '',
          from: this.user.email,
        }
      );
      this.message = '';
      manageHiding(this.user.email.split('@')[0]);
      storage.save();
    },

    login: function() {
      // Идентификация пользователя по электронной почте
      let currentUser = this.user.email;
      // Проверка наличия пользователя
      if ( Object.keys(this.users).includes(currentUser) ) {
        // Проверка логина и пароля
        this.users[currentUser].password == this.user.password &&
        this.users[currentUser].login == this.user.login ?
        this.auth = true :
        alert('Неверный логин или пароль');
      } else {
        alert('Пользователь не зарегистрирован');
      };
      // Скрывает элемент .manage у чужих сообщений
      manageHiding(this.user.email.split('@')[0]);
    },

    deleting: function(event) {
      let index = findIndex(
        document.querySelector('.sent'), // Список сообщений
        event.target.parentNode.parentNode // Текущий Li
      );

      this.messages.splice(index, 1); // Удаление сообщения из массива
      storage.save();
    },

    editing: function(event) {
      let index = findIndex(
        document.querySelector('.sent'), // Список сообщений
        event.target.parentNode.parentNode // Текущий Li
      );

      this.messages[index].text = this.edit;
      this.edit = '';
      storage.save();
    },
  },
});
