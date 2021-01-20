'use strict' // Строгий режим

// * Событие происходит когда весь HTML полностью загружен и пройден парсером,
// * не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов
window.addEventListener('DOMContentLoaded', () => {
  const tabsParent = document.querySelector('.tabheader__items'), // Контейнер всех табов
    tabs = tabsParent.querySelectorAll('.tabheader__item'), // Табы
    tabsContent = document.querySelectorAll('.tabcontent') // Информация которая будет изменяться динамически

  // Скрытие всех ненужных табов
  const hideTabContent = () => {
    tabsContent.forEach((item) => {
      item.style.display = 'none'
    })

    // Удаление активного таба
    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active')
    })
  }
  hideTabContent()

  // Показ нужного таба
  const showTabContent = (i = 0) => {
    console.log()
    tabsContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
  }
  showTabContent()

  // Делегирование событий
  tabsParent.addEventListener('click', (e) => {
    const target = e.target

    // * matches - продвинутый способ
    if (target && target.matches('.tabheader__item')) {
      tabs.forEach((tab, i) => {
        if (target === tab) {
          hideTabContent() // Скрытие всех ненужных табов
          showTabContent(i) // Показ нужного таба
        }
      })
    }
  })
})
