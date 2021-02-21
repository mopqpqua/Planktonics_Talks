'use strict';

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
    messages: [],
  },

  methods: {
    sentMessage: function() {
      this.messages.push({ name: this.user, text: this.message, date: '' });
      this.message = '';
    },

    login: function() {
      let currentUser = this.user.email;
      if ( Object.keys(this.users).includes(currentUser) ) {
        this.users[currentUser].password == this.user.password &&
        this.users[currentUser].login == this.user.login ?
        this.auth = true :
        alert('Неверный логин или пароль');
      } else {
        alert('Пользователь не зарегестрирован');
      };
    },
  },
});
