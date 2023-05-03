# Chapter 7. Arrays

An array is an ordered collection of _values_. Each value is called an _element_, and each element has a numeric position in the array, known as its _index_. JS arrays are _untyped_: an array element may be of any type, and different elements of the same array may be of different types.

JavaScript arrays are _zero-based_, and use 32-bit indexes.

JavaScript arrays are _dynamic_: they grow or shrink as needed.

JS arrays may be _sparse_: the elements need not have contiguous indexes, and there may be gaps. Every JS array has a `length` property. For nonsparse arrays (_dense_), this property specifies the number of elements in the array. For sparse arrays, `length` is always larger than the highest index of any element.

JS arrays are a specialized form of JS object, and array indexes are really little more than property names that happen to be integers. Implementations typically optimize arrays so that access to numerically indexed array elements is generally significantly faster than access to regular object properties. 

Arrays inherit properties from `Array.prototype`, which defines a rich set of array manipulation methods. Most of these methods are _generic_, which means that they work correctly not only for true arrays, but for any array-like object. JS strings behave like arrays of characters.

ES6 introduces a new set of new array classes known collectively as 'typed arrays'; they have a fixed length and a fixed numeric element type. They offer high performance and byte-level access to binary data.

## Creating Arrays

There are four main ways to create arrays in JS:

- Array literals
- The `...` spread 'operator' on an iterable object (arrays, strings, other iterables...)
- The `Array()` constructor
- The `Array.of()` and `Array.from()` factory methods

### Array Literals

The simplest way to create an array is with an array literal, which is simply a comma-separated list of values (array elements) within square brackets:

```js
let empty = [];
let primes = [2, 3, 5, 7, 11];
let misc = [1, 2, true, undefined, {x: 1, y: 2}];
```

The values in an array may be arbitrary expressions. If an array literal contains multiple commas in a row, with no value between, the array is sparse. Array elements for which values are omitted do not exist, but appear to be undefined if you query them.

### The Spread 'Operator'

In ES6 and later, you can use `...` to include the elements of one array within an array literal:

```js
let a = [1, 2];
let b = [...a, 3, 4]; // b === [1, 2, 3, 4]
```
The `...` spread the array `a` so that its elements become elements within the array literal that is being created.

The spread operator `...` is a convenient way to create a _shallow_ copy of an array. 
> A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

```js
let original = [1, 2, 3];
let copy = [...original];
copy[0] = 0; // Modifying the copy does not change the original
original[0] // => 1
```

The spread operator words on any iterable object (Iterable objects are what the `for/loop` iterates over); strings are iterable, so you can use a spread operator to turn any string into an array of single-character strings:

```js
let digits = [..."0123456789ABCDEF"];
digits // => ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E", "F"] 
```

Set objects are iterable, so an easy way to remove duplicate elements from an array is to convert the array to a set and then immediately convert the set back to an array using the spread operator:

```js
let letters = [...'hello world'];
[...new Set(letters)] // => ["h","e","l","o"," ","w","r","d"]
```

### The `Array()` Constructor

We can invoke this constructor in three ways:

1. With no arguments, this method creates an empty array with no elements. This is equivalent to the array literal `[]`.

2. With a single numeric argument, which specifies a length:
```js
let a = new Array(10);
```
With this technique, no values are stored in the array, and the array index properties are not even defined.
3. With two or more array elements, or a single non-numeric element of the array:
```js
let a = new Array(5, 4, 3, 2, 1, 'testing', 'testing');
```
In this form, the constructor arguments become the elements of the new array. Using an array literal is almost always simpler.

### `Array.of()`

In ES6, the `Array.of()` function creates and returns a new array, using its argument values (regardless of how many of them there are) as the array elements:

```js
Array.of()        // => []; returns empty array with no arguments
Array.of(10)      // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3)   // => [1, 2, 3]
```

### `Array.from()`

This method expects an iterable of array-like object as its first argument and returns a new array that contains the elements of that object. With an iterable argument, `Array.from(iterable)` works like the spread operator `[...iterable]` does. It is also a simple way to make a copy of an array:
```js
let copy = Array.from(original);
```
`Array.from()` is also important because it defines a way to make a true-array copy of an array-like object. Array-like objects are non-array objects that have a numeric length property and have values stored with properties whose names happen to be integers.

```js
let truearray = Array.from(arraylike);
```

`Array.from()` also accepts an optional second argument. If you pass a function as the second argument, then as the new array is being built, each element from the source object will be passed to the function you specify, and the return value of the function will be stored in the array instead of the original value. This is like `map()`, but it is more efficient to perform the mapping while the array is being built than it is to build the array and then map it to another new array.

## Reading and Writing Array Elements

You access an element of an array using the `[]` operator (it's not a method in JS). A reference to the array should appear to the left of the brackets. An arbitrary expression that has a non-negative integer value should be inside the brackets. You can use this syntax to both read and write the value of an element of an array:

```js
let a = ["world"];     // Start with a one-element array
let value = a[0];      // Read element 0
a[1] = 3.14;           // Write element 1
let i = 2;
a[i] = 3;              // Write element 2
a[i + 1] = "hello";    // Write element 3
a[a[i]] = a[0];        // Read elements 0 and 2, write element 3
```

When you use property names that are non-negative integers less than 2<sup>32</sup> - 1, the array automatically maintains the value of the `length` property. 

The square brackets' operator works like the square brackets used to access object properties; JS converts the numeric array index you specify to a string, and then uses that string as a property name. Numeric and string property names are the same.

```js
let o {};
o[1] = 'one';
o['1'] // => 'one
```

_All indexes are property names, but only property names that are integers between 0 and 2<sup>32</sup> - 1 are indexes._ If you use properties that are array indexes, however, arrays have the special behavior of updating their `length` property as needed.

You can index an array using numbers that are negative or that are not integers. When you do this, the numbers is converted to a string, and that string is used as the property name. Since the name is not a non-negative integer, it is treated as a regular object property, not an array index. Also, if you index an array with a string that happens to be a non-negative integer, it behaves as an array index. The same is true if you use a floating-point number that is the same as an integer.

JavaScript arrays have no notion of an 'out of bounds' error. When you try to query a nonexistent property of any object, you don't get an error; you simply get `undefined`.

## Sparse Arrays

A sparse array is one in which the elements do not have contiguous indexes starting at 0. If the array is sparse, the value of the `length` property is greater than the number of elements. Looking up elements in such a way will take as much time as regular object property lookup.

When you omit a value in an array literal, the resulting array is sparse, and the omitted elements simply do not exist.

In practice, most JS arrays you will work with will not be sparse.

## Array Length

Every array has a `length` property:
- for dense arrays, it specifies the numebr of elements in the array (one more the last index in the array);
- for sparse arrays, it is always greater that the number of elements.

If you set the `length` property to a non-negative integer `n` smaller than its current value, any array elements whose index is greater or equal to `n` are deleted from the array

If you set the `length` property to a higher value than its current value, it will create a sparse area at the end of the array, without adding new elements.

## Adding and Deleting Array Elements

The simplest way to add elements to an array is simply assign values to new indexes:

```js
let a =[];
a[0] = 'zero';
a[1] = 'one';
```

We can also use the stack/queue methods:

- `push()`: add one or more value to the end of the array, returns the new `length` value
- `pop()`: removes last element of the array, returns it
- `unshift()`: adds one element to the beginning, moving all the rest one index position more
- `shift()`: it removes first element, shifting all elements to one index lower.

We can delete elements with the `delete` operator:

```js
let a [1, 2, 3];
delete a[2];
2 in a // => false
a.length // => 3
```
Using `delete` on an array element does not alter the length property and does not shift elements: it just creates a sparse area.

We can also delete elements from the end by setting the `length` property.

`splice()` is a general-purpose method for inserting, deleting, or replacing array elements. It alters the `length` property and shifts array elements to higher or lower indices as needed.

## Iterating Arrays

Since ES6, the easiest wat to loop through each of the elements of an array or any iterable object is with the `for/of` loop:

```js
let letters = [...'hello world'];
let string = '';
for (let char of letters) string += char;
string // => 'hello world'
```

The built-in iterator that the `for/of` loop uses returns the elements of the array in ascending order; for sparse arrays, it simply returns `undefined` for any array elements that do not exist.

If you want to use the `for/of` loop for an array and want to know the index of each element, use the `entries()` method of the array, along with destructuring assignment:

```js
let everyother = '';
for (let [index, char] of letters.entries()) {
  if (index % 2 === 0) everyother += letter;
}
everyother // => hlowrd
```

The `forEach()` array method, when you pass a function as an argument, it invokes it once on each element of the array. This method iterates the array in order, and it actually passes the array index to your function as a second argument (the first is each element of the array). Unlike the `for/of`, `forEach()` is aware of sparse arrays and does not invoke your function for elements that are not there.

```js
let uppercase = "";
letters.forEach(letter => {  // Note arrow function syntax here
    uppercase += letter.toUpperCase();
});
uppercase  // => "HELLO WORLD"
```

We always can use the classic `for` loop. With modern interpreters, it is not all clear that having to call `length` each iteration has a significant performance impact:

```js
let vowels = "";
for(let i = 0; i < letters.length; i++) { // For each index in the array
    let letter = letters[i];              // Get the element at that index
    if (/[aeiou]/.test(letter)) {         // Use a regular expression test
        vowels += letter;                 // If it is a vowel, remember it
    }
}
vowels  // => "eoo"
```

Note that this assumes that the array is dense, and all elements are valid. If it is not the case, you should test the array elements before using them.

## Multidimensional Arrays

JavaScript does not support true multidimensional arrays, but you can approximate them with an arrays of arrays. To access a value in an array of arrays, simply use the `[]` operator twice:

```js
matrix[x][y];
```

## Array Methods


### Iterators

- All of these methods accept a function as their first argument, and invoke that function once for each element (or some elements) of the array. If the array is sparse, the function will not be invoked for nonexistent elements. In most cases, this function is supplied three arguments:
  1. The value of the array element
  2. The index of the array element
  3. The array itself

- Most of the iterators accept an optional second argument. If specified, the function is invoked as if it is a method of this second argument: this second argument becomes the value of the `this` keyword inside the function you pass as a first argument.

- None of these methods modify the array on which they are called.

- It is very common to use arrow syntax for function expressions for the iterator's firs argument

#### `forEach()`

It iterates through an array, invoking the function for each element. It does not provide a way to terminate iteration: there is no `break` statement. 

#### `map()`

It invokes the function for each element on the array, and returns a new array containing the return values returned by each function invocation. If that array is sparse, the function will not be invoked, but the returned new array will have the same length and the same missing elements (sparse areas)

#### `filter()`

It returns a new array containing the elements of the array on which is invoked for which the passed in function returns `true`. It skips the missing elements, and the returned, new array is always dense.

To easily close the gaps in a sparse array, do this:

```js
let dense = sparse.filter(() => true);
```

To close the gaps and remove `undefined` and `null` elements, to this:

```js
let cleaned = uncleaned.filter(x => x !== undefined && x !== null);
```

#### `find()` and `findIndex()`

These two methods look for elements in the array for which the passed-in function returns a truthy value. Both stop iteration as soon as they have found such an element.
- `find()` returns the matching element
- `findIndex()` returns the index of the matching element.

If no matching element is found:
- `find()` returns `undefined`
- `findIndex()` returns `-1`

#### `every()` and `some()`

- `every()` returns `true` if and only if all the passed-in functions returns `true` on each iteration.
- `some()` returns `true` if at leas one returns `true`

Both iterators stop the iteration as soon as they know what value they should return.

#### `reduce()` and `reduceRight()`

These methods combine the elements of an array, using the passed-in function, to produce a single value.

`reduce()` takes two arguments:
  1. the function that performs the reduction (combination) operation
  2. (optional) the initial value to pass to the function

If no second argument is provided, it uses the first argument of the array as the initial value.

Arguments of the passed-in function as first argument:

  1. Accumulated result of the reduction so far. On the first call, it is the initial value you passed as a second argument to `reduce()`
  2. The value from the iterated array
  3. the index of that value
  4. the array itself.

`reduceRight()` works exactly like `reduce()`, except that it processes the array from highest index to lowest (from right to left). You might want to do this if the reduction operation has right to left associativity, for example, in exponentiation:

```js
// Compute 2^(3^4).  Exponentiation has right-to-left 
precedence
let a = [2, 3, 4];
a.reduceRight((acc,val) => Math.pow(val,acc)) // => 2.4178516392292583e+24
```

#### `flat()` and `flatMap()`

The `flat()` method creates and returns a new array that contains the same elements as the array it is called on, except that any elements that are themselves arrays are _flattened_ into the returned array:

```js
[1, [2, 3]].flat()    // => [1, 2, 3]
[1, [2, [3]]].flat()  // => [1, 2, [3]]
```

If you want to flatten more levels, pass a number to flat:
```js
let a = [1, [2, [3, [4]]]];
a.flat(1)   // => [1, 2, [3, [4]]]
a.flat(2)   // => [1, 2, 3, [4]]
a.flat(3)   // => [1, 2, 3, 4]
a.flat(4)   // => [1, 2, 3, 4]
```

`flatMap()` works like the `map()` method, except that the returned array is automatically flattened as if passed to `flat()`

#### `concat()`

This method creates and returns a new array that contains the elements of the original array on which `concat()` was invoked, followed by each of the arguments to `concat()`. This method does not recursively flatten arrays of arrays, and it does not modify the array on which is invoked on.

Making a new copy of the array on which this method is called is an expensive operation; it is better to use `push()` or `splice()` than an operation like

```js
let array = array.concat(otherArray)
```

### Stack/Queue Methods

These methods add and remove array elements to and from the beginning and the end of an array. All these methods _mutate_ the array on which they are called on.

#### Stack-like

##### `push()`
This method appends one or more new elements to the end of an array, and returns the new length of the array.

##### `pop()`
This method removes the last element of the array, decrements the length, and returns the value removed.

#### Queue-like

##### `unshift()`
This method adds an element or elements to the beginning of the array, shifts the existing array elements up to higher indexes to make room, and returns the new length of the array.

The elements are inserted all at once, which means that they end up in the array in a different order than they would be if you inserted them one at a time.

##### `shift()`
This method removes and returns the first element of the array, shifting all subsequent elements down one place.

### Subarrays Methods

These methods are for extracting, deleting, inserting, filling, and copying contiguous regions of a larger array.

#### `slice()`

This method returns a subarray:

- With two arguments, they specify the start and end of the slice to be returned. The returned subarray contains the element specified by the first argument and all subsequent up to, but not including, the second argument.
- If only one argument is provided, the returned array contains all elements from the start position to the end. 
- If either argument is negative, it specifies an array element relative to the length of the array: `-1` means the last element, `-2` the one before the last, etc.

This method does not modify the original array.

#### `splice()`

This method is a general-purpose method for inserting or removing elements from an array. It modifies the array on which it is invoked.

It can delete elements from an array, insert new elements into an array, or perform both operations at the same time. 

Arguments:
1. the array position at which the insertion and/or deletion is to begin
2. the number of elements that should be deleted from (spliced out of) the array. It can be `0`
3. Any subsequent arguments are the elements to be inserted into the array, starting at the position specified by the first argument.

If the second argument is omitted, all array elements from the start element of the array are removed. 

It returns an array with the deleted elements, or an empty array if no elements were deleted.

#### `fill()`

This method set the elements of an array to a specified value. It mutates the array it is called on, and it returns the modified array.

Arguments:

1. The value to set array elements to.
2. Optional; starting index. If not provided, filling starts at index `0`.
3. Optional; ending index. If not provided, the array is filled to the end.

You can specify negative indices.

#### `copyWithin()`

This method copies a slice of an array to a new position within the array. It modifies the array in place and returns the modified array, but it will not change the length of the array.

Arguments:

1. Destination index of the first element to be copied
2. Index of the first element to be copied; if omitted, `0` is used.
3. End of the slice of elements to be copied (exclusive range); if omitted, the length of the array is used.

You can provide negative integers.

This is a high-performance method, particularly useful with typed arrays.

### Searching and Sorting Methods

These methods are for locating elements within an array and for sorting the elements of an array.

#### `indexOf()` and `lastIndexOf()`

These methods search an array for an element with a specified value and return the index of the first such element found, or `-1` if none is found. `indexOf()` searches from the beginning to the end, and `lastIndexOf()` does it from the end to the beginning.

These methods compare their argument to the array elements using the equivalent to `===`. If you actually want to look at the content of an object, try using the `find()` method with your own custom predicate.

Second argument (optional): the array index at which to begin the search. This is important because it makes possible to find matches beyond the first:

```js
// Find all occurrences of a value x in an array a and rerturn an array of matching indeces:

function findAll(array, x) {
  let matchingIndeces = [];
  let arrayLength = array.length;
  let searchStart = 0;

  while (pos < inputArrayLength) {
    searchStart = array.indexOf(x, searchStart);
    if (searchStart === -1) break;

    matchingIndeces.push(searchStart);
    searchStart += 1;
  }

  return matchingIndeces;
}
```

This method accepts negative integers.

#### `includes()`

This ES2016 method takes a single argument and returns `true` if the array contains that value, `false` otherwise.

Note that arrays are not an efficient representation for sets, and if you're working with more than a few elements, you should use a real `Set` object.

Contrary to `indexOf()`, this method uses an equivalent of `===` to test the array elements that DOES detect `NaN` values:

```js
let a = [1, 2, NaN];
a.includes(NaN) // => true
a.indexOf(NaN) // = -1
```

#### `sort()` (!)

This method sorts the elements of an array in place (it mutates the array) and it returns the sorted array. When called with no arguments, it sorts the array alphabetically, converting the array elements to strings to perform the comparison, if necessary. If an array contains `null` or `undefined` elements, they are sorted to the end of the array.

To sort an array other than alphabetical, you must pass a _comparison function_ as an argument to `sort()`. This function decides which of its two arguments should appear first in the sorted array:

  - If the FIRST argument should appear BEFORE the second, the comparison function should return a negative number.
  - If the SECOND argument should appear BEFORE the first, the comparison function should return a number greater than 0.
  - If the two values are equivalent (their order is irrelevant), the comparison function should return 0.

#### `reverse()` 

This method reverses the order of the elements of an array and returns the reversed array. It mutates the array in place.

### Array to String Methods

The `Array` class defines three methods to convert arrays to strings:

#### `join()`

This method converts all the elements of an array to strings and concatenates them, returning the resulting string. You can specify the separator as a string argument. If omitted, a `','` is used.

This is the inverse of `String.split`

#### `toString()`

It is the same as calling `join()` with no arguments.

#### `toLocaleString()`

This method converts each array element to a string by calling the `toLocaleString()` method of the element, and then it concatenates the resulting string using a locale-specific (implementation-defined) separator string.

### Static Array Functions

We have already seen `Array.of()` and `Array.from()`.

#### `isArrray()`

Returns `true` if the argument is an array, `false` otherwise.

## Array-Like Objects

It is often perfectly reasonable to treat any object with a numeric `length` property and corresponding non-negative integer properties as array-like objects.

You can still iterate through them with the same code you'd use for a true array; many algorithms work just as well with array-like objects as they do with real arrays. This is specially true for algorithms that treat the array as read-only of if they at least leave the array length unchanged.

In client-side JS, a number of methods for working with HTML documents (such as `document.querySelectorAll()`) return array-like objects.

Most of the array methods are purposely defined to be generic so that they work correctly when applied to array-like objects in addition to true arrays. Since array-like objects do not inherit from `Array.prototype`, you cannot invoke array methods on them directly, but you can do it _indirectly_ using the `Function.call` method.