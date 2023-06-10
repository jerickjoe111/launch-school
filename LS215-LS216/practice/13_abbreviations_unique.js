// You are given two inputs:

// An array of abbreviations.
// An array of words.
// Write a function that returns true if each abbreviation uniquely identifies a word, and false otherwise.

// Examples
// uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// // "ho" and "h" are ambiguous and can identify either "house" or "hope"

// uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

// uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

// uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true


// input: an array of abbreviations (strings), 
//        an array of words(strings)


// output: a boolean: (true if every abbreviation uniquely identifes a word)


// for every abb. there is a word (at same index pos.)

// check if; every abreviation uniquely identifies corresponding word in the words array


// every substring is 

// substring, sized x

// Caveats:

// bad inputs??

// asymmetrical inputs??

// substrings of any size??

// could an abbreviation not identify any word???

// Examples:

// ab d a ,      abc def ala => false

// Strategies:

// helper: isAbbreviation(abbreviation, word)

// nested iteration:


// for every abbreviation at index i

//   if !abbreviation identifies i RETURN FALSE

//   for every word at index j

//       skip j if equal to i

//       if abbreviation i identifies word at j, RETURN FALSE


// return true

// Examples

// uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]) ➞ false
// // "ho" and "h" are ambiguous and can identify either "house" or "hope"

// uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]) ➞ true

// uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]) ➞ false

// uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]) ➞ true


function uniqueAbbrev(abbreviations, words) {
  function isAbbreviation(abbreviation, word) {
    return word.slice(0, abbreviation.length) === abbreviation;
  }

  for (let i = 0; i < abbreviations.length; i += 1) {
    let abbreviation = abbreviations[i];
    if (!isAbbreviation(abbreviation, words[i])) return false;

    for (let j = 0; j < words.length; j += 1) {
      if (j === i) continue;

      if (isAbbreviation(abbreviation, words[j])) return false;
    }
  }

  return true;
}



console.log(
  uniqueAbbrev(["ho", "h", "ha"], ["house", "hope", "happy"]),
  uniqueAbbrev(["s", "t", "v"], ["stamina", "television", "vindaloo"]),
  uniqueAbbrev(["bi", "ba", "bat"], ["big", "bard", "battery"]),
uniqueAbbrev(["mo", "ma", "me"], ["moment", "many", "mean"]),
)