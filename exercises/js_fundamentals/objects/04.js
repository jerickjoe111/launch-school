// Exercise 04

// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456'; // resetting the property prop2 to 456
myObject[prop2] = '678'; // adding a 456 property with a 678 value to the object

console.log(myObject[prop2]); // 678
console.log(myObject.prop2); // 456

// Here is another example. 
// What do you think will be logged to the console this time, and why?

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj); // { 'funcProp: 'hello, ' }
myObj[myFunc()] = 'world!'; // reassigning the 'funcprop' property to 'world!'
console.log(myObj); // { 'funcPropr: 'world!' }

