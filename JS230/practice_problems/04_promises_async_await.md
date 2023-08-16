# Promises and `async`/`await`

1
Create a Promise that resolves with a value of "Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's resolved value by using the then method.

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Launch School');
  }, 2000);
})

promise.then(console.log);
```

2

Create a Promise that rejects with a value of "Error: Not Launch School" after a delay of 2000ms, using setTimeout. Print the Promise's rejected value by using the .catch method.​

```js
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error: Not Launch School');
  }, 2000);
})

promise.catch(console.log);
```

For all the following snippets: Without running it, what will the following code log to the console?

```js
const promise = new Promise(function (resolve, reject) {
  resolve("I am a Promise");
});
​
promise.then(value => console.log(value));
console.log("I am NOT a Promise");
```

"I am NOT a Promise" is printed first since all synchronous code runs before any asynchronous code does.

```js
const promise1 = new Promise((resolve, reject) => {
  console.log("foo"); // 1. this runs when the promise is constructed
  resolve();
  console.log("bar"); // 2. this again for the same reason
});

promise1.then(() => {
  console.log("baz"); // 4.
});

console.log("qux"); // 3. 
```

foo bar, qux, baz


```js
const promise = new Promise((resolve, reject) => {
  console.log("foo"); // 1
  reject();
  console.log("bar"); // 2
});

promise
  .then(() => {
    console.log("baz"); 
  })
  .catch(() => {
    console.log("qux"); // 4
  });

console.log("abc"); // 3
```


```js
const promise = new Promise(res => res(1));

promise
  .then((num) => {
    console.log(num); // 1, 1
    return num + 2;
  })
  .then((num) => {   
    console.log(num); // 2, 3
    return num + 3;
  })
  .then((num) => {
    console.log(num); // 3, 6
    return num + 4;
  })
  .finally((num) => { 
    console.log(num); // this will print 'undefined': finally() takes no arguments
    return num + 5;
  });
```

```js
const promise = new Promise((resolve, reject) => {
  resolve("Got it!");
  reject("Oops.");
  resolve("Again!");
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

`got it`. Once a Promise is resolved or rejected, it ignores the rest

```js
function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * a * b;
}

test(3).then((value) => console.log(value));
```

3 * 2 * 3 = 18;

```js
function after1s(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 1000);
  });
}

async function test(input) {
  const a = await after1s(2);
  const b = await after1s(3);
  return input * (await a) * (await b);
}

test(3).then((value) => console.log(value));
```

18

```js
function after1s(x, ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, ms);
  });
}

async function test1(input) {
  const a = await after1s(2, 2000);
  const b = await after1s(3, 2000);
  return input * a * b; // 2 * 2 * 3
}

async function test2(input) {
  const a = await after1s(2, 1000);
  const b = await after1s(3, 1000);
  return input * a * b; // 3 * 2 * 3
}

test1(2).then((value) => console.log(value));
test2(3).then((value) => console.log(value));
```

18, 
12

```js
const testPromise = () => Promise.resolve("1");

function test1() {
  testPromise().then((result) => console.log(result));
  console.log("2");
}

function test2() {
  console.log("3");
}

test1();
test2();
```
2, 3, 1

the asynchronous code won't be called until all the synchronous code has run.

```js
const test = Promise.resolve("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();
```

A, B

```js
const test = Promise.reject("A");

(async () => {
  try {
    console.log(await test);
  } catch {
    console.log("E");
  } finally {
    console.log("B");
  }
})();
```

E, B