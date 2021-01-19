'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Ax';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    getSurname() {
        return this.#surname;
    }

    setSurname(sn) {
        this.#surname = sn;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const alex = new User('Alex', 27);
console.log(alex.getSurname());
alex.setSurname('sdfdsfsf')
alex.say();
