// Exercise 05

// Write a program that prompts the user for two positive integers, 
// and then prints the results of the following operations on those two numbers: 
// addition, subtraction, product, quotient, remainder, and power. 
// Do not worry about validating the input.

const prompt = require('prompt-sync')();

const welcome = 'Hi! Welcome to the calculator';
const prompt1 = 'Please, enter a number.';
const prompt2 = 'Please, enter another number.';
const results = 'Results:';
const operators = ['+', '-', '*', '/', '%', '**'];

console.log(welcome)
let number1 = Number(prompt(prompt1));
let number2 = Number(prompt(prompt2));
console.log(results);

for (let operator of operators ) {
  let operation = `${number1} ${operator} ${number2}`;
  let result = eval(operation);

  console.log(`${operation} = ${result}`);
}
