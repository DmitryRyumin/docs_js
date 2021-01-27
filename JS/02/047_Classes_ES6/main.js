'use strict' // Строгий режим

// * Классы появились в стандарте ES6 (работает почти везде)

// * Название класса с большой буквы
class Rectangle {
  // Конструктор
  constructor(height = 20, width = 3) {
    // Свойства
    this.height = height
    this.width = width
  }

  // Методы
  calcArea() {
    return this.width * this.height
  }
}

// * Наследование класса ColoredRectangleWithText от Rectangle
class ColoredRectangleWithText extends Rectangle {
  // Конструктор
  constructor(height, width, text, bgColor) {
    super(height, width) // Выполнение родительского конструктора

    // Свойства
    this.text = text
    this.bgColor = bgColor
  }

  // Методы
  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
  }
}

// * Экземпляры класса
const square = new Rectangle()
const rect = new Rectangle(20, 30)
const coloredRectangle = new ColoredRectangleWithText(5, 5, 'класс', 'красный')

console.log(square.calcArea()) // => 60
console.log(rect.calcArea()) // => 600
console.log(coloredRectangle.calcArea()) // => 25
coloredRectangle.showMyProps() // => Текст: класс, цвет: красный
