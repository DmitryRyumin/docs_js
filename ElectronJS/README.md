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

## Модули Electron

> [Официальная документация](https://electronjs.org/docs/api)

### Основной процесс

| Модули | Описания |
| ------ | -------- |
| `app` | Контролирование жизненного цикла приложения |
| `autoUpdater` | Автоматическое обновление приложения |
| `BrowserWindow` | Рендеринг окон |
| `contentTracing` | Трассировка для поиска узких мест производительности и медленных операций |
| `dialog` | Стандартные диалоги для открытия и сохранения файлов, предупреждения и ... |
| `globalShortcut` | Отслеживание действий на клавиатуре, когда она сфокусирована на приложении |
| `ipcMain` | Асинхронное взаимодействие с процессами рендеринга из главного процесса |
| `Menu` | Создание меню приложения из контекстного меню |
| `MenuItem` | Добавление элементов в основное и контекстное меню |
| `powerMonitor` | Отслеживание изменений состояния питания устройства |
| `powerSaveBlocker` | Предотвращение перехода системы в режим пониженного потребления питания |
| `protocol` | Регистрация пользовательского протокола |
| `session` | Управление сеансами браузера, файлами cookie, настройками кэша, прокси и ... |
| `webContents` | Рендеринг WEB-страниц |
| `Tray` | Добавить иконки и контекстные меню в системную область уведомлений |

### Процесс рендеринга

| Модули | Описания |
| ------ | -------- |
| `desktopCapturer` | Получение информации о медиа ресурсах, которые могут быть использованы для записи аудио и видео с рабочего стола |
| `ipcRenderer` | Асинхронное взаимодействие между процессом визуализации и основным процессом |
| `remote` | Использование модулей главного процесса из процесса рендеринга |
| `webFrame` | Настройка отображения текущей веб-страницы |

### Модули доступные для основного процесса и процесса рендеринга

| Модули | Описания |
| ------ | -------- |
| `clipboard` | Процесс копирования и вставки в буфер обмена системы |
| `crashReporter` | Процесс отправки отчетов об ошибках на удаленный сервер |
| `nativeImage` | Создание иконки приложения, в том числе для системного лотка (Windows), дока (macOS), используя файлы PNG и JPG |
| `screen` | Предоставление информации о размере экрана, дисплеях, позиции курсора |
| `shell` | Управление файлами и URL-ами, используя стандартные приложения для их открытия |

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
/***************************************************************************************************
 * Подключение модулей
 **************************************************************************************************/

/**
 * Автоматическое обновление во время разработки
 */
require('electron-reload')(__dirname);

 /**
  * Кроссплатформенные приложения с помощью HTML, CSS и JavaScript
  * 
  * Документация: https://electronjs.org/docs/api
  * 
  * app - контролирование жизненного цикла приложения
  * BrowserWindow - рендеринг окон
  * dialog - стандартные диалоги для открытия и сохранения файлов, предупреждения и ...
  */
const { app, BrowserWindow, dialog } = require('electron');

/**
 * Node.js
 * 
 * Документация: https://nodejs.org/docs/latest/api/
 */
const path = require('path'); // Работа с путями
const fs = require('fs'); // Работа с файловой системой

/***************************************************************************************************
 * Глобальные ссылки
 **************************************************************************************************/

const windows = new Set(); // Набор для отслеживания окон приложения

/***************************************************************************************************
 * Работа с окном приложения
 **************************************************************************************************/

/**
 * Создание окна приложения
 * 
 * Экспорт
 */
const createWindow = exports.createWindow = () => {
    /**
     * Создание окна приложения
     * 
     * Документация: https://electronjs.org/docs/api/browser-window#new-browserwindowoptions
     */
    let win = new BrowserWindow({
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

    /**
     * Загрузка HTML страницы в окно приложения
     */
    win.webContents.loadFile(path.join(__dirname, 'index.html'));

    /****************************************
     * Обработчики событий окна приложения
     * 
     * Документация: https://goo-gl.su/events
     ****************************************/

    /**
     * Вызывается, когда окно готово к показу
     */
    win.once('ready-to-show', () => {
        win.show(); // Отображение окна

        // Открытие инструментов разработчика
        // win.webContents.openDevTools();
    });

    /**
     * Вызывается, когда окно закрывается
     */
    win.on('closed', () => {
        windows.delete(win); // Удаление ссылки из набора отслеживания окон приложения

        win = null // Очистка окна приложения
    });

    windows.add(win); // Добавление ссылки на окно в набор отслеживания окон приложения

    return win;
}

/***************************************************************************************************
 * Работа с жизненным циклом приложения
 * 
 * Документация: https://electronjs.org/docs/api/app#app
 **************************************************************************************************/

/**
 * Вызывается, когда Electron закончит инициализацию и готов к созданию окон приложения
 */
app.on('ready', () => {
    createWindow(); // Создание окна приложения
});

/**
 * Вызывается, когда все окна будут закрыты
 */
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

/**
 * Вызывается, когда Electron закончит инициализацию и готов к созданию окон приложения
 * 
 * Только Mac OS
 */
app.on('activate', () => {
    if (win === null) {
        createWindow(); // Создание окна приложения
    }
});

/***************************************************************************************************
 * Функции
 **************************************************************************************************/

/**
 * Открытие и чтение файла, который был выбрать через диалоговое окно
 * 
 * targetWindow - ссылка на объект окна браузера
 * 
 * Экспорт
 */
const getFileFromUser = exports.getFileFromUser = (targetWindow) => {
    /**
     * Диалоговое окно открытия файла
     */
    const files = dialog.showOpenDialog(targetWindow, {
        title: 'Выберите файл ...', // Заголовок
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
            readFile(targetWindow, res.filePaths[0]); // Чтение из файла
        }
    }).catch(err => {
        console.log(err);
    });

    /**
     * Чтение из файла
     * 
     * targetWindow - ссылка на объект окна браузера
     * file - путь к файлу
     */
    const readFile = (targetWindow, file) => {
        /**
         * Чтение из файла
         */
        const content = fs.readFile(
            file, // Файл
            'utf-8', // Кодировка
            (err, data) => {
                /**
                 * Произошла ошибка
                 */
                if (err) throw err;

                /**
                 * Отправка содержимого файла в процесс рендеринга
                 */
                targetWindow.webContents.send('file-opened', file, data);
            }
        );
    }
};
```

<h4 align="center"><span style="color:#EC256F;">renderer.js</span></h4>

```javascript
/**
 * Ожидаем загрузку DOM дерева приложения
 */
document.addEventListener('DOMContentLoaded', function () {
    // ...
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
            require('./renderer.js'); // Процесс рендеринга
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
