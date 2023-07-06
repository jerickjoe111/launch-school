# Practice Problems: Higher-Order Functions

## 1. What are the characteristics that define higher-order functions?

They manipulate functions as values: higher-order functions accept functions as arguments, return functions as return values, or both.

## 2. Consider the code below:

```js
let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]
```

### Which one is a higher-order function?

The second one: it accepts a function as argument.

## 3. Implement `makeCheckEven` below, such that the last line of the code returns an array `[2, 4]`.

```js
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return function(number) {
    return number % 2 === 0;
  };
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]
```

## 4. Implement `execute` below, such that the return values for the two function invocations match the commented values.

```js
function execute(func, operand) {
  return func(operand);
}

execute(function(number) {
  return number * 2;
}, 10); // 20

execute(function(string) {
  return string.toUpperCase();
}, 'hey there buddy'); // "HEY THERE BUDDY"
```

## 5. Implement `makeListTransformer` below such that `timesTwo`'s return value matches the commented return value.

```js
function makeListTransformer(func) {
  return function(list) {
    return list.map(func);
  }
}

let timesTwo = makeListTransformer(function(number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
```


