# Practice Problems: Pick and Omit

1. Will the following code result in a type error or execute without any issues?

```ts
interface User {
  name: string;
  email: string;
  age: number;
}

type NameOnly = Pick<User, "name1">;
type WithoutName = Omit<User, "name1">;
```

Using `Pick`, The property `name1` does not exist in the `User` interface, so TypeScript will raise a compile-time error.

However, when using `Omit` with a non-existent property, TypeScript does not raise an error. In this case, the `name1` property does not exist in the `User` interface, so the `WithoutName` type will still include all properties of `User`.
