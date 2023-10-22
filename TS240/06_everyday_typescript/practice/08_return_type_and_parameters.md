# Practice Problems: ReturnType and Parameters

1. Will the following code result in a type error or execute without any issues?

```ts
function addNumbers(a: number, b: number): number {
  return a + b;
}

type AddNumbers = typeof addNumbers;

type AddNumbersParams = Parameters<AddNumbers>;
type AddNumbersReturnType = ReturnType<AddNumbers>; 

type AddNumbersFunction = (args: AddNumbersParams) => AddNumbersReturnType;
```

Before looking at the solution, try playing around with it to see if you can fix any errors (if there are any).