# Practice Problems: Extracting Shared Properties to a Common Type

1. Consider the following code:

```ts
interface Rectangle {
  length: number;
  width: number;
  color: string;
}

interface Circle {
  radius: number;
  color: string;
}
```

Please define a new interface, `Shape`, that encapsulates the shared properties of `Rectangle` and `Circle`. Then, implement a function `displayShapeInfo` that accepts a `Shape` object and returns a string with information about the shape. Make sure your function works correctly with both `Rectangle` and `Circle` objects.

```ts
interface Shape {
  color: string;
}

interface Rectangle extends Shape {
  length: number;
  width: number;
}

interface Circle extends Shape {
  radius: number;
}

function displayShapeInfo(shape: Shape) {
  if ('radius' in shape) return `This is a circle of radius ${shape.radius}.`
  else return `This is a rectangle of length ${shape.length} and width ${shape.width}.`
}
```