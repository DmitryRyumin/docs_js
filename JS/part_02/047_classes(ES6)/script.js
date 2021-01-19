"use strict";

// Классы появились в стандарте ES6
// стандарт работает почти везде
// Класс это красивая обертка функций конструкторов (внутри это все теже функции)
// Чаще всего на сайтах и в веб приложениях будет какая-то шаблонизация
// Вместо того чтобы каждый раз создавать какой-то слайдер или какую-то статью
// полностью их описывать0, их свойства, методы и тд, мы можем создать один шаблон
// котторый говорит в общем что будет делать этот компонент, потом от него уже
// создаются отдельные экземпляры и потомки, которые будут помещаться на сайт
// Таким образом, используя один участок кода, мы можем создать много компонентов
// на сайтах, которые будут чем-то отличаться.

// название всегда с большой буквы
class Rectangle {
    // самые важные параметры - это те аргументы, которые передаются из вне
    // constructor - Для конструирования класса (в скобки пишутся аргументы извне)
    constructor(height, width) {
        // через this идет обращение к экземпляру новосозданного объекта (к каждому отдельному прямоугольнику)
        this.height = height;
        this.width = width;
    }

    // создание  методов
    calcArea() {
        return this.width * this.height;
    }
}

// как использовать класс
// в переменную помещается объект, созданный при помощи класса
const square = new Rectangle(10, 10);
const rect = new Rectangle(10, 20);

console.log(square.calcArea());
console.log(rect.calcArea());

// Принципы ООП
// 1) Абстракция - отделение концепции (шаблон) от ее экземпляра (новосозданные объекты)
// 2) Наследование - способность объекта или класса базироваться на другом объекте или классе

// будем наслоедовать его от большого класса Rectangle
// ключевое слово extends позволяет наследовать от другого класса
class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        // вызывает суперконструктор родителя (тоже самое что было у родителя)
        // с указанием тех свойств, которые нужны
        super(height, width); // всегда на первом месте в конструкторе!
        this.text = text;
        this.bgColor = bgColor;
    }

    // методы из родителя уже здесь есть, унаследованны
    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}
const div = new ColoredRectangleWithText(25, 10, 'Hello', 'red');

div.showMyProps();
console.log(div.calcArea());