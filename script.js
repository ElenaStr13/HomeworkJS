//1.Знайти помилку, та виправити код, щоб сума рахувалась правильно

function count(expression) {
    function getValues(expression) {
        let values = [...expression]//помилка назву іншої змінної треба заміть  values
        return values;
    }
    let values = getValues(expression);
    switch (values[1]) {
        case '+':
            return showResult(sum(values));
        case '-':
            return showResult(subtract(values));
        case '*':
            return showResult(multiply(values));
        case '/':
            return showResult(divide(values))
    }
    function showResult(value) {
        return value
    }

}

//замінила values[1] на values[0] тому що в масиві нульовий елемент є числом, а перший елемент є знак
function sum(values) {
    return +values[0] + +values[2]; //якщо операнд не є числом, унарний плюс перетворить його на число
}
function subtract(values) {
    return +values[0] - +values[2];
}
function multiply(values) {
    return +values[0] * +values[2];
}
//2. Зробити конструктор функцию Error при діленні на 0
function divide(values) {
    try {
        if (+values[2] == 0) {
            throw new Error('Can`t divide by 0');
        }
        return +values[0] / +values[2];
    } catch (error) {
        console.log(`${error.name}: ${error.message}`);
        return 0;
    }
}

//3. Переписати код, щоб він вірно обробляв помилки

function count(expression) {
    function getValues(expression) {
        let values = [...expression]
        return values;
    }

    let values;
    try {
        let data = Values(expression); //Error * in function name
        data = values;
    } catch (error) {
        console.log(error.name + ':' + error.message) //**Throw wrong error
        values = [0, '+', 0];
    }
    switch (values[1]) {
        case '+':
            return showResult(sum(values));
        case '-':
            return showResult(subtract(values));
        case '*':
            return showResult(multiply(values));
        case '/':
            return showResult(divide(values))
    }
    function showResult(value) {
        return value
    }
}

function sum(values) {
    return +values[0] + +values[2];
}
function subtract(values) {
    return +values[0] - +values[2];
}
function multiply(values) {
    return +values[0] * +values[2];
}
function divide(values) {
    return +values[0] / +values[2];
}

/*4.  За допмогою try catch  зробити обробку помилки так, щоб користувач
міг повторно ввести дані та програма знову обробила вік */

function MakeUsers(name, age) {
    this.name = name;
    this.age = age  //|| prompt("Enter your age");
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie(user) {
    try {
        if (user.age == undefined) {
            throw new SyntaxError('Age not determined');
        }
        if (user.age >= 18) {
            return 'You can watch this movie';
        } else {
            return 'Sorry, you are too young';
        }
    } catch (error) {
        if (error.message == 'Age not determined') {
            console.log(error.name + ': ' + error.message);
            user.age = prompt("Enter your age");
            return showMovie(user);
        }
    }
    };

    function message(message) {
        console.log(message);
    }
    message(showMovie(user));


