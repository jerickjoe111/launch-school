# Objects

## What are objects?

In JavaScript, any value that is not a number, a string, a boolean, a symbol, `null` or `undefined` is an object. 

Objects are mutable and manipulated _by reference_, not by value; if the variable `a` contains a reference to an object and we execute `let b = a`, `b` holds a reference to the same object, not a copy of the object. And any mutations on the object via the `b` variable will also be visible through `a`.

Objects are unordered collections of properties: name-value pairs, in which the name can be a string or a symbol, and the value can be any JavaScript value, including other objects and functions.

Properties can be either _inherited properties_ (those inherited from another object called a prototype object) or _own properties_ (non-inherited).

Besides these characteristics, a property has three attributes: 

- the _writable_ attribute: if set to `true`, the property value can be set.
- the _enumerable_ attribute: if set to `true`, the property name will be returned by a `for`/`in` loop.
- the _configurable_ attribute: if set to `true`, the property can be deleted, and its other attributes altered.

## Object prototypes

(Almost) every JavaScript object has a second object linked to it, known as its _prototype_; an object inherits properties from its respective prototype.

Every object has a hidden special property called `[[Prototype]]` that refers to the object prototype, and we can access and set this property through the `Object.getProtoypeOf` and `Object.setPrototypeOf` methods. There is a non-hidden, now deprecated property to access an object's prototype: `__proto__`.

`Object.prototype` is a rare case of object that has no prototype: it does not inherit any properties:

```js
Object.prototype.__proto__ === `null` // => true
```

## JavaScript model of inheritance

[I will use the word _class_ to represent the prototype-based model of relationships among object despite the fact JavaScript has no "true" classes. I prefer to use this word, and not _type_, as the Launch School material does, to avoid the confusion with the concept that defined the _type_ of values in JavaScript (type as in strings, booleans, objects, etc.)]

JavaScript does not have _classes_ in the classic sense: it uses a prototype-based model of inheritance to represent relationships between objects akin to true classes in other languages, like Ruby. This model is sometimes called _Prototypal Inheritance_. For example, if two objects have the same object prototype (in other words, inherit properties from the same prototype object), we could say that those objects are of the same type, or that they are _instances_ of the same _class_. 

In turn, a prototype object can have its own prototype too. Most objects inherit ultimately from the basic `Object` prototype; for example, if we create a `Date` object, that newly created object will inherit from both the `Date` prototype and the `Object` prototype. This creates a linked series of prototype objects that we call _the prototype chain_. This way, we can share behaviors among all instances of a _class_ (not in the classical sense: here it means the set of objects that inherit from the same object prototype), delegating to the prototype, instead of having to define a method in each object separately.

## Property access and assignment in the prototype chain

There are two aspects by which we can interact with an object's properties: _querying_ or accessing a property, and assigning (or reassigning) a property's value.

### Accessing a property:

When we try to access a property `x` in an object `object` via the `.` or the `[]` syntax, JavaScript follows a lookup path in the prototype chain that follows this algorithm:

1. If `object` has a `x` _own property_, it accesses the value of that property.
2. If `object` does not have a `x` _own property_, then the prototype object of `object` is queried for `x`:
3. If the prototype object of `object` does not have an _own property_ `x`, but has a prototype object itself, then the query is performed on that object: the prototype of the prototype.
4. This process continues until the prototype `x` is found or until an object with a `null` value for the `[[Prototype]]` property (an object with no prototype object) is searched.

This algorithm forms a chain that works as a linked list from which properties are _inherited_ in JavaScript.

### Property assignment

In the case of property assignment, JavaScript examines the prototype chain only to determine whether the assigned is allowed or not. When, for instance, we assign the property `y` on the object `object`:

1. If `object` already has an _own property_ `y`, its value is simply reassigned to the new value.
2. If `object` does not have a `y` _own property_, a new _own property_ on `object` is created.

There are some important caveats: if `object` had a `y` _inherited property_, this inherited `y` property is _hidden_ by the newly created own property of the same name. When this happens, we say that the property _overrides_ an inherited property. It's important to note that the assignment will always create own properties on `object`, _never modifying the prototype objects up in the prototype chain_.

This prototypal inheritance model is sometimes called _behavior delegation_: if from the top down/design perspective the objects down the prototype chain _inherit_ the properties from the objects above, from the bottom up, we can talk about the objects on the bottom _delegating_ property queries to the prototype objects above them.

From this fact we conclude that, in JavaScript, inheritance occurs when querying properties, but not when we set them: this is a powerful JavaScript feature that allows us to achieve polymorphism, a key characteristic of object-oriented design.


## Constructor functions

Constructor functions are functions designed to the initialization of newly created objects, via the use of the `new` preceding their invocation, for instance:

```js
let a = new Object();
let b = new Object; // we can omit the parentheses in a constructor invocation
```

By convention, we capitalize the constructor's name in order to distinguish them from regular functions. In order for the constructor invocation to work, the constructor function has to have a `prototype` property. Arrow functions can't be used this way.

These functions handle their arguments, execution context and return values differently from regular function and method invocations. For example, they don't usually return values explicitly with the `return` keyword.

Let's remember that in JavaScript, functions are objects too. And, as objects, functions can have properties (`name`, `length`, etc.), but the most important in constructor functions is the `prototype` property. All functions, except arrow functions have this property; it refers to an object know as the _function prototype_, and, initially, every function has a different function prototype (but two functions can be set to have their `prototype` properties refer to the same object). The value of this property is different from the _object prototype_ of the function itself (referred to by `[[Prototype]]`); in this case, the object prototype of a constructor function, like any other function, is the `Function.prototype` object, a function object from which all functions inherit from:

```js
Function.__proto__ === Function.prototype // => true
Date.__proto__ === Function.prototype // => true
// As a function, Date's object prototype is determined by the prototype function of its constructor, Function.

Date.__proto__ === Date.prototype // => false
let dateObject = new Date();
dateObject.__proto__ === Date.prototype// => true
```

The key thing is that, when a new object is created by the `new` + constructor syntax, _the value of the `prototype` property of the constructor (what we call the **function prototype**) is used as the **object prototype** (the object from which the new object will inherit) for the newly created object_:

| Constructor Invocation | Prototype of the new object |
| --- | --- |
| `new Object()` | `Object.prototype` |
| `new Array()` | `Array.prototype` |
| `new Date()` | `Date.prototype` |
etc.

### The difference between object prototypes and function prototypes

(Almost) all objects have a prototype object (referred to as the `[[Prototype]]` property), but only functions (except arrow functions) have a `prototype` property. It is these functions with a `prototype` property that define the object prototypes for all the other objects.

### Constructors and _class_ identity.

In JavaScript, the object prototypes serve as the _fundamental identity of a class_, and the constructor, as the _public face of the class_. (Remember that this language does not have true classes)

Object prototypes are fundamental to the identity of a _class_ in JavaScript: two objects are instances of the same _class_ if they inherit from the same prototype. However, the constructor function that initializes the new object is not fundamental: two different constructors could have `prototype` properties assigned to the same object, and both could be used to create instances of the same class:

```js
function A() {};
function B() {};

let commonPrototype = {};
A.prototype = commonPrototype;
B.prototype = commonPrototype;

let objectA = new A;
let objectB = new B;

objectA.__proto__ === objectB.__proto__; // => true. They share the same object prototype
```

Nevertheless, we adopt the constructor function's name as the name of the _class_: the constructor `Object` creates Object objects, the `Array` constructor creates Array objects, and so on. 

### The `constructor` property of objects

By default, the value of the `prototype` property in a constructor function is a predefined object with a hidden, non-enumerable property named `constructor`. The value of this property is the function itself:

```js
Object === Object.prototype.constructor; // => true
```

The reason for this is that, because the constructor works as the public identity of a _class_, it is useful for the objects to inherit a property referring to their own constructors. We can use this property to get the _class_ of an object:

```js
(new Object).constructor === Object; // => true
```

However, if we reassign the value of the `prototype` property in a constructor, we will lose the `constructor` property in subsequent objects created by that constructor, and we will have to explicitly add to the function prototype a `constructor` property.

### What happens under the hood

When we perform a constructor invocation to get a new object, these are the steps that JavaScript does in order to achieve it:

1. A new empty object without a prototype is created (we can talk about the value of the `[[Prototype]]` property being `null`, as in `Object.create(null)`).
2. The newly created object's prototype is set to the function prototype (the value of its `prototype` property). This means that the new object will inherit from it, or that the new object will belong to the _class_ determined by that function prototype.
3. The execution context of the constructor (the value of `this` within it) is set to the newly created object.
4. The function's code body is executed (this usually initializes the new object's internal state).
5. Finally, the constructor returns the newly created object, unless we explicitly return a different object. If we try to return a primitive (like, for example, a string to indicate an error), the constructor will still return the newly created object.

## Object creation

We can create objects in three basic ways:

1. Using the object literal `{}`:
    This expression will create and initialize a new distinct object each time it is evaluated. This means that, if the expression occurs within a loop, n different objects will be created, where n is the number of loop iterations.
    The new created object will inherit directly from `Object.prototype`.

2. Using the constructor: 
    In this case, the value of the `prototype` property in the constructor will be set as the object prototype for the newly created object.

3. With the `Object.create()` method:
    This method will create and return a new object, setting the first argument as its prototype. We can pass `null` as the first argument if we want the object to be completely empty of properties.








