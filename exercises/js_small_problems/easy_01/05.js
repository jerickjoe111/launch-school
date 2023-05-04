// Exercise 05

// Write a program that asks the user to enter an integer greater than 0, 
// then asks if the user wants to determine the sum or the product of all numbers 
// between 1 and the entered integer, inclusive.
function computeSum(array) {
  return array.reduce((x, y) => x + y);
}

function computeProduct(array) {
  return array.reduce((x, y) => x * y);
}

const ASK_NUMBERS = 'Please enter a list of numbers: '
const ASK_OPERATION = 'Enter "s" to compute the sum, or "p" to compute the product.';

let list = prompt(ASK_NUMBERS).split(',').map(num => Number(num));
let operation = prompt(ASK_OPERATION) === 's' ? 'sum' : 'product';
let result = operation === 'sum' ? computeSum(list) : computeProduct(list);

console.log(`The ${operation} of the integers ${list} is ${result}.`)
