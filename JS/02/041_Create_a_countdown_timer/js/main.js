'use strict' // Строгий режим

// * Событие происходит когда весь HTML полностью загружен и пройден парсером,
// * не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов
window.addEventListener('DOMContentLoaded', () => {
  // ? Табы
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

  // ? Timer

  const deadline = new Date('2021-01-25') // Дедлайн таймера

  // Определение разницы между дедлайном и текущим временем
  const getTimeRemaining = (endtime) => {
    const t = new Date(endtime) - new Date(), // Разница между датами
      days = Math.floor(t / (1000 * 60 * 60 * 24)), // Количество дней
      hours = Math.floor((t / (1000 * 60 * 60)) % 24), // Количество часов
      minutes = Math.floor((t / 1000 / 60) % 60), // Количество минут
      seconds = Math.floor((t / 1000) % 60) // Количество секунд

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    }
  }

  // Добавление 0 к числам если они меньше 10
  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  // Установка таймера на страницу
  const setClock = (selector, endtime) => {
    const timer = document.querySelector(selector), // Получение DOM элемента
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000)

    updateClock() // Обновление времени на странице

    // Обновление времени на странице
    function updateClock() {
      const t = getTimeRemaining(endtime) // Определение разницы между дедлайном и текущим временем

      // Изменение HTML
      days.innerHTML = getZero(t.days)
      hours.innerHTML = getZero(t.hours)
      minutes.innerHTML = getZero(t.minutes)
      seconds.innerHTML = getZero(t.seconds)

      if (t.total <= 0) {
        days.innerHTML = '00'
        hours.innerHTML = '00'
        minutes.innerHTML = '00'
        seconds.innerHTML = '00'

        clearInterval(timeInterval)
      }
    }
  }

  setClock('.timer', deadline) // Установка таймера на страницу
})
