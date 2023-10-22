# Practice Problems: Uses of Any

1. Will there be any type errors when calling the `processInput` function with different inputs like strings, numbers, and booleans?

```ts
function processInput(input: any) {
  console.log(input.toUpperCase());
  console.log(input.toFixed(2));
  console.log(input.length);
}

processInput("hello");
processInput(42);
processInput(true);
```

No. the `any` type disables the type checking.

2. Rewrite `processInput` with proper typing so that the given function calls would run without any errors.

```ts
function processInput(input: string | number | boolean) {
  let type = typeof input
  if (type === 'string') {
    console.log(input.toUpperCase());
    console.log(input.length);
  } else if (type === 'number') {
    console.log(input.toFixed(2));
  }
}

processInput("hello");
processInput(42);
processInput(true);
```