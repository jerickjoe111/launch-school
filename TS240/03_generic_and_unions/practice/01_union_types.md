# Practice Problems: Union Types

1. Remember the last practice problem in lesson 1? We had separate functions `concatenateStrings` and `addNumbers` in the solution.

```ts
function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);
```

Now, let's make the code more flexible by creating a new function that can handle both operations using type unions.

Write a function called `combine` that takes two parameters and can either concatenate strings or add numbers based on the types of the input parameters.

```ts
type Operand = number | string;

function combine(a: Operand, b: Operand): Operand {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else return 'Invalid Operands'
}
```