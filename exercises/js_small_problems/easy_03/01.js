// Exercise 01

// Build a program that randomly generates Teddy's age, 
// and logs it to the console. Have the age be a random 
// number between 20 and 200 (inclusive).

const min = 20;
const max = 200;

let age = Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Teddy is ${age} years old!`);