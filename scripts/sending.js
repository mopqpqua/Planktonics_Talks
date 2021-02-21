'use strict';

const vm = new Vue({
  el: '.chat',
  data: {
    messages: [],
  },

  methods: {
    sentMessage: function() {
      let msgInput = document.querySelector('.talking__input');
      let msgTo = document.querySelector('.talking__contacts');
      this.messages.push(`${msgTo.value}: ${msgInput.value}`);
      msgInput.value = '';
    },
  },
});
