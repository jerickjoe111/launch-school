// Exercise 09

// Write a function that counts the number of occurrences of each element 
// in a given array. 
// Once counted, log each element alongside the number of occurrences.

function countOccurrences(array) {
  let occurrences = {};

  for (let i = 0; i < array.length; i += 1) {
    occurrences[array[i]] |= 0;
    occurrences[array[i]] += 1;
  }

  for (let word in occurrences) {
    console.log(`${word} => ${occurrences[word]}`);
  }
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
