// Exercise 05

// Write a function that takes a string argument and returns a list of substrings of that string. 
// Each substring should begin with the first letter of the word, 
// and the list should be ordered from shortest to longest.

function leadingSubstrings(string) {
  return string.split('').map((_, i) => {
      return string.slice(0, i + 1);
    }
  );
}
