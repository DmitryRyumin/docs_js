'use strict' // Строгий режим

let a = 5,
  b = a // * Копирование значения

b += 5

console.log(a, b) // => 5 10

const obj = {
  a: 5,
  b: 1,
}

const copy = obj // * Ссылка на объект (не копирование)
copy.a = 10

console.log(obj, copy) // => { a: 10, b: 1 } { a: 10, b: 1 }

// * Копирование объектов
function copyObj(obj) {
  let objCopy = {} // Новый объект

  // * Перебор свойств объекта
  for (const key in obj) {
    const el = obj[key] // Значение

    objCopy[key] = el // Процесс копирования
  }

  return objCopy // Новый объект
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const copyNumbers = copyObj(numbers) // * Копирование объектов (способ 1)

copyNumbers.a = 10
copyNumbers.c.x = 15 // ! Ссылка, а не копирование, так как это поверхностная копия, а не глубокая

console.log(copyNumbers) // => { a: 10, b: 5, c: { x: 15, y: 4 } }
console.log(numbers) // => { a: 2, b: 5, c: { x: 15, y: 4 } }

// * Копирование объектов (способ 2)
const numbers2 = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const add = {
  d: 17,
  e: 20,
  c: {
    x: 48,
    y: 200,
  },
}

console.log(Object.assign(numbers2, add)) // => { a: 2, b: 5, c: { x: 48, y: 200 }, d: 17, e: 20 }
console.log(Object.assign({}, add)) // => { d: 17, e: 20, c: { x: 48, y: 200 } }

// * Копирование массивов
const oldArr = ['a', 'b', 'c', { d: 10, q: 2 }]
const newArr = oldArr.slice()

newArr[1] = 'Что-то новое'
newArr[3]['d'] = 'Что-то новое' // ! Ссылка, а не копирование, так как это поверхностная копия, а не глубокая
console.log(newArr) // [ 'a', 'Что-то новое', 'c', { d: 'Что-то новое', q: 2 } ]
console.log(oldArr) // [ 'a', 'b', 'c', { d: 'Что-то новое', q: 2 } ]

// * Оператор разворота Spread
const video = ['youtube', 'vimeo', { d: 10, q: 2 }, 'rutube', [1, 2, 3]],
  blogs = ['wordpress', 'livejournal', 'blogger'],
  internet = ['vk', ...video, ...blogs, 'instagram']

console.log(internet) // => [ 'vk', 'youtube', 'vimeo', { d: 10, q: 2 }, 'rutube', [ 1, 2, 3 ], 'wordpress', 'livejournal', 'blogger', 'instagram']

const log = (a, b, c) => {
  console.log(a, b, c)
}

const nums = [2, 5, 9]

// * Передача аргументов с помощью Spread оператора
log(...nums) // => 2 5 9

// * Копирование массивов с помощью Spread оператора
const oldArr2 = ['a', 'b', 'c', { d: 10, q: 2 }]
const newArr2 = [...oldArr2]

newArr2[1] = 'Что-то новое'
newArr2[3]['d'] = 'Что-то новое' // ! Ссылка, а не копирование, так как это поверхностная копия, а не глубокая
console.log(newArr2) // [ 'a', 'Что-то новое', 'c', { d: 'Что-то новое', q: 2 } ]
console.log(oldArr2) // [ 'a', 'b', 'c', { d: 'Что-то новое', q: 2 } ]

// * Копирование объектов (способ с помощью Spread оператора)
const numbers3 = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
}

const add3 = { ...numbers3 }
add3['a'] = 9
add3['c']['x'] = 10 // ! Ссылка, а не копирование, так как это поверхностная копия, а не глубокая
console.log(numbers3) // => { a: 2, b: 5, c: { x: 10, y: 4 } }
console.log(add3) // => { a: 9, b: 5, c: { x: 10, y: 4 } }
