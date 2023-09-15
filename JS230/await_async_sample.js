const getFruit = async(name) => {
  const FRUITS = {
    pinneaple: '🍍',
    peach: '🍑',
    strawberry: '🍓',
  }

  return FRUITS[name]; 
  // In an async function, this is equal to:
  // return Promise.resolve(FRUITS[name]);
}

const makeSmoothie = async() => { // slow (not optimized: not concurrent)
  let a = await getFruit('pinneaple'); 
  let b = await getFruit('strawberry'); // this has to await for the previous one

  return [a, b];
}

makeSmoothie().then(console.log) // ==> [ '🍍', '🍓' ]

const makeSmoothie2 = () => {
  let a;
  return getFruit('pinneaple') // this is an async function (returns a Promise)
           .then(value => {
              a = value;
              return getFruit('strawberry')
           })
           .then(value => [a, value])
}

makeSmoothie2().then(console.log) // ==> [ '🍍', '🍓' ]

const makeSmoothieConcurrent = async() => { // fast (optimize: concurrent)
  let a = getFruit('pinneaple'); 
  let b = getFruit('strawberry');

  return await Promise.all([a, b]) // both run concurrently
}