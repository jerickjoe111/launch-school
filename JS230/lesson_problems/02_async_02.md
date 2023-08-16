# Problems

1. Write a function named `startCounting` that logs a number to the console every second, starting with 1. Each number should be one greater than the previous number.

```js
function startCounting() {
  let number = 1;
  setInterval(() => {
    console.log(number);
    number += 1;
  }, 1000)
}
```

