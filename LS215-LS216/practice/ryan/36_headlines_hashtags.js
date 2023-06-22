// Write a function that retrieves the top 3 
// longest words of a newspaper headline and transforms them into hashtags. 
// If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// ➞ ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// ➞ ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// ➞ ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// ➞ ["#visualizing", "#science"]

/*
input: a string

output: an array of top 3 (or less) words in string, by length, converted to hashtags (# + word in lowercase)



------------ **Types Involved** -------------



------------ **Caveats & Questions** -------------

punctuation does not count in word length.


------------ Examples/Test Cases/Edge's ------------

aaa bbbb cccc ddddddd => #bbbb #cccc #ddddddd



------------------ Strategies ------------------

get array of words without punctuation

map array of words to word lengths

find top 3 values of array of words (if length is 3 or less, process the whole array)

find: first word with top 1 length
      first word with top 2 length
      first word with top 3 length

convert words to hashtags

return hashtags


helper toHashtag

helper filter out punctutation (regexp)

,.;:!?'-

*/

const p = console.log


function getHashTags(string) {
  function filterOutPunctuation(word) {
    return word.replace(/[,.;:!?']/g, '');
  }
  
  function toHashtag(word) {
    return `#${word.toLowerCase()}`;
  }

  let words = string.split(' ').map(filterOutPunctuation);
  let sortedLengths = words.map(word => word.length).sort((a, b) => a - b);
  let top3 = sortedLengths.slice(-3).reverse();
  let topWords = [];
  for (let i = 0; i < top3.length; i += 1) {
    let topWord = words.find(word => word.length === top3[i] && !topWords.includes(word));
    topWords.push(topWord);
  }

  return topWords.map(toHashtag);
}

p(
  getHashTags("How the Avocado Became the Fruit of the Global Trade")
)
