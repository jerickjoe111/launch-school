# Practice Problems: The Global Object

## 1. With strict mode not enabled, what object serves as the implicit execution context? What happens when strict mode is enabled?

`window` becomes the implicit execution context (the global object). In strict mode, the global object is not accessible as the implicit execution context.

## 2. What does the code below log?

```js
a = 10;

console.log(window.a === a);
```

It logs `true`: initializing an undeclared variable creates a variable as a property on `window`, the global object (the implicit evaluation context)

## 3. What does the code below log?

```js
"use strict"

a = 10;

console.log(window.a === a);
```

This throws a `ReferenceError`: in strict mode, the global object is not used as the implicit context, and we cannot access undeclared variables.

## 4. What does the code below do?

```js
function func() {
  let b = 1;
}

func();

console.log(b);
```

`b` is not reachable, as it is a local variable within the function, and not a property of the global object that belongs to the global scope. It raises a `ReferenceError`


## 5. What does the code below do?

```js
function func() {
  b = 1;
}

func();

console.log(b);
```

`1`. `b` is created as a property of the global object, although it is done within the scope of the function (we are initializing an undeclared variable)


## 6. What does the code below do?

```js
"use strict"

function func() {
  b = 1;
}

func();

console.log(b);
```

This raises a `ReferenceError`: in strict mode, we don't have access to the global object as the implicit execution context. In strict mode, all variables have to be declared before being initialized.