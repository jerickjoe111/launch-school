Please predict the output of the following programs, and explain why they output what they do.

## Problem 1

```js
let a = 'outer';

function testScope() {
  let a = 'inner';
  console.log(a);
}

console.log(a); // => 'outer'
testScope(); // => 'inner'
console.log(a); // => 'outer'
```

Here we are declaring a variable `a` to a string 'outer' in the outermost scope, the _global scope_; when we log its value on both calls to `console.log()`, we get its value. However, within the function body, we are creating another, independent variable `a` from the first one: since variables declared with `let` are block-scoped, they don't conflict with each other (the inner `a` scope is confined within the function body), and we are able to see the value of the inner `a`. This inner variable, however, as it is named the same as the outer variable `a`, _shadows_ it, and this bad practice makes reaching the outer `a` impossible.

## Problem 2

```js
let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a); // => 'outer'
testScope(); // => 'inner'
console.log(a); // => 'inner'
```
In this case, we are not declaring a new variable, but reassigning the variable `a` within the body of the function; so, when the function `testScope()` is called, the reassignment takes place, and the subsequent value we log is `'inner'`. This is possible because the code within the function body has access to variables defined in the surrounding, outer scope.

## Problem 3

```js
let basket = 'empty'; // global variable

function goShopping() {
  function shop1() { // function block (function definition statement)
    basket = 'tv'; // the global basket is reassigned
  }

  console.log(basket);

  let shop2 = function() { // function expression
    basket = 'computer'; // the global basket is reassigned
  };

  const shop3 = () => { // another function body (an arrow function)
    let basket = 'play station'; // it creates a new variable within the function body local scope
    console.log(basket); // logs the value of the local variable basket
  };

  shop1(); // sets the value of the global to 'tv'
  shop2(); // sets the value of the global to 'computer'
  shop3(); // prints the value of the local ('play station')

  console.log(basket); 
}

goShopping();
```

This program will print:

```
empty
play station
computer
```

## Problem 4

```js
function hello() {
  a = 'hi';
}

hello();
console.log(a);
```

This code prints `hi`. This is possible because when the `a = 'hi'` line is executed after invoking the function, JavaScript can't find a matching variable and creates a global variable instead.

## Problem 5

```js
function hello() {
  let a = 'hello';
}

hello();
console.log(a);
```

This program raises an error: the local, block-scoped variable `a` is confined within the body of the function that defines them, `hello()`, so it's not in scope when we invoke `console.log()`.

## Problem 6

```js
console.log(a);

var a = 1;
```
This code prints `undefined`, because variables declared with `var` are _hoisted_: the variable declaration are _moved_ to the top of the containing function, while the initialization code remains in the same place. `a` won't be initialized until the second line is executed.

## Problem 7

```js
console.log(a);

let a = 1;
```

Contrary to variables declared with `var`, variables declared with `let` or `const` are also hoisted but are not given an initial value of `undefined`; they are not set to any provisional value yet, so they raise an error if we try to access them.

## Problem 8

```js
console.log(a);

function hello() {
  a = 1;
}
```

This raises an exception: we don't actually execute (by invoking `hello()`) the code that would initialize the global `a`.


