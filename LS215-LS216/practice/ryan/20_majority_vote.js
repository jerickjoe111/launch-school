// Create a function that returns the majority vote in an array. 
// A majority vote is an element that occurs > N/2 times in an array 
// (where N is the length of the array).

// Examples
// majorityVote(["A", "A", "B"]) ➞ "A"

// majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

// majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null


// input: an array of letters (votes)

// output: a letter (the letter with the majority vote)
//         null (if there is no winner)

// majority vote: n / 2 + 1 or more (n is the number of votes)

/*
------------ **Types Involved** -------------

strings: votes

output: value is string or null

------------ **Caveats & Questions** -------------

return null if no winner

empty inputs ???, return null

the majority will always be the half of votes length, rounded up ???

------------ Examples/Test Cases/Edge's ------------

empty inputs ?? 

votes with non-strings ??? 

empty strings???

arrays with just one letter??

!!!

when n is even ma. vote.: n / 2 + 1 

when n is odd  ma. vote.: Round(n / 2)

------------------ Strategies ------------------

should i filter out non-strings and empty strings first ???

helpers;

n is odd or even

non-valid-votes

array of uniques

count number of occurrences in array of letters

majority

-------------------- Algorithm ---------------------

1. filter out non-valid votes

1b. return null if resulting array is empty

2. calculate majority votes, M

3. get array of unique letters

4. for every unique letter

    - if letter appears M or more times in votes, RETURN LETTER

5. return null (no one won)

---------------------- Notes -----------------------

*/

function majorityVote(votes) {
  function isEven(number) {
    return number % 2 === 0;
  }
  
  function validVote(vote) {
    return typeof vote === 'string' && vote.length > 0;
  }
  
  function uniques(array) {
    return [...new Set(array)];
  }
  
  function occurrences(value) {
    return votes.filter(e => e === value).length;
  }
  
  function majority(number) {
    if (isEven(number)) return (number / 2) + 1;
    else return Math.round(number / 2);
  }

  votes = votes.filter(vote => validVote(vote));

  if (votes.length === 0) return null;

  let necessaryVotes = majority(votes.length);
  let uniqueVotes = uniques(votes);
  for (let i = 0; i < uniqueVotes.length; i += 1) {
    let vote = uniqueVotes[i];
    if (occurrences(vote) >= necessaryVotes) return vote;
  }

  return null;
}

console.log(
  majority(2)
)