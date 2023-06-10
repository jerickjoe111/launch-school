// Write a function that takes in a string and for each character, 
// returns the distance to the nearest vowel in the string. 
// If the character is a vowel itself, return 0.

// distanceToNearestVowel("aaaaa") ➞ [0, 0, 0, 0, 0]

// distanceToNearestVowel("babbb") ➞ [1, 0, 1, 2, 3]

// distanceToNearestVowel("abcdabcd") ➞ [0, 1, 2, 1, 0, 1, 2, 3]

// distanceToNearestVowel("shopper") ➞ [2, 1, 0, 1, 1, 0, 1]

// input: a string

// output: a list of numbers (one per character in input string)


//         each number is the distance to closest vowel


// how to calculate distance??


// Caveats?

// bad/empty inputs???

// no vowel inputs???

// vowel itself, the distance is 0??

// only to the right??? also to the left???

// case insensitive????

// Examples:
//   01234
// ("babbb") ➞ [1, 0, 1, 2, 3]
  
// 0 b     1
// 1 a     0
// 2 b     1
// 3 b     2
// 4 b     3

// from the current char. index, 
// find next character that is a vowel, 

// if none found, reverse string, look again,

// when found:

//   closest vowel index - current index (absolute value)


// Strategies:

// helper to reverse the string

// helper to find index of closest vowel to current character, from a given starting point

function distanceToNearestVowel(string) {
  function isVowel(character) {
    return /[aeiou]/i.test(character);
  }
  
  function findIndexOfClosestVowel(string, startingPoint) {
    let counterForward = 0;
    let foundForward = false;
    
    for (let i = startingPoint; i < string.length; i += 1) {
      let character = string[i];
      
      if (isVowel(character)) {
        foundForward = true;
        break;
      }
      counterForward += 1;
    }

    let counterBackwards = 0;
    let foundBackwards = false;
    for (let i = startingPoint; i >= 0; i -= 1) {
      let character = string[i];
    
      if (isVowel(character)) {
        foundBackwards = true;
        break;
      }
      counterBackwards += 1;
    }
    
    if (!foundBackwards) return counterForward; 
    else if (!foundForward) return counterBackwards;
    else return Math.min(counterBackwards, counterForward);
  }

  return string.split('').map((_, currentIndex) => {

    return findIndexOfClosestVowel(string, currentIndex)
  });
  
}


console.log(
distanceToNearestVowel("aaaaa"), // ➞ [0, 0, 0, 0, 0]

distanceToNearestVowel("babbb"), // ➞ [1, 0, 1, 2, 3]

distanceToNearestVowel("abcdabcd"), // ➞ [0, 1, 2, 1, 0, 1, 2, 3]

distanceToNearestVowel("shopper"), // ➞ [2, 1, 0, 1, 1, 0, 1]
)








