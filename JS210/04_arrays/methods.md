# Iterators

- All of these methods accept a function as their first argument, and invoke that function once for each element (or some elements) of the array. If the array is sparse, the function will not be invoked for nonexistent elements. In most cases, this function is supplied three arguments:
  1. The value of the array element
  2. The index of the array element
  3. The array itself

- Most of the iterators accept an optional second argument. If specified, the function is invoked as if it is a method of this second argument: this second argument becomes the value of the `this` keyword inside the function you pass as a first argument.

- None of these methods modify the array on which they are called.

- It is very common to use arrow syntax for function expressions for the iterator's first argument.

| Name            | Operation                                                                               | Mutating | Arguments                                                                                               |  Notes                                                                           |
|-----------------|-----------------------------------------------------------------------------------------|----------|---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| `forEach()`     | Invokes first arg. function for every existent element                                  | No       | ([function(element, index, array], Opt[`this` for function])                                            | No `break`                                                                       |
| `map()`         | Invokes function for every existent element                                             | No       | ([function(element, index, array], Opt[`this` for function])                                            | Function not invoked for gaps, but returned array will have same sparse areas    |
| `filter()`      | Returns new array with elements for which func. returned `true`                         | No       | ([function(element, index, array], Opt[`this` for function])                                            | Skips gaps; returned array always dense                                          |
| `find()`        | Returns first element for which func. returns a truthy                                  | No       | ([function(element, index, array], Opt[`this` for function])                                            | Stops iteration as soon as an element is found. Returns `undefined` otherwise    |
| `findIndex()`   | Returns index of the first element for which func. returns a truthy                     | No       | ([function(element, index, array], Opt[`this` for function])                                            | Stops iteration as soon as an element is found. Returns `-1` otherwise           |
| `every()`       | Returns `true` if all passed in elements to f. returned `true`                          | No       | ([function(element, index, array], Opt[`this` for function])                                            | Stops when f. returns `false`                                                    |
| `some()`        | Returns `true` if at least one element returns `true` from f.                           | No       | ([function(element, index, array], Opt[`this` for function])                                            | Stops when f. returns `true`                                                     |
| `reduce()`      | Returns single value using f. to combine array elements                                 | No       | ([combinator(acc., element, index, array)], Opt[initial value for combinator, first def.], Opt[`this`]) |                                                                                  |
| `reduceRight()` | Like `reduce()`, but it processes from the right.                                       | No       | ([combinator(acc., element, index, array)], Opt[initial value for combinator, first def.], Opt[`this`]) | Useful if the reduction operation has r-to-l associativity, like exponentiation. |
| `flat()`        | Returns new array, with flattened subarrays.                                            | No       | (Opt[flattening subarray levels])                                                                       |                                                                                  |
| `flatMap()`     | Like `map()`, except the returned array is automatically flattened.                     | No       |                                                                                                         |                                                                                  |
| `concat()`      | Returns new array that contains elements from caller followed by elements from argument | No       | ([other array])                                                                                         | Expensive; better use `push()` or `splice()`                                     |

# Stack/Queue-like Methods

| Name       | Operation                                                                       | Mutating | Arguments     | Return Value     |  Notes                                                     |
|------------|---------------------------------------------------------------------------------|----------|---------------|------------------|------------------------------------------------------------|
| `push()`   | Appends argument(s) to the end of the array                                     | Yes      | (...elements) | New length value | Updates length automatically                               |
| `pop()`    | Removes last element of the array                                               | Yes      | ()            | Removed element  | Updates length automatically                               |
| `ushift()` | Adds element(s) to the beginning of the array, unshifting elements to make room | Yes      | (...elements) | New length value | Inserts all elements at once; Updates length automatically |
| `shift()`  | Removes first element of the array, shifting all other elements                 | Yes      | ()            | Removed element  | Updates length automatically                               |

# Subarray Methods

These methods are for extracting, deleting, inserting, filling and copying contiguous regions of a large array.

| Name           | Operation                                                      | Mutating | Arguments                                                                                                                                 | Return Value                                                                          |  Notes                                                                                                 |
|----------------|----------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `slice()`      | Returns a subarray:                                            | No       | ([start position (negative from end)]); ([start position], [end position] (exlusive))                                                     | New (sub)array                                                                        |                                                                                                        |
| `splice()`     | Insert elements, delete elements, or both                      | Yes !    | ([start pos. of insertion and/or deletion], Opt[number of elements to delete], Opt[elements to be inserted]                               | New subarray with the deleted elements, or an empty array if no elements were deleted | If the second argument is omitted, all array elements from the start element of the array are removed. |
| `fill()`       | Set the elements of an array to the argument value             | Yes !    | ([value to fill the array], Opt[starting index, can be neg.(def. 0)], Opt[ending index, can be neg.(def. -1)])                            | The same array, modified.                                                             |                                                                                                        |
| `copyWithin()` | Copies a slices of an array to a new position within the array | Yes !    | ([destination index of the first element to be copied], [index of the first element(def. 0)], [end of the slice to be copied(exclusive)]] | The same array, modified.                                                             | High performance method                                                                                |

the comparison function should return a negative number.
If the SECOND argument should appear BEFORE the first, the comparison function should return a number greater than 0.
If the two values are equivalent (their order is irrelevant), the comparison function should return 0.

# Searching and Sorting Methods

| Name            | Operation                                                 | Mutating | Arguments                                                        | Return Value                          |  Notes                                                                                                                                                                                                                                                                            |
|-----------------|-----------------------------------------------------------|----------|------------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `indexOf()`     | Searches the array for the argument value                 | No       | ([value to search], Opt[array index from which begin the search] | Index of the value, `-1` if not found | Uses `===`                                                                                                                                                                                                                                                                        |
| `lastIndexOf()` | Searches the array, from the end, for the argument value  | No       | ([value to search], Opt[array index from which begin the search] | Index of the value, `-1` if not found | Uses `===`                                                                                                                                                                                                                                                                        |
| `includes()`    | Returns `true` if the array contains argument value       | No       | ([value])                                                        | Boolean                               | It detects `NaN`; like `a.includes(NaN)`                                                                                                                                                                                                                                          |
| `sort()`        | Sorts element alphanumerically, or according to function. | Yes !    | ([comparison function(one element, next element])                | The same array, sorted                | if argument a should appear before argument b, the comparison function should return a negative number; if argument b should appear before argument a, the function should return a number greated than 0; the function should return 0 if both are equivalent (irrelevant order) |
| `reverse()`     | Reverses the order of the elements in the array           | Yes !    | ()                                                               | The same array, reversed              |

# Array to String Methods

| Name               | Operation                                                                                                                                                                                        | Mutating | Arguments               | Return Value |  Notes                                       |
|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------------|--------------|----------------------------------------------|
| `join()`           | Converts all elements of an array into a single concatenated string                                                                                                                              | No       | ([separator(def.: ',')]) | New string   | Is the reverse of `String.prototype.split()` |
| `toString()`       | The same as `join()` with no arguments                                                                                                                                                           |          |                         |              |                                              |
| `toLocaleString()` | Converts each array element to a string by calling the `toLocaleString()` method on each element, and then it concatenates the string using a locale-specific (implementation-defined) separator |          |                         |              |                                              |

# Static Array Functions

`Array.isArray()` returns `true` if argument is an array.