// Exercise 06

const prompt = require('prompt-sync')();

const prompt_message1 = 'Please, enter a phrase: '

let phrase = prompt(prompt_message1);
let letters = phrase.replace(/[^a-zA-Z]+/, '').length;
console.log(`There are ${letters} letters in "${phrase}"`);