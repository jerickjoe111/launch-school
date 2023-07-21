# Object creation patterns

There are four main design patterns:

## Factory Functions

In this pattern, we use a function to return an object based on a pre-defined template set within the function. For example:

```js
// a pair object is an object that will represent a pair of natural numbers:
function pair(numberA, numberB) {
  return {
    a: numberA,
    b: numberB,
    logNumbers() {
      console.log(this.a, this.b)
    }
  }
}
```

The problem with this design is that: first, there is no way we can query this object about its _class_, or find out whether it was created by a factory function, and by which one:

```js
let p = pair();
p.constructor // => [Function: Object] : It was created by a literal object
p.__proto__ // => [Object: null prototype] {} : The basic Object
```

The second problem about this approach is that every object created this way will contain full copies of the methods defined in the factory functions, which is redundant and memory heavy.

## Constructor Pattern

In this case, we create the objects by calling a constructor function. This function will initialize the object's state via the keyword `this`, that will refer to the newly created object:

```js
// a Pair is an object that will represent a pair of natural numbers:
function Pair(numberA, numberB) {
  this.a = numberA;
  this.b = numberB;
  this.logNumbers = function() {
    console.log(this.a, this.b)
  }
}
```

Note that, if we call the function without the `new` keyword, the properties will be added to the relative context: if we are in non-strict mode, `this` will refer to the global object.

## The Prototype Pattern

In this pattern, we also define a constructor function, but we add the shared behaviors for the _class_ (objects that will inherit from the same function prototype), directly on the `prototype` value of the constructor:

```js
// a Pair is an object that will represent a pair of natural numbers:
function Pair(numberA, numberB) {
  this.a = numberA;
  this.b = numberB;
}

Pair.prototype.logNumbers = function() {
  console.log(this.a, this.b);
}

let p = new Pair;
p.logNumbers() // => logs 1, 2
```

## Pseudo-classical pattern

This was a standard way of object creation prior to ES6. In this pattern, we define a constructor to initialize the new objects' state, and then we add the instance (shared) methods of the _class_ (objects inheriting from the same object prototype) directly onto the function prototype (the value of the `prototype` property of the constructor function).

```js
// a Pair is an object that will represent a pair of natural numbers:
function Pair(numberA, numberB) {
  this.a = numberA;
  this.b = numberB;
}

Pair.prototype.logNumbers = function() {
  console.log(this.a, this.b);
}

let pair1 = new Pair(1, 2);
let pair2 = new Pair(3, 4);
pair1 === pair2 // => false : they are different Pair objects
pair1.logNumbers === pair2.logNumbers // => true : they share the methods
```

### How to implement subclasses when using the pseudo-classical pattern

```js
// Ensure that the SubClass instance inherits properties from SuperClass by 
// calling the SuperClass constructor as it were a method of the new SubClass instance;
// this way, properties are initialized via the SuperClass constructor
function SubClass(properties, otherProperties) {
  SuperClass.call(this, properties);
  this.otherProperties = otherProperties;
}

// Ensure that the SubClass prototype inherits methods from the SuperClass prototype
SubClass.prototype = Object.create(SuperClass.prototype);

// We don't want the prototype to inherit the SuperClass.prototype.constructor property, so we
// define our own constructor property to point to the right constructor, SubClass.
SubClass.prototype.constructor = SubClass;
```

> A robust subclassing mechanism needs to allow classes to invoke the methods and constructor of their superclass, but prior to ES6, JavaScript did not have a simple way to do these things.

### How to create a private state when using the pseudo-classical approach

We can add the private state as variables declared within the constructor, and then initialize the getters/setters methods for those private variables, besides the public properties, if any:

```js
function Constructor() {
  let privateVariable = 1;
  this.accessPrivate = function() {
    return privateVariable;
  }
  this.property = 1;
}

let a = new Constructor;
a.privateVariable; // => undefined
a.accessPrivate(); // => 1
```

## OLOO 

The OLOO pattern (from 'Object Linking from Other Object') forgets about constructor-based pseudo-classes. Instead, it's based on the creation of a prototype literal object, an initializer method `init`, and in the _instantiation_ through the `Object.create()` method:

```js
// a Pair is an object that will represent a pair of natural numbers:

// the prototype is capitalized as in other patterns
const Pair = {
  logNumbers() {
    console.log(this.a, this.b);
  },

  init(numberA, numberB) {
    this.a = numberA;
    this.b = numberB;
    return this;
  },
}

let p = Object.create(Pair).init(1, 2);
Pair.isPrototypeOf(p); // => true
```

Note that the `init` methods is necessary only as a way to initialize the newly created object's state with specific values. We can leave it uninitialized, or we could add default values.

### OLOO and inheritance

The point of OLOO is not wiring up a traditional "inheritance" hierarchy without using constructors, but setting up two linked objects where one can delegate to the other (and vice versa, if you like) so they can virtually compose during the method invocation - in other words, behavior delegation. 

### How to create private state on each instance using the OLOO pattern

We can assign the constructor to an IIFE that returns an object with access to the private scope formed by the closure created by the anonymous function:

```js
const Constructor = (function() {
  let privateData = 1;
  return {
    privateAccess() {
      return privateData;
    }
  } 
})()

let a = Object.create(Constructor);
a.privateAccess() // => 1
a.privateData // => undefined;  it's unreachable from the outside without the appropriate method interface
```

However, because we only define the IFEE once, there only exists one closure, used multiple times, one for each time we create an object via `Object.create(Constructor)`. That's why all the "instances" of `Constructor` share the same private data:

```js
const Account= (function() {
  let privateData = 1;
  return {
    privateAccess() {
      return privateData;
    },
    changePrivateData() {
      privateData = 'CHANGED!';
    }
  } 
})()

let a = Object.create(Account);
a.privateAccess(); // => 1
let b = Object.create(Account);
a.changePrivateData();
b.privateAccess(); // => 'CHANGED!'  !!!!
```

To fix this, we can just create an `updateConstructor()` function in the global scope, declaring `Constructor` as a `let` variable, instead of a constant, and... just create a new closure each time we invoke `updateConstructor()`, by reassigning `Constructor` again and again as needed!:

```js
let Account;
function updateAccount() {
  Account = (function() {
    let privateData = 1;
    return {
      privateAccess() {
        return privateData;
      },
      changePrivateData() {
        privateData = 'CHANGED!';
      }
    } 
  })()
};

updateAccount();
let a = Object.create(Account);
a.privateAccess() // => 1
updateAccount();
let b = Object.create(Account);
a.changePrivateData()//
b.privateAccess() // => 1
a.privateAccess() // 'CHANGED!' 
```

## The `class` syntax

ES6 introduced a new syntax to create objects and establish inheritance hierarchies. However, this does not mean that classes in the classic OOP sense were added to JavaScript. On the contrary: the new syntax is simply syntactic sugar for the more fundamental form of constructor-and-prototype-based inheritance; in other words, it is a convenient wrapper for the traditional JavaScript mechanisms seen in the Pseudo-classical Pattern:

```js
// a Pair is an object that will represent a pair of natural numbers:

class Pair {
  constructor(numberA, numberB) {
    this.a = numberA;
    this.b = numberB;
  }

  logNumbers() {
    console.log(this.a, this.b);
  }
}

let pair = new Pair(1, 2);
pair.constructor // => [class Pair]
Pair.prototype.isPrototypeOf(pair); // => true
```

There are some important points about the `class` syntax that have to be remarked: first, that the class is defined within a block delimited in curly braces, but without commas separating the methods; second, that the keyword `constructor` is used to define the constructor function for the class. What happens under the hood is that the `class` declaration creates a new variable with the name of the class, and then assigns that variable to the `constructor` function. If the class does not need the objects to be initialized upon instantiation, we can omit the `constructor` function definition within the class, and an empty constructor will be implicitly created and assigned to the class name variable.

Another difference is that the whole body within the class declaration is in strict mode, even without the `"use strict"` _pragma_; also, class declarations are not hoisted: we can't instantiate class before we declare them.

### How to implement subclasses with the `class` syntax.

> In ES6 and later, you can create a superclass simply by adding an `extends` clause to a class declaration, and you can do this even for built-in classes.

```js
class MyArray extends Array {
  // constructor
  
  // new methods for MyArray instances here
}
```

`extends` sets the prototype for both the `MyArray` constructor function and `MyArray.prototype.`

|  | Prototype of `MyArray` | Prototype of `MyArray.prototype` |
| --- | --- | --- | 
| with no `extends` | `Function.prototype` | `Object.prototype` | 
| with `extends` | `Array` | `Array.prototyp`e | 

Use the `super` keyword to invoke the constructor and methods of the superclass. We can invoke the methods of the superclass within methods of the subclass:

```js
  // we can call the method of the same name within a method
  constructor(property1, property2) {
    super(property1); // the constructor in the superclass initializes this property
    this.property2 = property2;
  }

  // we can call specific methods
  super.superClassMethod(...args)
```

### Private class features

All class properties (methods too), called _fields_ in this context, are public by default. This means that they are accessible from the outside of the class. In the classic prototypal inheritance, this was achieved with closures, but it was excessively complex.

Now, private properties, and private static properties and methods, are made available by prepending a `#` to the identifier. This helps us achieve a form of encapsulation.

```js
class ClassWithPrivate {
  #privateField;
  #privateFieldWithInitializer = 1;

  #privateMethod() {
  }

  static #privateStaticField;
  static #privateStaticFieldWithInitializer = 1;

  static #privateStaticMethod() {
  }
}
```

## Instance and Static properties and methods

Instances of the _class_ are objects that inherit from the same object prototype. Instance properties are the properties shared by all the instances, and instance methods are the shared methods (properties with a function as a value) by all instances of the same _class_. We also mean by methods the methods defined on the prototype, and not individual instances (sometimes called _singleton methods_); now, despite the fact they are defined on the object prototype, they still operate on the particular instances, and their context (the value of `this` within them) is the particular instance on which we call them, not the prototype.

Static (or _class_) properties and methods are those defined as properties of the constructor function itself, not any of its instances. In other words, static properties and methods belong to the _class_, not to any of the instances.

We can define them by preceding the method declaration with the `static` keyword:

```js
class Pair {
  static isPair(object) {
    return Pair.prototype.isPrototypeOf(object);
  };
}

let a = new Pair;
Pair.isPair(a); // => true
Pair.isPair({}); // => false
```

Or we can add them directly to the constructor:

```js
class Pair {
  
}

Pair.isPair = function(object) {
  return Pair.prototype.isPrototypeOf(object);
}

let a = new Pair;
Pair.isPair(a); // => true
Pair.isPair({}); // => false
```
