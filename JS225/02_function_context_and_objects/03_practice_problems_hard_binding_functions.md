# Practice Problems: Hard Binding Functions with Contexts

## 1. What method can we use to permanently bind a function to a particular execution context?

`bind`

## 2. What will the code below log to console?

```js
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
```

Nothing will be logged, but a new function will be returned from `bind`.

## 3. What will the code below log to console?

```js
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar());
```

`5`. `bar` is bound to `obj`, so the value of `this` within it is that object.

## 4. What will the code below log to console?

```js
let positiveMentality = {
  message: 'JavaScript makes sense!',
};

let negativeMentality = {
  message: 'JavaScript makes no sense!',
};

function foo() {
  console.log(this.message);
}

let bar = foo.bind(positiveMentality);

negativeMentality.logMessage = bar;
negativeMentality.logMessage();
```

`'JavaScript makes sense!'`. `bar` is permanently bound to the `positiveMentality` object as invocation context, even if it is assigned to another object as a method.


## 5. What will the code below log to console?

```js
let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);
```

`'Amazebulous!'`. A function permanently bound to a certain object via `bind` can't have a different context from then on, even when set explicitly by `call`.


