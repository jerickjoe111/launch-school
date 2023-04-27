
## Chapter 4: Expressions and Operators

An expression is a phrase of JavaScript that can be evaluated to produce a value.

Complex expressions are built from simpler expression **called primary expressions**. For example:

```javascript
let array = [1, 2, 3]

array[0]
```
The second line is an array access expression consisting of:
  - one simple expression that evaluates to an array: `array`
  - one simple expression that evaluates to an integer: `0`

The new complex expresison evaluates to the value stored at the specified index of the specified array.

### Primary Expressions:

Primary expressions are those that stand alone (they do not include any other simpler expression).

Primary expressions in JS are:
  - constant or literal values: ( like `1`, `'aloha'`, etc.)
  - certain keywords: `true`, `false`, `null`, `this`
  - references to variables, constants or properties of the global object: (like `i`, or `undefined`)

### Object and Array Initializers

Object and array initializers are expressions whose value is a newly created object or array, sometimes called object literals or array literals, although they are not truly literals.

They are not primary expressions because they include a number of subexpressions that specify property and element values.

An array initializer is a comma-separated list of expressions contained within square brackets:

```javascript
[1, 2, 3]

[1 + 1, 2 + 2] // => [2, 4]
```

Object initializer expressions are like array initializers expressions, but the square are replaced by curly braces, and each subexpression is prefixed with a property name and a colon.

```javascript
let p = {
  x: 1, 
  y: 2, 
  z: 3
};
```

Object literals can be nested;

```javascript
let p = {
  top: {x: 1, y: 2},
  bottom: {x: 3, y: 4},
};
```

### Function Definition Expressions

A function definition expression defines a JS function, and the value of such an expression is the newly defined function.

A function definition expression typically consists of the keyword `function` followed by a comma-separated list of zero or more identifiers (the parameter names) in parentheses and a block of JS code, the function body in curly braces:

```javascript
let square = function(x) { return x ** x; };
```

A function definition expression can also include a name for the function. Functions can also be defined using a function statement.

There is a compact function expression called arrow function.

### Property Access Expressions

A property access expression evaluates to the value of an object property or an array element. There are two syntaxes:

```javascript
expression . identifier

expression [ expression ]
```

In the first style the indentifier specifies the name of the desired property; in the second style the expression within square brackets specifies the name of the desired property of the object or the index of the desired array element. 

With either type of property access expression, the expression before the `.` or `[` is first evaluated. If the value is null or undefined, the
expression throws a `TypeError`, since these are the two JavaScript values that cannot have properties. 

If the object expression is followed by a dot and an identifier, the value of the property named by that identifier is looked up and becomes the overall value of the expression.

If the object expression is followed by another expression in square brackets, that second expression is evaluated and converted to a string.
The overall value of the expression is then the value of the property named by that string. 

In either case, if the named property does not exist, then the value of the property access expression is undefined. 

The `.identifier` syntax is the simpler of the two property access options, but notice that it can only be used when the property you want to
access has a name that is a legal identifier, and when you know the name when you write the program. If the property name includes
spaces or punctuation characters, or when it is a number (for arrays), you must use the square bracket notation. Square brackets are also used
when the property name is not static but is itself the result of a computation.


### Conditional Property Access and Invocation Expressions

Consider the use of the safe navigation operator (in JS called conditional invocation): `?.`

```javascript
o.m()     // Regular property access, regular invocation
o?.m()    // Conditional property access, regular invocation
o.m?.()   // Regular property access, conditional invocation
```
In the first expression, o must be an object with a property m and the value of that property must be a function. In the second expression, if o
is null or undefined, then the expression evaluates to undefined. But if o has any other value, then it must have a property m whose value is a function. And in the third expression, o must not be null or undefined. If it does not have a property m, or if the value of that property is null, then the entire expression evaluates to undefined.

### Evaluation Expressions