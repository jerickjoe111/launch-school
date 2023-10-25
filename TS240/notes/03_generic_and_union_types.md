# 03: Generic and Union Types

## Content

- Union Types and Objects
- Function Overloads
- Generic Functions
- Generic Objects
- Generic Arrays

## Union Types and Type Guards

There are some situations where a value could be one of multiple acceptable types. One way we can represent this is by using type unions, which allow us to define a type that can be one of different types.

We can define a union type using the `|` operator. 

```ts
type Status = "success" | "warning" | "error";
```

We can use union types in any situation where we can use other types. For example, we can use union types as function parameters and return types:

```ts
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Not an array!";
  }
}
```

We can also create union types with objects:

```ts
type Dog = { breed: string; age: number };
type Cat = { breed: string; age: number; whiskerLength: number };

type Pet = Dog | Cat;
```

### Assignability and Type Guards

Assignability in TypeScript refers to the process of determining whether a value of one type can be assigned to a variable or parameter of another type. TypeScript checks for assignability to ensure type safety at compile time.

When discussing assignability, developers sometimes refer to "narrow" and "wide" types to describe how specific or general a type is. A narrow type is more specific and represents a smaller set of possible values, whereas a wide type is more general and represents a larger set of possible values.

Assignability comes into play when you try to assign a value of one type to a variable of another type. In general, you can assign a value of a narrower type to a variable of a wider type without issues, as long as the wider type can accommodate all values of the narrower type. However, the reverse is not true: assigning a value of a wider type to a variable of a narrower type will cause a type error.

```ts
function assignValueToMyString(myUnion: string | boolean) {
  let myString: string;
  myString = myUnion; // Type 'string | boolean' is not assignable to type 'string'
}
```

To fix this issue, you can use a type guard to ensure that `myUnion` is a string before assigning it to `myString`.

```ts
function assignValueToMyString(myUnion: string | boolean) {
  let myString: string;
  if (typeof myUnion === "string") {
    myString = myUnion; // // This assignment is safe because we've checked that myUnion is a string
  }
}
```

Type guards are a technique that enables you to refine the type of a variable within a specific scope, providing more precise type information to the compiler. This ensures that your code is type-safe during runtime. Type guards are especially valuable when dealing with union types, as they help you ascertain the exact type of a value at a certain point in your code.

Type guards typically involve a conditional check using an if statement, which allows TypeScript to infer the type of the variable within that block. We will encounter several ways to write type guards over the course of the next two lessons, and the above example is one of the most common: a conditional with the `typeof` operator.

Recall that the `typeof` operator is a JavaScript operator, not a TypeScript feature, so its return value will be limited to JavaScript types and primitives; it will not return type aliases you define with TypeScript.

### Type Unions in Practice

There are many real-life use cases for union types in TypeScript. Here are some examples:
- API responses: When working with APIs, we often need to handle different types of responses. For example, an API might return a JSON object that has a data property that can be either a string or an array of strings. We can represent this using a union type:

```ts
type ApiResponse = {
  data: string | string[];
};
```

- Event handlers: In UI development, we often need to handle different types of events. For example, a button can be clicked, a form can be submitted, or a user can hover over an element. We can represent these events using a union type:

```ts
type MyEventHandler = (event: MouseEvent | SubmitEvent | HoverEvent) => void;
```

- Configurations: When creating a configuration object for a library or an application, we might have different options that can take different types. For example, we might have an option that can take a boolean or a number. We can represent this using a union type:

```ts
type MyConfig = {
  option1: boolean | number;
  option2: string | null;
};
```

In conclusion, union types in TypeScript allow us to define a type that can hold more than one type. This can be useful when we want to work with values that can have different types or when we want to create more flexible and reusable code. We can use union types to create more specific and narrow types, which can help catch errors early on and make our code more type-safe. Union types can be used with literals, primitives, and objects, and we can perform type guards to narrow down the types and work with them in a more specific way.

## Union Types and Objects

We can create union types with objects. When using a union of objects, by default the TypeScript compiler will only allow us to access properties that are available on all the objects.

```ts
type Dog = { breed: string; age: number };
type Cat = { breed: string; age: number; whiskerLength: number };

type Pet = Dog | Cat;

function meetPet(pet: Pet) {
  console.log(`This is a ${pet.age} year old ${pet.breed}`); //ok
  console.log(`My pet has whiskers ${pet.whiskerLength} inches long.`); // Property 'whiskerLength' does not exist on type 'Pet'.
  // Property 'whiskerLength' does not exist on type 'Dog'.
}
```

If we want to access any properties that are exclusive to the any of the types, we will need to specify which type of object in the union this variable belongs to. In other words, we need to use a type guard to narrow down the type of the object.

One way to narrow our object type with the TypeScript compiler is to use the in operator in JavaScript, which returns true if the property exists on the object (or exists in the prototype chain).

## Function Overloads

Function overloads allow us to define multiple function signatures for the same function, each with different parameter and return types. 

```ts
function getLengthOfArray(value: string[]): number;
function getLengthOfArray(value: string): string;
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Not an array!";
  }
}
```

The first two signatures are the overload signatures for the function. These are the signatures that you can use to invoke the function.

The bottom function signature is called the implementation signature, and it is considered 'private', meaning that its parameter and return types are not available to callers of the function. Importantly, the overload function signatures must be compatible with the implementation signature.

In order to be compatible:

1.	Each parameter in an overload signature should have a corresponding parameter in the implementation signature
2.	The overload parameter type should be assignable to the implementation parameter type
3.	The overload return type should be assignable to the implementation return type

When using function overloads, you must have at least two overload signatures, but can have more.

### A Note of caution when using function overloads

Function overloads provide you with the ability to express the relationship between an argument type and a return type when your function takes many types of arguments. 

The compiler ensures that the overload signatures are compatible with the implementation signature. However, it doesn't validate that the function's implementation correctly implements the overload signatures; it does not check the function's internal implementation.

## Generics

Generics in TypeScript allow us to define functions and classes that can work with a variety of data types, while still providing type safety at compile time. In contrast to union types, which allow us to define a type that can be one of several specific types, generics allow us to define a type that acts as a placeholder for a type that will be specified later. This allows us to write code that can work with a variety of different types, while still providing type safety.

## Generic Functions

In their simplest version, generics are best thought of as all-purpose placeholders for a type that can be specified later. 

Generic functions are:

- multitype
- typesafe

### Generics as parameters and return types

With generics, we can refactor this code:

```ts
function first(arr: any[]): any {
  return arr[0];
}
```

Into a generic function:

```ts
function first<T>(arr: T[]): T {
  return arr[0];
}
```

- `T` here is a generic type: consider it a kind of variable that works for types instead of values. This function can be used with any type `T`, which is determined by the caller of the function when it is invoked. That's why `T` is referred to as a generic parameter: it allows this function to work with different types while still preserving type safety.
- The function takes one argument, `arr`, which is expected to be an array of some type `T`. The `T[]` type notation represents an array where each element is of type `T`.
- The function returns a value of type `T`. In the function body, it returns the first element of `arr` (i.e., `arr[0]`). Since `arr` is of type `T[]`, it's guaranteed that `arr[0]` (if it exists) will be of type `T`, so this function return type is consistent.

Here's an example of how you might use this function:

```ts
let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d", "e"];

let firstNum = first<number>(numArray); // Type of firstNum is number
let firstStr = first<string>(strArray); // Type of firstStr is string
```

The TypeScript compiler follows these steps:

1. The type `number` is "assigned" to the generic type `T`
2. The parameter arr is defined as `T[]` so the compiler determines `arr` is an array of numbers
3. The return value is typed as `T`, so the compiler knows that the function will return a `number`

In these examples we use `T` to denote the generic type parameter. However, there's nothing special about this name. We can use any name for a generic type, just as with other variables. Using more descriptive names, like `Type` or `Element` can be helpful. .

### Generics and type inference

TypeScript can infer the generic type T based on the argument you pass to the function. This means you typically don't need to explicitly specify the type when calling the function. 

```ts
let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d", "e"];

let firstNum = first(numArray); // TypeScript infers T to be number
let firstStr = first(strArray); // TypeScript infers T to be string
```

This makes the code cleaner and easier to read, while still preserving the benefits of type safety.

## Generic Objects

One of the most common ways you will use generics is when defining new types of objects. 

We can create objects with placeholders for types (generics) to be used within the object's properties or methods:

```ts
type User<T> = {
  name: string;
  age: T;
};

const user1: User<number> = {
  name: "John Doe",
  age: 25,
};

const user2: User<string> = {
  name: "Jane Doe",
  age: "thirty",
};
```

### Objects with multiple generic types

Generic objects can take more than one generic type parameter.

```ts
type User<T1, T2> = {
  name: string;
  age: T1;
  id: T2;
};

const user1: User<number, string> = {
  name: "John Doe",
  age: 25,
  id: "4d747fb8-bdb3-11ed-afa1-0242ac120002",
};

const user2: User<string, number> = {
  name: "Jane Doe",
  age: "thirty",
  id: 1,
};
```

## Generic Arrays

Arrays are an example of a generic object. In fact, the `Array` type is simply a custom object type that has been pre-defined in the TypeScript library.

You can think of arrays as types that accept an argument within the `<>` brackets. This argument defines the types that the array is allowed to contain.

We can also use type unions to indicate that the array can contain multiple types:

```ts
const numsAndStrings: Array<string | number> = [1, "2"];
```

Nested arrays, which are arrays within arrays, can also be created using generic arrays. 

```ts
const matrix: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];
```

As with generic functions, we can usually rely on the TypeScript compiler to infer the type of our arrays:

```ts
const values = [1, "2", false]; // Type is Array<string | number | boolean>
```

### Alternate array syntax

There is an alternative syntax using `T[]`:

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

This alternative syntax is simply syntactic sugar for `Array<T>`. Which syntax to use is up to your preference, though you tend to see the `Array<T>` syntax used more often when defining arrays with more complex types like unions.


