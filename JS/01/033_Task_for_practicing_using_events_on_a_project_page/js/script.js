/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict' // Строгий режим

// * Событие происходит когда весь HTML полностью загружен и пройден парсером,
// * не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов
document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против ...'],
  }

  const movieList = document.querySelector('.promo__interactive-list'),
    promoAdvImgs = document.querySelectorAll('.promo__adv > img'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]')

  // * Обработчик события нажания на кнопку отправки формы
  addForm.addEventListener('submit', (e) => {
    e.preventDefault() // Отмена действий по умолчанию

    let newFilm = addInput.value // Значение из поля ввода
    const favorite = checkbox.checked // Значение из переключателя

    if (newFilm) {
      // * Длина > 21 символа
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)} ...`
      }

      if (favorite) {
        console.log('Добавляем любимый фильм')
      }
      movieDB.movies.push(newFilm) // Добавление нового значения в массив

      createMovieList(movieDB.movies, movieList)

      e.target.reset() // Сброс формы
    }
  })

  createMovieList(movieDB.movies, movieList)

  // * Проход по всем элементам из коллекции узлов (NodeList)
  // ? el - текущий элемент узла
  promoAdvImgs.forEach((el) => {
    el.remove()
  })

  const makeChanges = () => {
    document.querySelector('.promo__genre').textContent = 'Драма'

    document.querySelector('.promo__bg').style.cssText = 'background: url("./img/bg.jpg") top center/cover no-repeat;'
  }
  makeChanges()

  function createMovieList(films, parent) {
    movieDB.movies.sort() // Сортировка

    parent.innerHTML = '' // Очистка блока
    // * Проход по всем элементам из коллекции узлов (NodeList)
    // ? el - текущий элемент узла
    // ? i - индекс текущего элемента массива
    films.forEach((el, i) => {
      // * Добавление HTML структуры в указанную позицию
      parent.insertAdjacentHTML(
        'beforeend',
        `<li class="promo__interactive-item">${i + 1}) ${el}<div class="delete"></div></li>`
      )
    })

    // * 3
    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove() // Удаление родителя
        movieDB.movies.splice(i, 1)

        createMovieList(films, parent) // * Рекурсия
      })
    })
  }
})
