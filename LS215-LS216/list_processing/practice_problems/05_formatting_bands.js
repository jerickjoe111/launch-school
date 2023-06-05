
// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.

// Write a function that can process the input band Array and return an Array that contains the fixed information:

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  function capitalize(string) {
    return string.split('')
                 .map((letter, index) => {
                   let new_letter = index === 0 || string[index - 1] === ' ' ? letter.toUpperCase() : letter ;
                   return new_letter;
                 }
                 )
                 .join('')
  }

  return data.map( band => {
    return {
      name: capitalize(band.name.replace('.', '')),
      country: 'Canada',
      active: band.active,
    }
  })
}
console.log(
  processBands(bands)
)

