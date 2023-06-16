// Create a function that converts a string into a matrix of 
// characters that can be read vertically. Add spaces when characters are missing.

// Examples
// verticalText("Holy bananas") ➞ [
//   ["H", "b"],
//   ["o", "a"],
//   ["l", "n"],
//   ["y", "a"],
//   [" ", "n"],
//   [" ", "a"],
//   [" ", "s"]
// ]

// verticalText("Hello fellas") ➞ [
//   ["H", "f"],
//   ["e", "e"],
//   ["l", "l"],
//   ["l", "l"],
//   ["o", "a"],
//   [" ", "s"]
// ]
/*

input; a string of words (chars. and spaces)

output: a matrix with vertical text

first word: first column,
second word: second column, 
etc,


------------ **Types Involved** -------------

characters (including spaces)
any character will do

the spaces delimit words ???

------------ **Caveats & Questions** -------------

all valid strings ??
all space strings ??

validate empty inputs/bad inputs???

words with different lengths ??

------------ Examples/Test Cases/Edge's ------------

input; aaa bbb

output

a b
a b
a b

input: aaa bbbc

a b
a b
a b
* c
------------------ Strategies ------------------
THE COLUMNS ARE AS LONG AS THE LONGEST WORD IN INPUT STRING
(calculate that to find matrix size)

the number of ROWS is equal to the length of the longest word

the number of COLUMNS is equal to the number of words

first, build empty matrix with that two pieces of data

    the size of each subarray within the array, is the number of columns

    the number of subarrays within the array, is the number of rows

second, populate matrix

HUNCH ???
{

}

nested iteration

for every word ->  i (column)

  get current word (words at i)

  longest word number of times -> j (row)

    get character from current word (character at j)

    if char is undefined, char is equal to space
    
    add char, to matrix[j, i]

aaa bbbc

words (i) 1 => bbbc

chars (j) 0 undefined

matrix[3][1] 

[a ,b]
[a , ]
[a, ]
[*, ]


-------------------- Algorithm ---------------------

1. build matrix
    - find longest word
    - find number of words
    - init empty array
    - do longest word length times:
      - add a subarray of size number of words to that array

2. for every word ->  i (column)

      get current word (words at i)

      longest word number of times -> j (row)

          get character from current word (character at j)

          if char is undefined, char is equal to space
          
          add char, to matrix[j, i]

3. return matrix

4.

5.

*/

function verticalText(sentence) {
  function buildMatrix() {
    let matrix = [];
    for (let i = 0; i < rows; i += 1) matrix.push([]);
    return matrix;
  }

  function longestWord() {
    return Math.max(...words.map(w => w.length));
  }
  if (typeof sentence !== 'string' || sentence === '') return null;

  let words = sentence.split(' ');
  let rows = longestWord();
  let columns = words.length;
  let matrix = buildMatrix();
  for (let column = 0; column < columns; column += 1) {
    let word = words[column];
    for (let row = 0; row < rows; row += 1) {
      let character = word[row] || ' ';
      matrix[row][column] = character;
    }
  }

  return matrix;
}

console.log(
  // verticalText('aaa b'),
  verticalText("Holy bananas") 

)

  //   ["H", "b"],
  //   ["o", "a"],
  //   ["l", "n"],
  //   ["y", "a"],
  //   [" ", "n"],
  //   [" ", "a"],
  //   [" ", "s"]
  // ]