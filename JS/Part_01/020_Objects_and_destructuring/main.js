'use strict' // Строгий режим

// * Объекты в JS это ассоциативные массивы

// ! Создание объекта - не используется
const objNotUsed = new Object({
  name: 'Dmitry',
})
console.log(objNotUsed)

// * Создание объекта
const options = {
  name: 'div',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red',
  },
  // Метод
  makeTest: function () {
    return 'Test'
  },
}
console.log(options.name, options.makeTest())

// * Деструктуризация объекта - процесс распаковки массива или объекта в переменные (ES6)
const { border, bg } = options.colors
console.log(border, bg) // => black red

// * Удаление свойства из объекта
delete options.name
console.log(options)

let counter = 0 // Счетчик свойств объета

// * Перебор свойств объекта
for (let key in options) {
  if (typeof options[key] === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${key}->${i} имеет значение ${options[key][i]}`)

      counter++
    }

    continue
  }

  console.log(`Свойство ${key} имеет значение ${options[key]}`)
  counter++
}

console.log(counter)

// * Получение ключей объекта
console.log(Object.keys(options), Object.keys(options).length)
