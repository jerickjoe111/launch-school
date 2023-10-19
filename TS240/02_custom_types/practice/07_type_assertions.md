# Practice Problems: Type Assertions

1. Consider the following TypeScript code:

```ts
let age: number | string = "30";
age = (age as string).length;
```

Does the code above have any type errors? And what will be the value of age after the execution of these lines?

No. `2`.
