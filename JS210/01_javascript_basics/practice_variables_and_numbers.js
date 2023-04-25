// Declare a variable named `numerator` and set it to 10.

let numerator = 10;

// Declare a constant named `DENOMINATOR` and set it to 2.

const DENOMINATOR = 2;

// Declare a variable named answer and set it to the result of `numerator` divided by `DENOMINATOR`. 
// Log the value of answer (it should be 5).

let answer = numerator / DENOMINATOR;
console.log(answer);

// Declare a variable named `incrementer` and set it to 1.

let incrementer = 1;

// Declare a variable named `start` and set it to incrementer.

let start = incrementer;

// Declare variables named `end` and `difference`. Leave them undefined.

let end
let difference

// In JavaScript, we can use a shorthand operator to add or subtract values to and from a variable. 
// If we want to add one to our incrementer variable, we can write incrementer = incrementer + 1. 
// However, JavaScript lets us shorten this with the self-addition operator, +=, e.g., incrementer += 1. 
// (All we did was remove the second instance of incrementer, and then recombined the = and + as +=.) 
// Analogous arithmetic assignment operators are available for the other basic arithmetic operations: 
// subtraction, multiplication, and division.

// Increment the incrementer variable by 1 three times using the self-addition notation.

for(let i = 0; i < 3; i++) {
  incrementer += 1;
}

// There's an even shorter way to increment and decrement a variable by one: the increment 
// and decrement operators. To increment a variable by one, we write the variable name 
// immediately followed by two plus signs, e.g., incrementer++. 
// We call this the postfix increment operator since it comes after the variable name.

// Increment the incrementer variable by 1 twice using the increment operator shorthand.

for(let i = 0; i < 2; i++) {
  incrementer++;
}

// Set the value of end to incrementer and the value of difference to end minus start. 
// Log the value of end, which should be 6. Log the value of difference, which should be 5.

end = incrementer;
difference = end - start;

console.log(end)
console.log(difference)

// Declare a variable named answer and initialize it to the result of 11 plus 31 multiplied 
// by 3 as one statement, then log the result. Your result should be 126. 
// If you get a different result, you may need to use some parentheses to 
// change the order of operations: you want to perform the addition first, then the multiplication.

let answer = (11 + 31) * 3;
console.log(answer)