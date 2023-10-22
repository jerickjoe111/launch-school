# Practice Problems: Extending Interfaces

1. The following JavaScript code defines a basic class hierarchy with `Animal` and `Dog`.

Please convert this code to TypeScript using interfaces and interface extension. Assume all animals have a `name` and can `makeSound`, and dogs in addition can `fetch`.

```ts
interface Animal {
  name: string;

  makeSound(): string; // function return value type
}

interface Dog extends Animal {
  fetch(): string; // function return value types
}

const myDog: Dog = {
  name: 'Fiddo',
  makeSound: () => 'Generic animal sound',
  fetch: () => `${this.name} fetches a stick.`,
};

console.log(myDog.fetch());
```