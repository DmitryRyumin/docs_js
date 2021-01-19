'use strict';
// создание табов ( переключающиеся элементы)
window.addEventListener('DOMContentLoaded', () => {

    // Создание табов на странице
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items'); // родитель для делегирования событий

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0) {

        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();

    // с помощью делегирования событий сделаем обработчик
    tabsParent.addEventListener('click', (event) => {

        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });



    // Создание таймера акций и тд

    const deadline = '2020-12-12';

    // функция определения разницы между дедлайном и текущим временем
    function getTimeRemaining(endTime) {

        // в переменной хранится разница между датами в милисекундах
        const t = Date.parse(endTime) - Date.parse(new Date());

        // сколько осталось дней с округлением до ближайшего целого
        const days = Math.floor(t / (1000 * 60 * 60 * 24));

        // Общее число часов не нужно, т.к нужны только хвостики в сутках
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));

        // Аналогично и для минут. хвостик не более 60 минут
        const minutes = Math.floor((t / (1000 * 60) % 60));

        // С секундами тоже самое
        const seconds = Math.floor((t / 1000) % 60);

        // вернем объект оставшегося времени. Такой прием часто используется
        return {
            'total': t, // ост. время, нужно, чтобы знать закончился ли таймер
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    // функция для получения 0: 05 часов 09 минут 03 секунд...
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    // функция, которая устанавливает таймеры на страницу
    function setClock(selector, endTime) {
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeRemaining = getTimeRemaining(endTime);

        // таймер на запуск функции обновления времени каждую секунду
        let timeInterval; // let, т.к. проверям не вышел ли таймер вообще


        // запустим один разок для инициализации даты и уберем мигание верстки
        // после этого уже будет работать интервал в 1с
        if (timeRemaining.total && timeRemaining.total <= 0) {

            days.innerHTML = `00`;
            hours.innerHTML = `00`;
            minutes.innerHTML = `00`;
            seconds.innerHTML = `00`;

        } else {

            // таймер на запуск функции обновления времени каждую секунду
            timeInterval = setInterval(updateClock, 1000);
            updateClock();
        }

        // функция обновления таймера
        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            // если дедлайн вышел, то останавливаем обновление таймера
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);



    // Создание модального окна
    const modalWin = document.querySelector('.modal');
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelector('[data-close]');

    // разбил на две функции открытия и закрытия
    function openModal() {

        modalWin.classList.add('show');
        modalWin.classList.remove('hide');

        // блокируем прокруту страницы
        document.body.style.overflow = 'hidden';

        // если пользователь сам открыл модальное окно до того, как оно открылось
        // само, то убираем таймер, чтобы не доставать его лишний раз
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modalWin.classList.add('hide');
        modalWin.classList.remove('show');

        // // реализация через toggle
        // modalWin.classList.toggle('show');

        // восстанавливаем прокрутку
        document.body.style.overflow = '';

    }
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalClose.addEventListener('click', closeModal);

    // делаем закрытие модального окна, если пользователь нажимает на подложку
    modalWin.addEventListener('click', event => {
        if (event.target === modalWin) {
            closeModal();
        }
    });

    // закрываем по клавише esc только при открытом окне
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modalWin.classList.contains('show')) {
            closeModal();
        }
    });

    // вызываем модальное окно через определенное время
    const modalTimerId = setTimeout(openModal, 3000);

    function showModalByScroll() {

        // pageYOffset - прокрученная часть по высоте
        // если долистали до конца, то прокрученная часть плюс клиент, который
        // сейчас видно должны равняться всей высоте сайта
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();

            // как только один раз польз. долистал до конца стр., то удаляем обработчик, чтобы не бесил
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // вызываем модалку в определенном месте (например в конце страницы)
    // цепляем на глобальное окно
    window.addEventListener('scroll', showModalByScroll);

    // Использование классов для карточек меню
    // UPD: Добавлен rest оператор для улучшенной кастомизации карточек.
    // вдруг мы захотим еще добавить какое-то количество HTMLклассов элементу
    // rest не поддерживает дефолтные параметры

    class MenuCard {
        constructor(title, descr, price, imgSrc, imgAlt, parentSelector, ...classes) {
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.imgSrc = imgSrc;
            this.imgAlt = imgAlt;

            this.classes = classes; // не стоит забывать что это массив
            // такой вариант не сработает, потому что у нас
            // 1) лежит пустой массив, а он не является логическим false
            // 2) мы этот массив превращаем в строку и дальше перебрать его не сможем
            // this.classes = classes || 'какой-то класс'

            this.parent = document.querySelector(parentSelector); // DOM элемент
            this.transfer = 75; // курс валют
            this.convertToRUB(); // методы можно вызывать прямо в конструкторе
        }

        convertToRUB() {
            this.price = this.price * this.transfer; // переводим из $ в Rub
        }

        // формируем верстку
        render() {
            // создаем элемент и помещаем в него верстку
            const element = document.createElement('div');
            // назначим сами в rest параметр по умолчанию
            // на случай, если пользователь забыл передать главный класс в элемент
            // если в rest ничего не передали, то будет все равно сформирован пустой массив
            // если проверить передано ли туда что-то (в rest), то выдаст true
            // в связи с этим нужно проверять на количество элементов в массиве
            // точно также ведут себя методы querySelectorAll, getElements...итд
            // если ничего не передано, то сделаем дефолтный класс
            if (this.classes.length === 0) {
                // вдруг нам этот класс в будущем понадобится
                // запишем его в пустое свойство
                // я так понял имя может быть рандомное
                // здесь elemen это не константа выше, а новое свойство глоб. объекта
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                // UPD: Обновлено с использованием rest
                // обработаем массив классов, переданный с помощью rest-оператора
                // Добавляем новосозданному элементу еще классов, переданных с rest
                this.classes.forEach(className => element.classList.add(className));
            }

            // Теперь нужно чуток изменить верстку
            // убрана обертка <div class="menu__item">. Теперь подставляем напрямую
            // и будет его передавать при формировании верстки через метод
            element.innerHTML = `
                <img src=${this.imgSrc} alt=${this.imgAlt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            `;

            this.parent.append(element);
        }


        // моя реализация верстки
        formMenu(cardNum = 1) {
            const menuArr = [];
            const menuItem = document.querySelectorAll('.menu__item');
            menuItem.forEach((item, i) => {
                menuArr[i] = item;
            });


            let h3 = menuArr[cardNum].querySelector('.menu__item-subtitle');
            h3.innerHTML = `${this.title}`;
            let text = menuArr[cardNum].querySelector('.menu__item-descr');
            text.innerHTML = `${this.descr}`;
            let price = menuArr[cardNum].querySelector('span');
            price.innerHTML = `${this.price}`;
            let img = menuArr[cardNum].querySelector('img');
            img.src = this.imgSrc;

        }
    }

    // Объект без переменной создается и удаляется, нужен чтобы использовать объект на месте
    new MenuCard(
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        'img/tabs/vegy.jpg',
        'vegy',
        '.menu .container'
    ).render();

    new MenuCard(
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        21,
        'img/tabs/elite.jpg',
        'elite',
        '.menu .container',
        'menu__item'
    ).render();

    new MenuCard(
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        14,
        'img/tabs/post.jpg',
        'post',
        '.menu .container',
        'menu__item'
    ).render();

    // после рендера их на страницу - нужно удалить эти карточки в html
});
