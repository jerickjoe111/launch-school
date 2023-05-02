// Write a function that iterates over the integers from 1 to 100, inclusive. 
// For multiples of three, log "Fizz" to the console. 
// For multiples of five, log "Buzz". 
// For numbers which are multiples of both three and five, log "FizzBuzz". 
// For all other numbers, log the number.

function fizzBuzz() {
  const MAXNUMBER = 100;

  function isMultiple(n, multiple) {
    return n % multiple === 0;
  }

  for(let i = 1; i <= MAXNUMBER; i++) {
    let result = null;
    if (isMultiple(i, 3) && isMultiple(i, 3)) {
      result = 'FizzBuzz';
    } else if (isMultiple(i, 3)) {
      result = 'Fizz';
    } else if (isMultiple(i, 5)) {
      result = 'Buzz';
    } else {
      result = i;
    }

    console.log(result);
  }
}

fizzBuzz();

function fizzBuzz2() {
  const MAXNUMBER = 100;

  function isMultiple(n, multiple) {
    return n % multiple === 0;
  }

  for(let number = 1; number <= MAXNUMBER; number++) {
    result = '';

    if (isMultiple(number, 3)) result += 'Fizz';
    if (isMultiple(number, 5)) result += 'Buzz';

    console.log(result || number)
  }
}

fizzBuzz2();