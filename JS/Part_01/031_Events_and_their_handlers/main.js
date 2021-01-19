'use strict' // Строгий режим

// * Событие - сигнал от браузера, о том что, что-то произошло

// * 3 способа назначить обработчик событий:
// ! 1) Через HTML атрибут (не используется)
// * 2) Использование DOM

const btn = document.querySelector('button.btn')
// ! Не используется так как нельзя удалять обработчик событий
// // btn.onclick = () => {
// //   console.log('Нажатие на кнопку 4 через onclick')
// // }
// * Верный вариант назначения обработчика событий (1 кнопка)
const events = {
  colors: {
    green: 'rgb(0, 128, 0)',
    red: 'rgb(255, 0, 0)',
  },
  // ? e - объект события
  changeBackground: (e) => {
    console.log('Нажатие на кнопку 4 через addEventListener')
    // * Объект, содержащий значения всех CSS-свойств элемента
    if (window.getComputedStyle(e.target, null).backgroundColor === events.colors['green']) {
      e.target.style.cssText = `background-color: ${events.colors['red']}` // Изменение стилей
      events.deleteElement()
    } else {
      e.target.style.cssText = `background-color: ${events.colors['green']}` // Изменение стилей
    }
  },
  deleteElement: () => {
    btn.removeEventListener('click', events.changeBackground) // Удаление слушателя
  },
}
btn.addEventListener('click', events.changeBackground) // Добавление слушателя

// * 2 кнопка
const btnOverlay = document.querySelector('.overlay')
btnOverlay.addEventListener('click', (e) => {
  console.log(e.target) // ? e - объект события
  console.log(e.currentTarget) //  Один и тот же обработчик события присваивается нескольким элементам
  console.log(e.type) // ? Тип события
})

// * Отмена стандартного поведения в браузере
const link = document.querySelector('a')
link.addEventListener(
  'click',
  (e) => {
    e.preventDefault() // Отмена клика на ссылку

    console.log(e.target)
  },
  { once: true } // Дополнительные опции
)
