/*Створити об'єкт car, який буде містити властивості model, year, color
1.1 замініти значення кольору на інший;
 1.2 додати властивість type: "electric" (або вкажіть інше значення)
 1.3 створіть метод signal, при запуску якого буде виводитися alert("fa!fa!")*/

let car = {
    model: "renault",
    year: 2015,
    color: "orange",
};

car.color = "brown";
console.log(`Car-color: ${car.color}`)

car.type = "electric";
console.log(`Car-type: ${car.type}`)

car.signal = function () {
    console.log("fa!fa!");
};

car.signal();

/*2.Переписати метод total() об'єкта salaries  таким чином, щоб він мав можливість 
рахувати зп незалежно від кількості працівників.*/

let salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        console.log('We must pay salary on Tuesday!');
    },
    total: function () {
        let sum = 0;
        for (let salary of Object.values(salaries)) {
            if (typeof (salary) == 'number') {
                sum += salary;
            } else {
                continue
            }
        }
        console.log(sum);
        return sum;
    }
}

salaries.total();


/*3. Створити функцію конструктор та побудувати за допомогою неї 2 об'єкти*/

function Notebook(brand, system, cost) {
    this.brand = brand;
    this.system = system;
    this.cost = cost;
};

let dell = new Notebook('Dell', 'windows', '800');
let apple = new Notebook('Apple', 'MAC OS', '1700');

console.log(dell);
console.log(apple);

/*4.*/

