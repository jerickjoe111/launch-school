function hasDuplicates(array) {
  let noDuplicates = [...new Set(array)].join('');

  return noDuplicates !== array.join('')
}

let a = [1,2];


console.log(
  hasDuplicates(a) // => true

  )