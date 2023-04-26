// Exercise 02
// Go over the following program. What does it log to the console at lines 11, 15, 19, and 23? 
// Is it what you expected? Why or why not?

const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // Prints 'Hello' (myBoolean is truthy)
}

if (!myString) {
  console.log('World'); // Nothing; !myString evaluates to false
}

if (!!myArray) {
  console.log('World'); // Prints 'World' (!!myArray evaluates to true - empty arrays are truty in JS)
}

if (myOtherString || myArray) { // Prints '!', because myArray is truthy
  console.log('!');
}
