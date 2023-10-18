# Practice Problems: Parameter Types and Return Types

1. What do you think the types for both parameters and the return type of this subtract function would be?

```ts
function subtract(initial, values) {
  let remaining = initial;
  for (const value of values) {
    remaining -= value;
  }
  return "The result is: " + remaining;
}
```

```
initial: number
values: number[]
return: string
```

2. Consider the following TypeScript code that uses both optional and default parameters. What will the output be when running this code?

```ts
function displayInfo(
  name: string,
  age?: number, // optional
  country: string = "USA"
): string { // returns string
  return `${name}, ${age ? age : "unknown age"}, from ${country}`;
}

console.log(displayInfo("Alice", 30));
console.log(displayInfo("Bob", undefined, "Canada")); // optional parameters are of type `type | undefined` (this makes us check for `undefined` values)
console.log(displayInfo("Charlie", 25, "UK"));
```
