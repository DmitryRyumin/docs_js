'use strict' // Строгий режим

let str = 'some'
let strObj = new String(str) // Приведение строки в объект для использования методов (JS это делает неявно)

console.log(typeof str, typeof strObj) // => string object

const soldier = {
  health: 400,
  armor: 100,
  say: () => {
    console.log('Soldier!')
  },
}

const john = {
  health: 200,
}

// john.__proto__ = soldier // ! Устаревший формат протитипов (наследования)
Object.setPrototypeOf(john, soldier) // * Формат протитипов (наследования)

const dm = Object.create(soldier) // * Формат протитипов на уровне создания объекта (наследования)

console.log(john.armor) // => 100 (Свойство получено из прототипа soldier)
john.say() // => Soldier!
dm.say() // => Soldier!
