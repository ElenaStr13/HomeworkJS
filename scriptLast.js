/* 5. Створити новий клас  User, який буде приймати публічну властивість name та приватну властивість
phone. Властивість  phone  завжди буде мати такий формат "067-888-88-99". Створити метод getPhone(isAdmin).
Якщо аргумент isAdmin  повертає  true, то номер виводиться повністю, а якщо false, то виводиться
частково прихований номер.*/
let arr = [],
      phoneAnother;

class UserAnother {
      #phone;
      constructor(name, phone) {
            this.name = name;
            this.#phone = phone;
      }
      getPassword(isAdmin) {
            if (isAdmin) {
                  phoneAnother = this.#phone;
            } else {
                  arr = this.#phone.split('-');
                  arr.splice(1, 2, "***", "**");
                  phoneAnother = arr.join("-");
            }
            return phoneAnother;
      }
}

let userOne = new UserAnother('Anna', '067-888-88-90');
let userTwo = new UserAnother('Olha', '067-888-88-13');
let userThree = new UserAnother('Mike', '067-888-88-95');
let userFour = new UserAnother('Tom', '067-888-88-97');

console.log(userOne.getPassword(true)); //067-888-88-90
console.log(userTwo.getPassword(false)); //067-***-**-13

console.log(userThree.getPassword(true)); //067-888-88-95
console.log(userFour.getPassword(true)); //067-888-88-97

console.log(userThree.getPassword(false)); //067-***-**-95
console.log(userFour.getPassword(false)); //067-***-**-97

