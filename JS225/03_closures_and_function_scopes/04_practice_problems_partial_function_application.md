# Practice Problems: Partial Function Application

## 1. Use partial function application to implement a function, `makeSub`, that returns a function that subtracts `5` from the argument passed to the return function.

```js
function subtract(a, b) {
  return a - b;
}

function makeSub(subtraend) {
  return function(minuend) {
    return subtract(minuend, subtraend);
  };
}

const sub5 = makeSub(5);

sub5(10); // 5
sub5(20); // 15
```

## 2. This code is a bit limited however, because we can only subtract by 5. Implement the `makeSubN` function below so that we can supply any value we want to be subtracted from `a`, and get a new function that will always subtract this value.

```js
function subtract(a, b) {
  return a - b;
}

function makeSubN(subtraend) {
  return function(minuend) {
    return subtract(minuend, subtraend);
  };
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

sub4(10); // 6
sub4(20); // 16
sub7(10); // 3
sub7(20); // 13
```

## 3. Although the solution above is more flexible, we now want to be able to supply any operation, not just subtraction. Implement `makePartialFunc` below.

```js
function makePartialFunc(primary, operandB) {
  return function(operandA) {
    return primary(operandA, operandB)
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

multiplyBy5(100); // 500
divideBy2(100); // 50
```

## 4. In our previous solution, `multiplyBy5` retains access to `primary` and `operandB` long after `makePartialFunc` has finished execution. What makes this possible?

The function referenced by `multiplyBy5` contains a reference to both the function `primary` and the `operandB` in its closure, as they were in scope at the time of its definition (within `makePartialFunc`).

## 5. Consider the code below:

```js
let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan
```

### Implement `makeMathRollCall` such that it returns a partially applied `rollCall` function, with the subject as `'Math'`.