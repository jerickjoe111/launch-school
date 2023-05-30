// Exercise 06

// Write a function that returns a list of all substrings of a string. 
// Order the returned list by where in the string the substring begins. 
// This means that all substrings that start at index position 0 should come first, 
// then all substrings that start at index position 1, and so on. 
// Since multiple substrings will occur at each position, 
// return the substrings at a given index from shortest to longest.

function substrings(string) {
  function leadingSubstrings(startingIndex = 0, string) {
    return string.split('').map((_, i) => {
        return string.slice(startingIndex, i + 1);
      }
    );
  }

  let output = []
  for (let i = 0; i < string.length; i += 1) {
    output.push(leadingSubstrings(i, string).filter(s => s.length !== 0));
  }

  return output.flat();
}

console.log(
substrings('abcde')
)