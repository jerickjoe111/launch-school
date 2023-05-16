// Exercise 03

// The following program is expected to log a multiplication table for 
// the numbers from 1 to 10 to the console. Read through the code shown below. 
// Will it produce the expected result? Why or why not?

function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

for (let i = 1; i <= 10; i += 1) { 
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

// the condition expresion in the outer for loop is wrong: we have to set it to i <= 10