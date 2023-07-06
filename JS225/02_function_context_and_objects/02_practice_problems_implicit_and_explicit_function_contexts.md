# Practice Problems: Implicit and Explicit Function Execution Contexts

## 1. What will the code below output?

```js
function foo() {
  return this;
}

let context = foo();
console.log(context);
```

The `window` global object: the execution context at the time of the `foo` invocation on line 10, stored in a variable `context`.

## 2. What will the code below output in strict mode?

In strict mode, the value of `this` is `undefined`.

## 3. What will the code below output? Explain the difference, if any, between this output and that of problem 1.

```js
let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context);
```

Since `foo` is invoked as a method, its execution context refers to the object to which the method belongs.

## 4. What will the code below output?

```js
var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage();
```
We first see `'Hello from the global scope!'` because `deliverMessage()` is invoked as a function in the global scope, so `this` resolves to the `window` object, where the `message` property is found. In the second case, we see `'Hello from the function scope!'` because, after assigning the function to `bar` as a property value (as a method), the value of `this` within the function becomes the object to which it belongs as a method, `bar`. `message` is a property of `bar`, so it resolves to its string value.

## 5. What will the code below output? What would happen if we replaced var on line 1 with let? Can you explain why the output changes?

```js
var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b; // !
}

c.add = add; 

console.log(add()); // 20
console.log(c.add()); // 0
```

As in question 3, the key detail here is that the first invocation of `add` is as a function, while the second invocation is as a method. In the function invocation, on line 14, this resolves to the global object, and the property `a` to the value `10`. In the method invocation, however, this resolves to the object `c`, and the property `a` to the value `-10`.

When we replaced `var` with `let`, the output of the function call is `NaN`, not `20`. This is the case because global `var` variables create properties on the global object, but `let` and `const` create variables that don't belong to any object.

## 6. The problems above all feature implicit function execution context. What methods have we learned so far that let us explicitly specify what a function's execution context should be?

`apply` and `call`

## 7. In the code below, use call to invoke `bar.add` as a method but with `foo` as the execution context. What will this return?

```js
let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add() {
     return this.a + this.b;
   },
};
```

`3`.

## 8. Given the code and desired output shown below, should you use call or apply to supply explicit context and the arguments to `outputList`? That is, which method makes the most sense to use? Implement a solution using your preferred method such that the desired output is logged, and explain your choice.

```js
let fruitsObj = {
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  let args = [].slice.call(arguments);

  args.forEach(function(elem) {
    console.log(elem);
  });
}

outputList.apply(fruitsObj, fruitsObj.list); // Invocation
outputList.call(fruitsObj, ...fruitsObj.list); // Alternative
```

Desired output:

```
A Collection of Fruit:
Apple
Banana
Grapefruit
Pineapple
Orange
```
