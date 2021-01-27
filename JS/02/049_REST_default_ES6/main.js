'use strict' // Строгий режим

// * Rest оператор (записывается всегда последним)
const log = function (a, b, ...rest) {
  console.log(a, b, rest)
}
log('basic', 'rest', 'operator', 'usage') // => basic rest [ 'operator', 'usage' ]

// * Параметры по умолчанию ES6
function calcOrDouble(number, basis = 2) {
  console.log(number * basis)
}
calcOrDouble(3)
