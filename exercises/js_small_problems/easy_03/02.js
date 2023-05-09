// Exercise 02

// Write a program that solicits six numbers from the user and logs 
// a message that describes whether the sixth number appears 
// among the first five numbers.

function toSuffix(integer) {
  switch (integer) {
  case(1):
   return 'st';
  case(2):
   return 'nd';
  case(3):
   return 'rd';
  default:
   return 'th';
  }
}

let numbers = [];
let last_number;
for (let i = 1; i < 7; i += 1) {
  let number = prompt(`Enter the ${i}${toSuffix(i)} number:`)
  if (i != 6) {
    numbers.push(Number(number));
    continue;
  }
  last_number = Number(number);
}

let message;
if (numbers.includes(last_number)) {
  message = `The number ${last_number} appears in [${number.join(', ')}].`;
} else {
  message = `The number ${last_number} does not appear [in ${numbers.join(', ')}].`;
}

console.log(message);