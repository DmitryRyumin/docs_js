'use strict';

// в мобильном браузере не происходят события кликов, в них есть тапы
// пальцев может быть несколько
// в моб браузере события с мышкой будут отрабатывать
// touch events всего их шесть
// touchstart - на касание пальца
// touchmove - смещение пальца
// touchend - отрыв пальца
// touchenter - когда ведем пальцем по экранну и наскальзываем на элемент, где это событие
// touchleave - когда ушел за пределы элемента на который он наскользил
// touchcancel - когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();

    //     console.log('Start');
    // });
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();

    //     console.log('Move');
    // });
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();

    //     console.log('start');
    //     console.log(e.touches); // TouchList
    // });
    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault();

    //     console.log('start');
    //     console.log(e.targetTouches); // TouchList
    // });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); // по этим координатам можно строить определенную логику
    });
});
// свойства у обработчки событий при работе с мобильными устройствами
// touches - список всех пальцев, которые взаимодействуют с экраном, вне зависимости от их расположений

// targetTouches - тут уже список пальцев на элементе
// changedTouches - список пальцев которые участвуют в текущем событии
