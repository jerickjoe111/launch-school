// Exercise 06

// Run the following code. Why is every warning displayed twice? 
// Change the code so that each warning is displayed only once, as intended.

const species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
const isMidnight = true;
const isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return `were${species}`;
}

for (let index = 0; index < species.length; index++) {
  const thisSpecies = species[index];
  let newSpecies;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
    newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    debugger;
    console.log(`Beware of the ${newSpecies}!`);
  }
}