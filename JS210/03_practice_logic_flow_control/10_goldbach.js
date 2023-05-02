// Write a function named checkGoldbach that uses Goldbach's Conjecture
// to log every pair of primes that sum to the number supplied as an argument.
// The conjecture states that "you can express every even integer greater than
// 2 as the sum of two primes". The function takes as its only parameter,
// an integer expectedSum, and logs all combinations of two prime numbers 
// whose sum is expectedSum. Log the prime pairs with the smaller number first. 
// If expectedSum is odd or less than 4, your function should log null.

function isPrime(number) {
  if (number <= 1) return false;

  for(let i = 2; i < number; i++) if (number % i === 0) return false;

  return true;
}

function goldbach(integer) {
  if (integer % 2 !== 0 || integer < 4) return null;

  let sums = []
  for(let i = 2; i < integer - 1; i += 1) {
    if (!isPrime(i)) continue;

    for(let j = 2; j < integer - 1; j += 1 ) {
      if (!isPrime(j)) continue;

      if (i + j === integer) {
        let sum = String([i, j].sort()).replace(',', ' ');
        if (!sums.includes(sum)) sums.push(sum);
      }
    }
  }

  for(let sum of sums) console.log(sum);
}
