



## Chapter 5: Statements

If JS expressions are evaluated to produce a value, statements are _executed_ to make something happen.

- Expressions with side effects, like assignments and function invocations, can stand alone as statements, and when used this way are known as - _expression statements_

- Declaration of variables and functions are called _declaration statements_.
 
- JS programs are nothing more than a sequence of statements to execute. We can control the order on which the statements are executed thanks to _control structures_. These are also statements:

  - Conditionals
  - Loops
  - Jumps

Statements in JS end with a semicolon `;`.

### Expression Statements

The simplest kinds of statements in JS are expressions that have side effects.

- _Assignments statements_ are a major category of expression statements:
  ```js
  greeting = 'Hello ' + 'name';
  i *= 3;
  i++
  ```

- _Function calls_ are another major category of expression statements:
  ```js
  console.log(debugMessage);
  displaySpinner(); // A hypothetical function to display a spinner in a web app
  ```
These functions calls are expressions, but they have side effects that affect the host environment or program state, and they are used here _as statements_.

### Declarations
The keywords `const`, `let`, `var`, `function`, `class`, `import` and `export` are not technically statements, but they are called statements informally. The more accurate term would be _declarations_.

Declarations serve to define new values and give them names that we can use to refer to those values. Declarations are used to define constants, variables, functions, classes and for importing and exporting values between modules.

Informally called statements, but technically they are not.

Declarations serve to define new values and give them names that we can use to refer to those values.

Declarations define the structure of the program itself; we can think about them as the parts of the program that are processed before the code starts running.

### Compound and Empty Statements

A compound statement allows you to use multiple statements where JS syntax expects a single statement:
```js
{
  x = Math.PI;
  cx = Math.cos(x);
  console.log('cos(π) = ' + cx);
}
```

The empty statement is the opposite: it allows you to include no statement where one is expected:

```js
;
```

### Control Structures

#### Conditionals

```js
if (expression) statement;
```

```js
if (expression) {
  // code
} else {
  // other code
}
```

```js
if (expression) {
  // code
} else if {
  // other code
} else {
  // other code
}
```

```js
switch(expression_1) {
case (to_compare): // each case will execute expression_1 === to_compare
  // code here
  break;
case (to_compare): 
  // code here
  break;
case (to_compare):
  // code here
  break;
default: // this block will be executed if none of the cases returned a truthy value
  //code
  break;
}
```

#### Loops

```js
while (expression) {
  // code
}
```

```js
do {
  // code
} while (expression);
```

```js
for(initialization_expression; test_expression; increment_expression) {
  // code
}
```

This loop is best explained with the `while` equivalent:

```js
initialization_expression;
while(test_expression) {
  // code
  increment_expression;
}
```
1. The initialization expression is evaluated once, before the loop begins; 
2. the test expression is evaluated before each iteration and controls whether the body of the loop is executed (if it evaluates to a truthy value, the body of the loop is executed)
3. The body of the loop is executed
4. The increment expression is evaluated. This has to be an expression with side effects in order to be useful.

Good idea to traverse a linked list and return the last node of the list:

```js
function tail(list) { // It returs the tail of the linked list 
  for(; list.next; list = list.next); // empty body; Traverses while list.next is truthy (the node has a pointer to the next node)
  return list;
}
```
Any of the three expression may be omitted, but the two `;` are required.

```js
for(let element of iterable_object) {
  // it passes each element to the block, one at a time
  // code
}
```
Avoid mutating the object on which we are iterating through.

```js
for(let property in object) {
  //
}
```
`for/in` loops through the property names of a specified object, passing each name to the block. This loop only enumerates properties whose names are not symbols, and of the properties whose names are strings, it only loops over the _enumerable_ properties. (Some properties are not enumerable by this loop, like JS built-in methods defined by core JavaScript)

#### Jumps

- `continue`: This statement makes the interpreter skip the rest of the body of a loop and jump back to the top of a loop to begin a new iteration.
- `break`: This statement makes the interpreter jump to the end of a loop of other statement.
- `return`: This statement makes the interpreter jump from a function invocation back to the code that invoked it and also supplies the value for that function invocation.

JavaScript allows statements to be named, or _labeled_, and `break` and `continue` can identify the specific loop or other statement label.

