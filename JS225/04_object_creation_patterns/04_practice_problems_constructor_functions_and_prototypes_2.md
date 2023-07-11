# Practice Problems: Constructor Functions and Prototypes (1)

## 1. Follow the steps below:

1. Create an object called `shape` that has a `getType` method.
2. Define a `Triangle` constructor function whose prototype is shape. Objects created with `Triangle` should have four own properties: `a`, `b`, `c `(representing the sides of a triangle), and type.
3. Add a new method to the prototype called `getPerimeter`.

Test your implementation with the following code:

```js
let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"
```

```js
function Triangle(a, b, c) {
  this.a = a;
  this.b = b;  
  this.c = c;
  this.type = 'triangle';
}
let shape = {
  getType() { return this.type },
}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

Triangle.prototype.constructor = Triangle; // we have to manually set the constructor property on the prototype
// for cases like these
```

## 2. Since a constructor is just a function, it can be called without the new operator, and this can lead to unexpected results and errors especially for inexperienced programmers. Write a constructor function that can be used with or without the new operator, and return the same result in either form. Use the code below to check your solution:

```js
function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  } else {
    this.name = `${first} ${last}`;
  }
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe
```