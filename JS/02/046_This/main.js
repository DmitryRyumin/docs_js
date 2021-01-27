'use strict' // Строгий режим

// * Контекст вызова - это то, что окружаетфункцию и в каких условиях она вызывается
// ? Функция может вызываться 4-мя способами и в каждом контекст вызова отличается

// * 1 - обычная функция
function showThis() {
  // ? Без use strict this = window
  // ? С use strict this = undefined
  console.log(this)
}
showThis()

// * 1 - обычная функция
function showThis2(a, b) {
  // ? Без use strict this = window
  // ? С use strict this = undefined
  console.log(this)

  function sum() {
    // ? Без use strict this = window
    // ? С use strict this = undefined
    console.log(this)

    return a + b // Получение значений через замыкание функции
  }

  console.log(sum())
}
showThis2(4, 5)

// * 2
const obj = {
  a: 20,
  b: 15,
  sum: function () {
    console.log(this) // ? this = obj

    function shout() {
      console.log(this)
    }
    shout() // ? this = undefined

    // ? У стрелочных функций нет своего контекста событий и поэтому они ссылаются на родителя
    const shoutObj = () => {
      console.log(this)
    }
    shoutObj() // ? this = obj
  },
}
obj.sum()

// * 3 - функция-конструктор
function User(name, id) {
  // Свойства отображаемые подобно объектам
  this.name = name
  this.id = id
  this.human = true
}

// * Создание новых объектов
const ivan = new User('Иван', 28) // ? => User { name: 'Иван', id: 28, human: true }
console.log(ivan)

// * 4 - ручное представление контекста
function sayName(s1, s2) {
  console.log(this)
  console.log(this.name, s1, s2)
}

const user = {
  name: 'John',
}

// ? Передача контекста в функцию
sayName.call(user, 'Dr', 'Smith') // Передача аргументов через запятую
sayName.apply(user, ['Smith', 'Dr']) // Передача аргументов в массиве

function count(num) {
  return this * num
}

const double = count.bind(2) // ? 2 передается за место this
console.log(double(10)) // => 20

const btn = document.querySelector('button')

// ? У стрелочных функций нет своего контекста событий, поэтому следует использовать event.target, который = this
btn.addEventListener('click', function () {
  console.log(this)
})
