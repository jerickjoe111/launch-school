# 02: Defining Custom Types

You can define type aliases for any type, including primitives, objects, functions, and more advanced types like type unions and generics (which we will cover in future in lessons), and you can use them anywhere you use types

## Type Aliases

Type aliases enable developers to define new custom types, based on existing types.

Type aliases abstract away the details of your custom types and make them easier to read, reuse, and maintain as your codebase grows and changes. In the next assignment, we will explore how to define object types with Type Aliases in more detail.

Type aliases are created using the `type` keyword, followed by an identifier that represents the name of the type alias, an equals sign, and the type that you want to alias.

```ts
type Person = { name: string; age: number };
type BooleansFunction = () => boolean[];
```

### Type Aliases and Functions

We can use Type Aliases as a shorthand for typing a function's parameter types and return type:

```ts
type GreetFunction = (name?: string) => string; // a type (or 'shape') for functions

const greet: GreetFunction = (name) => {
  return name ? `Hello, ${name}!` : `Hello, World!`;
};

greet(); // Hello World!
greet("Catherine"); // Hello, Catherine!
greet(8); // Argument of type 'number' is not assignable to parameter of type 'string'.
```

Note that in order to apply the `GreetFunction` type annotation to `greet`, we must define the function as an arrow function or function expression and assign it to a variable, rather than use a function statement.

## Object Types

In TypeScript, object types define the shape of objects and ensure that all properties are present with their corresponding types. This is useful for preventing errors that may occur in JavaScript, where accessing a property that doesn't exist on an object returns `undefined`.

The "shape" of an object refers to the structure of its properties and their types. When we talk about the shape of an object, we are referring to the names and types of the object's properties.

If we try to access a non-existent property like occupation on the person object, TypeScript will produce an error. This error helps catch errors early in the development process.

```ts
type Person = {
  name: string;
  age: number;
};

const person: Person = { name: "Jane", age: 40 };
console.log(person.occupation); // TypeScript error: Property 'occupation' does not exist on type 'Person'
```

Object properties can be simple types like strings or numbers, but they can also be complex types like other objects or arrays.

Sometimes it's not worth defining an object type, especially when we are using an object type just once. In such cases, we can put the object type directly in a function's signature as a literal object type. A literal object type is an object type defined inline, directly in the function signature.

```ts
function processObject(obj: { name: string; value: number }) {
  // ...
}
```

### Destructuring

In JavaScript, we can further destructure objects that are passed as function parameters and assign their properties to variables inside the function. For example:

```ts
function processObject({ name, value }: { name: string; value: number }) {
                  //   |_____________|  |_____________________________| 
                  //         ^                         ^
                  // extract properties     object must have this shape -- literal object type
  console.log(`The name is ${name} and the value is ${value}`);
}
```

Here, we have used destructuring to assign the `name` and `value` properties on the object parameter to variables. Combining object destructuring with literal object types in function parameters is a common TypeScript pattern.

## Interfaces

Interfaces are an alternative to defining objects with a type alias:

<table>
<tr>
<td> Type Method </td> <td> Interface Method </td>
</tr>
<tr>
<td> 

```ts
type Address = {
  street: string;
  city: string;
  state: string;
  zip: number;
};

type Person = {
  name: string;
  age: number;
  address: Address;
};
```

</td>

<td>

```ts
interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}
```

</td>
</tr>
</table>

### Should I use `type` or `interface`?

Type aliases and interfaces can be used interchangeably in the majority of cases. There are some subtle but important differences between the two in more complex situations (specially, in the way they handle conflicts)

The official documentation says that it's a good idea to use `interface` to define object types unless specific `type` features are needed.

## Structural Typing

TypeScript uses a structural typing system. This means that when the compiler compares two types to determine whether they are compatible, it only looks at the shape of the data -- their properties and the types of those properties -- rather than comparing the names of the types.

There are some important details to TypeScript's structural typing rules. If we have two types, `TypeA` and `TypeB`, then `TypeB` is assignable to `TypeA` if it has at least the same members (properties and property types) as `TypeA`. In other words, `TypeB` can have additional properties that aren't available on `TypeA`, but as long as it has the same properties as `TypeA`, then it is assignable. 

However, the extra properties are, from the perspective of the TS Compiler, no longer accessible (although they exist on the object, and we can access them on runtime)

```ts
type Student = { name: string; age: number; gpa: number };
type Employee = { name: string; age: number };

const jane: Student = { name: "Jane Smith", age: 30, gpa: 4.0 };
const engineer: Employee = jane; // still ok

const manager: Employee = { name: "Helen Jones", age: 40 };
const helen: Student = manager; // Property 'gpa' is missing in type 'Employee' but required in type 'Student'.

console.log(engineer.gpa); // Property 'gpa' does not exist on type 'Employee' according tsc (still exists on the object)
```

### Structural typing and assignment

Under TypeScript's structural typing rules, we can assign a type with more properties to a type with fewer properties, as long as the required properties are present.

There is an exception to this rule, and that is when we are using object literals:

```ts
type Employee = { name: string; age: number };
const jane: Employee = { name: "Jane Smith", age: 30, gpa: 4.0 }; // Type '{ name: string; age: number; gpa: number; }' is not assignable to type 'Employee'.
// Object literal may only specify known properties, and 'gpa' does not exist in type 'Employee'.
```

TypeScript prevents us from assigning an object literal with additional properties to a type with fewer properties. This makes some intuitive sense: it would be strange to define a variable of a given type with properties that aren't available on that type. The TypeScript compiler assumes that this is an error.

While a structural typing system allows for greater flexibility, there are some cases where it can cause unintended issues. See this example of 'duck-typing' or structural typing:

```ts
type Animal = { color: string; legs: number };
type Table = { color: string; legs: number };

const bear: Animal = { color: "brown", legs: 4 };
const diningTable: Table = bear;
```

## Optional Properties

In TypeScript, optional properties are a way to define properties on an interface that are not required to be present:

```ts
interface Person {
  name: string;
  age: number;
  email?: string;
}
```

An optional property will be of type `[type] | undefined` (we may have to narrow or check for the existence of the variable via the `??` nullish operator, for example)

Optional properties can be especially useful when working with APIs that may not always return the same properties for every response. This way, we can handle responses from the API without worrying about whether the phone property will be present.

Another use case for optional properties is when defining configuration objects. This way, we can call the configure function with only the properties we want to specify, without having to provide both every time.

Optional properties in TypeScript help us write more flexible and concise code. By allowing properties to be optional, we can handle different use cases without sacrificing code readability or maintainability.

## `readonly` Properties

In TypeScript, `readonly` properties are used to create properties that can only be set once during initialization and cannot be modified afterward. Once the value of a `readonly` property is set, it cannot be changed throughout the object's lifetime.

The syntax to define a `readonly` property in TypeScript using an interface is:

```ts
interface InterfaceName {
  readonly propertyName: propertyType;
}
```

`readonly` properties are useful in real-life scenarios such as:

- Configuration objects: Readonly properties can be used to define configuration objects where some properties are intended to remain constant. While `readonly` is a compile-time check and doesn't enforce immutability at runtime, it helps catch errors during development when a modification is attempted.
- Constants: Readonly properties can be used to define constants in your application.
- Database entity classes: Readonly properties can be used to define primary keys or other immutable properties of a database entity class.

### `readonly` and object values

One edge case to keep in mind when using readonly properties is that if the `readonly` property points to an object or an array, then that object can be mutated even though the readonly property itself cannot be reassigned to a different object. This can lead to unexpected behavior in your application.

To avoid this problem, we have two possible solutions. The first is to apply readonly to the object's properties to prevent them from being modified:

```ts
interface User {
  readonly address: { readonly street: string; readonly city: string };
}

const user: User = {
  address: { street: "123 Main St", city: "Anytown" },
};

user.address.street = "999 Main St"; // Cannot assign to 'street' because it is a read-only property.
```

If we need runtime protection from object mutation, we can freeze the object using the `Object.freeze()` method upon the object's creation:

```ts
const user: User = {
  address: Object.freeze({ street: "123 Main St", city: "Anytown" }),
};
```

### `ReadonlyArray`

TypeScript provides a special type called `ReadonlyArray` to type arrays that can't be mutated. Elements in a `ReadonlyArray` cannot be changed, added, or removed without the compiler raising an error. In addition, `ReadonlyArrays` do not have the typical methods available to mutate arrays like `push`, `pop`, or `shift`.

`ReadonlyArray` is particularly useful when typing arrays that are function parameters to ensure that the contents of the array are not modified by the function.

The TypeScript compiler also raises an error if you try to assign a `ReadonlyArray` to a regular `Array` type. However, the compiler allows you to assign a regular array to a `ReadonlyArray`.

### Conclusion

Although developers coming from a JavaScript background tend to skip adding `readonly` to the properties of their types, we would encourage you to think carefully about whether each property's value should change over the course of a program's execution. If not, adding `readonly` will help you uncover and prevent serious issues later on.

## Type Assertions

`as` enables us to override TypeScript's type checking for specific values. This can be helpful in certain scenarios like working with the DOM, when we might know more about a method's return type than the compiler does.

However, it is a feature that should be used rarely and with caution. Do not reach for type assertions simply because you are receiving errors from the compiler that are difficult to understand or time-consuming to resolve. In most circumstances, we can safely resolve type errors by writing more types, by structuring our types more effectively, and by adding conditional checks to validate our data. We will explore all of these approaches in further lessons.

There are some scenarios where type assertions may be necessary. Let's look at one common example: working with elements in the DOM.

```ts
const inputElement = document.querySelector("input"); // const inputElement: Element | null
console.log(inputElement && inputElement.value); // Property 'value' does not exist on type 'Element'.
```

We see on line 1 that the `querySelector` method returns a value of type `Element | null`. This makes sense because the TypeScript compiler can't know about the state of the DOM or what type of DOM node will be returned before runtime. As a result, we can't access the `value` property on `inputElement`.

However, we can be certain that if a DOM element is returned from this query, then it will be an `HTMLInputElement`.
To resolve the issue, we can use a type assertion to override the compiler and treat `inputElement` as an `HTMLInputElement`:

```ts
// With type assertion
const inputElement = document.querySelector("input");
console.log(inputElement && (inputElement as HTMLInputElement).value); // No error, logs the value of the input
```

## Classes

In JavaScript, the `class` keyword is syntactic sugar that simplifies the creation of object constructors and the handling of inheritance using a pseudo-classical model. TypeScript supports the `class` keyword and adds a layer of type safety to the properties and methods defined on a class.

The difference between JS classes and TS classes are:

- **Typing properties:** The type annotations work the same as they do when declaring variables. You can also initialize the properties to a value, in which case the type will be inferred.
- **Typing the constructor method**: The constructor method in a class can take typed parameters. Note that you should not provide a return type for the constructor method; the return type is always an instance of the class itself.
- **Typing instance methods**: Class methods are typed in the same way we type function declarations. We can add types to the parameters and return value of the method.

Example:

```ts
class Point {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  onXAxis(): boolean {
    return this.y === 0;
  }

  onYAxis(): boolean {
    return this.x === 0;
  }

  distanceToOrigin(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
```

### `implements` keyword

Remember that classes in JavaScript are templates for the creation of objects. In TypeScript, we have another way to describe the shape of objects: interfaces and type aliases. That means we can use an interface to describe the properties and methods on a class. Then, we can use the `implements` keyword to ensure that that class meets the shape of the interface.

This keyword works like a contract between an interface and the class implementation for that interface. We use `implements` to check whether a class satisfies the shape of a particular interface. An error will be issued if a class fails to correctly implement it. But it is just a check: it won't change the types within the class, or the interface. `implements` doesn't directly add type information to the properties or methods of the class. 

```ts
interface Animal {
  name: string;
  makeNoise(): string;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeNoise(): string {
    return `${this.name} says Woof!`;
  }
}
```

Classes may implement multiple interfaces:

```ts
class Class implements InterfaceA, Interface B {
  // ...
}
```

### Subclasses with `extends`

In JavaScript, subclasses can inherit properties and methods from superclasses by using the `extends` keyword. TypeScript supports subclasses and inheritance with `extends`. 

Note that the keyword `extends` is slightly overloaded in TypeScript. When added to a class definition, it is JavaScript syntax that executes at runtime. When added to `interface` definitions _it is TypeScript syntax that is compiled away before runtime_.

### Overriding class methods and properties.

A subclass is always a subtype of its base class. In other words, an instance of type `Subclass` must be assignable to a variable of type `ParentClass`.

TypeScript requires that if a subclass overrides a property of its superclass, then that property's type must be assignable to the superclass's property type. 

```ts
class Person {
  // ...previous implementation

  sayName(): void {
    console.log(`My name is ${this.name}.`);
  }
}

class Student extends Person {
  // ...previous implementation

  sayName(friend: string): void {
    // Property 'sayName' in type 'Student' is not assignable to the same property in base type 'Person'.
    // Type '(friend: string) => void' is not assignable to type '() => void'.
    console.log(`Hi ${friend.toUpperCase()}!! My name is ${this.name}.`);
  }
}

let person: Person = new Student("Kim", 22, "Fall");
person.sayName(); // Would crash at runtime
```

We can fix this by We can achieve this by updating `Student.prototype.sayName` to take friend as an optional argument:

```ts
class Student extends Person {
  // ...
  sayName(friend?: string): void {
    // ...
  }
}
```

### The `private` Property Modifier

By default, class properties and methods are public; they can be accessed outside the class implementation. With ES2020, JavaScript has introduced a syntax to mark class properties as private by adding the `#` prefix before the field name. Private members of a class cannot be accessed outside the class implementation.

However, in the Chrome console private properties can be accessed outside the class. This is a DevTools-only relaxation of the JavaScript syntax restriction.

TypeScript was developed several years before this feature became available in JavaScript, and TypeScript's developers wanted a way to declare private class properties enforced at compile-time. Hence, TypeScript also has the `private` keyword.

The private keyword enforces privacy at compile-time, but not during runtime. Unfortunately, the private keyword and # property modifier can't be used together.

It's worth noting that private fields should be used carefully, as they can limit the flexibility of your code and make it more difficult to test. They can also add overhead to your program, as each instance of the class will need to create its own copy of the private field. However, in cases where encapsulation and preventing accidental access to internal state is important, private fields can be a useful tool.
