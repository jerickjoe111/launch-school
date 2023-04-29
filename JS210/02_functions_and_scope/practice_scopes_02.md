Please predict the output of the following programs, and explain why they output what they do.

## Problem 1

```js
function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

Although `a` is declared within the `if` block, we are using the `var` syntax, which means that this variable is function-scoped, and not block-scoped like a `let` or `const` variable would be. We log a value of `undefined`, but that's because we haven't executed the code within the conditional (the condition was `false`); the declaration was effectively hoisted at the top of the function body.

## Problem 2

```js
function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();
```

Contrary to the previous case, `let` variables are block-scoped: it is not reachable from the outer scope of the `say()` function body.

## Problem 3

```js
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello(); // this functions logs 'hello'
console.log(a); // this line raises an exception
```

This is the case because the variable `a` is declared with `var`, its declaration (but not its initialization) is hoisted to the top of the function (it is function-scoped), but it is actually initialized, when the first line of the function body is executed, to the string `'hello'`. This is demonstrated by logging its value via `console.log()`. However, `a` is not in scope when we try to log its value outside the `hello()` function: the variable declaration had _moved_ to the top of the function body, that is why the first line interprets the first line as an assignment of the function-scoped `a`, and not as a reference to a non-existing variable `a` (which would have triggered the creation of a global variable)

## Problem 4

```js
function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello(); // this logs 'hello'
console.log(a); // this logs 'hello' too (a was declared as a global)
```

In this case, there's no matching `a` in scope when we assign `a` in the first line of the function body, so JavaScript creates a global `a` that will never be reassigned due to the `false` condition of the conditional (its code will never be executed)

## Problem 5

```js
var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);
```

JavaScript hoists the variable declaration of the `for` loop body to the top of the global scope. Since a global variable named `a` exists, the hoist has no direct effect on operation. Inside the loop, `a` gets assigned five times; at the end of the loop, it has a value of 4.

## Problem 6

```js
let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a); // This prints 'hello'
```
This is the case because the global variable `a` is not the same variable `a` from within the `for` body, as the latter is scoped within the loop block.

## Problem 7

```js
let a = 1;

function foo() {
  a = 2;

  let bar = function() {
    a = 3;
    return 4;
  };

  return bar();
}

console.log(foo()); // => 4
console.log(a); // => 3
```

The `foo()` function returns the return value of the `bar()` function, which is 4. During this process, the code changes the global variable twice. Thus, the final value is 3.

## Problem 8

```js
var a = 'global';

function checkScope() {

  var a = 'local';

  const nested = function() { // => this function returns 'supernested'

    var a = 'nested';

    let superNested = () => {
      a = 'superNested'; 
      return a;
    };

    return superNested();
  };

  return nested(); // this 
}

console.log(checkScope()); // => 'super nested'
console.log(a); // => 'global'
```

## Problem 9

```js
let a = 'outer';
let b = 'outer';

console.log(a); // outer
console.log(b); // outer
setScope(a); 
console.log(a); // outer
console.log(b); // inner 

function setScope(foo) {
  foo = 'inner';
  b = 'inner';
}
```

Function arguments become local variables in the function, so assigning to an argument has no effect on the original argument.

## Problem 10

```js
let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total); // 50
incrementBy(10); // total is now 60
console.log(total); // 60
console.log(increment); // 15
```

Though our parameter has the same name as the variable declared on line 2, it is not the same variable. Function parameters are locally scoped variables, even when they have the same names defined in the outer scope.

## Problem 11 

```js
let a = 'outer';

console.log(a); // outer
setScope(); // raises an exception: the code 
console.log(a); // 

var setScope = function () {
  a = 'inner';
};
```

Functions defined as expressions do not exist until the expressions that defines them are actually evaluated: functions defined with expressions cannot be invoked before they are defined.

