// Exercise 03

// What will the following code log to the console and why? 
// Don't run the code until after you have tried to answer.

const array1 = [
  ['Moe'], 
  ['Larry'], 
  ['Curly'], 
  ['Shemp'], 
  ['Harpo'], 
  ['Chico'], 
  ['Groucho'], 
  ['Zeppo']
];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i][0].startsWith('C')) {
    array1[i][0] = array1[i][0].toUpperCase();
  }
}

console.log(array2);

// array2 is not affected, as we are modifying a different object, array1, by replacing the
// primitive values it contains; we pushed literal strings into the array2, which are immutable.