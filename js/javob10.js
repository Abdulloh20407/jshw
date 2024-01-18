let number = prompt("Enter a number:");
let output = "";

if (number % 3 === 0) {
    output += "Fizz";
}

if (number % 5 === 0) {
    output += "Buzz";
}

if (output === "") {
    output = number;
}

alert(output);
