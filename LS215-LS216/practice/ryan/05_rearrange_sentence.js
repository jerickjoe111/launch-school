// Given a sentence with numbers representing a word's 
// location embedded within each word, return the sorted sentence.

// Only the integers 1-9 will be used.

// rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

// rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

// rearrange(" ") ➞ ""


// input: a string of indexed words

// output: a string

// indexed words:

// word with one digit as character:

// characters without the digit char. : word

// digit: word position in final string (one-indexed)

// Caveats:


// bad inputs:

// string without words: empty string

// words without digit ???


// digits without other chararacters.???

// Strategies:

// helpers

// extract word

// extract position (as number)

// proto algo.:

// get array of indexed words

// init empty array

// for every word in array of indexed words:

//     extract word

//     extract position

//     insert word in ouput array at position

// join all words in output array

// return resulting string


function rearrange(sentence) {
  function validInput(string) {
    return string.match(/\w{2,}/g);
  }

  function extractWord(string) {
    return string.match(/[a-z!.(),]/ig).join('');
  }

  function extractPosition(string) {  
    return Number(string.match(/\d+/g)) - 1;
  }

  if (!validInput(sentence)) return '';

  let output = [];
  let indexedWords = sentence.split(' ');

  for (let i = 0; i < indexedWords.length; i += 1) {
    let indexWord = indexedWords[i];

    let position = extractPosition(indexWord);
    let word = extractWord(indexWord);

    output[position] = word;
  }

  return output.join(' ');
}

console.log(
  rearrange("is3 Cri1stiano 4the Rona2ldo 5best."),//"Cristiano Ronaldo is the best.")
  rearrange("is2 Thi1s T4est 3a"),// "This is a Test")
  rearrange("4of Fo1r pe6ople g3ood th5e the2"),// "For the good of the people")
  rearrange(" "),// "")
  rearrange("samosa3 I1 e2at"),// "I eat samosa")
  rearrange("h1appy y3all! coding2"),// "happy coding yall!")
)