# Practice Problems: Type soundness

1. Given the code examples you have seen in the assignment, which both involve using the any type, try to create a reusable type guard function called `isNumber` to make our code safer when working with these external code snippets.

```ts
// example 1
let x: any = "Launch School";
const y: number = x;
console.log(y);
```

```ts
// example 2
let x: any = "Launch School";
const y: number = x as number;
```

```ts
function isNumber(argument: any): argument is Number {
  return typeof argument === 'number'
}
```

2. Try to create a utility function called `safeGet` that allows us to access the elements in any array safely. `safeGet` should take two arguments: an array and the index of an element in the array. If the index is within the bounds of the array, return the element at that index, otherwise, return `undefined`.

```ts
function safeGet(array: any[], index: number) {
  if (index < 0 || index >= array.length) return;

  return array[index];  
}
```