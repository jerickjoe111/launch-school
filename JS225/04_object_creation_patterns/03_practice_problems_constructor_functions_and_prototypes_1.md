# Practice Problems: Constructor Functions and Prototypes (1)

## 1. What does the following code log to the console?

```js
let a = 1;

function FooConstructor() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

let foo = new FooConstructor(); // logs 2

foo.bar(); // logs 2
FooConstructor(); // logs 2 (sets global a to 2)

let obj = {};
FooConstructor.call(obj); // logs 2
obj.bar(); // logs 2

console.log(this.a); // logs 2
```

## 2. What does the following code log to the console?

```js
const RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function RectangleConstructor(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // logs NaN
console.log(rect1.perimeter); // logs NaN
```
### How do you fix this problem?

```js
const RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function RectangleConstructor(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
```

## 4. What will the following code log out and why?

```js
function NinjaConstructor() {
  this.swung = true;
}

let ninja = new NinjaConstructor();

NinjaConstructor.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());
```

`true`. `ninja` delegates to its prototype (or inherits from it) the method `swingSword`. When we query `ninja` for a property `swingSword`, it does not find it as an own property, but it does when the prototype inheritance chain reaches to the prototype `NinjaConstructor.prototype`

## 5. What will the following code log out and why?

```js
function NinjaConstructor() {
  this.swung = true;
}

let ninja = new NinjaConstructor();

NinjaConstructor.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
```

It raises an error because we are setting the function prototype of `NinjaConstructor` after we create the object, so the prototype of `ninja` does not have any own or inherited `swingSword` property. If we move the creation of the object after we set the `NinjaConstructor.prototype`, we will see `true` logged.

## 6. Implement the method described in the comments below:

```js
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

ninjaA = new Ninja();
ninjaB = new Ninja();


console.log(ninjaA.swing().swung);      // must log true
console.log(ninjaB.swing().swung);      // must log true
```

## 7. In this problem, we'll ask you to create a new instance of an object, without having direct access to the constructor function:

```js
let ninjaA = (function() {
  function Ninja(){};
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA))

console.log(ninjaB.constructor === ninjaA.constructor);    // should log true
```

