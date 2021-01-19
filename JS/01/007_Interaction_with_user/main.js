'use strict' // Строгий режим

// * Вывод на экран окна с сообщением, которое приостанавливает выполнение скрипта, пока пользователь не нажмет "ОК"
// alert('Привет!') // Всплывающее окно

// * Вывод окна с вопросом и двумя кнопками: "OK" и "CANCEL"
// const result = confirm('Ты здесь?')
// console.log(result)

// * Вывод окна с заголовком и полем для ввода текста, а также кнопками "OK" и "CANCEL"
// const answer = prompt('Вам есть 18?', '')
// console.log(answer)

// * Добавление ответов от пользователя в массив
const answers = []
answers[0] = prompt('Ваше имя?', '')
answers[1] = prompt('Ваша фамилия?', '')
answers[2] = +prompt('Сколько вам лет?', '') // + перед prompt преобразует значение в числовой тип данных

document.write(answers) // Вывод значений из массива в поток документа
console.log(typeof answers) // Тип переменной
console.log(typeof null) // Общепризнанная ошибка, показывает object

// Цикл по всем ответам от пользователя
for (let i = 0; i < answers.length; i++) {
  console.log(answers[i])
}
