# Practice Problems: Function Overloads

1. Let's build upon the previous practice problem from our Union Types assignment. There, we created a `combine` function that accepted union types as arguments. However, we receive an error when we try to add type annotations to those variables:

```ts
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
```

Refactor this code to use function overloads to resolve the errors.

```ts
type Operand = number | string;

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: Operand, b: Operand): Operand {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else return 'Invalid Operands'
}

const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
```
