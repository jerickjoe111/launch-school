// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. 
// Only include full words inside each bucket.

// Examples
// bucketize("she sells sea shells by the sea", 10)
// ➞ ["she sells", "sea shells", "by the sea"]

// bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]

// input: a string, and a number n

// output: an array of word groups (buckets) as strings

//         each group can't have more than n characters

//         groups don't have to have the same number of characters

        
// Caveats!

// single letters count as words

// bad/empty inputs ???

// only include full words inside each bucket

// if buckets are too small to hold a single word, return an empty array

// trim beginning and end spaces for each bucket


// Examples:

// a b c d e      ,  2


// 'a ' 'b ' 'c ' 'd ' 'e ' 


// Strategy:

// helpers 

// trim.

// how to know when a word is too big for being kept in a bucket ???


// character by character or word by word???

// if we divide the string in words, 

// if any word is longer than n, RETURN EMPTY ARRAY EARLY!!

// keep the bucket as a string!!!!


// get array of words from input string 

// init. output as empty array

// init. bucket to first word

// for every word in array of words

//   count current value of the bucket 

//   calculate if word can be kept in bucket (value of bucket + space + value of new word in chars)

//   if yes:

//     add word to bucket

//   if no: 

//     add current bucket to output

//     reset bucket

//     add word to bucket

// join every bucket in output list as a single string

function bucketize(inputString, bucketLimit) {
  function validString(string, bucketLimit) {
    let words = string.split(' ');
    return !words.some(word => word.length > bucketLimit);
  }

  function canBeKeptInBucket(bucket, newWord) {
    return bucket.length + 1 + newWord.length <= bucketLimit;
  }

  let output = [];

  if (!validString(inputString, bucketLimit)) return output;

  let words = inputString.split(' ');
  let bucket = words[0];
  for (let i = 1; i < words.length; i += 1) {
    let newWord = words[i];
    if (canBeKeptInBucket(bucket, newWord)) {
      bucket += ' ' + newWord;
    } else {
      output.push(bucket);
      bucket = newWord;
    }
  }

  output.push(bucket)

  return output;
}



console.log(
  bucketize("a b c d e", 3),
  bucketize("she sells sea shells by the sea", 10),
  bucketize("the mouse jumped over the cheese", 7),
  bucketize("fairy dust coated the air", 20),
)

// bucketize("she sells sea shells by the sea", 10)
// ➞ ["she sells", "sea shells", "by the sea"]

// bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]