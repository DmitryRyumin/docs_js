'use strict' // Строгий режим
// * Callback - функция, которая должна быть выполнена, после того, как другая функция завершила свое выполнение

// * Второй аргумент - функция, которая будет выполнена после выполнения первой
function learnJS(lang, callback) {
  console.log(`Я учу: ${lang}`)
  callback()
}

// * Передача callback в качестве анонимной функции
learnJS('JavaScript', function () {
  console.log('Я прошел этот урок!')
})

function done() {
  console.log('Я прошел этот урок!')
}

// * В качестве callback передается обычная функция
learnJS('JavaScript', done)
