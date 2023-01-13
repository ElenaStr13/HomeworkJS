console.log("You can ignore single and double quotes likes this: \' \' \" \" ");

alert("Please enter your data");

let userName,
    surname,
    old,
    adminStatus;

userName = prompt("Enter your name");
alert("Your name is: " + userName);

surname = prompt("Enter your surname");
alert("Your full name is: " + userName + " " + surname);

old = prompt("How old are you?");
alert("Your name is" + userName + " " + surname + " your age is: " + old);

adminStatus = prompt("Are you admin? Write admin/not admin");
alert("Your name is" + userName + " " + surname + " your age is: " + old + ". " + adminStatus + " status: true");
