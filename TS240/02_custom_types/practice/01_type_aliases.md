# Practice Problems: Type Aliases

1. Will the code below raise an error?

```ts
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const person1: Person = {
  name: "Alice",
  age: 30,
};

const person2: Person = { // error, the value types do not correspond to Person definition
  name: 42,
  age: "Bob",
};

console.log(greet(person1));
console.log(greet(person2));
```