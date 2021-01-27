'use strict' // Строгий режим

// * JSON (JavaScript Object Notation) - это набор пар ключ-значение
const person = {
  name: 'Dmitry',
  phone: +79811234567,
  parents: {
    mom: 'Olga',
    dad: 'Mike',
  },
}

// * Преобразование объекта в строку JSON
console.log(JSON.stringify(person)) // => {"name":"Dmitry","phone":79811234567,"parents":{"mom":"Olga","dad":"Mike"}}

const clone = JSON.parse(JSON.stringify(person)) // Глубокое клонирование
clone.parents.dad = 'Alex'

// * Преобразование строки JSON в объект
console.log(person, clone)
