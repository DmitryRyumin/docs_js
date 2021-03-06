# JavaScript

---

## `Первая часть. Основы работы с JS`

### `#4` Что такое JS и как его подключить к странице

> 1. [JavaScript. Подробное руководство, Дэвид Флэнаган, 7-е издание](http://shtonda.blogspot.com/2020/01/javascript-david-flanagan-7th-edition_28.html)

### `#5` Переменные и строгий режим

> 1. [Сервис для проверки совместимости элементов с браузерами: `Caniuse.com`](https://caniuse.com/)
>
> 2. [`Strict-mode`](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode)

### `#6` Классификация типов данных

<details>
<summary>Типы данных ...</summary>

| Простые типы                                                                                   | Объекты              |
| ---------------------------------------------------------------------------------------------- | -------------------- |
| Числа `1`, `2`, `3`                                                                            | Обычные объекты `{}` |
| Строки `'string'`, `"name"`                                                                    | Массивы `[]`         |
| Логический тип (boolean) `true`/`false`                                                        | Функции `function`   |
| null                                                                                           | Объект Даты          |
| undefined                                                                                      | Регулярные выражения |
| [Symbol](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol) | Ошибки               |
| [BigInt](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/BigInt) |                      |
| NaN                                                                                            |                      |
| Infinity                                                                                       |                      |

</details>

### `#7` Простое общение с пользователем

> 1. [Оператор `typeof` возвращает строку, указывающую тип операнда](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof)
>
> 2. [`Document.write()` пишет строку в поток документа](https://developer.mozilla.org/ru/docs/Web/API/Document/write)

### `#8` Интерполяция (ES6)

> 1. [Шаблонными литералами - строковые литералы, допускающие использование выражений внутри (\` \`)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings)

### `#9` Операторы

> 1. [Таблица приоритетов операторов](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

### `#10` Система контроля версий Git и сервис GitHub

> 1. [Установка Git через `git-scm.com`](https://git-scm.com/)
>
> 2. [Git How To - знакомство с основами Git](https://githowto.com/ru)
>
> 3. [Подробное руководство](https://git-scm.com/book/ru/v2/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%9E-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B9)

### `#11` Работа с GitHub, gitignore

> 1. [Git GUI](https://desktop.github.com/)
>
> 2. [GitKraken](https://www.gitkraken.com/)

### `#12` Практика, часть 1. Начало создания приложения

### `#13` [Условные конструкции](https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/conditionals)

### `#14` [Циклы и итерации](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements#iterations)

### `#15` Практика, часть 2. Применение условий и циклов

### `#16` [Функции](https://learn.javascript.ru/function-basics)

### `#17` Методы и свойства [строк](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String) и чисел

### `#18` Практика, часть 3. Использование функций

### `#19` Callback функции

### `#20` [Объекты](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object), [деструктуризация объектов (ES6)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

> 1. [Перебор свойств объкта с помощью `for ... in`](https://learn.javascript.ru/object-for-in)

### `#21` Массивы и псевдомассивы

> 1. [Отличие `for ... of` от `for ... in`](http://coldfox.ru/article/5c7ffe64bbf20e61c12c7348/%D0%9E%D1%82%D0%BB%D0%B8%D1%87%D0%B8%D0%B5-for-of-%D0%BE%D1%82-for-in-%D0%B2-javascript)

### `#22` Передача по ссылке или по значению, [Spread оператор (`ES6-ES9`)](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### `#23` Основы ООП, прототипно-ориентированное наследование

### `#24` Практика, часть 4. Рефакторинг кода. Использование методов объекта

### `#25` Консоль разработчика. Breakpoints

### `#26` Динамическая типизация примитивных типов (`Number`, `String`, `Boolean`)

### `#27` Задачи с собеседований на понимание основ

### `#28` Получение элементов со страницы

<details>
<summary>Дополнительная информация ...</summary>

> - `getElementById` - получение элемента страницы по его ID
> - `getElementsByTagName` - получение псевдомассива (HTMLCollection) элементов страницы по тегу
> - `getElementsByClassName` - получение псевдомассива (HTMLCollection) элементов страницы по названию класса
> - `querySelectorAll` - получение коллекции узлов (NodeList) элементов страницы по указанному селектору
> - `querySelector` - получение первого найденного элемента страницы по указанному селектору

</details>

### `#29` Действия с элементами на странице

<details>
<summary>Дополнительная информация ...</summary>

> `createElement`, `classList`, `innerHTML`, `append`, `prepend`, `after`, `before`, `replaceWith`, `remove`

</details>

### `#30` Практика, часть 5. Задание на отработку действий со страницей

### `#31` [События](https://developer.mozilla.org/ru/docs/Web/Events) и их обработчики

> 1. [Список родных событий - 2012 год](https://oddler.ru/blog/i63)
>
> 2. [EventTarget.addEventListener()](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener)
>
> 3. [EventTarget.removeEventListener()](https://developer.mozilla.org/ru/docs/Web/API/EventTarget/removeEventListener)
>
> 4. [Интерфейсы, основанные на Event](https://developer.mozilla.org/ru/docs/Web/API/Event)

### `#32` Навигация по DOM-элементам, [data-атрибуты](https://developer.mozilla.org/ru/docs/Web/Guide/HTML/Using_data_attributes), преимущество for_of

<details>
<summary>Дополнительная информация ...</summary>

> `childNodes`, `firstChild`, `lastChild`, `parentNode`, `nextSibling`, `previousSibling`
>
> `firstElementChild`, `lastElementChild`, `parentElement`, `nextElementSibling`, `previousElementSibling`

</details>

### `#33` Практика, часть 6. Используем события на странице проекта

> 1. [Событие DOMContentLoaded](https://developer.mozilla.org/ru/docs/Web/Events/DOMContentLoaded)

### `#34` События на мобильных устройствах

> 1. [Cпособы осуществления обработки тач-событий разной сложности](http://youon.ru/%D0%90%D0%BD%D0%B4%D1%80%D0%BE%D0%B8%D0%B4/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/touch-sobytiya-na-javascript-multitach-realizatsiya)
>
> 2. [HAMMER.JS - сенсорные жесты](https://hammerjs.github.io/)

### `#35` Async, defer, динамические скрипты

> 1. Атрибут [`defer`](http://htmlbook.ru/html/script/defer) - откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью
>
> 2. Атрибут [`async`](http://htmlbook.ru/html/script/async) - файл `js` будет выполняться без ожидания загрузки DOM и отображения веб-страницы

---

## `Вторая часть. JavaScript в работе`

### `#37` [ClassList](https://developer.mozilla.org/ru/docs/Web/API/Element/classList) и [делегирование](https://learn.javascript.ru/event-delegation) событий

> [`matches`](https://developer.mozilla.org/ru/docs/Web/API/Element/matches)

### `#38` Создание табов в новом проекте

### `#39` Скрипты и время их выполнения. [setTimeout](https://developer.mozilla.org/ru/docs/Web/API/WindowTimers/setTimeout) и [setInterval](https://developer.mozilla.org/ru/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

> 1. [JavaScript-анимации](https://learn.javascript.ru/js-animation)

### `#40` Работа с [Date](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Date)

### `#41` Создание таймера обратного отсчета в проекте

> 1. [Сокращенный вариант записи свойств объекта](https://alligator.io/js/object-property-shorthand-es6/)

### `#42` Параметры документа, окна и работа с ними

<details>
<summary>Дополнительная информация ...</summary>

> `clientWidth`, `clientHeight`, `offsetWidth`, `offsetHeight`, `scrollWidth`, `scrollHeight`
>
> `scrollTop`, `getBoundingClientRect()`, `getComputedStyle()`, `scrollBy()`

</details>

### `#43` Создание модального окна

> 1. [Таблица кодов клавиш клавиатуры](https://keycode.info/)

### `#44` Модификации модального окна

### `#45` [Функции-конструкторы](https://learn.javascript.ru/constructor-new)

### `#46` Контекст вызова. [This](https://tproger.ru/translations/javascript-this-keyword/)

### `#47` [Классы](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes) ([ES6](https://caniuse.com/?search=ecma))

### `#48` Использование классов в реальной работе

### `#49` [Rest оператор](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters) и [параметры по умолчанию](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Default_parameters) (ES6)

---

## `Третья часть. Продвинутый JavaScript`

### `#50` Локальные сервера

> 1. [OpenServer](https://ospanel.io/)
>
> 2. [MAMP](https://www.mamp.info/ru/)

### `#51` [JSON](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON) формат передачи данных, [глубокое клонирование объектов](https://medium.com/@stasonmars/%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2-%D0%B2-javascript-d25c261a7aff)

### `#52` AJAX и общение с сервером

> 1. [Список кодов состояния HTTP](https://developer.mozilla.org/ru/docs/Web/HTTP/Status)

<details>
<summary>Дополнительная информация ...</summary>

> [XMLHttpRequest](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest), [XMLHttpRequest.readyState](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState), [XMLHttpRequest.status](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/status)

</details>

### `#53` Реализация скрипта отправки данных на сервер

### `#54` Красивое оповещение пользователя

### `#55` [Promise](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise) (ES6)

### `#56` [Fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch)

> 1. [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

### `57` Методы перебора массивов

<details>
<summary>Дополнительная информация ...</summary>

> [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), [Object.entries](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries), some, every

</details>

### `58` Подробно про npm и [JSON-server](https://github.com/typicode/json-server)

<details>
<summary>Запуск JSON-server ...</summary>

```bash
npx json-server ./db.json
```

</details>

### `59` Получение данных с сервера. [Async_Await](https://learn.javascript.ru/async-await) (ES8)

### `60` Что такое библиотеки. Библиотека [axios](https://github.com/axios/axios)

> 1. [cdnjs](https://cdnjs.com/)

### `77` Современные библиотеки и фрэймворки

<details>
<summary>Дополнительная информация ...</summary>

> [Angular](https://angular.io/)
>
> - node.js
> - TypeScript
> - Webpack
> - MVC pattern - шаблон проектирования для создания приложений
> - Angular
>
> [React](https://ru.reactjs.org/)
>
> - node.js
> - JSX - препроцессор
> - Babel
> - Webpack
> - React
>
> [Vue](https://vuejs.org/)
>
> - node.js
> - Native JS
> - Webpack
> - Vue

</details>

061 -
https://github.com/yankovalenko94/JS_task_answers/tree/master/JS_step_17

062 string.slice-
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/slice

062 -
https://github.com/yankovalenko94/JS_task_answers/tree/master/JS_step_18

063 -
https://drive.google.com/open?id=1h6FiFT-O1teeS9VJGKenB_dp9r9jgihM

064 -
http://dev-test.nemikor.com/web-storage/support-test/

064 LocalStorage-
https://tproger.ru/articles/localstorage/

065 -
https://regex101.com/

065 -RegExp
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp

066 -
https://fitseven.ru/zdorovie/metabolism/sutochnaya-norma-kaloriy

067 -
https://github.com/yankovalenko94/JS_task_answers/tree/master/JS_step_22

068 -get-set
https://learn.javascript.ru/property-accessors

069 -
http://www.codenet.ru/progr/cpp/ipn.php

069 -JavaScript
https://medium.com/devschacht/javascripts-new-private-class-fields-c60daffe361b

070 -
https://habr.com/ru/company/ruvds/blog/419997/

071 -CommonJS
http://largescalejs.ru/commonjs-modules/

071 -Webpack
https://webpack.js.org/guides/getting-started/

071 -
https://webpack.js.org/

071 -devtool
https://webpack.js.org/configuration/devtool/

072 ES6-Modules
https://frontender.info/es6-modules/

073 -JS
https://www.udemy.com/course/javascript_practice/?referralCode=9DD7B19DD5505880B724

073 -
https://github.com/yankovalenko94/JS_task_answers/tree/master/JS_step_24

074 -JS
https://www.udemy.com/course/javascript_practice/?referralCode=9DD7B19DD5505880B724

075 try-catch
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch

076 Babel
https://babeljs.io/

076 -
https://browserl.ist/

076 Core.js
https://github.com/zloirock/core-js

076 es6-promise
https://www.npmjs.com/package/es6-promise

076 foreach-polyfill
https://www.npmjs.com/package/nodelist-foreach-polyfill

076 -webpack
https://drive.google.com/open?id=1av3MQV-KVV3ovSV4rZY_T4R5JXbGzLrO

078 -
http://jquery.page2page.ru/index.php5/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0

078 cdnjs
https://cdnjs.com/

079 -
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/function*

080 -
https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni

080 CSS3-
https://html5book.ru/css3-animation/

081 -
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

082 -JS
https://www.udemy.com/course/javascript_practice/?referralCode=9DD7B19DD5505880B724

082 tiny-slider
https://github.com/ganlanyuan/tiny-slider

082 OwlCarousel
https://owlcarousel2.github.io/OwlCarousel2/

082 Slick-slider
https://kenwheeler.github.io/slick/

082 galleria.js
https://galleriajs.github.io/

082 fotorama
https://fotorama.io/

082 hammerjs
https://hammerjs.github.io/

082 -
https://nisnom.com/

082 8-JavaScript-2020-
https://www.youtube.com/watch?v=tuhEduhHCGw&t=1s
