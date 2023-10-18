# Practice Problems: Working with built-in JS methods

1. Consider an array of strings in JavaScript:

```ts
const numbersInStringFormat = ["10", "20", "30", "40"];
```

```
initial: number
values: number[]
return: string
```

Write a TypeScript function `convertToNumbers` that uses the `map` method to transform this array into an array of numbers. The function should take an array of strings (representing numbers) as an argument and return an array of numbers.

Remember, TypeScript will infer the type of the output array based on the return type of the callback function you pass to map. Make sure your implementation is type-safe.


```ts
function convertToNumbers(arr: string[]): number[] {
  return arr.map(number => Number(number))
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
```


