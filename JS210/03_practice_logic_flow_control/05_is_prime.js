// Write a function that takes a number argument, 
// and returns true if the number is prime, or false if it is not.

// You may assume that the input is always a non-negative integer.

function isPrime(number) {
  if (number <= 1) return false;

  for(let i = 2; i < number; i++) if (number % i === 0) return false;

  return true;
}

console.log(isPrime(55));