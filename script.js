/*1. Створити пустий об'єкт, додати властивості name, age які
доступні тільки для читання та властивість id  яке неможна
 змінювати та видаляти */

let user = {};

Object.defineProperty(user, "name", {
    value: "Olena",
    writable: false
});
Object.defineProperty(user, "age", {
    value: 37,
    writable: false
});
Object.defineProperty(user, "id", {
    value: 123,
    writable: false,
    configurable: false
});

user.name = "Mike";
console.log(user.name);//Olena
delete user.id;
console.log(user.id);//123

// /*2. Є два об'єкти в першому неможливо було дадати, видалити
// та переписати, а в другому неможливо було видалити та додати 
// але можливо переписати.*/

let dataBase = {
    dbName: 'user',
    dbType: 'MySQL'
}
let configurateDB = {
    token: '123',
    password: '567',
    user: 'admin'
}

Object.freeze(dataBase);
dataBase.dbName = 'Nike';
console.log(dataBase.dbName);//user
delete dataBase.dbName;
console.log(dataBase);//{ dbName: 'user', dbType: 'MySQL' }

Object.seal(configurateDB);
configurateDB.token = 'Nike';
console.log(configurateDB.token);//Nike
delete configurateDB.token;
console.log(configurateDB);//{ token: 'Nike', password: '567', user: 'admin' }

/*3. Є об'єкт. Треба додати setter, який приймає масив та привласнює 
ці властивості в об'єкт, змінює якщо ці властивості є чи добавляє якщо їх немає*/

let salaries = {
    frontend: 2000,
    backend: 1500,
    desidn: 1000,
}

Object.defineProperty(salaries, 'sum', {
    get() {
        let sum = 0;
        for (salary in this) {
            sum += this[salary];
        }
        console.log(sum);
    },
    enumerable: false,
    set(value) {
        let newSalary = [];
        for (let i = 0; i < value.length; i++) {
            let newSalary = value[i].split(': ');
            key = newSalary[0];
            this[key] = Number(newSalary[1]);
        }
        return newSalary;
    },
    enumerable: false,
})
salaries.sum = ['frontend: 2000', 'backend: 1750', 'desidn: 1000', 'manager: 800'];
salaries.sum;
console.log(salaries);

/*4. Є об'єкт. Написати getter userInfo, який буде повертати всі властивості масиву у вигляді
властивість:значення, властивість:значення*/

userG = {
    name: 'Mike',
    surname: 'Davis',
    age: 25,
}
Object.defineProperty(userG, 'userInfoG', {
    get() {
        let userArr = [];
        for (let key in userG) {
            userArr.push(`${key} : ${userG[key]}`);
        }
        console.log(userArr.join(" "));
    },
    enumerable: false,
});

userG.userInfoG;
userG.login = 'MK_18';
userG.userInfoG;