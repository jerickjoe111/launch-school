# Practice Problems: Classes

1. Consider the following TypeScript class Person. Will this class definition result in a type error or execute without any issues?

```ts
class Person {
  age?: number;
  name: string;

  constructor(age?: number, name: string) { // error; optional arguments must be at the end
    this.name = name;
    this.age = age;
  }
}
```

2. Consider the following TypeScript code:

```ts
interface Movable {
  speed: number;
  move(): void;
}
```

Please create a `Car` class that implements the `Movable` interface. Ensure the `move` method outputs a message to the console.

```ts
class Car implements Movable {
  speed: number;
  
  constructor(speed: number) {
    this.speed = speed;
  }

  move(): void {
    console.log('I am moving!');
  }
}
```
