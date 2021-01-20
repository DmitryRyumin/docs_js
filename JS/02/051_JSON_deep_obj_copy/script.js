'use strict';
// JSON это набор пар ключ-значение как и в объекте. Все строки в двойных кавычках

// напрямую на сервер объект отправить нельзя, сервер не понимает такие вещи
// необходимо превратить в вариант, который можно отправлять
// все браузеры имеют встроенные объекты JSON Для работы с данными
const person = {
    name: 'Alex',
    phone: '+88005553535',
};

// JSON.stringify - преобразовани в JSON
// в таком формате их можно уже передавать  на сервер
console.log(JSON.stringify(person));

// JSON.parse - работает наоборот, преобразовывает json в объекты js
console.log(JSON.parse(JSON.stringify(person)));

// преимущество - маленький размер файла и простота чтения

// разбор глубоких копий
// они создаются через json
const person1 = {
    name: 'Alex',
    phone: '+88005553535',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

// сначала превращаем объект в json, а потом его же распарсим в объект JS
// при этом будет создан глубокий клон, который не зависит от первоначального объекта
const clone = JSON.parse(JSON.stringify(person1));
clone.parents.mom = 'ANn';
console.log(person1);
console.log(clone);