# NodeJS

## [Установка Node](https://nodejs.org/en/)

### Узнать версию `Node`

```shell script
node -v
# Или
node --version
```

### Узнать версию `npm` (менеджер пакетов)

```shell script
npm -v
# Или
npm --version
```

### Тестирование Node

1. Создать файл `hello.js`

    ```javascript
    console.log('Привет из Node!');
    ```

2. Запустить через `Node`

    ```shell script
    node hello.js
    ```

## Создание `package.json`

```shell script
npm init -y
```

## Установка пакетов из `npm`

```shell script
npm install название_пакета
# Или
npm i название_пакета
```

## Создание сервера

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