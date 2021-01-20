'use strict' // Строгий режим

// Объявление переменных
const btn = document.querySelector('.btn')
let timerTimeout,
  timerInterval,
  i = 0

// Анимация
function myAnimation() {
  const elem = document.querySelector('.box')
  let pos = 0

  const id = setInterval(frame, 10)

  function frame() {
    if (pos === 300) {
      clearInterval(id)
    } else {
      pos++

      elem.style.top = pos + 'px'
      elem.style.left = pos + 'px'
    }
  }
}
myAnimation()

const logger = (text) => {
  if (i === 3) {
    clearInterval(timerInterval) // * Очистка
    i = 0
    return
  }
  console.log(text, i)
  i++
}

btn.addEventListener('click', () => {
  // * Циклический вызов функции или участка кода с фиксированной паузой между каждым вызовом
  timerInterval = setInterval(logger, 1000, 'Запуск:')
})

// * Выполнение фрагмента кода после указанной задержки
timerTimeout = setTimeout(
  (text) => {
    console.log(text)
  },
  1000,
  'Hello'
)

clearTimeout(timerTimeout) // * Очистка

// * Рекурсивный вызов setTimeout для всегда ожидания определенного времени посте выполнения функции
let id_ = setTimeout(function log() {
  console.log('Hello')
  id_ = setTimeout(log, 500)
}, 500)
