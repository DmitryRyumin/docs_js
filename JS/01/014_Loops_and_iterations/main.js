'use strict' // Строгий режим

let num = 50

// * Цикл while
while (num < 55) {
  console.log(num)

  num++
}

console.log('-'.repeat(23))

num = 50

// * Цикл do while
do {
  console.log(num)

  num++
} while (num < 55)

console.log('-'.repeat(23))

num = 50

// * Цикл for
for (let i = 0; i < num; i += 10) {
  if (i == 40) break // Прерывание цикла

  console.log(i)
}
