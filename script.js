/*1. В класі  User зробити захищену властивість  name  і публічні
властивості login  та age. Завдяки класу створити 2 об'єкти user1, user2*/
/*2. Створити у класі  User  метод  getName(isAdmin), який повертає ім'я
користувача або його нік, якщо ім'я не вказано, або відмовляє у доступі, 
якщо аргумент isAdmin == false*/
/*3. Створити у класі  User  метод  ChangeName, змінює ім'я
користувача. Змінна повинна бути підтвердженна паролем 123, якщо ні,
тоді виводиться Permission denied*/

class User {
    #name;
    constructor(name, login, age) {
        this.#name = name;
        this.login = login;
        this.age = age;
    }
    getName(isAdmin) {
        return isAdmin ? this.#name : "Permission denied"
    }
    ChangeName(newName, loginNew) {
        if (loginNew == '123') {
            this.login = loginNew;
            this.#name = newName;
            console.log(`Name Changed from Mike to ${newName}`);
            return this.#name
        } else {
            console.log("Premission denied");
        }
        return this.#name
    }
}

let user1 = new User('Mike', 'Mk_18', 18);
let user2 = new User('', 'NRG', 22);

console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

console.log(user1.getName(true));//Mike
console.log(user2.getName(true));//
console.log(user2.getName(false));//Mike
console.log(user1.ChangeName("Bill", '123'));

/*4. Зробити клас Admin, розширюючи його класом  User. Має приватну властивість #isAdmin = true
Зробити в цьому класі  getUserName(user), який буде приймати користувача та виводити його ім'я*/

class Admin extends User {
    #isAdmin;
    constructor(name, login, age, isAdmin = true) {
        super(name, login, age);
        this.#isAdmin = isAdmin;
}
getUserName(userOne) {
       return userOne.getName(true);
    }
}

let user3 = new Admin ('Olena', '123', 37);

console.log(user3.getUserName(user3)); //Olena
