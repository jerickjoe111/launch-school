// Exercise 02

// The following program is expected to log each number between 0 and 9 (inclusive) 
// that is a multiple of 3. 
// Read through the code shown below. 
// Will it produce the expected result? Why or why not?

let i = 0;

while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
    i += 1;
  } else {
    i += 1;
  }
}

// If i is multiple of 3, the program never updates its value after printing it
// so the loop can continue; as 0 % 3 results in zero, this value is display infinitely,
// and the i value is never updated