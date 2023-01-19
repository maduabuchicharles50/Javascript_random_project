const prompt = require('prompt-sync')();
//JavaScript program to swap two items

//take input from the users
let item1= prompt('Enter the item1: ');
let item2= prompt('Enter the item2: ');

//create a temporary item
let temp;

//swap items
temp = item1;
item1= item2;
item2= temp;

console.log(`The value of item1 after swapping: ${item1}`);
console.log(`The value of item2 after swapping: ${item2}`);
