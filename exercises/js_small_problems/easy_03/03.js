// Exercise 03

// Build a program that logs when the user will retire 
// and how many more years the user has to work until retirement.

let age = parseInt(prompt('What is your age?'), 10);
let retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

let today = new Date();

let currentYear = today.getFullYear();
let workYearsToGo = retirementAge - age;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);