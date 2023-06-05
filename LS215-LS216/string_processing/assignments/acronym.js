// Write a function that generates and returns an acronym from a string of words. 
// For example, the function should return "PNG" for the string "Portable Network Graphics". 
// Count compound words (words connected with a dash) as separate words.

function acronym(string) {
  return string
    .split(/[\s-]/)
    .map(word => word[0].toUpperCase())
    .join('');
}
