// Exercise 02

// Write a function that will take a short line of text, 
// and write it to the console log within a box.


function logInBox(string) {
  let boxLength = string.length + 2;
  let ceiling = `+${repeatCharacter('-', boxLength)}+`;
  let emptyLine = `|${repeatCharacter(' ', boxLength)}|`;

  console.log(ceiling);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(ceiling);
}

function repeatCharacter(character, times) {
  let repeated = '';
  while (repeated.length < times) repeated += character;
  return repeated;
}