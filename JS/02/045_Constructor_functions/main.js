'use strict' // Строгий режим

// * ES5

// * Функция является объектом в который можно записать какие-то методы и свойства
function User(name, id) {
  // Свойства отображаемые подобно объектам
  this.name = name
  this.id = id
  this.human = true
  // Метод
  this.hello = () => {
    console.log(this.name, this.id)
  }
}

// * Метод через прототип (работает быстрее чем метод через конструктор)
User.prototype.exit = function () {
  console.log(`Пользователь ${this.name} ушел`)
}

// * Создание новых объектов
const ivan = new User('Иван', 28), // ? => User { name: 'Иван', id: 28, human: true }
  alex = new User('Alex', 30) // ? => User { name: 'Alex', id: 30, human: true }

ivan.hello() // ? => Иван 28
alex.hello() // ? => Alex 30

ivan.exit() // ? => Пользователь Иван ушел

// * ES6
