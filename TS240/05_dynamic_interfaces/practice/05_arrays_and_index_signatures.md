# Practice Problems: Arrays and Index Signatures

1. Consider the following TypeScript code:

```ts
type CustomArray = {
  [index: number]: string | number;
};

const myCustomArray: CustomArray = ["apple", 42, "banana"];
```

The `CustomArray` type uses an index signature, which can describe both objects and arrays. Write a function `processCustomArray` that takes a `CustomArray` as an argument and returns an array containing only the string elements, in uppercase.

```ts
function processCustomArray(arr: CustomArray) {
  return arr.filter(element => typeof element === 'string')
            .map(string => string.toUpperCase())
}
```

```ts
function processCustomArray(arr: CustomArray) {
  let output: string[] = [];
  Object.values(arr).forEach(element => {
    if (typeof element === 'string') output.push(element)
  })

  return output;
}
```