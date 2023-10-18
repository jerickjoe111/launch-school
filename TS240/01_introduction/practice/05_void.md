# Practice Problems: Void

1. Will the code below raise an error?

```ts
function logSum(a: number, b: number): void {
  const sum = a + b;
  console.log("The sum of", a, "and", b, "is", sum);
  return sum;
}

logSum(3, 4);
```

Yes. If a function returns a type not corresponding to the return type in its signature TypeScript interprets it as an error.
