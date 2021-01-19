'use strict';
// promise позволяет работать с различными асинхронными операциями
// которые бывают например в таймаутах, либо при запросах на сервер

// промисы - обещания. Если произошло что-то, то обещаем выполнить какое-то действие
// например после событий клика мы хотим чтобы произошло какое-то действие
// для этого постоянно используются колбеки, однако часто встречаются моменты
// когда действия должны идти одно за другим после выполнения предыдущего

// Напр. Запрос на сервер, в ответ получаем какие-то данные, после этого
// выполняем какие-то действия с этими данными и опять их отправляем назад на сервер
// после второй отправки опять получаем ответ и что-то делаем опять
// именно: мы можем выполнить действие, когда предыдущее действие было успешно выполнено
// для такого кода можно написать много функций обратного вызова и это превратится
// в большой нечитабельный код (callback hell)


// синхронный код
console.log('Запрос данных...');

// асинхронный код в котором разрастается дерево колбеков
// вместо этих сеттаймаутов могут быть другие операции - работа с сервером
setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
}, 2000);

// чтобы избавиться от множества колбеков, используют промисы
// колбек функция внутри промиса принимает всегда два аргумента
// resolve и reject - они обозначают функции которые мы будем передавать
// resolve - что-то выполнилось правильно (обещание выполнилось)
// reject - обещание не выполнилось
console.log('Запрос данных...');

const req = new Promise(function(resolve, reject) {
    // перепишем callback hell сверху под промисы
    // имитация асинхронного кода через таймауты
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };
        // если все отработало правильно, то вызывается функция resolve()
        // а если что-то не так то reject
        resolve(product); // в качестве аргумента передаем нужные данные

    }, 2000);
});

// then - метод выполняется на промисе в случае положительного исхода (функция resolve)
// then обрабатывает положительные результаты. Внутри себя принимает тот аргумент
// с функцией который называется resolve/

// req.then((product) => {
//     const req2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });

//     req2.then(data => {
//         console.log(product);
//     });
// });

// преимущество промисов перед колбеками - их можно возвращать из then по цепочке
// когда одна асинхронная операция выполнится мы выполним следующию и т.д.
// правильная реализация:

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
// т.к. в предыдущем варианте вернули промис мы дальше  можем его обработать при помощи the
}).then(data => {
    // если и здесь нужно будет опять работать с асинхронными операциями
    // то можно вернуть и отсюда промис и дальше ее обработать
    // но возвращать можно и не только промисы
    data.modify = true;
    return data;

}).then((data) => {
    // даже синхронный код можно передавать по цепочке
    // благодаря этому мы добиваемся последовательности код, несмотря какой он внутри
    console.log(data);
    // для обработки reject используют catch
    // finally позволяет выполнить действие в любом исходе промиса. Всегда.
    // обычно ставится в самом конце.
}).finally(() => {
    console.log('Finally');
});


const test = time => {
    // иногда можно опустить reject(случается очень редко)
    return new Promise((resolve) => {
        setTimeout(() => resolve(), time);
    });
};
// test(1000).then(() => console.log('1000ms'));
// test(2000).then(() => console.log('2000ms'));
// Promise.all() - внутрь принимает массив с промисами
// эта команда позволяет убедиться что все промисы точно выполнены
// можно делать несколько запросов на разные сервера с ответом в разные промежутки
// но мы хотим чтобы все запросы использовались сразу как только загрузятся
// и только потом что-то делать.
// promise.all Ждет окончание всех промисов которые были переданы в массив и только потом
// будет что-то выполнять

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});

// работает противоположно, как только самый первый правильно отработает, то запустится код
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
});