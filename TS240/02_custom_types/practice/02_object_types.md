# Practice Problems: Object Types

1. Take a look at the following function. As we can see, this function takes a string array as input. Which property do you think could be destructured from the argument and returned in order to match the function's return type definition?

```ts
function myFunc({}: string[]): number {
  return;
}
```

`length`. All arrays have this property, which returns a number.
