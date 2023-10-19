# Practice Problems: Function Overloads

1. Consider the following TypeScript code:

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

Please write a TypeScript function called `pair` similar to the `identity` function above, it should accept two parameters of the same type and returns an array of that type.

Here's how pair behaves.

```ts
const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
```

```ts
function pair<Type>(a: Type, b: Type): Type[] {
  return [a, b];  
}
```