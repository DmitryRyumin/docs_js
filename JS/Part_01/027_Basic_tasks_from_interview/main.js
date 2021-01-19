'use strict' // Строгий режим

// * Какое будет выведено значение: let x = 5; console.log( x++ ); ?
let x = 5
console.log(x++) // => 5

// * Чему равно такое выражение: [ ] + false - null + true ?
// ? 1) [] при приведении типов, конвертируется в пустую строку '' = > [] + false = 'false'
// ? 2) 'false' - null = NaN
// ? 3) NaN + true = NaN
console.log([] + false - null + true) // => NaN

// * Что выведет этот код: let y = 1; let z = y = 2; console.log(z); ?
let y = 1
let z = (y = 2)
console.log(z) // => 2

// * Чему равна сумма [ ] + 1 + 2 ?
// ? 1) [] при приведении типов, конвертируется в пустую строку '' = > [] + 1 = '1'
// ? 2) '1' + 2 = '12'
console.log([] + 1 + 2) // => '12'

// * Что выведет этот код: console.log( "1"[0] ) ?
// ? Получение 1 символа в строке по его индексу
console.log('1'[0]) // => '1'

// * Чему равно 2 && 1 && null && 0 && undefined ?
console.log(2 && 1 && null && 0 && undefined) // => null

// * Есть ли разница между выражениями? !!( a && b ) и (a && b) ?
// ? !! приводит к boolean
console.log(!!(1 && 2)) // => true
console.log(1 && 2) // => 2

// * Что выведет этот код: console.log( null || 2 && 3 || 4 ); ?
console.log(null || (2 && 3) || 4) // => 3

// * a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// ? a и b - разные объекты
const a = [1, 2, 3],
  b = [1, 2, 3]
console.log(a == b) // => false

// * Что выведет этот код: console.log( +"Infinity" ); ?
console.log(+'Infinity') // => Infinity

// * Верно ли сравнение: "Ёжик" > "яблоко"?
// ? Особенности unicode
console.log('Ёжик' > 'яблоко') // => false

// * Чему равно 0 || "" || 2 || undefined || true || false ?
console.log(0 || '' || 2 || undefined || true || false) // => 2
