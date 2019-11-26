# NodeJS

## Менеджер пакетов для среды выполнения JavaScript Node.js (`npm`)

> [Официальная документация](https://docs.npmjs.com/)

| Команды | Описания |
| ------- | -------- |
| `npm install` | Установка всех пакетов из `package.json` |
| `npm i название_пакета -D` | Установка пакета в `devDependencies` |
| `npm i название_пакета -S` | Установка пакета в `dependencies` |
| `npm install -g npm` | Глобальная установка |
| `npm -v`<br>`npm --version` | Версия `npm` |
| `npm config get prefix` | Путь к глобальному каталогу содержащему `package.json` |
| `npm install название_пакета`<br>`npm i название_пакета` | Установка пакетов |
| `npm init`<br>`npm init -y`<br>`npm init --scope` | Создание `package.json` с вопросами (Устаревший вариант)<br>Создание `package.json` без вопросов<br>Создание `package.json` с вопросами |
| `npm list --depth=0`<br>`npm list -g --depth=0` | Список установленных локальных пакетов<br>Список установленных глобальных пакетов |

### Пакеты которые необходимо устанавливать в `devDependencies` (`npm i название_пакета -D`)
| Название пакета | Описания |
| --------------- | -------- |
| `nodemon` | Автоматический перезапуск приложения при обнаружении изменений файлов в каталоге |


## Node.js - среда выполнения JavaScript (`node`)

> [Официальная документация](https://nodejs.org/en/docs/)

| Команды | Описания |
| ------- | -------- |
| `node -v`<br>`node --version` | Версия `node.js` |
| `node` | Активания `Node` в консоле |
| `.exit` | Деактивация `Node` в консоле |

### Тестирование Node

1. Создать файл `hello.js`

    ```javascript
    console.log('Привет из Node!');
    ```

2. Запустить через `Node`

    ```shell script
    node hello.js
    ```

### Глобальный объекты

```javascript
console.log(__dirname); // Абсолютный путь к текущей директории
console.log(__filename); // Абсолютный путь к текущему файлу
```

### Экспорт/импорт из одного файла в другой

<h4 align="center"><span style="color:#EC256F;">user.js</span></h4>

```javascript
// Объект 1
const user = {
    name: 'Dmitry',
    age: 25
};

// Объект 2
const car = {
    name: 'BMW'
};

// Экспорт объектов из модуля
module.exports = {
    user, car
};
```

<h4 align="center"><span style="color:#EC256F;">index.js</span></h4>

```javascript
const obj = require('./user'); // Импорт из файла user.js

console.log(obj.user); // Вывод объекта 1
console.log(obj.car); // Вывод объекта 2
```

### Модули

#### PATH

```javascript
const path = require('path'); // Работа с путями
```

#### FS

```javascript
const fs = require('fs');// Работа с файловой системой
```

### Создание сервера

```javascript
const http = require('http');  // Поддержка HTTP
const port = 8080;  // Номер порта, который будет прослушиваться

// Создание сервера
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Привет из Node!');
});

// Прослушка сервера
server.listen(port, () => {
    console.log('Сервер прослушивает: http://localhost:%s', port);
});
```
