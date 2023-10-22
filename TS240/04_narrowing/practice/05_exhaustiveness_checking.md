# Practice Problems: Exhaustiveness Checking

1. Thanks to TypeScript, we have exhaustiveness checking now! This is a great programming technique to add robustness to our codebase. Let's put it in use! Suppose we're creating an application for managing a zoo. In our zoo, we have three types of animals: Elephant, Tiger, and Peacock.

```ts
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;
```

Write a function `describeAnimal` that takes an `Animal` as an argument and returns a string describing that animal's characteristic feature. For example, if the animal is an elephant, the function should return `"An elephant weighs [weight] kg."`. Include an exhaustiveness check in your function to handle potential future additions to the `Animal` type.

```ts
function describeAnimal(animal: Animal) {
  switch(animal.kind) {
    case 'elephant':
      return `The elephant weights ${animal.weight} kg.`
    case 'tiger':
      return `The tiger runs at ${animal.speed} km/h.`
    case 'peacock':
      return `The peacock has an average feather length of ${animal.featherLength} cm.`
    default:
      const _exhaustiveChecking: never = animal
      throw new Error('Invalid animal argument')
  }
}
```

2. Now suppose we want to add a new animal to our zoo: `Giraffe`. Add the `Giraffe` animal to our `Animal` type, but do not update the `describeAnimal` function. What will happen when we call `describeAnimal` with a Giraffe?

```ts
type Animal = Elephant | Tiger | Peacock | Giraffe;
```

The `animal` argument will be assigned to a variable of type `never`, and the TS compiler will raise an error.