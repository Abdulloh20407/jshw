let number = prompt("Enter a number:");
let result = "";

if (number % 2 === 0) {
    result += "Even, ";
} else {
    result += "Odd, ";
}

if (number > 0) {
    result += "Positive";
} else if (number < 0) {
    result += "Negative";
}

alert(result);
