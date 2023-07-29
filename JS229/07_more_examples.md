# More examples

- [General JavaScript Context]()
- [`this` and context]()
- [Implicit Function Execution Context]()
- [Implicit Method Execution Context]()
- [Explicit Execution Context]()
- [Permanently Bound Functions]()
- [Context Loss of Methods extraced from Objects]()
- [Context Loss of Functions called within Methods]()
- [Context Loss of Functions passed as arguments within methods]()
- [Lexical Scope Rules in JavaScript]()
- [Higher-Order Functions]()
- [Creating Private Data]()
- [Garbage Collection]()
- [Immediately Invoked Function Expressions]()
- [Partial Function Application]()
- [Protoype Objects]()
- [Constructor Functions]()
- [Behavior Delegation]()
- [The Pseudo-Classical Pattern](#the-pseudo-classical-pattern)
- [The OLOO Pattern](#the-oloo-pattern)
- [The `class` syntax](#the-class-syntax)

## `this` and context

Every JavaScript code implies a context. We can access the context relative to each code block via the `this` keyword. In strict mode, however, the global object does not work as the implicit context, so, when `this` refers to the global object it is set to `undefined`.

```js
this === globalThis; // => true
```

```js
"use strict"

this === globalThis; // => false
this === undefined; /// => true
```





## Implicit function execution context

```js
function thisValue() {
  return `implicit context on the top level scope: ${this}`;
}

thisValue();  // => 'implicit context on the top level scope: [object global]'
```

In strict mode, however, `this` in the global scope is set to `undefined`.

```js
"use strict"

function thisValue() {
  return `implicit context on the top level scope: ${this}`;
}

thisValue();  // => 'implicit context on the top level scope: undefined'
```

## Implicit method execution context

```js
let object = {
  thisValue() {
    return this;
  },
};

object.thisValue() === object; // => true
```

## Explicit function execution context

`Function.prototype.call`/ `Function.prototype.apply`:

```js
let x = {
  self: 'X',
  whoAmI() {
    return `I am ${this.self}`; 
  },
}

let y = {
  self: 'Y',
}

x.whoAmI(); // => 'I am X'
x.whoAmI.call(y) // => 'I am Y'
x.whoAmI.apply(y) // => 'I am Y'
```

## Permanently bound functions

```js
let x = {
  self: 'X',
  whoAmI() {
    return `I am ${this.self}`; 
  },
}

let y = {
  self: 'Y',
}

let yBound = x.whoAmI.bind(y);
yBound(); // => 'I am Y
yBound.call(x) // => 'I am Y'
```

## The Pseudo-classical pattern

Instancing:

```js
function Building(yearOfConstruction, rooms, populationCapacity = 1) {
  this.yearOfConstruction = yearOfConstruction;
  this.rooms = rooms;
  this.populationCapacity = populationCapacity;
}
// shared behavior
Building.prototype.setPopulationCapacity = function(populationCapacity) {
  this.populationCapacity = populationCapacity;
  console.log('Population set' );
}

let myHouse = new Building(2023, 4, 6);
```

Subclassing:

```js
function House(yearOfConstruction, rooms, populationCapacity = 1, owner) {
  Building.call(this, yearOfConstruction, rooms, populationCapacity);
  this.owner = owner;
}
House.prototype = Object.create(Building.prototype);
House.prototype.constructor = House;
let myHouse = new House(2023, 4, 6);
myHouse instanceof House; // => true
myHouse instanceof Building; // => true
myHouse.setPopulationCapacity(5); // => logs Population set
myHouse.populationCapacity; // => 5
```

Private state for instances:

```js
function House(yearOfConstruction, rooms, populationCapacity = 1, owner) {
  Building.call(this, yearOfConstruction, rooms, populationCapacity);
  this.owner = owner;

  let privateData = { ownersData: 'private data' }
  this.privateAccess = function() {
    return privateData.ownersData;
  }
}

let myHouse = new House(2023, 4, 4, 'Lucas');
myHouse.owner = 'Lucas';
myHouse.privateData; // => undefined !
myHouse.privateAccess(); // => private data
myHouse.privateAccess() = 'privacy invaded'; // => throws ReferenceError.
// We can't access or modify the private variable directly.
```

## The OLOO pattern

Instancing:

```js
const House = {
  // Instance initialzer
  init(yearOfConstruction, rooms, populationCapacity = 1) {
    this.yearOfConstruction = yearOfConstruction;
    this.rooms = rooms;
    this.populationCapacity = populationCapacity;
    return this; // we have to explicitly return the object so it
    // can be assigned to a variable
  },

  // Method: shared behavior
  setPopulationCapacity(populationCapacity) {
    this.populationCapacity = populationCapacity;
    console.log('Population set' );
  },
}

let myHouse = Object.create(House).init(2023, 4, 4);
myHouse.setPopulationCapacity(5); // => logs Population set
myHouse.populationCapacity; // => 5
```

Creating a private state for instances:

```js
// we need to reassign the variable to create new closures that will hold
// references to the privateData variable
let House;
function updateHouseClosure() {
  House = (function() {
    let privateData = 'private owner data';

    return {
      init(yearOfConstruction, rooms, populationCapacity = 1) {
        this.yearOfConstruction = yearOfConstruction;
        this.rooms = rooms;
        this.populationCapacity = populationCapacity;
        return this; 
      },

      privateAccess() {
        return privateData;
      },

      changePrivate() {
        privateData = 'changed';
      }
    } 
  })()
};

updateHouseClosure();
let myHouse = Object.create(House).init(2023, 4, 4);
myHouse.privateData; // => undefined
myHouse.privateAccess(); // => 'private owner data'

updateHouseClosure();
let myOtherHouse = Object.create(House).init(1086, 2, 3);
myHouse.changePrivate();
myHouse.privateAccess(); // => 'changed'
myOtherHouse.privateAccess(); // => 'private owner data'
```

## the `class` syntax

Instancing:

```js
class Building {
  constructor(yearOfConstruction, rooms, populationCapacity = 1) {
    this.yearOfConstruction = yearOfConstruction;
    this.rooms = rooms;
    this.populationCapacity = populationCapacity;
  }

  // shared behavior
  setPopulationCapacity(populationCapacity) {
    this.populationCapacity = populationCapacity;
    console.log('Population set' );
  }
}

let myHouse = new Building(2023, 4, 6);
myHouse.setPopulationCapacity(5); // => logs Population set
myHouse.populationCapacity; // => 5
```

Subclassing:

```js
class House extends Building {
  constructor(yearOfConstruction, rooms, populationCapacity, owner) {
    super(yearOfConstruction, rooms, populationCapacity);
    this.owner = owner;
  }
}

let myHouse = new House(2023, 4, 6);
myHouse instanceof House; // => true
myHouse instanceof Building; // => true
myHouse.setPopulationCapacity(5); // => logs Population set
myHouse.populationCapacity; // => 5
```

Private state for instances:

```js
class House {
  #privateData = 'private owner data';
  constructor(owner) {
    this.owner = owner;
  }

  privateAccess() {
    return this.#privateData;
  }
}

let myHouse = new House(2023, 4, 4, 'Lucas');
myHouse.owner = 'Lucas';
myHouse.privateData; // => undefined !
myHouse.privateAccess(); // => private data
myHouse.privateAccess() = 'privacy invaded'; // => throws ReferenceError.
// We can't access or modify the private variable directly.
```