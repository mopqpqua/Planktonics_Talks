const storage = {
  save: function() {
    let storage = JSON.stringify(vm.messages);
    window.localStorage.setItem(STORAGE_KEY, storage);
  },

  fetch: function() {
    // Проверка на наличие хранилища по ключу в localStorage
    if ( !window.localStorage.getItem(STORAGE_KEY) ) {
      // Если оно пустое, возвращаем стартовые сообщения
      return JSON.parse(startingMessages);
    }

    let messages = window.localStorage.getItem(STORAGE_KEY);
    return JSON.parse(messages);
  },
}
