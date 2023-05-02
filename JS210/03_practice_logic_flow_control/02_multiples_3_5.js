// Write a function that logs the integers from 1 to 100 (inclusive) 
// that are multiples of either 3 or 5. 
// If the number is divisible by both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive() {
  function isMultiple(n, multiple) {
    return n % multiple === 0;
  }
  
  const MAXNUMBER = 100;
  for(let number = 1; number <= MAXNUMBER; number++) {
    if (isMultiple(number, 3) && isMultiple(number, 5)) {
      console.log(String(number) + '!')
    } else if (isMultiple(number, 3) || isMultiple(number, 5)) {
      console.log(String(number))
    }
  }
}

multiplesOfThreeAndFive();

// For additional practice, how would you change your function so it takes, 
// as arguments, the range of numbers it should check?

function multiplesOfThreeAndFiveRange(startNumber, endNumber) {
  function isMultiple(n, multiple) {
    return n % multiple === 0;
  }
  
  for(let number = startNumber; number <= endNumber; number++) {
    if (isMultiple(number, 3) && isMultiple(number, 5)) {
      console.log(String(number) + '!')
    } else if (isMultiple(number, 3) || isMultiple(number, 5)) {
      console.log(String(number))
    }
  }
}

multiplesOfThreeAndFiveRange(1, 33)