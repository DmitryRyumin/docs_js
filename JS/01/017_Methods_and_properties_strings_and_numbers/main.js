'use strict' // Строгий режим

// * Свойства и методы объектов можно найти в документации, а также в консоле браузера с помощью: console.dir(object)

const test = 'test'
const arr = [1, 2, 3]

console.log(test.length, arr.length) // Длина строки и массива
console.log(test[2]) // => s - получение символа строки по его номеру
console.log(test.toUpperCase()) // => TEST

const fruit = 'Some fruit'

console.log(fruit.indexOf('fruit')) // => 5 - с какой позиции начинается искомая подстрока

const logg = 'Hello world'

console.log(logg.slice(0, 5)) // => Hello - извлечение части строки с указанных позиций, конечный символ не включается
console.log(logg.slice(6)) // => world
console.log(logg.slice(-5)) // => world

console.log(logg.substr(6, 5)) // => world - возвращение количества символов, начинающихся с указанной позиции

// * Числа
const num = 12.2
console.log(Math.round(num)) // => 12 - округление числа до ближайшего целого

const numTest = '12.2px'
console.log(parseInt(numTest)) // => 12 - конвертация числа
console.log(parseFloat(numTest)) // => 12.2 - конвертация числа с плавающей точкой
