'use strict' // Строгий режим

const btns = document.querySelectorAll('button')

// * ClassList
console.log(btns[0].className) // ! Устарело! Получение строки, которая содержит все классы элемента
console.log(btns[0].classList) // * Получение псевдомассив DOMTokenList, который содержит все классы элемента
console.log(btns[0].classList.item(0)) // * Получение первого класса элемента
btns[0].classList.add('red') // * Добавляет элементу указанные классы
btns[0].classList.remove('blue') // * Удаляет у элемента указанные классы
btns[0].classList.toggle('toggle') // *  Если класс у элемента отсутствует - добавляет, иначе - удаляет
console.log(btns[2].classList.contains('red')) // * Проверяет, есть ли данный класс у элемента (вернет true или false)

// Обработчик события кнопки
btns[0].addEventListener('click', () => {
  // Если у второй кнопки нет класса red
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red')
  } else {
    btns[1].classList.remove('red')
  }
})

// * Делегирование
const wrapper = document.querySelector('.btn-block') // * Обертка для всех кнопок
wrapper.addEventListener('click', (e) => {
  // * tagName
  if (e.target && e.target.tagName === 'BUTTON' && e.target.classList.contains('test')) {
    // Если у второй кнопки нет класса red
    if (!e.target.classList.contains('red')) {
      e.target.classList.add('red')
    } else {
      e.target.classList.remove('red')
    }
  }
  // * matches - продвинутый способ
  if (e.target && e.target.matches('button.admin')) {
    // Если у второй кнопки нет класса red
    if (!e.target.classList.contains('red')) {
      e.target.classList.add('red')
    } else {
      e.target.classList.remove('red')
    }
  }
})
