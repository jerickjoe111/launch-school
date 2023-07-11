# Practice Problems: Prototypes and Prototypal Inheritance

## 1. Write a function that returns the object on a given object's prototype chain where a property is defined. See the example code below:

```js
function getDefiningObject(object, propKey) {
  let parent = Object.getPrototypeOf(object)
  while (parent) {
    if (parent.hasOwnProperty(propKey)) {
      return parent;
    } else {
      parent = Object.getPrototypeOf(parent);
    }
  }

  return null;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);     // => true
console.log(getDefiningObject(qux, 'e'));             // => null
```

## 2. Write a function to provide a shallow copy of an object. The object that you copy should share the same prototype chain as the original object, and it should have the same own properties that return the same values or objects when accessed. Use the code below to verify your implementation:

```js
function shallowCopy(prototype) {
  let copy = Object.create(prototype);
  Object.getOwnPropertyNames(prototype).forEach(p => {
    copy[p] = prototype[p];
  })

  return copy;
}

let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);       // => 1
baz.say();                // => c is 3
baz.hasOwnProperty('a');  // false
baz.hasOwnProperty('b');  // false
baz.hasOwnProperty('c');  // true
```

## 3. Write a function that extends an object (destination object) with contents from multiple objects (source objects).

```js
function extend(destination, ...parents) {
  parents.forEach(parent => {
    Object.getOwnPropertyNames(parent).forEach(property => {
      destination[property] = parent[property];
    });
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: 'Joe'
};

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);          // => 1
object.sayHello();                // => Hello, Joe
```