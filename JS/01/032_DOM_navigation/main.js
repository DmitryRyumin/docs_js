'use strict' // Строгий режим

console.log(document.documentElement) // HTML
console.log(document.head) // Head
console.log(document.body) // Body

// * Получение Node
console.log(document.body.childNodes) // NodeList - коллекция дочерних элементов (узлов) элемента body

console.log(document.body.firstChild) // Первый дочерний элемент
console.log(document.body.lastChild) // Последний дочерний элемент

console.log(document.querySelector('#current').parentNode) // Получение родителя 1 уровня элемента
console.log(document.querySelector('#current').parentNode.parentNode) // Получение родителя 2 уровня элемента

console.log(document.querySelector('[data-current="3"]').nextSibling)
console.log(document.querySelector('[data-current="3"]').previousSibling)

// * Получение элементов
console.log('')

// * Перебор всех Nodes и избавление от ненужных
// NodeList - коллекция дочерних элементов (узлов) элемента body
for (const node of document.body.childNodes) {
  if (node.nodeName === '#text' || node.nodeName === '#comment') continue

  console.log(node)
}

console.log(document.body.firstElementChild) // Первый дочерний элемент
console.log(document.body.lastElementChild) // Последний дочерний элемент

console.log(document.querySelector('#current').parentElement) // Получение родителя 1 уровня элемента
console.log(document.querySelector('#current').parentElement.parentElement) // Получение родителя 2 уровня элемента

console.log(document.querySelector('[data-current="3"]').nextElementSibling) // Следующий элемент
console.log(document.querySelector('[data-current="3"]').previousElementSibling) // Предыдущий элемент
