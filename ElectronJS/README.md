# ElectronJS

## Кросс-платформенные приложения с помощью HTML, CSS и JavaScript (`Electron`)

> [Официальная документация](https://electronjs.org/docs?)

| Команды | Описания |
| ------- | -------- |
| `npm install electron` | Установка |
| `npm install --save electron` | Установка в текущую директорию |
| `electron --version` | Версия `electron` |

## Шаблон

```javascript
/*
Кросс-платформенные приложения с помощью HTML, CSS и JavaScript

app - контролирование жизненного цикла
BrowserWindow - рендеринг окон
*/
const { app, BrowserWindow } = require('electron');
const path = require('path'); // Работа с путями

let win = null; // Глобальная ссылка на главное окно приложения

// Создание окна браузера
function createWindow() {
    // Создание окна браузера
    win = new BrowserWindow({
        // Настройки WEB-страниц
        webPreferences: {
            nodeIntegration: true // Интеграция NodeJS
        }
    });

    // Загрузка HTML страницы в окно браузера
    win.webContents.loadFile(path.join(__dirname, 'index.html'));

    // Вызывается, когда окно закрывается
    win.on('closed', () => {
        win = null
    });
}

/*
Вызывается, когда Electron закончит инициализацию и готов к созданию окон браузера
*/
app.on('ready', () => {
    createWindow(); // Создание окна браузера
});

// Вызывается, когда все окна будут закрыты
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

/*
ТОЛЬКО MAC OS
Вызывается, когда Electron закончит инициализацию и готов к созданию окон браузера
*/
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
```