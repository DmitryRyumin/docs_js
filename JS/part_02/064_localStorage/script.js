'use strict';
// localstorage - это объект который встроен в браузер и он может хранить различные данные
// если копнуть глубже, то это свойства глобального объекта window

// этот объект уникален для каждого домена для безопасности
// объект нужен для сохранения различных настроек сайта и тд, при повторном заходе на сайт
// он существует только в пределах одного домена. Около 5 мб информации

// запись нового ключа
// если такое свойство и ключ есть, то значение перезаписывается
localStorage.setItem('key','value');

// получение данных их localstorage
localStorage.getItem('key');
console.log(localStorage.getItem('key'));

// удаление ключа
localStorage.removeItem('key');
console.log(localStorage.getItem('key'));

// очистить хранилище clear
// localStorage.clear();

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

// поработаем с хранилищем чтобы сохранять настройки

// проверим локальное хранилище на наличие ключа
// если оно было true, то назначим его
if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

// проверить запись в локал сторадже на запись про кнопку
if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

// событие change отрабатывает на изменение чекбокса
checkbox.addEventListener('change', () => {
    // изменяем хранилище при клике на галочку
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        // можно вместо удаления ключа менять его на пустую строку
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// в локальном хранилище мы можем хранить абсолютно любые настройки
// туда можно записывать и объекты и массивы

// но их нужно будет перевести в приемлемый формат, например json
// например данные о опользователе
const persone = {
    name: 'alex',
    age: 25
};

// сохраним его в локальное хранилище
// если записать его напрямую, то вместо нужного объекта будет надпись object\
// поэтому переведем для начала его в json
const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone);
console.log(localStorage.getItem('alex'));
