# 04: Narrowing

## Overview of Narrowring

There are various ways to widen the set of possible types that a value may represent. Union types and Generics offer us flexibility in the types of values we pass around our code.
However, when we want to access specific properties on those values, having a "wide" set of possible types is no longer helpful to us. 

For example:

```js
type Circle = {
  color: string;
  radius: number;
};

type Square = {
  color: string;
  sideLength: number;
};

type Shape = Circle | Square;

function describeShape(shape: Shape) {
  let area: number;
  console.log("This shape is " + shape.color); // ok

  area = shape.radius * shape.radius * 3.14; // Property 'radius' does not exist on type 'Shape'.
  area = shape.sideLength ** 2; // Property 'sideLength' does not exist on type 'Shape'.
  console.log("The area is " + area);
}
```

Ironically, by widening the set of possible types for Shape, we've constrained the accessible properties to only those that exist on every type in the union (union intersection properties)

This process of refining a value from a larger set of possible types to a smaller set of possible types (or a single type) is called **narrowing**.

There are various techniques to narrow types in TypeScript, but for the most part they can be grouped in:

- type guards
- type predicates
- control flow-based type analysis.

## Narrowing with Type Guards

TypeScript uses a technique called control flow analysis to narrow a set of types based on the path of the code through conditional statements like if/else and switch.

For example, if we have: 

```js
function describeShape(shape: Shape) {
  let area: number;
  console.log("This shape is " + shape.color); // ok

  if ("radius" in shape) {
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.sideLength * shape.sideLength;
  }
  console.log("The area is " + area);
}
```

The expression `"radius" in shape` acts as a **type guard** in TypeScript. The code itself is standard JavaScript, but when used in a conditional statement, TypeScript understands that the result of the expression will narrow down the set of possible types in both the truthy and falsy paths.

### Types of type guards

#### `typeof`

Use the `typeof` operator to narrow sets of primitive types. As a reminder, the `typeof` operator returns a string that indicates the value's type:

```js
function logValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Numeric value:", value.toFixed(2));
  }
}
```

It is important to know that the `typeof` operator will **only return primitive JavaScript types**, or the string `'object'` for all JavaScript objects, regardless of their specific structure or subtype, including arrays and functions, not TypeScript types. Remember, TypeScript-specific features like type definitions and assertions are removed during compilation. While there is no way to directly inspect the TypeScript types of your values at runtime, we will learn about a technique to help us achieve something similar in a future assignment.

For arrays, we can use the JS method: `Array.isArray()`.

#### `in`

The `in` operator is a JavaScript feature that returns `true` if a property exists in an object or its prototype chain. In TypeScript, we can use the `in` operator to narrow down the type of an object based on its unique properties. 

```js
function describeShape(shape: Shape) {
  let area: number;
  console.log("This shape is " + shape.color); // ok

  if ("radius" in shape) {
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.sideLength * shape.sideLength;
  }
  console.log("The area is " + area);
}
```

#### Truthiness

We can use truthiness as a simple type guard by checking if a variable or expression evaluates to a truthy value. Although it's not as precise as other type guards like `typeof`, `instanceof`, or user-defined type guards, truthiness can still be helpful in some scenarios, such as narrowing a type from a union type that includes `null` or `undefined`.

```js
type Circle = {
  radius: number;
};

function describeCircle(circle?: Circle): void {
  // At this point, we cannot access the radius property on circle

  if (circle) {
    // The type guard has removed undefined from the union, and we can now access radius
    console.log("This is a circle with radius:", circle.radius);
  }
}
```

Keep in mind that using truthiness as a type guard might not be sufficient in all scenarios, particularly when dealing with strings and numbers, as values such as 0 or an empty string will evaluate to false.

#### `instanceof`

The `instanceof` operator can be used as a type guard in TypeScript when working with classes or constructor functions. It checks whether an object is an instance of a specific class or constructor function. It tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object (`[object] instanceof [constructor]`).

```js
class Circle {
  constructor(radius: number) {}
}

class Square {
  constructor(sideLength: number) {}
}

type Shape = Circle | Square;

function describeShape(shape: Shape): void {
  if (shape instanceof Circle) {
    console.log("This is a circle with radius:", shape.radius);
  } else {
    console.log("This is a square with side length:", shape.sideLength);
  }
}
```

## Type Predicates

TypeScript does this with a feature called type predicates. Type predicates are special return values that allow you to create custom type guards. A type predicate has the form `argName` is Type, where `argName` is the name of a parameter in the function signature and `Type` is the target type we want to narrow down to. It's a way to write custom type checking functions.

When the function returns a truthy value, the TypeScript compiler will determine that the specified argument is of the given type.

```js
function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}

function describeShape(shape: Shape) {
  let area: number;

  if (isCircle(shape)) { // !
    area = Math.PI * shape.radius * shape.radius;
  } else {
    area = shape.sideLength * shape.sideLength;
  }
  console.log("The area is " + area);
}
```

The TypeScript compiler doesn't verify that the logic inside your type predicate function correctly determines the specified type.

## Narrowing with Short Circuiting

We can also use type guards to narrow types via short-circuiting.

Short-circuiting is a behavior of the logical operators (`&&` and `||`) in which the second operand is only evaluated if the first operand does not determine the result.

Short-circuiting is a concise alternative to more verbose conditional syntax like if statements, and can be helpful to narrow types in simple situations.

```js
type Circle = {
  radius: number;
  opacity?: number;
};

type Square = {
  sideLength: number;
};

type Shape = Circle | Square;

function logOpacity(shape: Shape): void {
  // Using short-circuiting with '&&' to narrow down types
  "opacity" in shape && console.log("This circle has opacity:", shape.opacity);
}
```

## Discriminated Unions

A common technique to identify and narrow custom object types is with a feature called **discriminated unions**. Discriminated unions work by adding _a common discriminant property to each member of the union_. This property is then used to differentiate between the different members of the union.

The type on each discriminant property is a string literal, which describes the type (it is common practice for the discriminant to be the name of the type in lowercase):

```js
type Circle = {
  kind: "circle"; // This is the discriminant property
  radius: number;
};

type Square = {
  kind: "square"; // This is the discriminant property
  sideLength: number;
};

type Shape = Circle | Square;

// Now, let's see how we can use the discriminant property to narrow the union:

function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    default:
    // TODO: Ensure the code never reaches this condition (invalid values for `kind`)!
  }

  console.log("The area is " + area);
}
```

One of the first benefits of discriminated unions is evident: the type that each conditional path handles is more clear. 

While using discriminated unions with `switch` is most common, you can perform the same type of narrowing with an `if`/`else` statement.

### Common uses of discriminated unions

Discriminated unions are helpful in many situations in TypeScript:
1.	Representing different variants of a data structure: When you have multiple types in a union that share some common properties, but also have distinct properties, discriminated unions can clearly express the relationship between them.
2.	Modeling workflows or processes: When modeling processes that have a discrete set of steps or possible states, discriminated unions can be a powerful tool to express different states and their corresponding transitions. For example, you might model the various states of an HTTP Request:

```js
// Initial state before the request is made
type HttpRequestInitial = {
  status: "initial";
};

// Loading state when the request is in progress
type HttpRequestLoading = {
  status: "loading";
};

// Success state when the request has completed successfully
type HttpRequestSuccess = {
  status: "success";
  data: any; // Use a more specific type based on the expected response data
};

// Error state when the request has failed
type HttpRequestError = {
  status: "error";
  error: string;
};

// The HttpRequest union type represents the various states of an HTTP request
type HttpRequest =
  | HttpRequestInitial
  | HttpRequestLoading
  | HttpRequestSuccess
  | HttpRequestError;
```

3. Error handling: Discriminated unions can be used to represent success and failure cases, making it easier to handle errors in a type-safe manner.

### When to prefer the `in` operator

The expressiveness and type safety we get from discriminated unions make them a good choice in many scenarios. However, there are some cases where you may prefer to use the `in` operator for narrowing:

1.	When you are working with types that don't have a clear discriminant property.
2.	When you want to take action on a property that may be available on a wide set of types. For example, in a `sendMessage` function you may want to narrow down to any type that has an `email` property, regardless of the type that contains it (e.g. `Student`, `Store`, `Employee`).

## Exhaustiveness Checking

Exhaustiveness checking is a feature of many typed programming languages that helps guarantee that possible cases have been handled. In TypeScript, discriminated unions help us perform exhaustiveness checking by ensuring that every possible value of the discriminant property has been covered by a `switch` statement.

### Exhaustiveness checking with the `never` type

The most common way to take advantage of exhaustiveness checking is with the `never` type. The `never` type is a special type in TypeScript: the compiler will raise an error when you assign any value to a variable of type `never`. It's like telling the compiler: 'this should never happen'.

Exhaustiveness checks are a helpful feature of many typed languages, including TypeScript. They improve the robustness and reliability of our applications by catching potential oversights as types change over time. We can take advantage of the `never` type to add an exhaustiveness check in the `default` case of `switch` statements.

```js
function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    default:
      // Exhaustiveness check - this block should be unreachable
      const _exhaustiveCheck: never = shape;
      throw new Error(`Invalid shape: ${JSON.stringify(_exhaustiveCheck)}`);
  }
  console.log("The area is " + area);
}
```

Two things will occur if the `default` block is reached:

1.	The TypeScript compiler will detect that the `default` path is reachable. In this path, we assign shape to a variable of type `never`, and the compiler will raise a warning. Helpfully, the compiler's warning tells us which type is causing the problem.
2.	We throw a runtime error, so that if we try to run the code we can see the specific object causing an issue.

This way, we add two layers of safety: at compile time (TS compiler), and at runtime (via the exception thrown)

## The `any` type

TypeScript has a special type called `any` that represents any possible value. You can assign all types to a variable of `any` type, and a value with type `any` can be assigned to every other type (except `never`).

Using `any` essentially turns off type checking for a given value or assignment. This can be a useful tool in some specific scenarios, but is more often a source of potential problems.

### `any` increases the likelihood of bugs

While `any` makes your code more flexible, it also prevents the type system from ensuring that variables have the types that we think they have. This can make it easy to assign the incorrect value to a variable or access a property or method that doesn't exist -- in all cases leading to the sort of runtime errors TypeScript is designed to catch:

```js
// Accessing a method that doesn't exist
let isStudent: any = true;
let school: string = isStudent;
console.log(school.toLowerCase()); // No compile-time error, but runtime error
```

Since `any` types can be so flexibly reassigned, they make it easy for an incorrect type to be introduced in one part of an application, get passed through many functions, and cause an error in a completely different function or file. For this reason, it's important to use any sparingly and only when necessary.

### When is `any` useful?

Despite these cautions, there are times when you may want to use any in TypeScript.

- Working with third-party libraries: You may be working with a library that lacks TypeScript type definitions or has incorrect or incomplete type definitions. In this case, `any` can be a temporary solution until the proper types are available, either by adding them yourself, using community-provided type definitions, or waiting for the library maintainers to add them.

- Gradual migration from JavaScript to TypeScript: When transitioning an existing JavaScript codebase to TypeScript, employing the `any` type in can serve as a practical initial step. This approach enables you to progressively introduce type annotations and enhance type safety while maintaining the functionality of the code throughout the migration process.

## Type Soundness

Type unsoundness happens when the type system fails to prevent type errors, resulting in runtime errors. This can lead to unexpected behavior and bugs in your code. 

One common source of type unsoundness is when we use the `any` type. 

```js
let x: any = "Launch School";
const y: number = x;
console.log(y);
```

Another source of type unsoundness is when we use type assertions. Type assertions allow us to tell TypeScript that a value has a certain type, even if TypeScript can't verify it.

```js
let x: any = "Launch School";
const y: number = x as number;
```

A third source of type unsoundness is when we index beyond the end of an array. 

```js
const names: string[] = ["John", "Jane"];
const name: string = names[2];
name; // undefined
```

TypeScript was designed to work with existing web technologies, including the quirky JavaScript code that exists in the wild. In other words, TypeScript's type system can't be designed for perfect soundness while also being compatible with the existing ecosystem.

Every language has its trade-offs, and developers must make decisions based on the needs of their projects.

## `unknown`

The `unknown` type was introduced in TypeScript 3.0 as a safer alternative to `any`. It is similar to the `any` type, but with stricter type checking rules. 

All types can be assigned to the `unknown` type. However, the `unknown` type cannot be assigned to any other type, and the compiler will raise an error when you try to access any property on a value of `unknown` type. The only way to re-assign or otherwise take action on an `unknown` value is to first narrow it to a more specific type with a type guard. This behavior helps us guarantee type safety even when handling data where we don't initially know the type. In other words, `unknown` forces us to narrow down types.

### Narrowing an `unknown` type to an object type

If we want to narrow an `unknown` type to a object type, we will need to do a bit of extra work. Remember, we can't use the `in` operator or try to access a property on the object while the type is still unknown.

This is a good candidate to use a custom type guard with a type predicate. We need custom type predicate functions to narrow down an `unknown` object.

```js
function isCircle(shape: unknown): shape is Circle {
  return (
    typeof shape === "object" &&
    shape !== null &&
    "kind" in shape &&
    shape.kind === "circle"
  );
}

function isSquare(shape: unknown): shape is Square {
  return (
    typeof shape === "object" &&
    shape !== null &&
    "kind" in shape &&
    shape.kind === "square"
  );
}

function describeShape(shape: unknown) {
  let area: number;

  if (isCircle(shape)) {
    area = Math.PI * shape.radius * shape.radius;
  } else if (isSquare(shape)) {
    area = shape.sideLength * shape.sideLength;
  } else {
    console.log("We don't know this shape");
    return;
  }
  console.log("The area is " + area);
}
```

This might feel like quite a bit of extra code in order to access the properties on an `unknown` object. However, each of these checks prevents us from introducing a bug into our code if `shape` is not the data we expect. Ultimately, TypeScript forces us to write more robust, reliable code by surfacing possible errors that we may have missed. This is the price of type safety.

### Using type assertions with `unknown` values

Another common technique to narrow an `unknown` value in these scenarios is with type assertions. As we learned in a previous lesson, type assertions use the `as` keyword to tell the compiler that a value is a given type.

This can be useful when working with external data of an `unknown` type.

Now, you may ask why not directly type the response parameter in the function as the expected type directly if we are going to use a type assertion anyway. Here's why:

1.	By declaring the parameter as `unknown`, you signal to other developers that the function is intended to handle data with uncertain types, which is a common scenario when dealing with external data. It's a hint that the function should include type checking or validation.
2.	When you type the parameter as `unknown`, TypeScript enforces type checks or validations within the function, whereas typing it directly as the expected type would allow you to access the properties without any checks. This could lead to runtime errors if the data doesn't match the expected structure.

Using a type assertion within the function after performing necessary checks or validations is a way to inform TypeScript about the expected type while still maintaining the benefits of type safety.

```js
type MovieApiResponse = {
  status: string;
  data: {
    title: string;
    releaseYear: number;
  };
};

function handleMovieApiResponse(response: unknown) {
  // Perform some basic validation of the unknown type
  if (!response || typeof response !== "object") {
    console.log("No data received!");
    return;
  }

  const movieApiResponse = response as MovieApiResponse; // Using a type assertion to inform TypeScript that we expect 'response' to be of type 'MovieApiResponse'

  // Now TypeScript knows the structure of movieApiResponse and allows us to access its properties
  console.log(`Status: ${movieApiResponse.status}`);
  console.log(`Title: ${movieApiResponse.data.title}`);
  console.log(`Release Year: ${movieApiResponse.data.releaseYear}`);
}
```

### Using external libraries for type validation

There is a lot of work that goes into validating data of an `unknown` type, even in simple scenarios. For this reason, it is common in more complex applications to use a data validation library that abstracts this work away behind a simpler API. Popular libraries in this domain are `io-ts`, `runtypes`, and `zod`.
