'use strict' // Строгий режим

// * Получение элемента страницы по его ID
const box = document.getElementById('box')
console.log(box)

// * Получение псевдомассива (HTMLCollection) элементов страницы по тегу
const btns = document.getElementsByTagName('button')
console.log(btns) // => HTMLCollection

// * Получение псевдомассива (HTMLCollection) элементов страницы по названию класса
const circles = document.getElementsByClassName('circle')
console.log(circles) // => HTMLCollection

// * Получение коллекции узлов (NodeList) элементов страницы по указанному селектору
// ? Можно использовать forEach
const hearts = document.querySelectorAll('.wrapper > .heart')
// ? el - текущий элемент узла
// ? i - индекс текущего элемента узла
// ? arr - ссылка на массив
hearts.forEach((el, i, heart) => {
  console.log(`${i}: ${el} внутри коллекции узлов ${heart}`)
})

// * Получение первого найденного элемента страницы по указанному селектору
const heart = document.querySelector('.wrapper > .heart')
console.log(heart)
