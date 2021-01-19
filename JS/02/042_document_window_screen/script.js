'use strict';

const box = document.querySelector('.box');
// const width = box.clientWidth;
// const height = box.clientHeight;

// // box-sizing:border-box в верстке меняет поведение скрипта. Пэддинги будут
// // включаться в ширину элемента. Так считать удобнее.
// // Полоса прокрутки и маржин при clientW(H) не учитывается
// console.log(width, height);

// получание размеров с учетом скроллов и маржинов видимой части элемента(та что установлена в css)
// const width = box.offsetWidth;
// const height = box.offsetHeight;
// console.log(width, height);


// для получения элемента с учетом невидимой части
// стоит отметить что ширина полосы прокрутки не включается
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

// предыдущие значения для получения размеров нельзя модифицировать, они для чтения

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
//     box.style.overflow = 'hidden';
// });

// а вот свойства scrollTop и scrollLeft их можно менять
// scrollTOp показыавет сколько текста отлистано в пикселях
// btn.addEventListener('click', () => {
//     console.log(box.scrollTop);
// });

// методы для получения координат элемента
// отсчитываются они с верхнего левого угла и зависят от  размера монитора
// bottom считается от верхней границы  до нижней границы элемента

console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// определение стилей css (computed styles), которые уже применены к элементу
// изменять их нельзя, только лишь прочитать

const style = window.getComputedStyle(box);
// console.log(style);
console.log(style.display);

// важная особенности этого метода
// 1) При его помощи можно получить стили псевдоэлементов
// это второй аргумент метода


// насчет scrollTop у документа. document.scrollTop не сработает
// чтобы получать глобальные размеры у документа нужно использовать documentElement
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.scrollTop);

// scrollTop можно изменять и перемещать пользователя по странице

// методы scrollBy и scrollTo у window
// scrollBy(0,400) перемещает от текущей позиции на 400 пикселей
// scrollTO(0,400) перемещает относительно всей страницы сверху на 400 пикселей
