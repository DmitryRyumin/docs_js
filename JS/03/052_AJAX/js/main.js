'use strict' // Строгий режим

// * AJAX - Async JavaScript and XML - асинхронные запросы без перезагрузки страницы

const inputRUB = document.querySelector('#rub'),
  inputUSD = document.querySelector('#usd')

// * Обработчик событий
inputRUB.addEventListener('input', () => {
  const request = new XMLHttpRequest() // HTTP-запросы к серверу без перезагрузки страницы

  // ? 1 - метод по которому будет осуществляться запрос (GET, POST и др)
  // ? 2 - url куда будет посылаться запрос
  request.open('GET', './js/current.json') // Сбор настроек для будущего запроса
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // Какая информация будет отправлена
  request.send() // Отправка запроса

  // Получение ответа от сервера
  // ? readystatechange -  срабатывает, когда изменяется readyState
  // ? load - запрос готов
  request.addEventListener('readystatechange', () => {
    // ? request.readyState -  текущее состояние объекта XMLHttpRequest
    // ? request.status - числовой код состояния HTTP ответа XMLHttpRequest
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.response) // Данные

      inputUSD.value = (inputRUB.value / data.current.usd).toFixed(3) // Расчет курса валют
    } else {
      inputUSD.value = 0
    }
  })
})
