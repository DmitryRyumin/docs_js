'use strict' // Строгий режим

const arr = [11, 22, 3, 6, 8]

// arr[99] = 300

console.log(arr, arr.length) // Длина массива (последний индекс массива + 1)

arr.pop() // * Удаление последнего элемента массива
arr.push(10) // * Добавление элемента в конец массива

console.log(arr) // => [ 11, 22, 3, 6, 10 ]

// * Перебор элементов массива через for
for (let i = 0; i < arr.length; i++) {
  const el = arr[i] // Текущий элемент массива
  console.log(el)
}

// * Перебор элементов массива через for ... of (работает только с массивоподобными наборами)
// ? Можно использовать break и continue
for (const val of arr) {
  console.log(val)
}

// * Перебор элементов массива через forEach (работает только с массивоподобными наборами и пропускает пустые значения)
// ? el - текущий элемент массива
// ? i - индекс текущего элемента массива
// ? arr - ссылка на массив
arr.forEach((el, i, arr) => {
  console.log(`${i}: ${el} внутри массива ${arr}`)
})

// * Разделение и объединение строк
const str = 'Dmitry, Elena'
const namesArr = str.split(', ') // * Разделение строки
const namesStr = namesArr.join(' & ') // * Объединение массива в строку
console.log(namesArr) // => [ 'Dmitry', 'Elena' ]
console.log(namesStr) // => Dmitry & Elena

// * Сортировка массива как строки
console.log([1, 2, 10, 21, 3, 4].sort()) // => [ 1, 10, 2, 21, 3, 4 ]
// * Сортировка массива как числа через Callback функцию
console.log(
  [1, 2, 10, 21, 3, 4].sort((a, b) => {
    return a - b
  })
) // => [ 1, 2, 3, 4, 10, 21 ]

// * Псевдомассивы - структура которая хранит данные по порядку и не имеет доступа к методам обычных массивов
