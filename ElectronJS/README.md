# ElectronJS

## Кросс-платформенные приложения с помощью HTML, CSS и JavaScript (`Electron`)

> [Официальная документация](https://electronjs.org/docs?)

| Команды | Описания |
| ------- | -------- |
| `npm install electron` | Установка |
| `npm install --save electron` | Установка в текущую директорию |
| `electron --version` | Версия `electron` |

## Горячие клавиши

| Набор клавиш | Описания |
| ------------ | -------- |
| `command+option+I`<br />`Ctrl+Shift+I` | Открытие инструментов разработчика `Mac OS`<br />Открытие инструментов разработчика `Windows` или `Linux` |

## Задача сборки приложения через `task` ( `Ctrl+Shift+B`) в Visual Studio Code

> В папке `.vscode` создать файл `tasks.json`

<h4 align="center"><span style="color:#EC256F;">tasks.json</span></h4>

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "type": "npm",
            "script": "start",
            "path": ".",
            "group": {
                "kind": "build",
                "isDefault": true
            }
        }
    ]
}
```

## Запуск приложения со встроенным отладчиком (`F5`) в Visual Studio Code

> В папке `.vscode` создать файл `launch.json`

<h4 align="center"><span style="color:#EC256F;">launch.json</span></h4>

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Debug Main Process",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceRoot}",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
            "windows": {
                "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
            },
            "args": ["."]
        }
    ]
}
```

## Шаблон

<h4 align="center"><span style="color:#EC256F;">main.js</span></h4>

```javascript
/*
Кросс-платформенные приложения с помощью HTML, CSS и JavaScript

app - контролирование жизненного цикла
BrowserWindow - рендеринг окон
dialog - стандартные диалоги для открытия и сохранения файлов, предупреждения и ...
*/
const { app, BrowserWindow, dialog } = require('electron');

require('electron-reload')(__dirname); // Автоматическое обновление во время разработки

const path = require('path'); // Работа с путями

let win = null; // Глобальная ссылка на главное окно приложения

// Открытие файла
const getFileFromUser = () => {
    // Диалоговое окно открытие файлов
    const files = dialog.showOpenDialog(win, {
        title: 'Выберите файл ...',
        // Свойства диалогового окна
        properties: [
            'openFile' // Открытие файла
        ],
        // Фильтрация файлов
        filters: [
            { name: 'Текстовые файлы', extensions: ['txt'] },
            { name: 'Markdown файлы', extensions: ['md'] }
        ]
    }).then(res => {
        // Диалоговое окно не отменено
        if (res.canceled === false) {
            console.log(res.filePaths)
        }
    }).catch(err => {
        console.log(err)
    });
};

// Создание окна браузера
function createWindow() {
    // Создание окна браузера
    win = new BrowserWindow({
        // Настройки WEB-страниц
        width: 1280, // Ширина
        height: 720, // Высота
        center: true, // Приложение по центру
        minWidth: 400, // Минимальная ширина
        minHeight: 360, // Минимальная высота
        webPreferences: {
            nodeIntegration: true // Интеграция NodeJS
        },
        show: false  // Скрытие окна при его создании
    });

    // Загрузка HTML страницы в окно браузера
    win.webContents.loadFile(path.join(__dirname, 'index.html'));

    // Вызывается, когда окно готово к показу
    win.once('ready-to-show', () => {
        win.show(); // Отображение окна

        // Открытие инструментов разработчика
        // win.webContents.openDevTools();

        getFileFromUser(); // Открытие файла
    });

    // Вызывается, когда окно закрывается
    win.on('closed', () => {
        win = null // Очистка окна приложения
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
        createWindow(); // Создание окна браузера
    }
});
```

<h4 align="center"><span style="color:#EC256F;">renderer.js</span></h4>

```javascript
    /* Ожидаем загрузку DOM дерева приложения */
    document.addEventListener('DOMContentLoaded', function () {
        
    });
```

<h4 align="center"><span style="color:#EC256F;">index.html</span></h4>

```html
<!DOCTYPE html>
<html lang="ru">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="stylesheet" href="./style.css" type="text/css" />

        <title></title>

        <script>
            require('./renderer.js');
        </script>
    </head>

    <body>

    </body>
</html>
```

<h4 align="center"><span style="color:#EC256F;">style.css</span></h4>

```css
html {
    box-sizing: border-box;
}
*, *:before, *:after {
    box-sizing: inherit;
}
html, body {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
body {
    margin: 0;
    padding: 0;
    position: absolute;
}
body, input {
    font: menu;
}
textarea, input, div, button {
    outline: none;
    margin: 0;
}
```
