'use strict' // Строгий режим

// * Получение элементов страницы разными способами (см. урок 028)
const box = document.getElementById('box'),
  btns = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
  wrapper = document.querySelector('.wrapper'),
  hearts = wrapper.querySelectorAll('.heart'),
  heart = wrapper.querySelector('.heart')

console.dir(box) // Просмотр объекта

// * Изменение inline стилей объекта box
box.style.backgroundColor = 'green'
box.style.width = '500px'
// * Изменение нескольких inline стилей объекта box
box.style.cssText = 'height: 200px; border-radius: 10px;'

// * Изменение inline стилей объекта из HTMLCollection btns
btns[2].style.borderRadius = '100%'

// * Проход по всем элементам из коллекции узлов (NodeList)
// ? el - текущий элемент узла
hearts.forEach((el) => {
  el.style.backgroundColor = 'blue'
})

// * Создание нового элемента
const div = document.createElement('div')
// * Добавление класса в элемент
div.classList.add('black')
// * Добавление HTML структуры в элемент
div.innerHTML = '<h1>Привет МИР!</h1>'

// * Добавление div в конец страницы
document.body.append(div) // ! appendChild - устаревший вариант
// * Добавление HTML структуры в указанную позицию
div.insertAdjacentHTML('beforebegin', '<h2>Привет МИР!</h2>')

// * Добавление дубликата div (используется глубокое копирование) в конец .wrapper
wrapper.append(div.cloneNode(true))

// * Добавление дубликата div в начало .wrapper
wrapper.prepend(div.cloneNode())

// * Добавление дубликата div после первого .wrapper > .heart
heart.after(div.cloneNode())

// * Добавление дубликата div перед первым элементом circle
circles[0].before(div.cloneNode())

// * Замена одного элемента на странице другим элементом
circles[0].replaceWith(hearts[0])

// * Удаление элемента со страницы
// ? Дубликаты созданного элемента остаются
// div.remove()

// * Создание текстового узла
const text = document.createTextNode('Текстовый узел')
console.log(text)
