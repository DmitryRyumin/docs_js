'use strict' // Строгий режим

// * Конкатенация строк
console.log('arr' + 'object') // => arrobject
console.log(4 + ' - object') // => 4 - object
console.log(4 + +'5') // => 9

// * Инкремент/декремент
let incr = 10,
  decr = 10

// * Постфиксная форма
incr++ // Оператор инкремента
decr-- // Оператор декремента
console.log(incr, decr) // => 11, 9

// * Префиксная форма
console.log(++incr, --decr) // => 12, 8
