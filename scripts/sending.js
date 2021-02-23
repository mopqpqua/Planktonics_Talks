'use strict';
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
  },

  methods: {
    sentMessage: function() {
      this.messages.push(
        { name: this.user.login, text: this.message, date: '' }
      );
      this.message = '';
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
    },
  },
});
