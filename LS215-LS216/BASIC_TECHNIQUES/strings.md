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