# Basic String Techniques

1. [Convert ANY type of value into a string](#convert-any-type-of-value-into-a-string)
2. [Get all CONSECUTIVE SUBSTRINGS from string, SIZE 1 or more](#get-all-consecutive-substrings-from-string-size-1-or-more)
3. [Get all CONSECUTIVE SUBSTRINGS from string, SIZE 2 or more](#get-all-consecutive-substrings-from-string-size-2-or-more)
4. [Array of INSTANCES OF A SUBSTRING in a string](#array-of-instances-of-a-substring-in-a-string)
5. [NUMBER OF OCCURRENCES of substring in string](#number-of-occurrences-of-substring-in-string)
6. [Are these words ANAGRAMS (same letters, different order)](#are-these-words-anagrams-same-letters-different-order)
7. [Is this word a PALINDROME (can be read from both sides)](#is-this-word-a-palindrome-can-be-read-from-both-sides)
8. [Consonants RegExp](#consonants-regexp)
9.  [Vowels RegExp](#vowels-regexp)
10. [COMPARE if two strings are equal, case insensitively](#compare-if-two-strings-are-equal-case-insensitively)
11. [Check if string MATCHES ALL CHARACTERS from a set (i.e.: all letters) EXCEPT A FEW (i.e.: a, b and c)](#check-if-string-matches-all-characters-from-a-set-ie-all-letters-except-a-few-ie-a-b-and-c)
12. [Get array of substrings of characters between two distinct delimiters](#get-array-of-substrings-of-characters-between-two-distinct-delimiters)
13. [Sort strings by LENGTH](#sort-strings-by-length-in-ascending-order) 
14. [Get array with DIFFERENCE characters (characters that are not present in one of the two words)](#get-array-with-difference-characters-characters-that-are-not-present-in-one-of-the-two-words)
15. [Get all string PERMUTATIONS](#get-all-string-permutations)

## Convert ANY type of value into a string

```js
function superToString(value) {
  if (value !== null && typeof value === 'object') {
    return String(Object.entries(value))
  } else return String(value);
}
```

## Get all consecutive substrings from string, size 1 or more

```js
let string = 'abc';

let substrings = [];

for (let i = 0; i < string.length; i += 1) {
  let substring = '';
  for (let j = i; j < string.length; j += 1) {
    substring += string[j];
    substrings.push(substring)
  }
}

substrings // => [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]
```

## Get all consecutive substrings from string, size 2 or more

```js
let string = 'abc';

let substrings = [];

for (let i = 0; i < string.length; i += 1) {
  let substring = string[i];
  for (let j = i + 1; j < string.length; j += 1) {
    substring += string[j];
    substrings.push(substring)
  }
}

substrings // => [ 'ab', 'abc', 'bc' ]
```



## Array of instances of a substring in a string

```js
let substring = 'abc'
let substringRegExp = new RegExp(`${substring}`, 'ig') // i: case insenstive, g: look globally

let string = 'abcadfadsffAbcasfasfABC';

string.match(substringRegExp) // => [ 'abc', 'Abc', 'ABC' ]
```

## Number of occurrences of substring in string

```js
let substring = 'abc'
let substringRegExp = new RegExp(`${substring}`, 'ig') // i: case insenstive, g: look globally

let string = 'abcadfadsffAbcasfasfABC';

string.match(substringRegExp).length // => 3
```


## Are these words anagrams (same letters, different order)

```js
function areAnagrams(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  return [...word1].sort().join('') === [...word2].sort().join('');
}
```

## Is this word a palindrome (can be read from both sides)

```js
function isPalindrome(word) {
  word = word.toLowerCase();
  return word === [...word].reverse().join('')
}
```

## Consonants RegExp

This Regular Expression only matches consonants, case insensitively
```js
let consonants = /(?:(?![aeiou])[a-z])/gi;

// True if string includes consonants
consonants.test('abc') // => true

// Returns array with consonants
'abc'.match(consonants) // => ['b', 'c']
```

## Vowels RegExp

This Regular Expression only matches vowels, case insensitively
```js
let vowels = /[aeiou]/gi;

// True if string includes vowels
vowels.test('abc') // => true

// Returns array with vowels
'abc'.match(vowels) // => ['a']
```

## Compare if two strings are equal, case insensitively

```js
function compare(stringA, stringB) {
  return stringA.toLowerCase() === stringB.toLowerCase();
}
```

## Check if string MATCHES ALL CHARACTERS from a set (i.e.: all letters) EXCEPT A FEW (i.e.: a, b and c)

```js
let text1 = 'abc1234abc';

let letters = /[a-z]gi/;
let exceptions = /x|y|z/;
// Matches all letters but a few (xyz)
letters.test(text1) && !exceptions.text(text1)

```

## Get array of substrings of characters between two distinct delimiters

```js
function betweenDelimiters(string, delimiter) {
  return string.match(new RegExp(`\\${delimiter}[^${delimiter}]+\\${delimiter}`, 'gi'))
}
```

## Sort strings by length in Ascending Order

```js
let strings = ['aaaa', 'bb', 'cccccccc'];

strings.sort((a, b) => a.length - b.length);

let shortestString = strings[0];
let longestString = strings[strings.length - 1];
```

## Get array with difference characters (characters that are not present in one of the two words)

```js
let shortestWord = 'abcdef';
let longestWord = 'aXbYcZdQeKf';

let differenceCharacters = longest.match(new RegExp(`[^${shortest}]`, 'gi'));
```

## Get all string permutations

```js
function permutations(string) {
  let array = [...string];
  function permute(array, memo = []) {
    if (array.length === 0) {
      output.push(memo)
    } else {
      for (let i = 0; i < array.length; i += 1) {
        let current = array.slice();
        let next = current.splice(i, 1);
        permute(current.slice(), memo.concat(next));
     }
   } 
  }

  let output = [];

  permute(array);

  return output.map(p => p.join(''));
}

let a = 'abc';
permutations([...a]); // =>
//                 [
//                   'abc',
//                   'acb',
//                   'bac',
//                   'bca',
//                   'cab',
//                   'cba'
//                 ]
```