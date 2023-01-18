//1. for the old
 let old;

 old = Number(prompt("How old are you?"));
if (old <= 17) {
     confirm("Do you study at school?");
 } else if (old > 17 && old < 25) {
     confirm("Do you study at ?");
 } else if (25 <= old && old < 60) {
     confirm("Do you have a job?");
 } else {
     confirm("What are you doing?");
 };

//2. program for property display and use switch
// let property;

 property = prompt("Enter property display for css please: block or flex, or grid, or inline, or none");

 switch (property) {
     case 'block':
     case 'flex':
     case 'grid':
     case 'inline':
     case 'none':
         alert(property);
         break

     default:
         alert("Set \'display: inline-block;\' ");
         breake
 };

//3. Enter the number for use "promt" and out to "alert" gor this number 
//exclude the string type
let num;

num = Number(prompt("Please enter the number"));

 for (let i = 0; i < 10; i++) {
     if (num) {
        alert(`${num} by 12 equals ${12*num}`);
        break;
     };
     num = Number(prompt("Your number is incorent, please enter corect number"));
    continue;
 };

//4. output the even numbers and use "for"

 for (let i = 2; i < 50; i++) {
     if (i % 2 === 0) {
         console.log(i)
    }
     continue;
}

