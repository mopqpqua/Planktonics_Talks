'use strict';
// Функция, помогающая найти нужный индекс сообщения.
function findIndex(messageList, currentMessage) {
  return Array.prototype.indexOf.call( // Индекс текущего Li в Ul
    messageList.children, currentMessage
  );
}
// Идентификация ключа для localStorage:
// ключ меняется в зависимости от <title> страницы:
// если страница working - ключ = 'working',
// а если 'talking', то ключ = 'talking'.
const STORAGE_KEY = document.querySelector('title').textContent.split(' - ')[1];

const vm = new Vue({
  el: '.chat',
  data: {
    auth: false,
    // Пользователи
    user: {}, // Текущий
    users: {
      'sp@gmail.com': { login: 'Саша', password: 'poetry' },
    }, // Все


    // Сообщения
    message: '', // Текущее
    messages: storage.fetch(), // все


    // Редактирование сообщения
    edit: '', // Новое сообщение, значение берётся из .input__textInp


    // Список задач
    task: '', // Текущая, значение берётся из .todoList__input
    todos: [], // все
  },

  methods: {
    sentMessage: function() {
      this.messages.push(
        {
          name: this.user.login,
          text: this.message,
          date: this.date,
          from: this.user.email,
        }
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

    addTodo: function() {
      this.todos.push(this.task);
      this.task = '';
    },

    show: function(event) {
      // Функция меняет значение visibility у элементов .navigation
      let currentNav = event.target.nextElementSibling;

      if (getComputedStyle(currentNav).visibility == 'hidden') {
        currentNav.style.visibility = 'visible';
      } else {
        currentNav.style.visibility = 'hidden';
      }
    },
  },

  computed: {
    // Геттер значения date
    date: function() {
      let date = new Date();
      return `${date.getDate()}.${date.getMonth() + 1}|${date.getHours()}:${date.getDate()}`;
    },
  },
});
