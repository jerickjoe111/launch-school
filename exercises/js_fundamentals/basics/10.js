// Exercise 10

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(input_number) {
  let result = '';
  let number = Math.abs(input_number)

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  result = input_number < 0 ? `-${result}` : result
  return result;
}
