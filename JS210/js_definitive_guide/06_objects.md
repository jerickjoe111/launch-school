# Chapter 06: Objects

An object is an unordered collection of _properties_, each of which has a _name_ and a _value_. Property names are usually strings, but they can also be symbols. We can say that objects map strings to values.

In addition to maintaining its own set of properties a JavaScript object also inherits the properties of another object, known as its _prototype_. The methods of an object are typically inherited properties.

JavaScript objects are dynamic.

Any value in JavaScript that is not a string, a symbol, a number, a boolean, `null` or `undefined` is an object.

Objects are _mutable_ and _manipulated by reference_ rather than by value. 

The most common things to do with objects are to create them and set, query, delete, test and enumerate their properties.

A property name may be any string or symbol, but no object can have two properties with the same name. The value may be any JavaScript value, or it may be a _getter_ or _setter_ function.

There are two kinds of properties:

  - _Inherited properties_: inherited from its prototype

  - _Own properties_: defined directly on the object.

Each property, in addition to its name and value, has three attributes:

  - _Writable_: it specifies whether the value of the property can be set
  - _Enumerable_: it specifies whether the property name is returned in a `for`/`in` loop.
  - _Configurable_: it specifies whether the property can be deleted and whether its attributes can be altered.

Many of JavaScript built-in objects have properties that are read-only, non-enumerable, or non-configurable. By default, all properties you created are writable, enumerable, configurable.

## Creating Objects

Objects can be created with object literals, with the `new` keyword, and with the `Object.create()` function:


### Object Literals

An object literal is a comma-separated list of colon-separated name: value pairs, enclosed within curly braces. A property name is a JavaScript identifier or a string literal (an empty string is allowed). A property value is any JavaScript expression: the value of the expression becomes the value of the property.

A trailing comma following the last property in an object literal is legal and encouraged (easy to rearrange; git shows as simple editing, and not adding)

An object literal is an expression that creates and initializes a new and distinct object each time it is evaluated. The value of each property is evaluated each time the literal is evaluated: a single object literal can create many new objects if it appears within the body of a loop or in a function that is called repeatedly.

### The `new` operator

This operator creates and initialized a new object. The `new` operator must be followed by a _constructor_ function, and serves to initialize a newly created object. JavaScript includes constructors for its built-in types:

```js
let a = new Object();
let b = new Array();
let c = new Date();
let d = new Map();
```

It's common to define your own constructor functions to initialize newly created objects.


### Prototypes


### `Object.create()`

This expression creates a new object, using its first argument as the prototype of that object.


## Querying and Setting Properties

To obtain the value of a property, use the `.` or the square brackets `[]` operators. The left hand side should be an expression whose value is an object. If using the dot operator, the right hand side must be a simple identifier that names the property. If using square brackets, the value must be an expression that evaluates to a string that contains the desired property name.

To create or set a property, use a dot or square brackets but them on the left hand of an assignment expression.

Identifiers must be typed literally into your JavaScript program; they are not a datatype, so they cannot be manipulated by the program. On the other hand, when you access a property of an object with the `[]` array notation the name of the property is expressed as a string. Strings are JavaScript datatypes, so they can be manipulated and created while a program is running. This demonstrates the flexibility of using array notation to access properties of an object with string expressions.

## Property Access Errors

Property access expressions do not always return or set a value.

It is not an error to query a property that does not exist. If the property `x` is not found as an own property or an inherited property of `o`, the property access expression evaluates to `undefined`.

It is an error, however, to attempt to query a property of an object that does not exist (we would be trying to query to the `null` or the `undefined` primitives)

Remember that ES2020 supports conditional property access (safe navigation) with `?.`

## Deleting Properties

The `delete` operator removes a property from an object. Its single operand should be a property access expression.

This operator only deletes own properties, but not inherited ones. (To do this, you must delete it from its prototype, affecting every other object that inherits from that object)

A `delete` expression evaluates to `true` if the `delete` succeeded or if the `delete` had no effect (such as deleting a nonexistent property). It also evaluates to `true` when used with a non-property access expression.

`delete` does not remove properties that have a _configurable_ attribute of `false`.

## Testing Properties

To check whether an object has a property with a given name, we can use the `in` operator, the `hasOwnProperty()` or `propertyIsEnumerable()` methods, or simply querying the property:

  - The `in` operator expects a property name on its left side and an object on its right. It returns `true` if that object has an inherited or own property with that name, `false` otherwise. It distinguishes between properties that do not exist and properties that exist but have been set to `undefined`

  - The `hasOwnProperty()` method tests whether that object has an own property with a name equal to the passed-in string.

  - The `isEnumerable()` method returns `true` only if the named property is an own property and its _enumerable_ attribute is `true`.

Instead of using the `in` operator, it is often sufficient to simply query the property and use `!==` to make sure is not undefined: `o.x !== undefined`

## Enumerating Properties

- The `for/in` loop runs the body of the loop once of each enumerable property, own or inherited, of the specified object, assigning the name of the property to the loop variable. Built-in methods that objects inherit are not enumerable.

- Getting an array of property names for an object and then looping through that array with a `for/of` or a `for` loop. There are four functions to get an array of property names:

    1. `Object.keys` returns an array of the names of the enumerable own properties; it does not include non-enumerable properties, inherited properties, or properties with a symbol as name.

    2. `Object.getOwnPropertyNames()` like `Object.keys()`, but returns an array of the names of non-enumerable own properties as well.

    3. `Object.getOwnPropertySymbols()` returns own properties whose names are Symbols, whether or not they are enumerable.

    4. `Reflect.ownKeys()` returns all own property names, both enumerable and non-enumerable, and both string and Symbol.

## Extending Objects

ES6 provided `Object.assign()` as a form to copy the properties of one object to another. It expects two or more objects as its arguments. It modifies and returns the first argument, which is the target object, but does not alter the other arguments. For each source object (after the first), it copies the enumerable own properties of that object (including those whose names are symbols) into the target object.

## Serializing Object

Object serialization is the process of converting an object's state to a string from which it can later be restored. The functions `JSON.stringify()` and `JSON.parse()` serialize and restore JavaScript objects. 

JSON syntax is a subset of JavaScript syntax, and it cannot represent all JavaScript values. Objects, arrays, strings, finite numbers, `true`, `false`, `null` are supported and can be serialized and restored. `NaN`, `Infinity`, and `-Infinity` are serialized to `null`. 

## Extended Object Literal Syntax

Recent versions of JavaScript have extended the syntax for object literals in a number of useful ways:

### Shorthand Properties

You can drop the colon and one copy of the identifier:

```js
let x = 1, y = 2;
let o = {
  x: x,
  y: y,
};
```

becomes,

```js
let x = 1, y = 2;
let 0 = {
  x,
  y,
};
o.x + o.y // => 3
```

### Computed Property Names

With square brackets we can delimit an arbitrary JavaScript expression, so that expression is evaluated, and the resulting value is, if necessary, converted to a string to be used as the property name:

```js
const PROPERTY_NAME = 'p1';
function computePropertyName() { return 'p' + 2; }

let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
}

p.p1 + p.p2 // => 3
```

### Spread Operator

In ES2018 and later you can copy the properties of an existing object into a new object using the `...` operator inside an object literal:

```js
let position = { x: 0, y: 0, };
let dimensions = { width: 100, heigth: 75,};
let rect = {...position, ...dimensions,};
```

This syntax only copies the own properties, not the inherited ones.

### Shorthand Methods

Instead of doing

```js
let square = {
  area: function() { return this.side * this.side; },
  side: 10,
};
square.area() // => 100
```

You can omit the `function` keyword and the colon to add a property with the name and a value of that property to the specified function:

```js
let square = {
  area() { return this.side * this.side; },
  side: 10,
};
square.area() // => 100
```

The property name can take any for the forms that are legal in an object literal: in addition to a regular JS identifier like the name `area` above, you can also use string literals and computed property names, including symbol property names.

