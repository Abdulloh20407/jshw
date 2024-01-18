let userInput = prompt("Enter a number (max 4 digits):");
let numDigits = userInput.length;
let result = (userInput % 2 === 0) ? "Even" : "Odd";
alert(`The number is ${result} and has ${numDigits} digit(s).`);
