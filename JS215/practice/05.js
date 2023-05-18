// Create a function that takes a positive integer and returns 
// the next bigger number that can be formed by rearranging its digits. 

// For example:
// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// input: integer

// output: next bigger integer with the same digits
// if not possible, return -1

// Examples:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// 414 ==> 441
// 144 ==> 414

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Strategies:

// make impossible helper ??

//   - only one digit
//   - all digits are the same
//   - digits are already in descending order

// main algorithm: 

//   until new number is next bigger number:

//     swap last two integers (at last and one before the last)

//     if not bigger (for instance, last two digits are the same): 
//       swap the next two (the one before the last, and the next one - in reverse order )

// swapper algo.:

//   convert number into a new array of digits

//   swap two digits

//   convert array to number

//   test if the new number is bigger



function nextBigger(number) {
  function impossibleBiggerInt(number) {
    let digits = [...String(number)];
    let allSameDigits = [...new Set(digits)].length === 1;
    let sortedInReverse = digits.slice().sort().reverse().join('') === digits.join('')
    return digits.length === 1 || allSameDigits || sortedInReverse;
  }
  
  if (impossibleBiggerInt(number)) return - 1;

  let array = [...String(number)];
  for (let i = array.length - 1; i > 0; i -= 1) {
    let newArray = array.slice();
    [newArray[i], newArray[i - 1]] = [newArray[i - 1], newArray[i]]
    let newNumber = Number(newArray.join(''))
    if (newNumber > number) {
      return newNumber; 
    }
  }
}

// console.log(nextBigger(12)) //==> 21
// console.log(nextBigger(513)) //==> 531
// console.log(nextBigger(2017)) //==> 2071
// console.log(nextBigger(414)) //==> 441
// console.log(nextBigger(144)) //==> 414
// console.log(nextBigger(9)) //==> -1
// console.log(nextBigger(111)) //==> -1
// console.log(nextBigger(531)) //==> -1
// console.log(nextBigger(58499)) //==> 1234567980 


// 1_234_567_890 ==>  
  //  1_234_567_980 
  //  1 234 567 980
// 58499 ==> 59498

// 27966665 ==> 29566667


// permutation
function nextBigger(number) {
  function impossibleBiggerInt(number) {
    let digits = [...String(number)];
    let allSameDigits = [...new Set(digits)].length === 1;
    let sortedInReverse = digits.slice().sort().reverse().join('') === digits.join('')
    return digits.length === 1 || allSameDigits || sortedInReverse;
  }

  if (impossibleBiggerInt(number)) return - 1;

 
}

console.log(nextBigger(12)) //==> 21
console.log(nextBigger(513)) //==> 531
console.log(nextBigger(2017)) //==> 2071
console.log(nextBigger(414)) //==> 441
console.log(nextBigger(144)) //==> 414
console.log(nextBigger(9)) //==> -1
console.log(nextBigger(111)) //==> -1
console.log(nextBigger(531)) //==> -1
console.log(nextBigger(58499)) //==> 1234567980 