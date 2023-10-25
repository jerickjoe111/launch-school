# 06: TypeScript Techniques and Common Patterns

## Contents

- Extracting Shared Properties to a Common Type
- Object Spreading
- Defining Options types
- Passing Literal Objects
- Working with Exceptions
- Working with Promises: `async` / `await`
- Rejected Promises
- `Pick` and `Omit`
- `ReturnType` and `Parameters`
- `Partial`
- Object Values at Runtime

## Extracting Shared Properties to a Common Type

When defining types in TypeScript, we may come across situations where we have multiple types that share some common properties. 

To avoid repeating the common properties in every type definition, we can extract those properties into a shared type, and use type intersections or extends (depending on whether we are using aliases or interfaces) to combine them with the unique properties. 

<table>
<thead>
  <tr>
    <th>Type Method</th>
    <th>Interface Method</th>
  </tr>
</thead>
<tbody>
<tr>
<td>

```ts
type Animal = {
  name: string;
  breed: string;
  age: number;
};

type Dog = Animal & {
  hasTail: boolean;
};

type Cat = Animal & {
  hasWhiskers: boolean;
};
```

</td>
<td>

```ts
interface Animal {
  name: string;
  breed: string;
  age: number;
}

interface Dog extends Animal {
  hasTail: boolean;
}

interface Cat extends Animal {
  hasWhiskers: boolean;
}
This approach 
```

</td>
</tr>
</tbody>
</table>

This approach can save us a lot of repetitive code when we have many types with common properties. Both ways work, but ultimately creating a common type and multiple subtypes is a more expressive and easier-to-maintain approach. 

This is another example:

```ts
type VehicleCommon = {
  make: string;
  model: string;
  year: number;
};

type Car = VehicleCommon & {
  bodyType: "sedan" | "hatchback" | "coupe" | "convertible" | "wagon";
  numDoors: 2 | 4;
};

type Truck = VehicleCommon & {
  bodyType: "pickup" | "box";
  numWheels: 4 | 6 | 8;
  payloadCapacity: number;
};

type Vehicle = Car | Truck;
```

Extracting shared properties into a common type can provide numerous benefits, primarily centered around code reusability, maintainability, and readability. If you notice you are using the same properties across multiple types, it might be more efficient and less error-prone to define them in one place and reuse them across your codebase.

As you gain experience using TypeScript, you will begin to develop an intuition for when to extract shared properties to a common type. As a newcomer to TypeScript, our recommendation is to not spend much time trying to create the "perfect" common types and subtypes before you get your code working. Some amount of code duplication is fine when you are first developing an application. After you get it working, then you can go back and refactor your types to reduce duplication and make your code more maintainable.

## Object Spreading

The spread operator (`...`) can be used to add the properties of an object or elements of an array into another object or array in JavaScript. This can be helpful when merging multiple objects or creating a new object with additional properties.

```ts
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Output: { a: 1, b: 2, c: 3, d: 4 }
```

One of the most significant benefits of using the spread operator in TypeScript is that the compiler enforces the object's type during the "merge".

```ts
interface User {
  id: number;
  name: string;
}

const user: User = { id: 1, name: "John" };
const userWithAge: User = { ...user, age: 30 };
// Type Error: Property 'age' does not exist on type 'User'.
```

Ordering is important with spread. If we put a property _after_ the spread, then we overwrite the original object's property. 

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "John", age: 30 };
const newPerson: Person = { ...person, age: 31 };
console.log(newPerson); // Output: { name: 'John', age: 31 }
```

If we put it _before_ the spread, the compiler will raise an error, as the first property is meaningless - it will be immediately overwritten.

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "John", age: 30 };
const newPerson: Person = { age: 31, ...person };
// 'age' is specified more than once, so this usage will be overwritten.
// This spread always overwrites this property.
```

## Defining Options Types

When writing functions, we sometimes want to provide optional parameters that don't need to be specified every time the function is called. However, having too many optional parameters can make a function's signature long and difficult to read. This is where the `options` parameter pattern comes in.

The `options` parameter pattern involves packing all optional parameters into a single options object, which is then passed to the function as a single argument. This simplifies the function signature and makes it easier to add or remove optional parameters in the future.

The `options` parameter pattern in TypeScript allows us to pack optional parameters into a single options object, which simplifies the function signature and makes it easier to add or remove optional parameters in the future. Optional object properties are automatically unioned with `undefined`, which means that they can be absent from the object. Finally, we can use the nullish coalescing operator (`??`) to provide default values for these properties. 

```ts
interface RectangleOptions {
  unit?: string;
}

function calculateRectangleArea(
  width: number,
  height: number,
  options: RectangleOptions = {}
): string {
  const unit = options.unit ?? "sq. units";
  const area = width * height;
  return `${area} ${unit}`;
}
```

## Passing Literal Objects

TypeScript's structural typing rules allow us to assign an object of a narrower type to an object of a wider type. One exception is when we pass a literal object as argument. In that case, the object's properties must exactly match the properties of the function's parameter type. This is a case where TypeScript's stricter handling of object literals prevents errors that can be easy for developers to miss.

```ts
function greet(person: Person) {
  console.log(
    `Hello, my name is ${person.name} and I am ${person.age} years old.`
  );
}

greet({
  name: "John",
  age: 30,
  department: "HR", // Error: Object literal may only specify known properties, and 'department' does not exist in type 'Person'.
});
```

## Working with Exceptions

In TypeScript handling exceptions can be tricky when it comes to type checking. 

```ts
try {
  throw new Error("Something went wrong!");
} catch (e: Error) {
  // Catch clause variable type annotation must be 'any' or 'unknown' if specified.
  console.log(e.message);
}
```

This is because in JavaScript it is possible to throw any value, not just instances of `Error`. For example, we could throw a `string`, `number`, `boolean`, or any other value. So, if we catch an exception, TypeScript can't be sure that the value we caught is an instance of `Error`. Therefore, it's not safe to assign that type to the value.

To work around this limitation, we have two options. The first is to catch the exception and type the variable using the any type. This is TypeScript's default behavior with strict mode off. It will allow us to catch any type of exception, but will sacrifice type safety:

```ts
try {
  throw new Error("Something went wrong!");
} catch (e) {
  // e: any
  console.log(e.message);
}
```

The second option is to catch the exception using the unknown type, which is a safer option because it forces us to use type guards to narrow down the type of the exception. This is the default behavior when using strict mode. 

```ts
class MyCustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}

let error: MyCustomError;
try {
  throw new MyCustomError("My custom error message");
} catch (e: unknown) {
  if (e instanceof MyCustomError) {
    error = e;
  } else {
    throw new Error("Unexpected error occurred");
  }
}
console.log(error.message);
```

By using the `unknown` type and type guards, we can catch and handle exceptions safely and effectively in TypeScript.

## Working with Promises: Async / await

Promises are an essential tool for asynchronous programming in modern JavaScript. 

To statically type promises, TypeScript provides the type `Promise<T>`, where T is the type of the value that the promise resolves to. For example, a promise that resolves to a number would have the type `Promise<number>`.

TypeScript provides additional support for the `then` method. When you chain promises with `then`, the type of the resolved value is determined by the return type of the last `then` callback in the chain. For instance, if you have a promise that resolves with a number and you chain it with a callback function that returns a string, the resulting promise has the type `Promise<string>`.

### Working with async/await

With the `async` and `await` keywords in JavaScript, we can use promises with a more natural and synchronous-looking syntax. `await` essentially "unwraps" a promise by pausing execution of the currently running `async` function until the promise resolves. When we `await` a `Promise<T>`, we get a value of type `T`.

```ts
async function retrieveString(): Promise<string> {
  const stringPromise: Promise<string> = new Promise((resolve) =>
    setTimeout(() => resolve("Launch School"), 1000)
  );
  const stringResult: string = await stringPromise;
  return stringResult;
}
```

## Rejected Promises

So far, we've seen how to work with promises when they resolve successfully. However, asynchronous work can fail for all sorts of reasons.

Handling rejected promises in TypeScript can be a challenge due to the use of the `any` type by default. This can lead to a loss of type safety and create the risk of runtime errors. However, by using the `unknown` type we can use type guards to narrow down the type of the error and ensure better type safety.

### Catching errors in TypeScript

TypeScript provides support for handling errors with the `catch` method. As we noted, the argument passed to `catch` can be any value, so by default, when we use `.catch(...)` on a promise, it infers the error argument as type `any`.

Working with the `any` type is unsafe. We should type error arguments as `unknown` instead of `any`, and then use type guards to narrow down the type. For instance:

```ts
Promise.reject("rejected").catch((error: unknown) => {
  if (typeof error === "string") {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  } else {
    throw new Error("We can't handle that type of error!");
  }
});
```

### Catching errors with `async`/`await`

Most modern JavaScript applications will use the `async`/`await` pattern to work with promises. Rather than the `catch` method, we handle errors with `async`/`await` functions by using `try`/`catch` blocks. In this case, the `error` argument that the `catch` block receives should be typed as `unknown`. 

```ts
async function handleError(): Promise<string> {
  try {
    const rejectedPromise: Promise<string> = Promise.reject("error");
    const result: string = await rejectedPromise;
    return result;
  } catch (error: unknown) {
    if (typeof error === "string") {
      return error;
    }
    throw new Error("We can't handle that type of error!");
  }
}
```

## Pick and Omit

TypeScript provides a range of utility types. Utility types are special types in TypeScript that help developers perform transformations from one type to another. 

We will explore are `Pick<T, K extends keyof T>` and `Omit<T, K extends keyof T>`. These two utility types allow us to create a type by selecting or excluding specific properties from an existing type.

### `Pick<T, K extends keyof T>`

If we only need certain properties of the `User` type, we can use `Pick` to create a new type with only those properties. 

```ts
interface User {
  name: string;
  email: string;
  age: number;
}

const user: NameOnly = { name: "John" };
```

We can also use Pick to select multiple properties by specifying a union of property names:

```ts
type NameAndAge = Pick<User, "name" | "age">;
```

`Pick` can be very useful when fetching data from an API and safely passing it around your application. We can use the Pick utility type to define types that only include the necessary properties for each situation.

```ts
// Full product type with all properties
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  color: string[];
  size: string[];
  image: string;
};

// Using Pick to select only the properties needed for the product listing page
type ProductListing = Pick<Product, "name" | "price" | "image">;

// Using Pick to select only the properties needed for the product detail page
type ProductDetail = Pick<Product, "description" | "size" | "color">;
```

Using `Pick` is ideal in this scenario because it creates an explicit connection between the `Product` type and the `ProductListing` and `ProductDetail` types. If, in the future, the API changes and one of the properties on Product is updated or removed, the compiler will raise a warning on related types:

### `Omit<T, K extends keyof T>`

`Omit` is the opposite of `Pick`: it creates a new type by excluding one or more properties from an existing type. 

We can also use `Omit` to create a new type that includes all properties except for one or more specified properties. 

```ts
type WithoutEmail = Omit<User, "email">;
const user: WithoutEmail = { name: "John", age: 35 };
```

It's important to note that if we add non-existing or wrongly typed properties, we will get the same type with no omissions.

### Utility types and generic constraints

We can do something like: `Pick<T, K extends keyof T>` and `Omit<T, K extends keyof T>`. 

Let's analyze `Pick<T, K extends keyof T>`:

Here, `T` is a generic placeholder that will be replaced by a specific type when we use `Pick`. It could represent a type like our `Product` from the previous examples.
`K extends keyof T` is an example of a generic constraint. The extends keyword is saying that `K` must be a subset of `keyof T`.

The result is a new type based on `T`, with only the keys specified as properties.

## Return Type and Parameters

As your program becomes more complex, you may find yourself in situations where:

- You have functions that produce similar kinds of output and you want to create a unified type that describes the shape of this output.
- You have related functions where the output of one function is the input of another function.
- You're building a function that should mirror the parameters of an existing function but does something slightly different.

### `ReturnType<T>`

The `ReturnType` utility type allows us to extract the return type of a function. 

In this case, `typeof` is a TypeScript operator, not the JavaScript operator that we are familiar with from our lessons on type guards. When used within TypeScript types (such as the type definition above), `typeof` returns the type of the given value. While JavaScript's `typeof` can only return primitive types, "object", and "function", the TypeScript version of the operator returns the complete type inferred by the compiler.

Remember, `ReturnType` takes a function _type_ as an argument, not the function itself. 

```ts
function createPerson(name: string, age: number) {
  return { name, age };
}
                                                 //     Parameters Types                    Return Type
type CreatePersonFunction = typeof createPerson; // (name: string, age: number) => { name: string; age: number; }

type Person = ReturnType<CreatePersonFunction>; // { name: string; age: number; }

function greetPerson(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
```

## `Parameters<T>`

TypeScript also provides a built-in type called `Parameters` that we can use to extract the parameter types of a function. `Parameters` returns the parameter types as a tuple. 

```ts
type AddFunction = (x: number, y: number) => number;
type AddParameters = Parameters<AddFunction>; // Equivalent to [number, number]
```

We can then use `AddParameters` to annotate a variable that holds an array of two numbers:

```ts
const params: AddParameters = [1, 2];
```

If we try to assign an array of a different length or with different element types to `params`, TypeScript will give us a type error.

#### rest parameters

What about rest parameters? In TypeScript, rest parameters are treated as an array type when used in the context of the `Parameters` type. When a function type contains rest parameters, the `Parameters` type will infer the type of the rest parameters as an array type. This allows for more flexible and reusable code, as rest parameters can be used to accept any number of arguments, which can then be processed as an array of a specific type.

```ts
function sum(prefix: string, ...numbers: number[]): string {
  const total = numbers.reduce((total, n) => total + n, 0);
  return `${prefix}${total}`;
}

type SumParameters = Parameters<typeof sum>;

const input: SumParameters = ["The total is: ", 1, 2, 3, 4];
const result = sum(...input);

console.log(result); // Output: The total is: 10
```

As we see in this example, the benefit of using the Parameters type: it helps us manage functions with more complex signatures by ensuring the correct types and order of arguments when invoking the function.

This is the general routine:

1. Extract the parameters type
2. Declare variable with that type and initialize it to an appropriate tuple.
3. Call the function using that variable plus the rest parameter (i.e. `...variable`)

## Partial

In TypeScript, sometimes we need a way to create objects that have some, but not necessarily all, of the properties of a given type. 

Manually defining a new type with optional properties using the ? syntax can be error-prone and verbose, especially if we have to keep track of changes in the original type.

TypeScript provides a built-in utility type called Partial<T>. The Partial type allows us to create a new type based on an existing type, where all the type's properties are optional. Here's an example:

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

const partialUser: Partial<User> = {
  name: "John",
};
```

The Partial type allows us to create a partial object without having to manually define a new type. When we access properties in a partial object, we need to handle the possibility that the property might be `undefined`. TypeScript enforces this by giving us a type error if we try to use an optional property without checking for `undefined` first.

```ts
type User = {
  name: string;
  age: number;
  email: string;
};

const partialUser: Partial<User> = {
  name: "John",
};

if (partialUser.age !== undefined) {
  // safe to use partialUser.age
  partialUser.age += 1;
}
```

One of the situations you may use the `Partial<T>` type is when working with functions that take an optional configuration object. This is particularly common when working with functions that call an API to get or change data on a server.

```ts
type ApiConfig = {
  page: number;
  pageSize: number;
  sort: "asc" | "desc";
};

const defaultConfig: ApiConfig = {
  page: 1,
  pageSize: 10,
  sort: "asc",
};

async function fetchUsers(config: Partial<ApiConfig> = {}): Promise<void> {
  const finalConfig = { ...defaultConfig, ...config };

  const response = await fetch(
    `/api/users?page=${finalConfig.page}&pageSize=${finalConfig.pageSize}&sort=${finalConfig.sort}`
  );
  const data = await response.json();

  console.log(data);
}

// Fetch users with default config
fetchUsers();

// Fetch users with custom config
fetchUsers({ page: 2, sort: "desc" });
```

In this example, we define an `ApiConfig` type and then use `Partial<ApiConfig>` as the type for the `config` parameter in the `fetchUsers` function. This tells TypeScript that `config` can have any subset of the properties of `ApiConfig`.

This makes the `fetchUsers` function quite flexible - it can accept a `config` object with any combination of `ApiConfig` properties, and will fill in default values for any properties that aren't provided by the `config` object.

## Object Values at Runtime

While TypeScript helps catch bugs early and improve the maintainability of code, it's important to remember that TypeScript types do not affect the runtime behavior of JavaScript code.

While TypeScript enforces how we can interact with our values during development, it can't guarantee the shape and type of data we receive at runtime. It also doesn't prevent the access of properties or values at runtime, even if those properties violate the shape of our TypeScript types. Ultimately, TypeScript adds an important layer of type safety to our code, but we must be aware of its limits, particularly when dealing with sensitive data.

This can be a security risk if the serialized object contains sensitive information that shouldn't be exposed.

Finally, if an object contains a large amount of unnecessary data due to extra properties, serializing or sending the object over the network can cause performance issues.

To avoid this problem, we can use libraries like `io-ts`, `runtypes`, or `zod` to enforce our types at runtime and prevent extra properties from being included in serialized objects.

Some examples:

```ts
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Jane", age: 45 };
const personName: { name: string } = person;
console.log(personName.age); // Type error: Property 'age' does not exist on type 'PersonName'.
```

If we try to access `personName.age` during development, TypeScript will throw a type error, because age is not part of the `PersonName` type definition. 

When we compile this TypeScript code to JavaScript, the type annotations are removed. It's important to note that the `age` property still exists on the `personName` object at runtime, even though it's not part of the type definition.

Of course, we can bypass the type system and access age by using a type assertion:

```ts
console.log((personName as any).age); // 45
```

