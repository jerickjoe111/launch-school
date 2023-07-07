# 1. Write a function named greet that takes two arguments and logs a greeting:

```js
greet('howdy', 'Joe'); // Howdy, Joe!
greet('good morning', 'Sue'); // Good morning, Sue!
```

```js
function greet(greeting, name) {
  greeting = `${greeting[0].toUpperCase()}${greeting.slice(1)}`;
  console.log(`${greeting}, ${name}!`);
}
```

# 2. Use the `partial` function shown above and your solution to problem 1 to create sayHello and sayHi functions that work like this:

```js
sayHello('Brandon'); // Hello, Brandon!
sayHi('Sarah'); // Hi, Sarah!
```

```js
function generator(greeting) { // generator
  function greet(greeting, name) {
    greeting = `${greeting[0].toUpperCase()}${greeting.slice(1)}`;
    console.log(`${greeting}, ${name}!`);
  }

  return function(name) { // applicator 
    return greet(greeting, name) // primary
  } 
}
```

Alt.:
```js
function greet(greeting, name) {
  greeting = `${greeting[0].toUpperCase()}${greeting.slice(1)}`;
  console.log(`${greeting}, ${name}!`);
}

function generator(primaryFunction, greeting) { // generator
  return function(name) { // applicator 
    return primaryFunction(greeting, name) // primary
  } 
}
```