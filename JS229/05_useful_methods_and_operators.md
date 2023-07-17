# Useful Operators and Methods

## Operators

### `typeof`

This operator expects a single value of any type at its right, and returns a string that represent its type. For example:

```js
typeof 'Hello' // => 'string'
typeof 1 // => 'number'
typeof [] // => 'object'
// etc.
```

### `instanceof`

This operator expects two operands, one at its left, and one at its right. The left operand must be the object being tested, and the right operand must be a (constructor) function. `instanceof` will return `true` if the function prototype of the constructor (the right-hand operand) - that is, the object assigned to its `prototype` property-, is _anywhere_ up in the prototype chain of the object (the left-hand operand).

It's important to note that this operator will not test whether the object was initialized by that particular constructor, but _whether it inherits from the object assigned to the `prototype` property of the constructor_. The inheritance does not have to be direct: the object can inherit from a prototype up to two or more degrees ("great parent" objects).

## `Object.prototype` methods

Unless we are talking about completely void objects, every object in JavaScript ultimately inherits from the `Object.prototype` object; for this reason, the following methods are available to any object.

### `Object.prototype.isPrototypeOf()`

If we don't want to use the constructor as an intermediary, we can test if an object is the prototype of another object. The caller or receiver object (the object on which we call this method) is the prototype to be tested, and the passed in argument is the object we want to know if it inherits from that prototype. If the caller is the prototype of the passed in object, this method will return `true`. The inheritance relationship does not have to be direct: the prototype can be anywhere up in the prototype chain of the object.

```js
Array.prototype.isPrototypeOf(new Array); // => true
Object.prototype.isPrototypeOf(new Array); // => true
```

### `Object.prototype.hasOwnProperty()`

This method tests whether the caller object has an own property (not inherited) with the given name (the passed in string). It returns `false` for inherited properties.

### `Object.prototype.toString()`

This method returns a string representation of the object.

## `Object` methods

These are static methods of `Object`.

### `Object.getPrototypeOf()`

This method returns the immediate prototype of the passed in object, that is, the value of the `[[Prototype]]` property.


### `Object.setPrototypeOf()`

This method manually sets the prototype object of the first object argument to the second argument (which must be an object or `null`); it is a slow operation and it is not recommended.

### `Object.create()`

This method returns a new object, whose prototype is the passed in argument. 

For example, we can use this method to create a new prototype chain with the help of `Object.getPrototypeOf()`:

```js
function SuperString() {}
SuperString.prototype = Object.create(Object.getPrototypeOf(''));
new SuperString instanceof String // => true
```

### `Object.defineProperties()`

With this method we can add properties to objects specifying its attributes. The first argument is the object to which we want to add the properties, and the second is an object with one property for each property we want to add to the first argument, with a nested object as its value with its characteristics:

```js
let person = {
  age: 36,
}

Object.defineProperties(person, {
  name: {
    value: 'Luke',
    writable: false,
    enumerable: false,
  }
})
```

### `Object.getOwnPropertyNames()`

This method works like `Object.keys()`, but it includes the non-enumerable properties as well.

### `Object.freeze()`

This method sets all the `writable` attribute of all the object argument's properties to `false`, rendering them immutable. However, it does not _deeply_ freeze inner values if the property value is an object or an array. This action cannot be unmade.

## Others


## `__proto__`





