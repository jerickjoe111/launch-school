
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

## Get number of properties in an object

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

```js
let object = {a: 1, b: 2}

'c' in object // => false (the property name has to be in string form,
              //           or reference a string)
'a' in object // => true
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

## Know if an object within a list of objects  satisfies some condition

```js
let list = [{a: 1, b: 2}, {c: 3}];

list.find(object => 'c' in object) // {c: 3}
```

## Find index of object within a list of objects

```js
let list = [{a: 1, b: 2}, {c: 3}];
list.findIndex(object => 'c' in object) // 1
```