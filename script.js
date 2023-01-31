//1.Створити масив користувачів, вивести 2 елемент, замінити Ніколу на Алекс
// Видалити два останніх елемента, вивести довжину масиву, вивід всього у консоль

const user = ["Mike", "Nikola", "Tom"];
console.log (user[2]);

let n = user.indexOf("Nikola");
user[n] = "Alex";
console.log (user);

user.splice(1,2);
console.log (user);
console.log(user.length);

//2.Написати функцію, яка приймає два числові масиви сумує їх
// та виводить результат у консоль а>b, a<b чи a==b

 let a = [5, 3, -4, 25, 32, -16, 6];
 let b = [21, -30, 9, 5, 12, -19, 5, 25];

function result(a,b)
{let sumA = a.reduce(function(sum,elem) {
    return sum + elem;
}, 0);
console.log(sumA);
let sumB = b.reduce(function(sum,elem) {
    return sum + elem;
}, 0);
console.log(sumB);
if (sumA > sumB) {
    console.log("a > b");
} else if (sumA < sumB) {
    console.log("a < b");
} else {
    console.log("a==b");
}
};
result(a,b);

//3.Зробити масив із фрази так, щоб кожне окреме слово було елементом масиву

let phrase = 'I am learning JavaScript right now';

let words = phrase.split(" ");
console.log(words);

//4. Дано два масиви. За допомогою методу foreach додайте у масив b всі елементи
// масиву а, але без повторів. Потрібно отримати масив [5,3,8,2,1]

let a = [5, 3, 8, 5, 3, 2, 1, 2];
let b = [];

function result(arr){
    for (let i of arr) {
    if(!b.includes(i)) {
        b.push(i);
    };
}return b;
};
b = result(a);
console.log(b);

/*5. Написати функцію, яка знайде та виведе у консоль всі номери id 
об'єктів, в яких age понад 18 та менше, як 21, не включаючи 18 та 21.
Таким чином: 3, 6*/

let users = [{ id: 1, age: 17 },
{ id: 2, age: 18 },
{ id: 3, age: 19 },
{ id: 4, age: 21 },
{ id: 5, age: 17 },
{ id: 6, age: 20 },
{ id: 7, age: 25 },];

function selectionAge(item) {
  if (item.age > 18 && item.age < 21) {
    console.log(item.id);
    return true;
  }
    return false;
};

 users.filter(selectionAge);


  



