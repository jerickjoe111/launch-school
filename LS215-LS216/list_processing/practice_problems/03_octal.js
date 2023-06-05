// Write a Function named octalToDecimal that performs octal to decimal conversion. 
// When invoked on a String that contains the representation of an octal number, 
// the Function returns a decimal version of that value as a Number. 
// Implement the conversion yourself: do not use something else to perform 
// the conversion for you.

function octalToDecimal(octal) {
  const BASE = 8;
  return Array.from(octal, Number)
    .map((digit, index, digitsArray) => {
        let power = Math.abs((index - digitsArray.length) + 1);
        return digit * (BASE **power);
      }
    )
    .reduce((sum, digit) => sum += digit);
}
