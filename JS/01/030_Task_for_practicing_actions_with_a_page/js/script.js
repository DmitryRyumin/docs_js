/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict' // Строгий режим

const movieDB = {
  movies: ['Логан', 'Лига справедливости', 'Ла-ла лэнд', 'Одержимость', 'Скотт Пилигрим против ...'],
}

// * 1
const promoAdvImgs = document.querySelectorAll('.promo__adv > img')

// * Проход по всем элементам из коллекции узлов (NodeList)
// ? el - текущий элемент узла
promoAdvImgs.forEach((el) => {
  el.remove()
})

// * 2
document.querySelector('.promo__genre').textContent = 'Драма'

// * 3
document.querySelector('.promo__bg').style.cssText = 'background: url("./img/bg.jpg") top center/cover no-repeat;'

// * 4 и 5
const movieList = document.querySelector('.promo__interactive-list')
movieList.innerHTML = '' // Очистка блока
movieDB.movies.sort() // Сортировка
// * Проход по всем элементам из коллекции узлов (NodeList)
// ? el - текущий элемент узла
// ? i - индекс текущего элемента массива
movieDB.movies.forEach((el, i) => {
  // * Добавление HTML структуры в указанную позицию
  movieList.insertAdjacentHTML(
    'beforeend',
    `<li class="promo__interactive-item">${i + 1}) ${el}<div class="delete"></div></li>`
  )
})
