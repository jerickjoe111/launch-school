// Create a function that computes the Greatest Common Divisor of two positive integers.

function gcd(numberA, numberB) {
  let numbers = [numberA, numberB].sort();
  let numberMin = numbers[0], numberMax = numbers[1];

  for(let divisor = numberMax; divisor >= 1; divisor -= 1) {
    if ((numberMin % divisor === 0) && (numberMax % divisor === 0)) return divisor;
  }
}
