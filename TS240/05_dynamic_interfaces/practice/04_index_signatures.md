# Practice Problems: Index Signatures

1. Consider the following TypeScript code:

```ts
interface User {
  [key: number]: string;
}

const obj: User = {
  1: "Jane",
  2: "30",
  3: "female",
};

console.log(Object.keys(obj).every((key) => typeof key === "number"));
```

Will the output be "true" or "false"?

No. `Object.keys()` returns an array of strings.

