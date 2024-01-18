let birthYear = prompt("Enter your birth year:");
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
alert(`Your age is: ${age}`);
