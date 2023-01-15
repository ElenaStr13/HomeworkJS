let salary = 0,
    salaryFirst,
    salarySecond;

salaryFirst = Number(prompt("Enter first month salary"));
salarySecond = Number(prompt("Enter second month salary"));
salary = salaryFirst + salarySecond;
alert(`Your salary for 2 month is: ${salary}`)

alert(`You have extra bonus! Your total salary was: ${salary}$ It\'s increase for 1$ and now it is ${++salary}$`);


if (salary >= 2000) {
    alert("I\'m ready to work");
} else {
    alert("I\'m out");
}