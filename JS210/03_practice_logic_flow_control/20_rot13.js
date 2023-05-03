// // Rot13 ("rotate by 13 places") is a letter-substitution cipher
// that translates a String into a new String

function rot13(string) {
  const ROT_FACTOR = 13;
  const UPPERCASE = /[A-Z]/;
  const LOWERCASE = /[a-z]/;
  const UPPERCASE_OFFSET = 'A'.charCodeAt(0);
  const LOWERCASE_OFFSET = 'a'.charCodeAt(0);
  const ALPHABET_LETTERS = 26;

  function rotate(character, offset) {
    let charCode = character.charCodeAt(0);
    charCode -= offset;
    charCode += ROT_FACTOR;
    charCode %= ALPHABET_LETTERS;
    charCode += offset;
    // charCode = (((charCode - offset) + ROT_FACTOR) % ALPHABET_LETTERS) + offset;
    return String.fromCharCode(charCode);
  }

  let output = '';
  for (let i = 0; i < string.length; i += 1) {
    let character = string[i];
    if (character.match(LOWERCASE)) character = rotate(character, LOWERCASE_OFFSET);
    else if (character.match(UPPERCASE)) character = rotate(character, UPPERCASE_OFFSET);
    output += character;
  }

  return output;
}

// let a = rot13(rot13('Teachers open the door, but you must enter by yourself.'));

// console.log(a);

const start = process.hrtime.bigint()

rot13('Teachers open the door, but you must enter by yourself.');

const end = process.hrtime.bigint()
console.log(`Execution time: ${(end - start) / BigInt(1000)} ms`);