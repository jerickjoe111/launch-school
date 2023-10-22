# Practice Problems: The `object` Type

1. Consider the following function `getProperty`:

```ts
function getProperty(obj: object, key: string) {
  return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}
```

This function is supposed to take an object and a key, and return the value associated with that key. However, the current implementation gives an error due to the use of the `object` type. Try to rewrite this function to get rid of the error.

```ts
function getProperty(obj: { [key: string]: unknown }, key: string) {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
```

2. In the previous practice problem, if you hover your mouse over `x` or `y`, you'll see both are typed unknown. Try refactoring the `getProperty` function, using your knowledge from the generics lesson, so that the actual type of x and y can be automatically inferred.

```ts
function getProperty<T, Keys extends keyof T>(obj: T, key: Keys): T[Keys] {
  return obj[key];
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name"); // Type of x is inferred as string
const y = getProperty(obj, "age"); // Type of y is inferred as number
```
