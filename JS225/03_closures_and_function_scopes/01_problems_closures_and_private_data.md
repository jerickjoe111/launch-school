## 1. Create a `makeCounterLogger` function that takes a number as an argument and returns a function. When we invoke the returned function with a second number, it should count up or down from the first number to the second number, logging each number to the console:

```js
function makeCounterLogger(number1) {
  return function(number2) {
    if (number2 < number1) {
      for (let i = number1; i >= number2; i -= 1) {
        console.log(i);
      }
    } else {
      for (let i = number1; i <= number2; i += 1) {
        console.log(i)
      }
    }
  };
}
```

## 2. We'll build a simple todo list program using the techniques we've seen in this assignment. Write a `makeList` function that returns a new function that implements a todo list. The returned function should have the following behavior:

- When called with an argument that is not already on the list, it adds that argument to the list.
- When called with an argument that is already on the list, it removes the element from the list.
- When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

```js
function makeList() {
  let list = [];
  return function(item) {
    if (!item && list.length === 0) {
      console.log('The list is empty');
    } else if (!item) {
      list.forEach(item => console.log(item));
    } else if (!list.includes(item)) {
      list.push(item);
      console.log(`${item} added!`);
    } else {
      list.splice(list.indexOf(item), 1);
      console.log(`${item} removed!`);
    }
  }
}
```

