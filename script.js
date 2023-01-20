/*1. напишіть функцію, яка повертає більше з двох чисел, 
якщо вони рівні то повертає рядок*/

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

function maxNumber(a, b) {
    if (a > b) {
        alert(a);
    } else if (b > a) {
        alert(b)
    } else {
        alert(`${a}=${b}`);
    }
}

maxNumber(a, b);

/*2. Напишіть функцію reverse(number), яка приймає число та змінює
 його знак на протилежний*/

let num = Number(prompt("2. Enter the number"));

function reverse(a) {
    a = -a;
    alert(a);
}

reverse(num);


/*3. Потрібна функція additionForThree (number, count), яка отримує
number  та додає до нього число 3 стільки разів, скільки вказано
у змінній  count*/

let number = 5; //Number(prompt("Enter the number"));
numberUser = number;
let count = 4; //Number(prompt("Enter the count"));

function additionForThree(num, c) {
    for (let i = 1; i <= c; i++) {
        num = num + 3;
    }
    return num
}

console.log(`result for number:${numberUser} additional number 3 for ${count} times is ${additionForThree (number, count)}`);

/*4. Написати функцію getMetric(metric, km, m, cm), яка приймає значення
у кілометрах "km" та преводить їх у метри "m" або сантиметри "cm", тоді треба
перевести в метри чи сантиметри. Створити дві окремі функції для перерахунку
значень в метри "KmToM(km)" та сантиметри "KmToCm(km)". Передайте
ці функції у вигляді колбеків у функцію getMetric*/

let metric = prompt("Enter conversion in meters(m) or centimeters(cm)"),
    km = Number(prompt("Enter the km")),
    m,
    cm;


let KmToM = function (km) {
    m = km * 1000;
    return m;
};

let KmToCm = function (km) {
    cm = km * 100000;
    return cm;
};

function getMetric(metric, km, KmToM, KmToCm) {
    if (metric == "m") {
        KmToM(km);
        return m;
    } else if (metric == "cm") {
        KmToCm(km);
        return cm;
    } else {
        prompt("Enter m or cm")
    }
};

alert(getMetric(metric, km, KmToM, KmToCm));