let number = prompt("Enter a 3-digit number:");
let smallestDigit = Math.min(...Array.from(String(number), Number));
alert(`The smallest digit is: ${smallestDigit}`);
