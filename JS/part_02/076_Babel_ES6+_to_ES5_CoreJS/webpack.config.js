'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/script.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/js'
    },
    watch: true,

    devtool: "source-map",

    //
    module: {
        rules: [
            {
                // находим js файлы ( написано через регулярку)
                test: /\.m?js$/,
                // исключенные файлы из выборки
                exclude: /(node_modules|bower_components)/,
                // как и что будем использовать
                use: {
                    // технология связи вебпека с babel. нужно установить в проект
                    // npm i --save-dev babel-loader
                    loader: 'babel-loader',
                    // опции
                    options: {
                        // пресеты в babel
                        presets: [['@babel/preset-env', {
                            // еще более тонкая настройка пресета
                            // отладка во время компиляция
                            debug: true,

                            // coreJs - расширенная библиотека полифилов
                            // npm i --save-dev core-js
                            corejs: 3,

                            // + функция проверки кода нужных полифилов.(внутри corejs)
                            // чтобы не подключать все сразу
                            useBuiltIns: "usage"
                        }]]
                    }
                }
            }
        ]
    }
};
