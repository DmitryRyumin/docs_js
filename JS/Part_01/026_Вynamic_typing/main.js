'use strict' // Строгий режим

// * Динамическая типизация - возможность одного типа данных превращаться в другой

// ! 1) В String - не рекомендуется
console.log(typeof String(null)) // => string
console.log(typeof String(4)) // => string

// * 2) В String - конкатенация
console.log(typeof (5 + '')) // => string

const num = 5
console.log('https://vk.com/catalog/' + num) // => https://vk.com/catalog/5
const fontSize = 26 + 'px'
console.log(fontSize) // => 26px

// ! 1) В Number - не рекомендуется
console.log(typeof Number('4')) // => number

// * 2) В Number - унарный плюс
console.log(typeof +'4') // => number

// * 3) В Number
console.log(parseInt('15px', 10)) // => 15, 2 аргумент - система исчисления

// * В Boolean - всегда false: 0, '', null, undefined, NaN, все остальное true

// ! 1) В Boolean - не рекомендуется
console.log(Boolean('4'))

// * 2) В Boolean
console.log(typeof !!'44444') // boolean
console.log(!!'44444') // true
