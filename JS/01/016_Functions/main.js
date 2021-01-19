'use strict' // Строгий режим

// * Замыкание функции - это сама функция вместе со всеми внешними переменными, которые ей доступны

// * function declaration
function calc(a, b) {
  return a + b // позволяет вернуть значение во внешний мир
}

console.log(calc(2, 4))
console.log(calc(5, 6))
console.log(calc(10, 6))

// * function expression
const logger = function () {
  console.log('Hello')
}
logger()

// * Стрелочная функция (ES6)
const calculate = (a, b) => {
  return a + b
}

console.log(calculate(10, 14))
