# Корпоративный чат для компании

Я написал небольшое приложение для корпоративного чата.

Я решил писать его на фреймворке vue.js, что сделало мой код довольно простым и минималистичным, где управление элементами осуществляется короткими методами. Плюс к этому - vue.js позволил мне очень лаконично реализовать работу с localStorage.

Маршрутизацию изначально я хотел делать на vue router, но, к сожалению, эта технология мне мало знакома, и её изучение заняло бы много времени. Поэтому маршрутизацию я сделал, просто написав одинаковые страницы talking.html и working.html, внеся в них небольшие, соответствующие им, различия. Я знаю, это дублирование кода, и это не очень круто, но надеюсь на ваше понимание. Ниже вы сможете прочитать описание моего приложения.

## PLANKTONICS TALKS
На главной странице вы увидите две ссылки справа и слева: TALKING приведёт вас к разговорному чату, предназначенному для лёгкого общения, флуда; WORKING же приведёт вас к рабочему чату, с более строгими правилами и админами.
![GitHub Logo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c298eea-de08-4e5b-b91e-4d212311f915/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210226T125107Z&X-Amz-Expires=86400&X-Amz-Signature=2ca13af79bc25c1801697336af021d662db2e5097c0ab983ba76b9c47fd8e609&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

Давайте зайдём в **TALKING**.

Первое, что вы увидите, это авторизацию. Здесь всё просто, так как серверной части нет, я добавил одного пользователя в массив пользователей. Вот его данные:
* Почта - sp@gmail.com
* Логин - Саша
* Пароль - poetry

Введите их в соответствующие поля, нажмите на кнопку "войти", и вы попадёте на страницу чата.
![GitHub Logo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e2809371-0eb9-4f6b-b703-8da6ee04d5b6/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210224T170839Z&X-Amz-Expires=86400&X-Amz-Signature=7bd6a8c41c937c718a4ef4844456d6e2c87986f55e78bca7c2118090bc8e4d3a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

В списке сообщений вы сможете увидеть старые сообщения. Если это ваша первая сессия, они распаковываются из файла package_talking.json при помощи функции fetch() (которая находится в файле storage_messages.js). В самом низу поле ввода нового сообщения, для отправки которого нужно лишь нажать enter. В сообщении содержится имя отправителя (зависит от значения текущего user), текст и дата. Свои сообщения вы можете редактировать и удалять. Для редактирования нужно нажать на поле "редактировать текст" (или перейти к нему при помощи tab), поменять то, что вы хотите, а затем применить изменения, нажав enter.

Вверху, под шапкой приложения есть две кнопки: Rules и Day meme. Это дополнительные функции, которые я решил добавить в разговорный чат. Rules отобразит правила данного чата, а Day meme покажет мем сегодняшнего дня.


Вернёмся к главной странице и перейдём по ссылке WORKING.

Сначала будет авторизация, где нужно ввести те же данные, что и в TALKING.
Работа с сообщениями осуществляется тем же способом, что в предыдущем разделе. Сверху вы так же сможете увидеть Rules, которая отображает окно с более строгими правилами чата и To do. Это небольшой список задач. Чтобы добавить новую задачу, нужно ввести её текст в соответствующее поле и просто нажать enter.
![GitHub Logo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7b5db274-a5cf-4f8f-a2c7-dcb0b6bd7bfc/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210224T170900Z&X-Amz-Expires=86400&X-Amz-Signature=a84f2bd509e8a6d31ece428ad0533fd3a1f0b2ed66f078eb6fb7ac7d2127f65c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

## Файлы
![GitHub Logo](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2bc881b-4449-4ac1-a6f0-ae36d6816adf/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210224T170913Z&X-Amz-Expires=86400&X-Amz-Signature=ef7301351cbb8808e1275f0664dddca420dc9fab3803378e06d2494604587be2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)
В папке scripts хранятся два файла: main.js и storage_messages.js. Первый управляет всем интерактивом на странице, написан он на vue.js. Второй же реализует сохранение сообщений в localStorage.

В папке styles три файла: первый, index.css - нужен для того, чтобы описать особенности внешнего вида главной страницы, второй, talking.js управляет стилями на странице talking.html (отвечающими за отображение дополнительных секций rules и day meme), и третий, working.css, который делает то же самое, но для working.html.

В index.html, talking.html, working.html хранятся: главная страница, страница разговорного и страница рабочего чата соответственно.

В package_talking.json и package_working.json содержатся начальные сообщения для чатов.

И наконец, в style.css хранятся основные стили для страниц, которые подключаются ко всем трём html страницам.

**Спасибо за просмотр моего приложения. Было приятно писать его.**
