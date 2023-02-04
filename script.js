/*1.Задано масив let arr = [1,2,3,4,5,6,7,8,9,10], використовуючи
рекурсію написати функцію знаходження суми всіх елементів масиву*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sumM(arr));

function sumM(arr) {
    return sum(arr, arr.length - 1);
}
function sum(arr, i) {
    if (i == 0) {
        return arr[0];
    } else {
        return arr[i] + sum(arr, i - 1);
    };
};

//2. Написати функцію deepCount(arr), яка повертає кількість усіх
// елементів у масиві, включаючи вкладені масиви

const a = [],
    b = [1, 2, 3],
    c = ["x", "y", ["z"]],
    d = [1, 2, [3, 4, [5]]],
    e = [[[[]]]];

let counte = 0;
function recursion(m) {
    for (const elem of m) {
        if (Array.isArray(elem)) {
            counte++;
            recursion(elem);
        } else {
            counte++
        }
    }
    return count
};
console.log(recursion(d));//7
console.log(recursion(a));
console.log(recursion(b));
console.log(recursion(c));
console.log(recursion(e));


//3. Переписати функцію sumSallary так, щоб змінна sum
//була ізольована від глобальної області бачення

let employees = {
    development: {
        backend: [{ name: 'Mike', salary: 2000 }, { name: 'Nikola', salary: 2500 }],
        frontend: [{ name: 'Artem', salary: 3000 }, { name: 'Alex', salary: 2700 }],
    },
    sales: {
        marketing: {
            internet_marketers: [{ name: 'Nina', salary: 1000 }, { name: 'Olena', salary: 1300 }],
            promotion: [{ name: 'Oleg', salary: 1400 }, { name: 'Masha', salary: 1700 }],
        },
        sellers: [{ name: 'Max', salary: 900 }, { name: 'Donald', salary: 700 }, { name: 'Joe', salary: 1100 }]
    },
    designer: [{ name: 'Kate', salary: 1800 }]
}

function sumSallary(obj) {
    let sum = 0;
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            return obj[key].forEach(employees => sum += employees.salary);

        } else {
            return sumSallary(obj[key]);
        }

    }
     return sum;
}

sumSallary(employees);

/*4. Вбудована у JavaScript функція Math.max() повертає найбільше значення
серед переданих аргументів функції. Знайти найбільше значення серед трьох масивів*/

let arr1 = [2, 15, 7, 3],
    arr2 = [9, 3, 17, 12, 4, 8],
    arr3 = [6, 11, 16, 15, 11];

let count = [...arr1, ...arr2, ...arr3];
console.log(Math.max( ...count));