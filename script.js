/*1. Зробити міксин, який додасть відповідні додатки до ціни створених
об'єктів. Для кожного з 3 класів існує свій податок*/
let mixin = {
    getPrice() { return this.price },
    vat() { return 'wrong option' },
    exciseDuty() { return 'wrong option' },
    singleTax() { return 'wrong option' }
}
class Cola {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Cola.prototype, mixin)
Cola.prototype.vat = function () { return this.price = this.price + this.price * 0.2 };

class Whiskey {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
Object.assign(Whiskey.prototype, mixin)
Whiskey.prototype.exciseDuty = function () { return this.price = (this.price + this.price * 0.3) + 10 };

class Ice {
    constructor(price) {
        this.price = price;
    }
}
Object.assign(Ice.prototype, mixin)
Ice.prototype.singleTax = function () { return this.price = (this.price + 1) };

let cocaCola = new Cola('Coca-Cola', 10);
let johnwalker = new Whiskey('john walker', 100);
let ice = new Ice(2);

console.log(cocaCola.vat());//12
console.log(johnwalker.exciseDuty());//140
console.log(ice.singleTax());//3

/*2.Написати функцію, яка буде приймати рядок, де кожне слово розділене
знаком крапка з комою, та повертати унікальні слова з рядка без повторень*/

function uniceString(st) {
    let space = ';';
    let arr = st.split(space);
    const set = new Set(arr);
    return set
}

console.log(uniceString(" cherry; orange; cherry; banana; banana"));//Set(3) { ' cherry', ' orange', ' banana' }

/*3. Є HTML  розмітка, написати функцію, яка поверне унікальні значення назв
телефонів, вивести ці назви у консоль */

let ul = document.querySelector(".shop-list");
let li = ul.getElementsByTagName("li");
let models = ul.textContent;
console.log(models);

let model = models.split("\n  ");
let modelArr = model.filter(function (el) {
    return (el != null && el != " " && el != "");
});

console.log(modelArr);

let uniModels = new Set(modelArr);
console.log(uniModels);

while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
};

for (let item of uniModels) {
    let li = document.createElement('li');
    li.innerHTML = item;
    ul.append(li);
}

/*4. Написати функцію, яка буде рахувати візити користувача на сайт, та повертати
кількість візитів. Об'єкти неможна змінювати, спробувати з використанням замикання*/

let mike = { name: 'Mike', age: 18 }
let bob = { name: 'Bob', age: 25 }
let nikola = { name: 'Nikola', age: 32 }

let visitsMap = new Map();

function UserVisits(user) {
    let count = 0;
    return function (count) {
        count = visitsMap.get(user) || 0;
        return visitsMap.set(user, (count + 1));
    };
}

let mikeVisits = UserVisits(mike);
let bobVisits = UserVisits(bob);
let nikolaVisits = UserVisits(nikola);

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(visitsMap.get(mike));//3
console.log(visitsMap.get(bob));//1
console.log(visitsMap.get(nikola));//2