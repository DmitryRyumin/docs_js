'use strict' // Строгий режим

// * В мобильном браузере не происходят события кликов, в них есть тапы
// * пальцев может быть несколько
// * в мобильном браузере события с мышкой будут отрабатывать
// * touch events всего их шесть:
// ?     touchstart - на касание пальца
// ?     touchmove - смещение пальца
// ?     touchend - отрыв пальца
// ?     touchenter - когда ведем пальцем по экрану и наскальзываем на элемент, где это событие
// ?     touchleave - когда палец ушел за пределы элемента на который он наскользил
// ?     touchcancel - когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box')
  // ? Касание экрана пальцем
  box.addEventListener('touchstart', (e) => {
    e.preventDefault()

    console.log(`Касание экрана пальцем!`)
    console.log(e.touches) // * Список всех пальцев, которые взаимодействуют с экраном
    console.log(e.targetTouches) // * Список пальцев на элементе
    console.log(e.changedTouches) // * Список пальцев которые участвуют в текущем событии
  })
  // ? Смещение пальца по экрану
  box.addEventListener('touchmove', (e) => {
    e.preventDefault()

    console.log(`Смещение пальца ${e.targetTouches[0].pageX}, ${e.targetTouches[0].pageY}`)
  })
  // ? Отрыв пальца от экрана
  box.addEventListener('touchend', (e) => {
    e.preventDefault()

    console.log('Отрыв пальца от экрана')
  })
})
