/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => /* binding */ one,
/* harmony export */   "two": () => /* binding */ two,
/* harmony export */   "default": () => /* binding */ sayHi
/* harmony export */ });
// отсюда будем экспортировать

// ключевое слово export позволяет экспортировать что-либо
let one = 1;

// второй вариант экспорта - именованный синтаксис

let two = 2;


// экспортируем именно эту функцию по умолчанию
// сущность на дефолтный импорт может быть только одна в файле
function sayHi() {
    console.log('hello');
}

// самое главное в таких экспортах, чтобы у каждой сущности было свое имя!
// в файле может быть несколько экспортов


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");

// МОдульная структура это фишка стандарта ES6
// этот стандарт точно также как синтаксис commonJS позволяет формировать модули
// при помощи специального синтаксиса

// структура этого стандарта более гибкая

// импортируем сюда. ключевое слово import {} from './'
// обязательно через фигурые скобки.
// import {one, two} from './main';

// console.log(`${one} and ${two}`);

// этот синтаксис также необходимо собирать через сборщик в один рабочий скрипт

// дополнительные плюшки этого синтаксиса
// 1) когда что-то импортируем в наш проект, то можно переименовать сущность в импорте
// ипсользуется для импорта больших названий
// import {one as first} from './main';

// 2) импорт всего, что экспортируется в файле из кооторого хотим импортировать
// import * as data from './main'; // data - объект всего, что вытащили из того файла
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

// по факту импортируется объект, из которого мы вытаскиваем определенные пермеенные
// был один объект, мы его деструктурировали на отдельные переменные

// кроме именнованого синтаксиса есть также экспорт по умолчанию.
// он может быть только один в файле
// преимущесвто этого экспорта. Когда нужно импортировать этот файл куда-то
// именно используя дефолтный экспорт. Такая сущность берется не как именнованая
// а напрямую экспортируется.
// Экспорт по умолчанию должен быть только один.

// По факту дефолтный экспорт это тоже именнованый экспорт и выглядит внутри след образом.
// но так не нужно писать каждый раз
// import {default as sayHi} from './main';

// import {one, two} from './main';

// console.log(`${one} and ${two}`);
// import sayHi from './main';

// sayHi();


// интересная фича на странице это аттрибут type module
// применяется к тегу script, чтобы использовать скрипты в качестве модулей.
// см. index.html

// сначала подключаем экспорты, потом имппорты
// нужно обязательно задать аттрибут модуль
// но стоит помнить, что браузер не собирает модули!
// но он может последовательно подключать эти файлы экспорт импорт
// если таких модулей много, то нужно будет их подключить все последовательно

// <script type='module' src="./js/main.js"></script>
// <script type='module' src="./js/script.js"></script>

// нужно правильно прописывать и пути, если вебпек без расширения понимал что это js, то браузер нет



console.log(`${_main_js__WEBPACK_IMPORTED_MODULE_0__.one} and ${_main_js__WEBPACK_IMPORTED_MODULE_0__.two}`);

(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.default)();

// этой фишкой пользуются редко, но стоит помнить об этом


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map