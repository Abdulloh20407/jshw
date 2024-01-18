let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");

let sortedNumber = Array.from([num1, num2, num3], Number).sort().join("");
alert(`The 3-digit number in ascending order is: ${sortedNumber}`);
