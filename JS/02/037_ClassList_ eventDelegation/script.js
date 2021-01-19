'use strict';
const btns = document.querySelectorAll('button');

// // чтобы обратится к списку классам нужно исп. classList
// // console.log(btns[0].classList.length); // 2
// // у этого свойства есть полезные методы
// // console.log(btns[0].classList.item(1)); // получаем класс под определенным индексом

// console.log(typeof(btns[0].classList));
// console.log(btns[0].classList);
// console.log(btns[0].classList.add('red', 'sdfsdfsfd')); // можно добавить классы(и не один)
// console.log(btns[0].classList.remove('blue')); // можно удалить классы

// // toggle - если такой класс есть на элементе, то он будет убран, если его нет то добавлен
// console.log(btns[0].classList.toggle('blue')); // используем toggle

// console.log(btns[1].classList.add('red'));

// // Contains - проверяем наличие нужного класса на элементе. возвращает bool
// if (btns[0].classList.contains('red')){
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// свойство className - устарело и его не стоит использовать

// делегирование событий
// Берется элемент, родитель для всех кнопок, и работаем с ним. Обработчик события на него
// а внутри уже проверяем на что кликнули

const wrapper = document.querySelector('.btn-block');

// wrapper.addEventListener('click', (event) => {

//     // первое условие направлено на проверку вообще существования таргета у элемента
//     // это дополнительная проверка ( рекомендация от гугла)
//     if (event.target && event.target.tagName == 'BUTTON') {
//         console.log('Hello');
//     }
//     // также можно проверять и nodeName. classList
//     // if (event.target && event.target.classList.contains('blue')) {
//     //     console.log('blue');
//     // }

// });

// тоже самое только через перебор, но вот на созданый динамически элемент это не работает
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });


wrapper.addEventListener('click', (event) => {

    // продвинутое делегирование от гугла с помощью совпадений (matches)
    // указываются селекторы которые нас интересуют
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
    // также можно проверять и nodeName. classList
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.log('blue');
    // }

});
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// итог. Делегирование один из полезных приемов для работы с DOM Деревом.
// он отлично подходит если есть много элементов с одинаоковми обработчкиами
// причем при динамическом изменение элементов оно аткже применяется и к ним
// а также пишется меньше кода и экономится память браузера
