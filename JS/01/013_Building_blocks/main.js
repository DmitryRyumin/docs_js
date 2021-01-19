'use strict' // Строгий режим

const num = 50

// * if ... else
if (4 == 9) {
  console.log('Ок!')
} else {
  console.log('Error!')
}

// * else if
if (num < 49) {
  console.log('Error!')
} else if (num > 100) {
  console.log('Много ...')
} else {
  console.log('Ок!')
}

// * Тернарный оператор
num == 50 ? console.log('Ок!') : console.log('Error!')

// * switch
switch (num) {
  case 49:
    console.log('Error!')
    break
  case 50:
    console.log('Ок!')
    break
  default:
    console.log('По умолчанию!')
    break
}
