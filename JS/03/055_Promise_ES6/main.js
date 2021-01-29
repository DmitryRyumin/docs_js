'use strict' // Строгий режим

// * Promise (обещания) позволяют работать с различными асинхронными операциями в таймаутах или при запросах на сервер

// ? Пример асинхронный кода
console.log('Запрос данных ...')

// асинхронный код в котором разрастается дерево колбеков
// вместо setTimeout могут быть другие операции - работа с сервером
setTimeout(() => {
  console.log('Подготовка данных ...')

  const product = {
    name: 'TV',
    price: 2000,
  }

  setTimeout(() => {
    product.status = 'order'
    console.log(product)
  }, 2000)
}, 2000)

// ? Пример Promise
console.log('Запрос данных ...')

// * Создание промиса
// ? resolve - обещание выполнилось
// ? reject - обещание не выполнилось
const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Подготовка данных ...')

    const product = {
      name: 'TV',
      price: 2000,
    }

    resolve(product)
  }, 2000)
})

// * Выполняется на Promise в случае положительного выполнения
prom.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order'
      resolve(product)
    }, 2000)
  })
    .then((data, reject) => {
      data.modify = true

      if (data.modify === true) {
        reject()
      }

      return data
    })
    .then((data) => {
      console.log(data)
    })
    .catch(() => {
      console.error('Произошла ошибка ...')
    })
    .finally(() => {
      console.log('Конец ...')
    })
})

// * Promise
const test = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

// test(1000).then(() => {
//   console.log('1000 ms')
// })
// test(2000).then(() => {
//   console.log('2000 ms')
// })

// ? Выполнение всех промисов
Promise.all([test(1000), test(2000)]).then(() => {
  console.log('Все промисы выполнены успешно')
})

// ? Выполнение операции после выполнения первого самого быстрого промеса
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('Выполнен первый промис')
})
