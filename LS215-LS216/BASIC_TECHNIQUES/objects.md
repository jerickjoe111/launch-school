
## Get reference to object with max/min length (number of properties)

```js
function objectLength(object) {
  return Object.keys(object).length;
}

let a = {a: 1};
let b = {a: 1, b: 2};
let biggestObject = [a, b].sort((a, b) => objectLength(b) - objectLength(a))[0];
let smallestObject = [a, b].sort((a, b) => objectLength(a) - objectLength(b))[0];
biggestObject // => {a: 1, b: 2}
smallestObject // => {a: 1}
```

## Get list of property names in object 

```js
let object = {a: 1, b: 2}
Object.keys(object) // => ['a', 'b']
```

## Get number of properties in an object (its 'length')

```js
function objectLength(object) {
  return Object.keys(object).length;
}
```

## Add property to an object

```js
let a = {a: 1};
a.b = 2;
a.c = 3
a // => {a: 1, b: 2, c: 3} 
```

## Create literal object from another object, plus another properties

```js
let a = {a: 1, b: 2};
let b = {
  ...a,
  c: 3,
}
b // => { a: 1, b: 2, c: 3 }
```

## Check if object has a property

This is important: the in operator distinguishes non-existing properties from properties with a value of `undefined`

```js
let object = {a: 1, b: 2, d: undefined}

'c' in object // => false (the property name has to be in string form,
              //           or reference a string)
'a' in object // => true
'd' in object // => true
```

## Create an array of subarrays from an object

```js
let a = {a: 1, b: 2}

Object.entries(a); // => [ [ 'a', 1 ], [ 'b', 2 ] ]
```

## Create an object from an array of subarrays (entries)

```js
let a = [ [ 'a', 1 ], [ 'b', 2 ] ];
Object.fromEntries(a); // => {a: 1, b: 2}
```

## Know if an object within a list of objects satisfies some condition

```js
let list = [{a: 1, b: 2}, {c: 3}];

list.find(object => 'c' in object) // {c: 3}
```

## Find index of object within a list of objects

```js
let list = [{a: 1, b: 2}, {c: 3}];
list.findIndex(object => 'c' in object) // 1
```

## Sort object by first property name in a list of objects 

```js
let list = [{Z: 1, B: 2}, {c: 3}, {A: 4}];

list.sort((a, b) => {
  let propertyA = Object.keys(a)[0].toLowerCase();
  let propertyB = Object.keys(b)[0].toLowerCase();

  if (propertyA < propertyB) return -1;
  else if (propertyA > propertyB) return 1;
  else return 0;
})

list // => [ { A: 4 }, { c: 3 }, { Z: 1, B: 2 } ]
```

## Sort object by value of first property in a list of objects 

```js
let list = [{Z: 3, B: 3}, {c: 1}, {A: 2}];

list.sort((a, b) => {
  let propertyA = a[Object.keys(a)[0]];
  let propertyB = b[Object.keys(b)[0]];

  if (propertyA < propertyB) return -1;
  else if (propertyA > propertyB) return 1;
  else return 0;
})

list // => [ { c: 1 }, { A: 2 }, { Z: 3, B: 3 } ]
```