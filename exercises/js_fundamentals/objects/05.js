// Exercise 05

// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // 'undefined'

myArray[-1] = 'd'; // creating a '-1' property with a 'd' value
myArray['e'] = 5;  // creating a 'e' property with a 5 value
myArray[3] = 'f'; // adding an element to the array, 'f', with a 3 index as property name

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', '-1':'d', 'e': 5 ]