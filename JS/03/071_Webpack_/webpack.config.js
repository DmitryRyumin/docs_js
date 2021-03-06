'use strict';

// Техническая переменная для корректной работы. Трогать ее не нужно
let path = require('path');

// объект настроек, который также экспортируется
module.exports = {
  // режим в котором работает webpack. Их 2: development и production
  // по умолчанию без конфига стоит production ( работает чуть медленнее, но включает встроенные в себя инструменты по оптимизации кода)
  // это режим для конечной сборки продукта
  // при development сборка и работа быстрее, но WP не так сильно оптимизирует код
  mode: 'development',


  // файл с которого будем начинать. По умолчанию index.js из src
  // обычно это файл в котором прописываются все зависимости require или импорт из нового стандарта
  // если нужно будет использовать несколько файлов, то используется объект
  // подробнее можно найти в документации
  entry: './src/js/script.js',

  // файл выхода. Здесь объект с и итоговым файлом
  output: {
    filename: 'bundle.js', // его название
    path: __dirname + '/dist/js' // место его хранения. __dirname - корень папки
  },

  // отслеживание изменений файла. Автоматически собирает проект, после их изменений
  // можно гибко настроить, обратившись в документации
  watch: true,

  // source map - нужны для читабельности кода в случаях ошибки и для других разработчиков
  // эта технология хранит информацию об исходниках
  // в документации представлено множество этих режимов. Выбираем под себя. Обычно это source-map
  devtool: "source-map",

  // модули и их настройка. например, babel - будет позже.
  // модули также описаны в документации и их описание
  module: {}

  // далее может идти свойство plagins. Используется не так часто, т.к.
  // все основные плагины включены в WP
};
