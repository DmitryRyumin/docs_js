'use strict' // Строгий режим

// * API - Application Programming Interface - интерфейс приложения с которым можно взаимодействовать
// * (набор данных и возможностей, которые предоставляет какое-то готовое решение, например DOM API)

// ? Fetch API позволяет общаться с сервером
// * GET запрос
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))

// * POST запрос
fetch('https://jsonplaceholder.typicode.com/posts/', {
  method: 'POST',
  body: JSON.stringify({ name: 'Alex' }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
