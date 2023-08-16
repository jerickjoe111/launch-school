# 02 Asynchrony and Events

## Asynchrony

In a _synchronous_ computer program, the different operations are executed step by step (besides jumps, conditionals, etc.), following the main flow; the program executes some code, waits for the computation to end, and then does another operation with that results, until there are no more operations to be performed. This means that each operation depends on the previous one: the following computation can't be performed if the previous one has finished and yielded its results. We can talk about operations _blocking_ the program in this case.

In most real-world computer programs (and in most real-world JavaScript), however, the execution is _asynchronous_. This means that there are operations performed _independently_ of the main program flow: when an asynchronous part of the program is executed, some operation (a function's invocation, for instance) is _paused_, _left pending_, until some condition is met or some event occurs, _without block the program to wait for results_.

In essence, asynchronous programming in JavaScript is based on _callbacks_, functions passed to other functions as arguments; when some event is triggered or some condition is met, the other functions invoke (_calls back_) the passed-in function. However, based on how this process is structured, what features of the JavaScript language is supported by, or what syntax is used, we can classify the different models of asynchronous programming by:

- Callback-based

    - Timers
    - Events
    - Network events

- Promise-based

    - without `async`/`await` syntax.
    - with `async`/`await` syntax.

(all synchronous code runs before any asynchronous code does) ???? The event loop

## Callback-based asynchronous programming

### Timers

The simplest kind of asynchronous programming can be achieved with the help of functions that execute a function after some time has passed, or upon previously-set intervals, without making the program to stop its main flow. These functions are:

- `setTimeout()`: this function accepts two arguments: the first one is the callback function, and the second is the amount of time in milliseconds. The callback will be _registered_ synchronously when the line is executed, but the function will be asynchronously invoked when that milliseconds have passed.

- `setInterval()`: this function accepts the same arguments as the previous one, but it will call the first argument on intervals of the specified milliseconds. This method returns an id that we can pass to a `clearInterval()` function to cancel the interval.

### Events

(See 02a_events.md)

### Network events

Another common sample of asynchronous programming in JavaScript is performing network requests: we can use `XMLHttpRequest` objects in combination with some event listeners to make HTTP requests and asynchronously handle the server's response when it arrives. For example:

```js
let request = new XMLHttpRequest();
request.open('GET', '/path');
request.send();

request.addEventListener('load', event => {
  if (request.status === 200) {
    // success
  } else {
    // log code, do some other thing
  }
})

request.addEventListener('error', event => {
  // handle error
})
```

## Promise-based asynchronous programming.

Promises are a core JavaScript feature released on ES6 designed to simplify asynchronous programming in this language. In essence, Promises are an easier, alternative way to work with callback-based asynchrony that seek to solve two major problems this approach has:

- The first and most obvious problem with pure callbacks is that it is easy ending up with multi-level callbacks, one nested in each other, which makes code difficult to read: Promises re-express this nested callback mess as a more linear _promise chain_ much easier to read and to understand.
- The other major problem is handling errors. If an asynchronous function throws an exception, there is no way for that exception to propagate back to the initiator function: this approach breaks exception handling. Promises, on the hand, standardize error handling and provide a way for exceptions to propagate through a chain of Promises.

A promise is an object that represents the _result_ of an eventual asynchronous computation. That result may or may not be ready at determined time. This is by design: there is no way to synchronously get the value of a promise, the only thing we can expect is to it to invoke some callback function when that value is ready.

It's important to note that Promises represent eventual **single** asynchronous computations, and cannot be used to represent repeated asynchronous computations.

### Basic Promise use

We use Promises in combination with functions that specifically return a `Promise` object, instance methods defined on every `Promise`, like `then()`, callbacks, and, in some case `Promise` static methods that provide additional functionality for Promises. A typical example of a `Promise`-returning function is `fetch()`:

```js
fetch(someUrl)
  .then(response => {
    // does something with the response
  })
```

`fetch()` is a global function that makes an HTTP request and returns a `Promise` object. The Promise defines a `then()` instance method: when the response arrives, the callback we pass to `then()` is invoked with the value of the Promise as argument. In this case, the value of the `Promise` object returned by `fetch` is a `Response` object.

`then()` is the distinctive feature of Promises, and it works like a callback registration method for listeners, but each `Promise` object represents a single computation, and each callback within `then()` will only be called once. The callback passed to `then()` will always be invoked asynchronously, even if the computation is already ready when `then()` is invoked.

Another very important point about promises is that, when we write chains of `then()` methods, we are not registering multiple callbacks on a single Promise: each invocation of `then()` returns a new `Promise` object, and that new `Promise` object won't be fulfilled until the function passed to `then()` finishes its execution.

As a convention, we name functions that return Promises with verbs, and we append `then()` to the function directly, instead of storing the Promise in a variable.

### Promise terminology

There are five technical terms with precise answers whose differences have to be understood in order to really understand Promises. 

- **Fulfilled**: we say that a Promise is fulfilled if the operation associated with it has been completed successfully. For instance, when we call `then()` with two callbacks as arguments, a fulfilled Promise would mean that the _first_ callback has been invoked.
- **Rejected**: If the operation failed. For instance, when we call `then()` with two callback as arguments, a fulfilled Promise would mean that the _second_ callback has been invoked.
- **Pending**: The initial state of a Promise; it's neither fulfilled nor rejected.
- **Settled**: The Promise that it is either fulfilled or rejected, but not pending.
- **Resolved**: Colloquially used as a synonym of _fulfilled_, but it's not quite the same. A promise can be _resolved_ but still _pending_: a resolved Promise is the Promise that has become associated or 'locked-onto' another Promise. For example, when the potential value of a Promise is another Promise, the first one may be resolved, but it won't be settled until the second Promise is settled: the first Promise has been 'locked-in' to the second Promise, and the fate of the former depends now entirely on the other.

```js
new Promise((outerCallback) => { // First Promise
  resolveOuter(
    new Promise((resolveInner) => { // Second Promise
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

In this case, the first Promise is immediately _resolved_ because `resolveOuter` has been called synchronously, but, as its value is another Promise (the second Promise), it won't be _fulfilled_ until 1 second later, when the second Promise fulfills.

### Handling Errors with Promises

Every code that involves some kind of networking has to be prepared to deal with all the potential errors that can occur. When we use Promises, we can handle errors in two ways: via `then()`'s second argument, or with the `catch()` method.

#### via `then()`

This method accepts another callback as a second argument: this is the error-handling function. If a Promise-based asynchronous operation completes normally, it passes the result of the Promise to the first argument of `then()`, the main callback. But, if there is an error, the Promise passes the exception (usually an `Error` object) to the second function passed to `then()`, the error-handling function:

```js
fetch(someUrl)
  .then(mainCallback, errorHandlingCallback)
```

#### with `catch()`

In practice, the idiomatic way to handle errors in Promise-based asynchronous computations is to add a `catch()` invocation at the end of the Promise chain, passing the error-handling. Thanks to how Promises are implemented, any error will propagate, reaching the error-handling function.

```js
fetch(someUrl)
  .then(mainCallback)
  .catch(errorHandlingCallback)
```

`catch()` is really a shortcut for calling `then()` with a `null` first argument and a function as second argument.

In ES2018 a `finally()` method for Promises was introduced, which works similarly to the `finally` of `try`/`catch`/`finally` statements. We add this method at the end of a Promise chain, passing a callback as an argument; this callback will be invoked at the end when the Promise you called it on settles. It won't be called any arguments, so we can't know if it was fulfilled or rejected, but this method is useful to make some kind of cleanup or closing connections.

### Promises in parallel

`Promise.all()`: this method takes an array of `Promise` objects as argument and returns another Promise. That Promise will be fulfilled with an array of the fulfillment values of each of the input Promises in the array argument; it will be rejected if any of the input Promises is rejected. The input array can take any kind of value: for non-Promise values, it will be treated as it is the value of an already fulfilled Promise.
`Promise.allSettled()`: this method takes an array of Promises and returns another Promise. This Promise won't be fulfilled until all the Promises in the input array have settled. The value of this Promise is an array of special objects, one per input Promise, that have three properties: `status`, `value`, and `reason`, all self-explanatory.
`Promise.race()`: This method takes an array of Promises and returns another Promise. This Promise is fulfilled or rejected when the first of the Promises in the input array is fulfilled or rejected (or the first of non-Promise values).

### Promises based on synchronous values

`Promise.resolve()`: It takes a value as its single argument and returns a Promise that will immediately, but asynchronously, be fulfilled to that value.
`Promise.reject()`: It takes a value as its single argument and returns a Promise that will immediately, but asynchronously, be rejected with that value as the reason.

### Making Promises from scratch:

constructor

> Once a Promise is resolved or rejected, any additional attempts to settle it will fail silently.

### `async` and `await`

These new keywords were introduced in ES2017, and their aim is to simplify Promise-based asynchronous code even more. `async` and `await` are basically wrappers for traditional Promises: they hide Promises, so the asynchronous code can look like synchronous code, thus making it much easier to read and understand.

#### `await` expressions

The `await` keyword takes a Promise and turns it back into a return value or a thrown exception. Imagine an expression `await p`, where `p` is a `Promise` object. This expression `await p` waits until `p` is settled; if `p` is fulfilled, then the value of the expression is the fulfillment value of `p`; if `p` is rejected, then the expression throws the rejection value of `p`.

We use the `await` keyword before the invocation of a function that returns a Promise:

```js
let response = await fetch(someURL);
```

_Any code that uses the `await` keyword is itself asynchronous_: this keyword does not 'block' the program waiting for the result of the computation, it simply disguises the asynchrony.

#### `async` functions

Because any code that uses `await` is asynchronous, we can only use the `await` keyword within functions that have been declared with the `async` keyword:

```js
async function someFunction() {
  let response = await fetch(someURL);
  let content = await response.json();
  return content.someProperty;
}
```

A function declared this way makes its return value to be a Promise, even if the code within its body is not Promise-related. The apparent explicit return value of an `async` function (expression preceded by the `return` keyword), is, in fact, the resolve value of the real function's return value, a Promise. And if the `async` Function seems to throw an exception, then the Promise object that it returns will be rejected with that exception.

There are two important caveats to remember about `async` functions: first, that we can't use `await` on the top level or inside a function that is not declared with `async`; in these cases we will have to use classic Promise `then()` chains. The other point is that we can use `async` with any function declaration, expression, arrow function, etc.

We can use `await` with a set of asynchronous `asyc` functions and the help of the `Promise.all()` method, as we did with classic Promises syntax:

```js
let [value1, value2] = await Promise.all(asyncFunction1(), asyncFunction2());
```

### Asynchronous iteration

[Rephrase, complete]

Because single Promises do not work for sequences of asynchronous events, we also cannot use regular `async` functions and the `await` statements for these things.

ES2018 provides a solution. Asynchronous iterators are like normal iterators, but they are Promise-based and are meant to be used with a new form of the `for`/`of` loop: the `for`/`await` loop. 

Like a regular `await` expression, the `for`/`await` loop is Promise-based: the asynchronous iterator produces a Promise and the `for`/`await` loop waits for that Promise to fulfill, assigns the fulfillment value to the loop variable, and runs the body of the loop. And then it starts over, getting another Promise from the iterator and waiting for that new Promise to fulfill.

WE can create asynchronously iterable objects by implementing a `[Symbol.asyncIterator]()` method on the object or by invoking an `async function *` generator function. Asynchronous iterators provide an alternative to 'data' events on streams in Node and can be used to represent a stream of user input events in client-side JavaScript.