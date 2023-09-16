async function getFruit(name) {
  const FRUITS = {
    pinneaple: '🍍',
    peach: '🍑',
    strawberry: '🍓',
  }

  return FRUITS[name]; 
  // In an async function, this is equivalent to:
  // return Promise.resolve(FRUITS[name]);
}

// These two functions are equivalent:

async function makeSmoothie() { // slow (not optimized: not concurrent)
  let a = await getFruit('pinneaple'); 
  let b = await getFruit('strawberry'); // this has to await for the previous one

  return [a, b];
}
makeSmoothie().then(console.log) // ==> [ '🍍', '🍓' ]

function makeSmoothie2() {
  let fruitA;
  return getFruit('pinneaple') // this is an async function (returns a Promise)
           .then(fruit => {
              fruitA = fruit;
              return getFruit('strawberry')
           })
           .then(fruitB => [fruitA, fruitB])
}
makeSmoothie2().then(console.log) // ==> [ '🍍', '🍓' ]


// Optimized:

async function makeSmoothieConcurrent() { // fast (optimize: concurrent)
  let a = getFruit('pinneaple'); 
  let b = getFruit('strawberry');

  return await Promise.all([a, b]) // both run concurrently
}