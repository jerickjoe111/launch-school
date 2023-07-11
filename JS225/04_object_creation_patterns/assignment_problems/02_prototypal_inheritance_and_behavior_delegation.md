# 1. What will the code below log to the console?

```js
let foo = {};
let bar = Object.create(foo);

foo.a = 1;

console.log(bar.a); // 1 (We've modified bar's prototype `foo`)
```

# 2. What will the code below log to the console?

```js
let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;
console.log(bar.a); // 2 (We've ovverriden the a property inherited from foo)
```

# 3. Given the code below, do we know for certain that on the last line we are ultimately referencing a property owned by `boo`? How can we test that `far` is not delegating to `boo`? (not delegating === has own property added directly)

```js
let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
```

We can't be certain. We could use 
```js
far.hasOwnProperty('myProp');
```