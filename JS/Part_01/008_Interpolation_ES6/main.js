'use strict' // Строгий режим

const category = 'toys'

console.log('https://someurl.com/' + category + '/' + '4') // Старый вариант через конкатенацию

// * Интерполяция с помощью кавычек-бэктиков (``)
console.log(`https://someurl.com/${category}/5`)

const user = 'Alex'
console.log(`Привет, ${user}`)
