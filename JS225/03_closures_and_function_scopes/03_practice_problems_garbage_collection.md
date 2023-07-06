# Practice Problems: Garbage Collection

## 1. Is JavaScript a garbage-collected language, and if so, what does this entail?

Yes: we don't have to manually manage memory allocation and deallocation.

## 2. Consider the code below:

```js
let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?: nothing
}

foo();

// what is eligible for GC here?: the array referenced by `myArr` within `foo`

// more code
```

### Are either of the values 1 or ['this is an array] eligible for garbage collection on line 5? What about on line 10?

- line 5: nothing
- line 10: the array referenced by `myArr` within `foo`

## 3. Consider the script below:

```js
function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?

// more code
```

### Is the object created and assigned to `foo` on line 2 eligible for garbage collection on line 11?

No, because the function returned by `makeGreeting` still contains a reference to that object in its closure.

## 4. Consider the script below:

```js
let bash = {};
```

### Will the object {} ever be eligible for garbage collection?

Yes, when the program finishes.