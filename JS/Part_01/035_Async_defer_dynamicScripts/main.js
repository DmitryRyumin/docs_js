'use strict' // Строгий режим

const p = document.querySelectorAll('p')
console.log(p)

// * Async
const loadScript = (src) => {
  const script = document.createElement('script') // Создание нового элемента страницы
  script.src = src
  script.async = false // Блокировка ассинхронности
  document.body.append(script) // Дабавление нового элемента в конец Body
}

// * За счет async = false скрипты будут загружаться друг за другом
loadScript('./test.js')
loadScript('./some.js')
