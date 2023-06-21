// The function is given a string consisting from "0", "1" characters. 
// The string represents a parking area:

// "1" - the slot is occupied,
// "0" - the slot is vacant.
// Find a vacant slot such that it has the maximum distance from an occupied one. 
// It can be at the ends of the area or between two "1"s. 

// Return the maximum distance as integer.

// Examples
// maxDistance("01") ➞ 1
// // Only the first slot is vacant. Take it. The distance is 1.

// maxDistance("100") ➞ 2
// // Take the last slot on the right. The distance is 2.

// maxDistance("100000101") ➞ 3
// // Take the slot at index 3. The distance is 3.

// maxDistance("000010000001001") ➞ 4
// Take the slot at index 0. The distance is 4.
// The other possible slots at indices 7, 8 have distance 3.

/*

input: a string consisting of 0s and 1s

output: a number, the max. distance of a vacant spot (0) from other 1s (between 1s)

1: occupied spot

0: vacant spot

------------ **Types Involved** -------------

input string

output number

------------ **Caveats & Questions** -------------

all valid string input ???

------------ Examples/Test Cases/Edge's ------------

'' => 0 ?

'1' => 0 ?

'0' => 1 ?

01 => 1

100 => 2

  100000101 => 3
i.012345678
     ^

000010000001001
^      ^^ 

0000100000001001
^      ^^ 
------------------ Strategies ------------------

HUNCH ???
{
longest substring of 0s and calculate half ??? for middle substrings
length of substring for 0s if in beginning or end ????
}

get array of 0s substrings

for every substring

  if substring is at the beggining or the end

    calculate length of substring

  if substring is between 1s (helper)

    if length is even (helper), calculate length / 2
    if length is odd, calculate length / 2, round up

return greater value

000010000001001 => 4

s1 0000 B => 4

s2 000000 M => 3

s3 00 M => 1

*/
function maxDistance(string) {
  function inFringes(substring) {
    let index = string.indexOf(substring) // at the beginning
    let lastIndex = string.lastIndexOf(substring) // at the end

    return string.startsWith(substring) || string.endsWith(substring);
  }
  
  let zeroes = string.match(/0+/g);

  let distances = zeroes.map(substring => {
    let substringLength = substring.length;
    if (inFringes(substring)) return substringLength;
    else return Math.ceil(substringLength / 2);
  })

  return Math.max(...distances)
}


const p = console.log

// p(maxDistance('000010000001001'))

p(maxDistance("01")); // ➞ 1
// // Only the first slot is vacant. Take it. The distance is 1.

p(maxDistance("100")); // ➞ 2
// // Take the last slot on the right. The distance is 2.

p(maxDistance("100000101")); // ➞ 3
// // Take the slot at index 3. The distance is 3.

p(maxDistance("000010000001001")); // ➞ 4