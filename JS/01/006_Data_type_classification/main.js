'use strict' // Строгий режим

// * Числа
let number = 4.6
console.log(4 / 0) // Infinity
console.log(-4 / 0) // -Infinity
console.log('string' * 9) // NaN (не число)

// * Строки
const person = 'Dmitry'

// * Логический тип
const bool = true

// * Null
// console.log(res) // ReferenceError

// * Undefined
let und
console.log(und) // Undefined

// * Объект
const obj = {
  // Свойства объекта
  name: 'John',
  age: 25,
  isMarried: false,
}

console.log(obj.name, obj['age'])

// * Массив (частный случай объекта - нумерация с нуля)
const arr = ['plum.png', 'orange.jpg', 6, { name: 'Alex' }, 'apple.bmp']
console.log(arr[2])
