const prompt = require("prompt-sync")();

// a program to convert a kilometers to miles
const input = prompt("Enter the kilo value: ");

// conversion factor
const convertFactor = 0.621371;
const miles = input * convertFactor;

console.log(`the value of ${input} kilometer is ${miles} miles`);
