// Suppose a pair of identical characters serve as book ends for 
// all characters in between them. Write a function that returns 
// the total number of unique characters (books, so to speak) 
// between all pairs of book ends.

// The function will look like:

// countUniqueBooks("stringSequence", "bookEnd")
// Examples
// countUniqueBooks("AZYWABBCATTTA", "A") ➞ 4

// // 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// // 2nd bookend group: "ATTTA": 1 unique book: "T"

// // "ABBCA" not included since the first "A" was used in the 1st bookend group.

// countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3

// countUniqueBooks("ZZABCDEF", "Z") ➞ 0

/*
input: two strings,

      books: a series of characters

      bookend: book delimiter character

output: number of unique characters between book delimiters

unique: 

------------ **Types Involved** -------------



------------ **Caveats & Questions** -------------

can the books contain a delimiter character ???

'' => ???



------------ Examples/Test Cases/Edge's ------------

// countUniqueBooks("$AA$BBCATT$C$$B$", "$") ➞ 3
first group    a $AA$
second group   b c t $C$
3 group        c $B$
4 group        b

abct

// countUniqueBooks("BBCATTTA", "A") ➞ 4

1g z y w AZYWA
2g b c   ATTTA
3g t

z y q


------------------ Strategies ------------------

HUNCH ???
{
regular expression /DELIMITER(.+)DELIMITER/gi 
}

get array of substrings between delimiters

-------------------- Algorithm ---------------------

*/

const p = console.log

function countUniqueBooks(string, bookend) {
  function betweenDelimiters() {
    return string.match(new RegExp(`\\${bookend}[^${bookend}]+\\${bookend}`, 'gi')) || [];
  }

  let books = betweenDelimiters();

  let uniquesString = books.map(substring => {
    return [...new Set(substring.split(''))].join('').replace(bookend, '');
  }).join('')

  return [...new Set(uniquesString)].length;
}

p(
  countUniqueBooks("$AA$BBCATT$C$$B$", "$")
)