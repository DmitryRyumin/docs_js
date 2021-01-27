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
    const t = new Date(endtime) - (-endtime.getTimezoneOffset() * 60 * 1000 - 0) - new Date(), // Разница между датами
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

  // ? Modal window
  const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]')

  // Показ модального окна
  const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden' // Запрет прокрутки окна
    // clearInterval(modalTimerID)
  }

  // Показ модального окна
  modalTrigger.forEach((el) => {
    el.addEventListener('click', openModal)
  })

  // Скрытие модального окна
  const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
  }

  // Скрытие модального окна
  modalClose.addEventListener('click', closeModal)

  // Скрытие модального окна
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Скрытие модального окна по нажатию клавиши
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.style.display === 'block') {
      closeModal()
    }
  })

  // const modalTimerID = setTimeout(openModal, 3000)

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal() // Показ модального окна
      window.removeEventListener('scroll', showModalByScroll) // Удаление обработчика событий
    }
  }

  // Прокрутка страницы
  window.addEventListener('scroll', showModalByScroll)

  // * Класс для создания карточки товара
  class MenuCard {
    // Конструктор
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      // Свойства
      this.src = src
      this.alt = alt
      this.title = title
      this.descr = descr
      this.price = price
      this.transfer = 27
      this.changeToUAH()
      this.parent = document.querySelector(parentSelector)
      this.classes = classes
    }

    // Методы

    // Конвертация валюты
    changeToUAH() {
      this.price = this.price * this.transfer
    }

    // Верстка сайта
    render() {
      const element = document.createElement('div')
      // Длина Rest оператора
      if (this.classes.length === 0) {
        this.classes.push('menu__item')
      }

      this.classes.forEach((className) => element.classList.add(className))
      element.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">
          ${this.descr}
        </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
    `
      this.parent.append(element)
    }
  }

  // Создание карточки товара
  new MenuCard(
    './img/tabs/vegy.jpg',
    'vegy',
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu__field > .container'
  ).render()

  new MenuCard(
    './img/tabs/elite.jpg',
    'elite',
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    14,
    '.menu__field > .container',
    'menu__item'
  ).render()

  new MenuCard(
    './img/tabs/post.jpg',
    'post',
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    21,
    '.menu__field > .container',
    'menu__item'
  ).render()

  // ? AJAX FORMS
  const forms = document.querySelectorAll('form'),
    message = {
      loading: 'Загрузка',
      success: 'Спасибо! Скоро с Вами свяжемся',
      fail: 'Что-то пошло не так ...',
    }

  forms.forEach((form) => {
    postData(form)
  })

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      // Создание нового элемента
      const statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      statusMessage.textContent = message.loading
      form.append(statusMessage)

      const request = new XMLHttpRequest() // HTTP-запросы к серверу без перезагрузки страницы

      // ? 1 - метод по которому будет осуществляться запрос (GET, POST и др)
      // ? 2 - url куда будет посылаться запрос
      request.open('POST', './server.php') // Сбор настроек для будущего запроса

      // Подготовка данных через FormData (в верстке должны быть name)
      const formData = new FormData(form)

      // Парсинг formData
      const object = {}
      formData.forEach((val, key) => {
        object[key] = val
      })

      const json = JSON.stringify(object)

      request.setRequestHeader('Content-type', 'application/json; charset=utf-8') // Какая информация будет отправлена
      request.send(json) // Отправка запроса

      // Получение ответа от сервера
      // ? readystatechange -  срабатывает, когда изменяется readyState
      // ? load - запрос готов
      request.addEventListener('load', () => {
        // ? request.status - числовой код состояния HTTP ответа XMLHttpRequest
        if (request.status === 200) {
          console.log(request.response)
          statusMessage.textContent = message.success
          form.reset()
          setTimeout(() => {
            statusMessage.remove()
          }, 2000)
        } else {
          statusMessage.textContent = message.fail
        }
      })
    })
  }
})
