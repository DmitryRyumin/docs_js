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
| `nodemon` | Автоматический перезапуск сервера при обнаружении изменений файлов в каталоге |


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
let dirname = __dirname; // Абсолютный путь к текущей директории
let filename = __filename; // Абсолютный путь к текущему файлу
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

#### PATH (Работа с путями)

##### Импорт модуля

```javascript
const path = require('path'); // Работа с путями
```

##### Имя файла (`basename`)

```javascript
let basename = path.basename(__filename);
```

##### Имя папки (`basename`)

```javascript
let basename = path.basename(__dirname);
```

##### Абсолютный путь к файлу (`dirname`)

```javascript
let dirname = path.dirname(__filename);
```

##### Расширение файла (`extname`)

```javascript
let ext = path.extname(__filename);
```

##### Информация об файле в виде объекта (`parse`)

```javascript
let parse = path.parse(__filename);
```

##### Информация об папке в виде объекта (`parse`)

```javascript
let parse = path.parse(__dirname);
```

##### Соединение строк в один путь (`join`)

```javascript
let join = path.join(__dirname, 'test', 'second.html');
```

##### Соединение строк в один корректный путь (`resolve`)

```javascript
let resolve = path.resolve(__dirname, './test', 'second.html');
```

##### Нормализация пути в валидный путь (`normalize`)

```javascript
let normalize = path.normalize(
    path.join(
        __dirname, '/////test', 'second.html'
    )
);
```

#### FS (Работа с файловой системой)

##### Импорт модуля

```javascript
const fs = require('fs'); // Работа с файловой системой
```

##### Создание папки (`mkdir`)

```javascript
// Создание папки
fs.mkdir(
    path.join(__dirname, 'notes'), err => {
        if (err) throw err;

        console.log('Папка была создана')
    }
);
```

##### Создание файла с текстом (`writeFile`)

```javascript
// Создание файла
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Привет мир!',
    err => {
        if (err) throw err;

        console.log('Файл был создан')
    }
);
```

##### Дозапись в файл (`appendFile`)

```javascript
// Дозапись в файл
fs.appendFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    ' Текст',
    err => {
        if (err) throw err;

        console.log('Файл был дозаписан')
    }
);
```

##### Чтение из файла (`readFile`)

```javascript
// Чтение из файла
fs.readFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'utf-8',
    (err, data) => {
        if (err) throw err;

        console.log(data)
    }
);
```

##### Переименование файла (`rename`)

```javascript
// Переименование файла
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('Файл переименован')
    }
);
```

#### OS (Работа с операционной системой)

##### Импорт модуля

```javascript
const os = require('os'); // Работа с операционной системой
```

##### Платформа (`platform`)

```javascript
let platform = os.platform()
```

##### Архитектура (`arch`)

```javascript
let arch = os.arch()
```

##### Информация о потоках (`arch`)

```javascript
let cpus = os.cpus()
```

##### Свободная память (`freemem`)

```javascript
let freemem = os.freemem()
```

##### Общий объем памяти (`totalmem`)

```javascript
let totalmem = os.totalmem()
```

##### Корневая директория (`homedir`)

```javascript
let homedir = os.homedir()
```

##### Время работы операционной системы, в секундах (`uptime`)

```javascript
let uptime = os.uptime()
```

#### EVENTS (Прослушка событий)

##### Импорт модуля

```javascript
const eventEmitter = require('events'); // Прослушка событий
```

#### HTTP (Создание сервера)

##### Импорт модуля

```javascript
const http = require('http'); // Создание сервера
```

#### NODEMON (Автоматический перезапуск сервера при обнаружении изменений файлов в каталоге)

1. В файле `package.json`

    ```json
    {
      ...
      "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js"
      },
      ...
    }
    ```

2. Запуск сервера

    ```shell script
    npm run start
    ```

    ```shell script
    npm run dev
    ```

### Создание сервера

```javascript
const http = require('http');  // Поддержка HTTP
const port = 8080;  // Номер порта, который будет прослушиваться

// Создание сервера
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Привет из Node!</h1>');
    res.end();
});

// Прослушка сервера
server.listen(port, () => {
    console.log('Сервер прослушивает: http://localhost:%s', port);
});
```
