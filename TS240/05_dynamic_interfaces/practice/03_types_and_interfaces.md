# Practice Problems: Differences between Interfaces and Types

1. Will the following code result in a type error or execute without any issues?

```ts
type Point = { x: number };
type Point = { y: number };

const point: Point = { x: 1, y: 2 };
```

Yes, you can't define the same type twice.

2. Will the following code result in a type error or execute without any issues?

```ts
interface UserInterface {
  name: string;
  email: string;
}

type UserType = {
  name: string;
  email: string;
};

function greetUser(user: UserType) {
  return `Hello, ${user.name}`;
}

const user: UserInterface = {
  name: "Alice",
  email: "alice@example.com",
};

console.log(greetUser(user));
```

No. In TypeScript's structural typing model two objects are equivalent if they have the same _shape_, which is the case here.
