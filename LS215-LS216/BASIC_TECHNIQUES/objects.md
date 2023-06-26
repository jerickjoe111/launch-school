
# Basic Object Techniques

1. [Get reference to object with max/min length (number of properties)](#get-reference-to-object-with-maxmin-length-number-of-properties)
2. [Get list of property names in object](#get-list-of-property-names-in-object)
3. [Get number of properties in an object (its 'length')](#get-number-of-properties-in-an-object-its-length)
4. [Add property to an object](#add-property-to-an-object)
5. [Check if object has a property](#check-if-object-has-a-property)
6. [Create an array of subarrays from an object](#create-an-array-of-subarrays-from-an-object)
7. [Create an object from an array of subarrays (entries)](#create-an-object-from-an-array-of-subarrays-entries)
8. [Find an object within a list of objects that satisfies some condition](#find-an-object-within-a-list-of-objects-that-satisfies-some-condition)
9. [Find index of object within a list of objects](#find-index-of-object-within-a-list-of-objects)
10. [Sort object by first property name in a list of objects ](#sort-object-by-first-property-name-in-a-list-of-objects)
11. [Copy an object](#copy-an-object)
12. [Compare if two objects have the same properties and values](#compare-if-two-objects-have-the-same-properties-and-values)
13. [Make a deep copy of an object](#make-a-deep-copy-of-an-object)

## Get reference to object with max/min length (number of properties)

```js
function objectLength(object) {
  return Object.keys(object).length;
}

let a = {a: 1};
let b = {a: 1, b: 2};
let smallestObject = [a, b].sort((a, b) => objectLength(a) - objectLength(b))[0];
let biggestObject = [a, b].sort((a, b) => objectLength(b) - objectLength(a))[0];
smallestObject // => {a: 1}
biggestObject // => {a: 1, b: 2}
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
a['d'] = 4
a // => {a: 1, b: 2, c: 3, d: 4} 
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

## Find an object within a list of objects that satisfies some condition

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

## Sort objects by value of first property in a list of objects 

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

## Copy an object

```js
let original = {a: 1, b: 2};
let copy = {...original};
```

## Compare if two objects have the same properties and values

```js
let a = {a: 1, b: 2};
let b = {a: 1, b: 2};

let c = {a: 1, b: 3};

let entriesA = Object.entries(a).join('');
let entriesB = Object.entries(b).join('');
let entriesC = Object.entries(c).join('');

entriesA === entriesB // => true;
entriesA === entriesC // => false;
```

## Make a deep copy of an object

```js
let original = {a: 1}
let copy = JSON.parse(JSON.stringify(original));
original.b = 2;
copy = {a: 1}; 
```