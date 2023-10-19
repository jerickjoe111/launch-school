# Practice Problems: Structural Typing

1. Will the code below raise an error?

```ts
type Fruit = {
  name: string;
  color: string;
};

type Apple = {
  name: string;
  color: string;
  variety: string;
};

function describeFruit(fruit: Fruit): string {
  return `${fruit.name} is a ${fruit.color} fruit.`;
}

const goldenDelicious: Apple = {
  name: "Golden Delicious",
  color: "yellow",
  variety: "apple",
};

console.log(describeFruit(goldenDelicious));
```

No. The type `Apple` is assignable to type `Fruit` of the parameter, as `Apple` has the same properties as `Fruit` (plus an extra `variety`). This is an example of structural typing.

2. Given the following TypeScript code, are there any type errors? If so, identify them.

```ts
type Alien = { name: string; planet: string; age: number }; // name, planet, age
type Human = { name: string; country: string; age: number };// name, country, age

const et: Alien = { name: "E.T.", planet: "Unknown", age: 120 };
const john: Human = et; // error. type Human requires property 'country'.
```

3. Consider the following TypeScript code:

```ts
type Shape = { color: string; sides: number };
type Square = { color: string; sides: number; sideLength: number };

// Shape: color, sides
// Square: color, sides, sideLength

const redSquare: Square = { color: "red", sides: 4, sideLength: 5 }; // ok
const shape: Shape = redSquare;  // ok

console.log(shape.sideLength); // error. type `Square` was assigned to type `Shape` 
                               // which does not have property `sideLength`
```

Are there any type errors in this code? If so, identify them. And what will be the output of the console.log statement?

The code will still output the number `5` on runtime. This is valid JavaScript code.
