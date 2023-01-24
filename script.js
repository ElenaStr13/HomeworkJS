/*Створити об'єкт car, який буде містити властивості model, year, color
1.1 замініти значення кольору на інший;
 1.2 додати властивість type: "electric" (або вкажіть інше значення)
 1.3 створіть метод signal, при запуску якого буде виводитися alert("fa!fa!")*/

// let car = {
//     model: "renault",
//     year: 2015,
//     color: "orange",
// };

// car.color = "brown";
// console.log(`Car-color: ${car.color}`)

// car.type = "electric";
// console.log(`Car-type: ${car.type}`)

// car.signal = function () {
//     console.log("fa!fa!");
// };

// car.signal();

/*2.Переписати метод total() об'єкта salaries  таким чином, щоб він мав можливість 
рахувати зп незалежно від кількості працівників.*/

// let salaries = {
//     frontend: 12000,
//     backend: 10000,
//     designer: 8000,
//     dayPay() {
//         console.log('We must pay salary on Tuesday!');
//     },
//     total: function () {
//         let sum = 0;
//         for (let salary of Object.values(salaries)) {
//             if (typeof (salary) == 'number') {
//                 sum += salary;
//             } else {
//                 continue
//             }
//         }
//         console.log(sum);
//         return sum;
//     }
// }

// salaries.total();


/*3. Створити функцію конструктор та побудувати за допомогою неї 2 об'єкти*/

// function Notebook(brand, system, cost) {
//     this.brand = brand;
//     this.system = system;
//     this.cost = cost;
// };

// let dell = new Notebook('Dell', 'windows', '800');
// let apple = new Notebook('Apple', 'MAC OS', '1700');

// console.log(dell);
// console.log(apple);

/*4.*/
// let num1 = 5//prompt("Enner first number");
// let num2 = 2//prompt("Enner second number");

// let Operation = function(a,b) {
// if (a % 2 == 0 && b % 2 == 0) {
//     result = a * b;
//     console.log(result);
// } else if (a % 2 !== 0 && b % 2 !== 0) {
// result = a + b;
// console.log(result);
// } else if (a % 2 !== 0 && b % 2 == 0) {
//     console.log(a);
// } else if (a % 2 == 0 && b % 2 !== 0) {
//     console.log(b);
// }
// };
// Operation(num1,num2);

// Objects
let newWorker;

 function add() {
    let worker = prompt("Enter name new worker");
   
    for (const key in tasks) {
        if (worker == key) {
            worker = prompt('This worker is busy, please enter another name');
            newWorker = worker;
        } else {
            newWorker = worker;
        };
     };
    console.log(newWorker);
    return newWorker;
};

const tasks = {
    Anna: {
        status: 'new',
        text: 'Create checkout page',
    },
    Ihor: {
        status: 'done',
        text: 'Add styles to header',
    },
    [newWorker]: {
        status: 0,
        text: "none",
    },
};

add();
console.log(newWorker);
let task = { ...tasks };
console.log(task);
// newWorker.text = prompt("Enter what work need to do");
// newWorker.status = prompt("Enter status this work new/done");

