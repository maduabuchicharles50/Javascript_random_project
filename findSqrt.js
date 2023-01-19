const prompt = require('prompt-sync')();
// a program that take the input from the user and find the square root of the given number
const number = prompt("Enter the number: ");

const result = Math.sqrt(number);
console.log(`The square root of ${number} is ${result}`);
