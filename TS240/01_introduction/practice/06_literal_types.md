# Practice Problems: Literal Types

1. The following JavaScript function uses a "magic string" to determine its behavior, which is considered bad practice and should be avoided due to its unreliability. However, we can improve it by using literal types in TypeScript. Rewrite the function using literal types to make it more robust.

```ts
function calculate(operation: string, a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
```

Solution:

```ts
type Operation = 'add' | 'subtract' | 'multiply' | 'divide'

function calculate(operation: Operation, a: number, b: number) {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
```