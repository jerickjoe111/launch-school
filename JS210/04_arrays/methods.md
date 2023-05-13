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