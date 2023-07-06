# Practice Problems: Dealing with Context Loss

## 1. Our desired output for the code below is: `'Christopher Turk is a Surgeon'`. What will the code output, and what explains the difference, if any, between the actual and desired outputs?

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func) {
  let returnVal = func(); // here the method passed don't have the intended context of `turk`
  console.log(returnVal);
}

logReturnVal(turk.getDescription);
```
```
undefined undefined is a undefined.
```
We have removed the method from its intended context; being executed on line 16 from within the function `logReturnVal`, the value of `this` is the global object.

## 2. Alter logReturnVal such that it takes an additional context argument, and use one of the methods we've learned in this lesson to invoke func inside of logReturnVal with context as its function execution context. Alter the invocation of logReturnVal and supply turk as the context argument.

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);
```

## 3. Suppose that we want to extract getDescription from turk, but always have it execute with turk as context. Use one of the methods we've learned in the last lesson to assign such a permanently bound function to a new variable, getTurkDescription.

```js
let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

let turkDescription = turk.getDescription.bind(turk);

function logReturnVal(func) {
  let returnVal = func(); 
  console.log(returnVal);
}

logReturnVal(turkDescription);
```

## 4. Consider the code below, and our desired output:

```js
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
```

```
The Elder Scrolls Arena
The Elder Scrolls Daggerfall
The Elder Scrolls Morrowind
The Elder Scrolls Oblivion
The Elder Scrolls Skyrim
```

The output is not correct. The function passed as argument to the nested `forEach` call within the method `listGames` does not have `TESgames` as context, but the global object referenced by `this`, which does not have a `seriesTitle` property.

# 5. Use an arrow function so that the code logs our desired output.

```js
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
```

# 6. Use the `let self = this` fix to alter TESgames.listGames such that it logs our desired output to the console.

```js
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    let self = this
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
```

# 7. If we don't want to rely on let self = this, `forEach` provides us with an alternative means of supplying execution context to the inner function. Use this means to achieve our desired output.

```js
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();
```

## 8. Consider the code below:

```js
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
```
`0`. Nested functions lose the outer object as context: `this.a` references a global `a`.

## 9. Use one of the methods we learned in this lesson to invoke increment with explicit context such that `foo.a` is incremented with each invocation of `incrementA`.

```js
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
```

## 10. We decide that we want each invocation of `foo.incrementA` to increment `foo.a` by 3, rather than 1, and alter our code accordingly:

```js
let foo = {
  a: 0,
  incrementA() {
    let increment = function(n) {
      this.a += n;
    }.bind(this)
    
    increment(3)
  }
};
```
