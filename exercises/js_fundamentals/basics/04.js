// Exercise 04
// What does this code log to the console? Think about it for a moment before continuing.

let myName = 'Bob';
const saveName = myName;
myName = 'Alice';
console.log(myName, saveName);

// It prints 'Alice Bob'. We declare and initialize myName to the string 'Bob',
// and then we declare the constant saveName, assigning it to the same string by
// initializing to the variable myName. However, on line 6 we reassign myName to 
// a new string 'Alice', while saveName is still referencing the string 'Bob'

// What does this code log? Can you explain these results?
const myName2 = 'Bob';
const saveName2 = myName;
myName.toUpperCase();
console.log(myName2, saveName2);

// Strings are immutable in JS: the toUppercase invocation on myName2
// returns a new string in upper case, but it does not modify the string
// on which is invoked upon