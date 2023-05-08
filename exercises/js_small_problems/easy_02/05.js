// Exercise 05

// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, 
// and injects them into a story that you create.

let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adjective = prompt('Enter an adjective:');
let adverb = prompt('Enter an adverb:');

let sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
let sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
let sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);