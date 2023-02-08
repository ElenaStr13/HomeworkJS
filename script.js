/*1.Є два об'єкти. Зробити так щоб об'єкт sportCar  успадкував властивості від об'єкту
car. Об'єкт passengerCar з власною власністю успадкував властивості від об'єкту car,
Об'єкт toyCar  з власною властивістю успадкував властивості від об'єкту sportCar, а через
нього і від car*/

let car = {
    type: "electric",
    while: 4,
};

let sportCar =  {
    doors: 2
};
Object.setPrototypeOf(sportCar,car);
//console.log(sportCar);

let passengerCar =  {
    doors:4,
};
Object.setPrototypeOf(passengerCar,car);
//console.log(passengerCar);

let toyCar = {
    type: toy,
}
Object.setPrototypeOf(toyCar,sportCar);

//2.Виправити код, щоб заробітна плата рахувалась для кожного працівника окремо

let employees = {
    wallet: {},
    pay(month, sum) {
        this.wallet[month] = sum;
    }
}

let frontendDeveloper = {
    name: 'Mike',
  
}
Object.setPrototypeOf(frontendDeveloper, employees);

let backendDeveloper = {
    name: 'Bob',
    wallet: {},
    pay(month, sum) {
        this.wallet[month] = sum;
    }
};

Object.setPrototypeOf(backendDeveloper, employees);
backendDeveloper.pay('june', 1700);
frontendDeveloper.pay('june', 2000);

console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);
frontendDeveloper.pay('june', 2500);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

//3. Використовуючи user_1, створити нового користувача  user_2

function User(name,age) {
    this.name = name;
    this.age = age
}

let user_1 = new User('Mike', 18);
let user_2 = new user_1.constructor ('Bob', 25);
console.log(user_1);
console.log(user_2);


/*4. Зробити щоб функція встановлювала об'єктам в якості прототипу позичений метод
Array.prototype.join  */

function UserType(name) {
    for (let i = 0; i < name.length; i++) {
        this[i] = name[i];
        if (i+1 == name.length) {
            Object.defineProperty(this,'length', {
                enumerable:true,
                writable:false,
                configurable: true,
                value: i+1
            });
        }
    }
}

let admits = new UserType (['Mike', 'Bob', 'Nikola']);
admits.join = Array.prototype.join;
console.log(admits.join('; ')); //Mike; Bob; Nikola




