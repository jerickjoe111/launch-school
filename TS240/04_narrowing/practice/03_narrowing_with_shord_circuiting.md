# Practice Problems: Narrowing with Short Circuiting

1. Consider the following TypeScript code:

```ts
type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  // Implement this function
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}
```

Please implement the `isCar` function as a type predicate (type guard) function that determines if the input argument is of type Car.

```ts
function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return vehicle.type === 'car' && 'doors' in vehicle;
}
```
