'use strict' // Строгий режим

const box = document.querySelector('.box'), // Получение элемента
  btn = document.querySelector('button')

const width = box.clientWidth, // Ширина элемента
  height = box.clientHeight, // Высота элемента
  offsetWidth = box.offsetWidth, // Ширина элемента включая border
  offsetHeight = box.offsetHeight, // Высота элемента включая border
  scrollWidth = box.scrollWidth, // Ширина элемента включая прокрутку
  scrollHeight = box.scrollHeight // Высота элемента включая прокрутку

console.log(width, height, offsetWidth, offsetHeight, scrollWidth, scrollHeight)

btn.addEventListener('click', () => {
  console.log(box.scrollTop) // Сколько текста было пролистано
})

console.log(box.getBoundingClientRect()) // Размер элемента и его позиция относительно viewport (часть страницы, показанная на экране, и которую мы видим)

const style = window.getComputedStyle(box) // * Получение стилей элемента из CSS
console.log(style)
