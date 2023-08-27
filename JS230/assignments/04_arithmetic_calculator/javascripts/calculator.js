document.addEventListener('DOMContentLoaded', () => {
  // dispatch table:
  const CALCULATE = {
    '+':(a, b) => a + b ,
    '-':(a, b) => a - b ,
    '*':(a, b) => a * b ,
    '/':(a, b) => {
      if (b === 0) return 'Zero division error';
      return a / b
    },
  }
  
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let numberA = parseFloat(document.querySelector('#first-number').value);
    let numberB = parseFloat(document.querySelector('#second-number').value);
    let operator = document.querySelector('#operator').value;
    let result = CALCULATE[operator](numberA, numberB);
    document.querySelector('#result').textContent = result;
  })
})