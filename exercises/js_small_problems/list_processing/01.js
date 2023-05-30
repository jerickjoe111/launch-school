// Exercise 01

// Write a function that takes one argument, a positive integer,
//  and returns the sum of its digits.
//  Do this without using for, while, or do...while loops - instead,
//  use a series of method calls to perform the sum.

function sum(integer) {
  return [...String(integer)]
    .map((n) => Number(n))
    .reduce((acc, number) => acc + number);
}

