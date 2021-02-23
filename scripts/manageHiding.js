'ust strict';

function manageHiding(prop) {
  let divs = document.querySelectorAll('.manage');
  // Функция проверяет, совпадает ли id и prop
  // (в нашем случае prop - это user.email), и если нет,
  // то делает элемент .manage невидимым
  divs.forEach((elem) => {
    if (elem.id != prop) elem.classList.add('hidden');
  });
}
