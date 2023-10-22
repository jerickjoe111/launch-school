# Practice Problems: Unknown

1. Given these two code snippets, which one do you think would result in a type error, or both?

```ts
const x: any = "Launch School";
if (typeof x === "string") {
  console.log(x.toUpperCase());
} else {
  console.log(x.toLowerCase());
}
```

```ts
const y: unknown = "Launch School";
if (typeof y === "string") {
  console.log(y.toUpperCase());
} else {
  console.log(y.toLowerCase());
}
```

The first one won't raise type errors, but there is the risk of runtime error if the value assigned to `x` is not a string.

The second one will raise an error: the `else` branch calls a method on `y` that maybe is not present in `y`.

1. Will the following TypeScript code compile without type errors?

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userName = userInput;
```

Yes. Type `unknown` is not assignable to type `string` (without a type assertion or a control flow-based narrowing technique.)

3. Consider the following scenario: You're given a variable `data` of type `unknown`.

Please write a function `processData` that takes `data` as a parameter. If `data` is a string, the function should return `"Hello, "` + `data`. If `data` is a number, the function should return `"Age: "` + `data`. If `data` is neither a string nor a number, the function should throw an error saying `"Invalid data"`.

```ts
function processData(data: unknown) {
  if (typeof data === 'string') {
    return `Hello, ${data}`
  } else if (typeof data === 'number') {
    return `Age: ${data}`
  } else {
    throw new Error('Invalid data')
  }
}
```