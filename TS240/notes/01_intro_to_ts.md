# 01: Introduction to TypeScript

## Why TypeScript? What is type safety? Why does it matter?

In dynamically typed languages, variables are not assigned a specific data type when they are declared. Instead, the type of a variable is determined at runtime based on the type of value it is assigned.

While this flexibility can be useful in some cases, it can also lead to problems.:

```js
function add(a, b) {
  return a + b;
}

console.log(add(5, "5")); // returns "55"
```

TypeScript is a programming language that builds on top of JavaScript by adding optional static typing. In statically typed languages, each variable must be assigned a specific data type when it is declared, and functions must specify the type of value they return. This helps catch errors at compile-time instead of runtime, and can make code easier to read and maintain.

In TypeScript, compile-time errors occur during the process of converting the TypeScript code into JavaScript code. These errors are detected by the TypeScript compiler before the code is executed and typically relate to syntax and type errors.

On the other hand, runtime errors occur in JavaScript when the code is being executed. These errors can be caused by a variety of issues such as null pointer exceptions, out-of-bounds array accesses, or type mismatches. Runtime errors can be difficult to debug and can lead to unexpected behavior in the program. Since JavaScript is an interpreted language, it does not go through a compilation process like TypeScript, which means that runtime errors cannot be caught until the code is actually executed.

Beyond type safety, Typescript also detects many other common errors that JavaScript developers make during development, for example: 

- typos
- uncalled function (errors in function invocations)
- basic logic errors
- accessing non-existent object properties

## History and Tradeoffs of Typescript

### History

As JavaScript became a common choice for more types of application development, some detractors criticized the language for its lack of type safety. The argument was that Javascript was not a good choice for large or serious applications because its dynamic typing made runtime errors common and difficult to detect. This was the motivation for the development of Typescript.

TypeScript's journey began in 2010, when a team of Microsoft engineers led by Anders Hejlsberg started working on the language. Hejlsberg was also responsible for creating the C# programming language.

The first version of TypeScript was released by Microsoft in October 2012 as an open-source project under the Apache 2.0 license. In 2014, Microsoft released TypeScript 1.0, which introduced a number of new features including class and module enhancements, type guards, and generics. Since then, TypeScript has continued to add new features and enhancements, including support for async/await, decorators, and conditional types.

The programming community has rapidly adopted TypeScript. In less than a decade, it has become the 5th most commonly used programming language among professionals, according to the 2022 Stack Overflow survey of developers

### Why TypeScript is becoming a popular choice among developers.

- **Better code quality**: TypeScript helps us write better-quality code by catching errors before they happen. This means that TypeScript code is less likely to have bugs and more likely to be maintainable.
- **Code scalability**: As your codebase grows, it becomes harder to keep track of the purpose and state of each variable you declare, the intended inputs and outputs of every function, and the structure of data you receive from external libraries or APIs. TypeScript helps with code scalability by making data types explicit and static. Ultimately, this makes it easier to maintain and refactor large codebases.
- *Better collaboration*: When working on large projects, it's common for multiple developers to work on the same codebase. TypeScript helps with collaboration by enforcing strict typing rules, which makes it easier for developers to understand each other's code and reduce miscommunication.

### Tradeoffs of TypeScript

- **Slower development time**: TypeScript requires developers to explicitly add types and interfaces to their variables and functions. While this is ultimately helpful in preventing errors, adding these type annotations to the code takes extra development time, particularly when the types are complex.
- **An additional compile step**: As we will explore in a future lesson, TypeScript inspects your code and provides warnings before your application runs. Before you can run a TypeScript application, the TypeScript compiler will "transpile" your code to plain JavaScript. This additional step before you run your code can result in additional complexity and time.
- **Reduced flexibility**: TypeScript's strict typing can sometimes limit the flexibility of the code, making it more difficult to modify or extend. This can be particularly challenging for developers who are used to the dynamic nature of JavaScript.
- **Working with third-party libraries**: Not all third-party libraries are written in TypeScript, which can make integrating them into a TypeScript project more challenging. In these cases, developers may need to write their own types for the external library. When third-party libraries are written in TypeScript, it's also possible that their type annotations contain errors, which can be time-consuming for the consumer of the library to resolve.

### When vanilla JavaScript is preferable to TypeScript

- **Simple projects**: For small projects that don't require complex type checking, adding types may take more time than it's worth. In these cases, JavaScript may be simpler and faster to develop with. This is especially the case if you are working on a project that won't be maintained or consumed by any other developers.
- **Rapid prototyping**: When rapidly prototyping a project, it can be faster to use JavaScript since it requires less setup and has fewer restrictions than TypeScript.
- **Compatibility with third-party libraries written in JS**: Some popular JavaScript libraries don't include TypeScript types, which can make it difficult to use the library with TypeScript without having to write custom typings. This can be a time-consuming and difficult process depending on the size of the library.
- **Quick scripts**: For one-off scripts or small tasks, using TypeScript can add unnecessary complexity. In these cases, JavaScript is often sufficient.

## TypeScript Installation

1.	Create a source directory: Create a new directory in the root of your project called "src". This is where you will write your TypeScript code. Although this is not strictly necessary, this is a common convention for all TypeScript projects.
2.	Create a `tsconfig.json` file: In the root directory of your project, create a new file called `tsconfig.json`. This file will contain configuration options for the TypeScript compiler. 

Example of `tsconfig` file:

```json
{
  "compilerOptions": {
    "target": "ES2015", // ??
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./src/**/*"],
  "$schema": "https://json.schemastore.org/tsconfig", // ??
  "display": "Recommended"
}
```

TypeScript's rules are highly configurable, and you can learn about `tsconfig` in detail in the official documentation.

## TypeScript is a superset of JavaScript

TypeScript is a superset of JavaScript, which means that TypeScript supports all valid JavaScript syntax while adding new features to the language. 

TypeScript is a superset of JavaScript: it retains all the syntax of JavaScript and adds "opt-in" features -- namely type annotations. The advantage to us as JavaScript developers is that this simplifies the migration from JavaScript to TypeScript code. Changing existing JavaScript programs to TypeScript programs won't "break" them, they will still compile and run. However, the TypeScript compiler will now throw a variety of helpful warnings and errors at build time, which we can resolve by updating our code and adding type annotations.

## Compiling TypeScript to JavaScript

Web browsers can only understand JavaScript, so we need to convert our TypeScript code into JavaScript before it can be executed in a browser.

TypeScript provides a command line tool called `tsc`. `tsc` is the TypeScript compiler. Running this tool against a `.ts` file will examine our TypeScript code, output relevant warnings or errors about the code, and produce a `.js` file. The `.js` file will contain equivalent JavaScript code that can be executed by a web browser or in a JavaScript runtime like Node.js.

Compiling TypeScript to JavaScript is done at build time, which means it's part of the process of preparing our code for deployment.

### What version of JavaScript does TypeScript compile to?

One of the benefits of compiling TypeScript to JavaScript is that it allows us to use the latest features of JavaScript, even if some web browsers don't yet support those features. The TypeScript compiler can convert newer syntax into equivalent older syntax that is supported by more browsers, so we can write modern JavaScript code without worrying about compatibility issues. 

That JavaScript itself is also compiled at runtime by web browsers, but the difference is that TypeScript is compiled by the developer before the code is deployed, while JavaScript is compiled when the code is executed in a user's browser. This means that TypeScript compilation can catch errors and provide helpful feedback before our code is deployed, while JavaScript compilation only happens once the code is running, which can lead to unexpected errors.

The target version can be set in the `tsconfig.json` file.

## The TypeScript Language Service

TypeScript also provides a language service that integrates with many code editors. As a component of the TypeScript compiler, the language service operates in the background and provides a range of features, including code completion, signature help, error checking, and refactoring. It uses the information from the project's `tsconfig.json` file to understand the project's configuration and dependencies and to provide intelligent suggestions and error checking based on this information.

The TypeScript language service is enabled by default in some IDEs, including VS Code, so if you use that code editor, you will not need to take any additional steps to enable it. 

## Primitive Types

In TypeScript, primitives are the most basic data types available. Understanding them is essential to mastering the language. There are seven primitive types in TypeScript: `boolean`, `number`, `bigint`, `symbol`, `string`, `null`, and `undefined`. 

### `boolean`

The boolean type represents a logical value that can either be `true` or `false`. We can initialize a variable with the `boolean` type using the following syntax

```ts
let isCompleted: boolean = true;
```

### `number`

The number type represents a numeric value. It can be either an integer or a floating-point number. 

```ts
let num: number = 1;
```

We can also use other numeric formats such as hexadecimal, binary, and octal as follows:

```ts
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

### `string`

The string type represents textual data. It can contain letters, numbers, and symbols.

```ts
let firstName: string = "Jane";
```

We can also concatenate two or more strings using the string interpolation feature as follows:

```ts
let firstName: string = "Jane";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
```

### `null`

The `null` type represents a value that is intentionally absent, or a deeper kind of absence. 

```ts
let x: null = null;
```

It is important to note that `null` is a value that represents the intentional absence of any object value.

### `undefined`

The `undefined` type indicates the absence of a value, an uninitialized variable, or a non-existent property. In TypeScript, we can declare a variable with the `undefined` type with the following syntax:

```ts
let y: undefined;
```

## Type Annotations

The way that we provide type information to variables is with a colon :, followed by the type. This syntax is called a type annotation. Type annotations are TypeScript specific syntax that provides the compiler with type information about a given value.

Type annotations can be used with different kinds of values in TypeScript, including:

- Variables and constants
- Function parameters
- Function return values
- Object properties
- Array elements

Remember that type annotations are completely removed when TypeScript is compiled to JavaScript.

## Arrays and Tuples in TypeScript

### Arrays

An array is a collection of values of the same data type that are stored in contiguous memory locations. In TypeScript, you can define an array using the following syntax:

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

You can also define an array using this syntax:

```ts
let numbers: Array<number> = [1, 2, 3, 4, 5];
```

When we access a particular element of an array, the value retrieved is of the same data type as the type of the element stored in the array.

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
const myNum: number = numbers[2];
```

#### Accessing out of bounds elements

Because JavaScript arrays have a dynamic length, the TypeScript compiler doesn't know whether any particular index is out of bounds. As a result, it infers that any elements returned from the array are of the type the array contains:

```ts
let numbers: Array<number> = [1, 2, 3, 4, 5];
let myNum: number = numbers[5];
console.log(myNum); // Output: undefined
```

There are two main ways to fix this issue:

##### Check for `undefined` elements:

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
const num = numbers[5];

if (num !== undefined) {
  console.log(num);
} else {
  console.log("Element doesn't exist");
}
```

##### Use the `noUncheckedIndexedAccess` Compiler Option

To enable `noUncheckedIndexedAccess`, you can add the following line to your `tsconfig.json` file:

```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true
  }
}
```

With this option enabled accessing `numbers[5]` would give us the type `number | undefined` back rather than just `number`. This will force us to check for `undefined` whenever we access an array element by its index.

### Tuples

A tuple is a collection of values that are stored in a specific order. **Unlike arrays, tuples have a fixed length**. Each element in the tuple can have a different data type. They are a special type of array objects.

Tuples can be very useful in TypeScript when you want to work with a collection of values that have a specific order and data type. Tuples are defined using a fixed-length array with elements of different types, like this:

```ts
let aTuple: [string, number, boolean] = ["Launch School", 1, true];
```

You can access the elements using their indices, like you would with an array. The value returned will have the data type of the element at that position in the tuple.

Unlike arrays, you cannot access out-of-bounds indexes of a tuple.

If you try to change the element of the tuple this works as long as the type of the new value is assignable to the type at that index.

If we try to assign an element to a different type, it will raise an error.

Tuples are just arrays, and thus they have all the methods that arrays have like `push()`, `pop()`, etc.

For this reason, it is generally considered a best practice to avoid using methods like `push()` and `pop()` when working with tuples as this can lead to unexpected behaviors.

## Functions: Parameter types and return types

### Function Parameter Type

In TypeScript, you can specify the types of function parameters to ensure that they are of the correct type.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Optional Parameters

You can also use optional parameters in TypeScript functions. 

```ts
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : `Hello, World!`;
}
```

As a result, it determines that the parameter could either be its declared type or `undefined`. In this case, `string | undefined`

### Default Parameters

Finally, as in JavaScript, you can specify default parameters.

```ts
function greet(name = "World"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, World!
console.log(greet("Pete")); // Output: Hello, Pete!
```

Because we've provided a default value, the TypeScript compiler will infer the type of the parameter. In this case, `name` is typed as `string`.

### Function Return Types

In addition to specifying the types of a function's parameters, you can also specify the return type of a TypeScript function. 

```ts
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

function favoriteNumber(): number {
  return 42;
}

let myName: string;
myName = getFullName("Jane", "Doe"); // "Jane Doe"
myName = favoriteNumber(); // Type 'number' is not assignable to type 'string'
```

If a function doesn't return a value, you can use the `void` type as the return type. 

## Functions: Working with built-in JavaScript Methods

TypeScript provides type definitions for built-in JavaScript objects and methods out-of-the-box, so you don't need to define their types yourself. When you're working with JavaScript methods in TypeScript, you can use them as you would in plain JavaScript, and TypeScript will provide type information based on the method's signature.

TypeScript also provides definitions for built-in methods that take callbacks. In this case, TypeScript relies on a feature called type inference to determine the type of the return value.

TypeScript's support for native JavaScript methods not only eases an application's migration from JavaScript to TypeScript, but automatically adds a layer of type safety to existing JavaScript code.

For example:

```ts
const myStringArray: string[] = ["1", "2", "3"];
let myNumberArray: number[];
myNumberArray = myStringArray.map((str) => parseInt(str, 10));

console.log(myNumberArray); // Output: [1, 2, 3]
```

The type of each element in the output array is inferred based on the return type of the callback function.

### Type Inference

Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and function return values when they are not explicitly specified. This can make your code more concise and maintainable while still benefiting from TypeScript's strong typing capabilities.

In the context of using built-in JavaScript methods in TypeScript, type inference can be helpful in determining the expected input and output types without explicitly specifying them. 

## `void`

In TypeScript, void is a type that represents the absence of a value. It's commonly used as the return type for functions that don't return a value. 

```ts
function logMessage(message: string): void {
  console.log(message);
}
```

In JavaScript, a function that doesn't explicitly provide a return value will return `undefined`. Because `undefined` is not a meaningful return value for the function, we've specified the return type as `void`.

Values with the void type cannot be used with or assigned to any other data type:

```ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

const result: void = greet("Jane");
const myUndefined: undefined = result; // Type 'void' is not assignable to type 'undefined'
const myBool: boolean = result ? true : false; // An expression of type 'void' cannot be tested for truthiness.
```

The benefit of `void` over `undefined` in these cases is that it prevents developers from accidentally using the return value of functions in cases where the function does not have a meaningful return value.

```ts
const elements: number[] = [1, 2, 3].forEach((el) => console.log(el * 2)); // Type 'void' is not assignable to type 'number[]'.
```

## Literal Types

In TypeScript, literal types are a way to describe specific values that a variable can have. They allow you to define a type that is limited to a certain set of values and make your code more specific and less error-prone.

String literal types are used to define a type that can only have a specific string value. Here is an example:

```ts
let color: "red" | "blue" | "green" = "red"; // This is valid
color = "yellow"; // Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'
```

We can also define a numeric literal type that can only have a specific number value.

```ts
let five: 5 = 5;
five = 4; // Type '4' is not assignable to type '5'
```

Finally, we can define a boolean literal type that can have a specific boolean value.

```ts
let hasName: true = true;
hasName = false; // Type 'false' is not assignable to type 'true'
```

Literal types can be very useful in practice.

## Explicit Typing vs. Type Inference

In TypeScript (TS), there are two approaches to typing variables: explicit typing and type inference.

### Explicit Typing

Explicit typing is when you explicitly specify the type of a variable. You can do this by using type annotations when you declare the variable.

### Type Inference (Implicit Inference)

Type inference is when TypeScript infers the data type of a variable based on its initial value and its static analysis of the code paths, including the structure of the code and the context in which a value is used. 

TypeScript is very good at type inference. Beyond primitive types, TypeScript can infer complex object types and function return values.

Be aware that TypeScript cannot infer the type of a function's parameters. 

#### Return Type Inference

In TypeScript, function return types can be inferred by the compiler based on the value that's returned from the function. For example, if a function returns a string, the compiler will infer that the return type of the function is string. 

#### Conclusion

While TypeScript is good at inferring the types of your values, it is not perfect, particularly in cases where you are working with more complex data types, working with the DOM, or using third-party libraries. In these cases, explicit typing will be preferable, or even necessary.

Ultimately, the decision to either prefer explicit typing or rely on implicit typing is a stylistic choice, and you will find professional developers with strong opinions on both sides of the discussion. Explicit typing provides clear documentation of the types of variables, functions, and objects, which can make the code easier to read and understand. It can also be valuable as an application increases in size and number of developers, as explicit typing makes it easier for the compiler to highlight when updates to data types will have downstream changes to other parts of the codebase.

On the other hand, implicit typing can reduce the amount of boilerplate code and make the code more concise, which can be beneficial in many scenarios.

## Type Errors vs. Syntax Errors

In JavaScript, any code with a valid syntax will run regardless of whether it makes sense. However, TypeScript requires code to have both valid syntax and pass type checking.

### Syntax Errors

A syntax error occurs when code violates the syntax rules of the language. This can happen if you misspell a keyword, forget to close a bracket, or use an incorrect operator. When a syntax error occurs, the program will not run and the developer must correct the error before running the code.

### Type Errors

A type error occurs when code violates the type rules of the language. TypeScript is a statically typed language, which means that variables have a specific type that is determined at compile-time. If you try to assign a value of the wrong type to a variable, TypeScript will raise a type error.
