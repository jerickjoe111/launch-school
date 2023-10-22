# Practice Problems: Discriminated Unions

1. Write a function `describeAnimal` that takes an `Animal` object as a parameter and returns a description string. The `Animal` type is a discriminated union that can be either a dog or a bird.

You will need to provide an implementation of the Animal type that uses discriminated unions to handle the different cases. For dogs, it should return `"name is a age year(s) old dog."`; for birds, it should return `"name is a bird with a wingspan cm wingspan."`

```ts
type Animal = {
  name: string;
}

type Dog = Animal & { 
  kind: 'dog';
  age: number; 
}

type Bird = Bird & {
  kind: 'bird'; 
  wingspan: number; 
}

function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case 'dog':
      return `${animal.name} is a ${animal.age} year(s) old dog.`;
    case 'bird':
      return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`
    default: 
      const _exhaustiveCheking: never = animal;
      throw new Error('Invalid argument')
  }
}
```

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal { 
  kind: 'dog';
  age: number;
}

interface Bird extends Animal {
  kind: 'bird'; 
  wingspan: number;
}

function describeAnimal(animal: Animal): string {
  switch(animal.kind) {
    case 'dog':
      return `${animal.name} is a ${animal.age} year(s) old dog.`;
    case 'bird':
      return `${animal.name} is a bird with a ${animal.wingspan} cm wingspan.`
    default: 
      const _exhaustiveCheking: never = animal;
      throw new Error('Invalid argument')
  }
}
```
