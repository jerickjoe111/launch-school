const getFruit = async(name) => {
  const FRUITS = {
    pinneaple: '🍍',
    peach: '🍑',
    strawberry: '🍓',
  }

  return FRUITS[name]; // === return Promise.resolve(FRUITS[name]);
}

const makeSmoothie = async() => { // slow (not optimized: not concurrent)
  let a = await getFruit('pinneaple'); 
  let b = await getFruit('strawberry');

  return [a, b];
}

makeSmoothie().then(console.log)

const makeSmoothie2 = () => {
  let a;
  return getFruit('pinneaple') // this is an async function (returns Promise)
           .then(v => {
              a = v;
              return getFruit('strawberry')
           })
           .then(v => [a, v])
}

makeSmoothie2().then(console.log)

const makeSmoothieConcurrent = async() => { // fast (optimize: concurrent)
  let a = getFruit('pinneaple'); 
  let b = getFruit('strawberry');

  return await Promise.all([a, b])
}