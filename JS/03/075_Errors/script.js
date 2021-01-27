'use strict';

// ошибки могут положить весь скрипт и задуманный интерактив не будет работать

// существуют конструкции, предотвращающие падение скрипта

// когда скрипт видит такую конструкцию, он сначала берет весь код в try
// пытается его выполнить, выполняет и если все ок, то catch игнорируется
// если в блоке try возникнет любая ошибка (синтаксическая, либо серверная и тд)
// то перемещаемся в блок кода catch, отлавливает ошибки.
// Самый главный плюс этой конструкции: Код после такой конструкции продолжает
// работать. (Раньше если возникает какая-то ошибка, то дальше скрипт не выполняется)

try {
    console.log('Good');
    console.log(a); // не существует => ошибка => в блок catch
    console.log('result');
}
// в блок catch также приходит объект ошибки, который можно использовать
// это информация об ошибке
catch(error) {
    // к объекту идут три сущности error.name, error.message, error.stack
    console.log(error.name); // название ошибки
    console.log(error.message); // сообщение ошибки
    console.log(error.stack); // что привело к ошибке
}
// еще одна часть конструкции, которая используется не так часто
// finally - выполнится абсооютно всегда, когда нужно завершить операции в любом случае
finally {
    console.log('что-то пошло не так');
}

console.log('Still good'); // даже при ошибке в try будет работать

// когда работаем с проектами, то скрипты разрабатываются не для одной страницы
// допустим есть один файл скрипта, который работает со всем проектом
// Но если в скриптах идет получение определенных элементов, которые на одних
// страницах есть, а на других нет.
// допустим есть две страницы, одна пустая, а на другой кнопка с классом
// посмотрим к чему приведет ее использование

// document.querySelector('.active').addEventListener('click', () => {
//     console.log('click');
// });

// console.log('something');

// на странице где применяется этот скрипт и там есть кнопка, то все в порядке
// но на странице,  куда мы применяем этот же скрипт нет этой кнопки получаем ошибку
// из-за того что там такого элемента просто нет

// вопрос: как тогда использовать скрипты на многостраничных сайтах
// ответ:  использовать конструкцию try catch
// скрипт покажет что есть ошибка, но не упадет. В этом и есть главное преимущество этой конструкции
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch (error) {
    console.log(error);
}

console.log('something');

// Если есть сомнения в коде - всегда использовать эту конструкцию