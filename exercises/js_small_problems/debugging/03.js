// Exercise 03

// One bored and hungry evening we decided to randomly generate recipes. 
// We can't wait to see the first suggestions, but JavaScript raises a TypeError, 
// telling us that dishName.join is not a function. What is wrong?

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  const elements = array.slice();
  const randomElements = [];

  while (n > 0 && elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }

  return randomElements;
}

// Ingredients

const ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

const spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

const extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

const adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
const firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
const secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

// const dishName = random(adjective) + random(firstNoun) + random(secondNoun);
// const dish = random(ingredients, 3) + random(spices, 2) + random(extras, 1);

// We needed to concatenate the arrays using another syntax
const dishName = [...random(adjective), ...random(firstNoun), ...random(secondNoun)];
const dish = [...random(ingredients, 3), ...random(spices, 2), ...random(extras, 1)];

console.log(`How about: ${dishName.join(' ')}`);
console.log(`You need: ${dish.join(', ')}`);