## Is this a prime number?

```js
function isPrime(number) {
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) return false;
  }

  return true;
}
```

## Convert ANY type of value into a number

```js
function superToString(value) {
  if (isNaN(value)) return 0;
  else if (value !== null && typeof value === 'object') {
    return 0;
  } else return Number(value);
}
```