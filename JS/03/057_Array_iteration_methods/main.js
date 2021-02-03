'use strict' // Строгий режим

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart']

// * Фильтрация элементов массива
// ? filter
const shortNames = names.filter((name) => {
  return name.length < 5 // Возвращать только те имена у которых меньше 5 символов
})

console.log(shortNames) // => [ 'Ivan', 'Ann' ]

// * Изменение элементов массива
// ? map
const answers = ['IVaN', 'AnnA', 'HelLo']
const answersLower = answers.map((answer) => {
  return answer.toLowerCase()
})

console.log(answersLower) // => [ 'ivan', 'anna', 'hello' ]

// * Проверка удовлетворяет хотя-бы 1 элемента в массиве заданному в передаваемой функции условию
// ? some
const some = [4, 'qwq', 'dsadsa']
const someRes = some.some((item) => typeof item === 'number')

console.log(someRes) // => true

// * Проверка удовлетворяют ли все элементы в массиве заданному в передаваемой функции условию
// ? every
const every = [4, 'qwq', 'dsadsa']
const everyRes = every.every((item) => typeof item === 'number')

console.log(everyRes) // => false

// * Применение функции reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение
// ? reduce
const numbers = [4, 5, 1, 3, 2, 6]
// ? sum - аккумулятор
// ? curr - текущее значение массива
const numberReduce = numbers.reduce((sum, curr) => {
  return sum + curr
})

console.log(numberReduce) // => 21

const strings = ['apple', 'pear', 'plom']
// ? sum - аккумулятор
// ? curr - текущее значение массива
const stringReduce = strings.reduce((accumulator, currVal) => {
  return `${accumulator}, ${currVal}`
})

console.log(stringReduce) // => apple, pear, plom

// * Получить имена людей исключая животных
const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
}

// Конвертация объекта в массив
const newArr = Object.entries(obj)
  .filter((item) => {
    return item[1] === 'persone'
  })
  .map((item) => {
    return item[0]
  })
console.log(newArr) // => [ 'ivan', 'ann' ]
