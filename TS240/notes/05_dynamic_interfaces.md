# 05: Dynamic Interfaces

We will delve into more advanced concepts that allow us to work with objects in even more flexible and powerful ways. We will explore how to extend, combine, and define interfaces with a flexible number of properties. We will also take a look at how interfaces represent special types of JavaScript objects like functions, classes, and arrays. 

## Declaration Merging

Declaration merging refers to the TypeScript compiler's ability to take two separate interface declarations that share the same name and create a single interface that merges the original ones. When this occurs, it combines the properties and methods (in the case of interfaces) from both declarations into one. This merged declaration will contain all the members from both original declarations. 

We can merge an imported interface with an interface defined locally with the same name:

```js
import { Mammal } from "./animals";
/*
interface Mammal {
  name: string;
  legs: number;
}
*/

interface Mammal {
  color: string;
}

/*
The merged  Mammal interface is now equivalent to:

interface Mammal {
  name: string;
  legs: number;
  color: string;
}
*/

let cat: Mammal = {
  name: "Bob",
  legs: 4,
  color: "white",
};
```

If the two declarations define the same member in incompatible ways, TypeScript will raise an error:

```js
interface Mammal {
  legs: number;
}

interface Mammal {
  legs: boolean; // Subsequent property declarations must have the same type.  Property 'legs' must be of type 'number', but here has type 'boolean'.
}
```

It's important to note that declaration merging only works with interfaces, not type aliases. In other words, this works:

```js
interface Student {
  id: number;
  name: string;
}

interface Student {
  classList: Array<string>;
}

```

Whereas this will raise an error:

```js
type Student = {
  id: number;
  name: string;
};

type Student = {
  // Duplicate identifier 'Student'
  classList: Array<string>;
};
```

## Extending Interfaces

Declaration merging is useful when we truly want to update a type. However, in many cases we would prefer to create a new type that has all the properties of an existing type, plus some new ones. This way, we retain access to both types - the original type and the new type.

To achieve this, we can use another feature of interfaces, the `extends` keyword. The `extends` keyword allows you to use an existing type as a base when defining a new type. The new type will have all the properties of the existing type (including optional properties), plus the new properties that you define.

You will use extends frequently as you begin building interfaces based on other types. Keep in mind that the `extends` keyword only works with `interface` definitions, not `type` definitions:

`extends` is frequently used when defining a more specific type based on a general type. 

```js
interface Mammal {
  name: string;
  legs: number;
}

interface Elephant extends Mammal {
  trunkLength: number;
}

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  trunkLength: 6,
};
```

An interface can extend multiple types in the same definition:
```js
interface Mammal {
  name: string;
  legs: number;
}

interface Tusked {
  tuskCount: number;
  tuskColor: string;
}

interface Elephant extends Mammal, Tusked {
  trunkLength: number;
}

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  tuskCount: 2,
  tuskColor: "ivory",
  trunkLength: 6,
};
```

Note that interfaces can extend types defined via interface or type:

```js
interface Mammal {
  name: string;
  legs: number;
}

type Tusked = {
  tuskCount: number;
  tuskColor: string;
};

//ok
interface Elephant extends Mammal, Tusked {
  trunkLength: number;
}
```

## Extending interfaces with conflicting properties

If you try to extend an interface with another interface that has the same property, then the two properties must have compatible types. Otherwise, the compiler with throw an error:

```js
interface User {
  id: string;
  name: string;
}

interface Student extends User {
  id: number; // Interface 'Student' incorrectly extends interface 'User'.
  // Types of property 'id' are incompatible.
  // Type 'number' is not assignable to type 'string'
  courses: string[];
}
```

What does it mean for property types to be compatible? In this case, it means that the new property's type must be a subset of the existing property's type. In other words, the new property's type must be assignable to the existing property's type.

> _Assignability comes into play when you try to assign a value of one type to a variable of another type. In general, you can assign a value of a narrower type to a variable of a wider type without issues, as the wider type can accommodate all values of the narrower type. However, the reverse is not true: assigning a value of a wider type to a variable of a narrower type will cause a type error_

We could resolve the above error in two ways:

1. Change the `id` property on User to a wider type that includes `number`.

```js
interface User {
  id: string | number;
  name: string;
}

interface Student extends User {
  id: number;
  courses: string[];
}
```

2. Change the `id` property on Student to a narrower type assignable to `string` (for example, a string literal)

```js
interface User {
  id: string;
  name: string;
}

interface Student extends User {
  id: "STUDENT";
  courses: string[];
}
```

## Type Intersections

Type intersections allow you to combine multiple types into a single type. This can be useful when you want to create a new type that has the properties and methods of multiple types. If this sounds similar to `extends`, that's because it is. Type intersections are expressed with the operator `&`. An intersection of type `A` and `B` would be expressed as `A & B`.

Let's take a look at the example from our previous assignment on extends, and refactor it to use an intersection:

```js
type Mammal = {
  name: string;
  legs: number;
};

type TrunkedAnimal = {
  trunkLength: number;
};

type Elephant = Mammal & TrunkedAnimal;

const ellie: Elephant = {
  name: "Ellie",
  legs: 4,
  trunkLength: 6,
};
```

We can create intersections also with object literal types:

```js
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Review = {
  id: string;
  productId: string;
  rating: number;
  comment: string;
};

type ProductWithReviews = Product & {
  reviews: Review[];
};
```

### Intersections with conflicting properties

Type intersection create 'sub-intersections' for conflicting properties, with their value types as the sub-intersection members. If the sub-intersection does not have intersecting (common) properties, it will assign the type `never` to the resulting conflicting property in the new type:

> The `never` type is a special type in TypeScript: the compiler will raise an error when you assign any value to a variable of type never.

```js
type User = {
  id: string;
  name: string;
};

// ok
type Student = User & {
  id: number; // We don't receive an error when creating this new type with this conflicting property! 
  courses: string[];
};
```

Then, given the above type definitions

```js
const alice: Student = {
  id: 42, // Type 'number' is not assignable to type 'never'
  courses: ["Biology", "Philosophy"],
};
```

This behavior is one of the reasons that many developers prefer extending interfaces to using types with intersections. While there can be scenarios where an intersection of properties is beneficial, in the majority of cases we would prefer the compiler to raise warnings as close to a problem as possible. In professional applications, type definitions are usually more complex and determining why a property is type `never` would require backtracking through the parent types and manually assessing which property types are incompatible.

By contrast, the immediate error message we get from `extends` makes our code easier to maintain over time.

## Differences between Interfaces and Types

In TypeScript, interfaces and types are often used interchangeably, but they do have some key differences. 

### Interfaces define objects, type aliases can define all types

An interface is a way to define the shape of an object. It allows us to specify the names, types, and optionally whether they are optional or `readonly`. 

On the other hand, type aliases have a somewhat broader function: they allow us to give a name to a specific type or combination of types, including objects.

However, unlike interfaces, type aliases can be used to define types other than objects. That includes primitives, tuples, and unions of objects.

### Declaration merging

Interfaces in TypeScript are considered "open" in the sense that they are subject to declaration merging. This means that you can declare an interface with a certain name, and then declare an interface with the same name elsewhere in your code, and TypeScript will merge them together into a single interface that includes all the properties from both declarations.

This extensibility can be a helpful feature when working with types imported from a third-party library.

On the other hand, type aliases in TypeScript are "closed". Once you've declared a type alias, you can't re-declare it somewhere else to add additional properties. If you do, TypeScript will throw an error.

### Extending Interfaces vs. Type Intersections

These two approaches are functionally similar. However, `extends` tends to be more expressive when indicating a hierarchical relationship between the base type and the new type:

### Interfaces provide clearer error messages

Interfaces generally provide clearer and more succinct error messages than type aliases, given the same scenario. 

### In Conclusion

In general, **interfaces are preferred over types when defining the shape of an object** in TypeScript. This is because interfaces are more flexible than types: interfaces can be extended, implemented, and merged, which allows for greater code reusability and modularity. They also play well with other TypeScript features, such as type checking and the TypeScript language service.

On the other hand, **types are better suited for creating aliases for primitive types, unions of types, and other more complex types**. They are also useful for defining types that cannot be expressed with interfaces, such as tuple types.

The official documentation recommends using interfaces unless the specific features of types are needed.

## Index Signatures

When working with interfaces in TypeScript, we generally have to specify all the properties and their types. This works well when we know exactly what properties our objects will have. However, sometimes we don't know what the properties on the object will be ahead of time.

Index signatures in TypeScript allow you to define a dynamic set of properties for an object. This means you can define an object with properties that aren't known ahead of time.

### Basic syntax

The basic syntax for defining an index signature in TypeScript is as follows:

```js
interface Interface {
  [key: string]: Type;
}
```

In this example, `Interface` is an interface that defines an object with a key of type `Type` and value of type `Type`. The `[key: string]` part of the index signature tells TypeScript that any string can be used as a property for this object. The `Type` in the value position of the signature allows a type `Type` to be used as a value for the property.

## Building interfaces with index signatures

For example:

```js
interface Accounts {
  [username: string]: UserProfile;
}

type UserProfile = {
  name: string;
  age: number;
  email: string;
};

const userAccounts: Accounts = {
  coolCoder123: {
    name: "Ada Lovelace",
    age: 27,
    email: "ada@lovelace.com",
  },
  jsPro42: {
    name: "Grace Hopper",
    age: 32,
    email: "grace@hopper.com",
  },
};
```

In this example, we define `Accounts` as an interface with an index signature that allows any `string` key and the value to be a `UserProfile`. We then create an object `userAccounts` with two properties. Since we've defined the index signature to allow any `string` key, we can add more properties to the object in the future.

### Adding named properties

We can use an index signature in combination with specific named properties:

```js
interface Accounts {
  [username: string]: UserProfile;
  admin: UserProfile;
}

const userAccounts: Accounts = {
  coolCoder123: {
    name: "Ada Lovelace",
    age: 27,
    email: "ada@lovelace.com",
  },
  jsPro42: {
    name: "Grace Hopper",
    age: 32,
    email: "grace@hopper.com",
  },
  admin: {
    name: "Alan Turing",
    age: 41,
    email: "alan@turing.com",
  },
};
```

Note that named properties must have types that are consistent with the type in the index signature.

## `readonly` properties

We can apply the `readonly` keyword index signatures just like other properties:

```js
interface UserProfile {
  readonly [key: string]: string;
}

const user: UserProfile = {
  name: "Ji",
  email: "ji@jimail.com",
};
```

### Index signatures in practice

Index signatures can be used in a variety of scenarios, and are especially useful when working with data that you receive at runtime from APIs or files. 

When parsing JSON data, we often don't know the exact structure of the data. Using index signatures can help parse JSON data more easily:

```js
interface MyJSONData {
  [key: string]:
    | string
    | number
    | boolean
    | null
    | MyJSONData
    | Array<string | number | boolean | null | MyJSONData>;
}

const jsonData: MyJSONData = JSON.parse(
  '{ "name": "John", "age": 30, "address": { "street": "123 Main St", "city": "Anytown", "state": "CA" }, "hobbies": ["reading", "music"] }'
);

/*
Note that the shape of jsonData matches the index signature: 

jsonData = {
  name: "John",
  age: 30,
  address: { street: "123 Main St", city: "Anytown", state: "CA" },
  hobbies: ["reading", "music"],
};

*/
```

While index signatures can be very useful, it's important to keep in mind that they can also be abused and lead to unexpected behavior. Therefore, it's always a good practice to use index signatures judiciously and to define them with a clear understanding of how they will be used in the codebase.

## Arrays and Index Signatures

The relationship between arrays and objects in JavaScript can cause confusion, especially when working with TypeScript. As we've demonstrated, you can use index signatures to describe both array-like types and object types. It is perhaps most helpful to think of arrays as special types of objects. Understanding this relationship can help you avoid issues in your code, particularly when working with type guards and index signatures.

For example, using generics in TypeScript, we don't have to do too much work to create a simple `CustomArray` type:

```js
interface CustomArray<T> {
  length: number;
  [index: number]: T;
}
```

### Connection between arrays and JS objects

#### `typeof`

We can't use the `typeof` operator to narrow the type to an array in TypeScript, as it returns 'object'. Instead, we have to use the `Array.isArray` function.

#### The `object` type as parameter

The object type represents any non-primitive value. We generally recommend avoiding using it, but in this case, we can use it to show the relationship between objects and arrays. If a function takes an object, TypeScript will let us pass an array as well:

```js
function doSomething(obj: object) {
  console.log("It worked!");
}

doSomething({ name: "Jane" }); // 'It worked!'
doSomething([1, 2, 3]); // 'It worked!'
```

## The `object` type

The object type is a built-in type that can be assigned any non-primitive value.

```js
let obj: object;
obj = { name: "Pete" }; // OK
obj = []; // OK
obj = () => "hello world"; // OK

obj = 42; // Error
obj = "string"; // Error
obj = false; // Error
obj = null; // Error
obj = undefined; // Error
```

The `object` type is almost never useful because it doesn't provide any information about the properties of the object, which can lead to type errors when accessing properties that don't exist.

Although there aren't many situations where we truly don't know anything about an object's properties at runtime, in those cases we can define interfaces with flexible properties using index signatures and strong type safety with `unknown`.

```js
interface CustomObject {
  [key: string]: unknown;
}
```

This definition tells TypeScript that we have a type called `CustomObject`. The index signature key has type string, while the value property is of type unknown, which means we can assign any type of value to it.

The `unknown` type for each value will give us a measure of type safety by forcing us to narrow the value's type before calling any method on it.

## The `keyof` Operator

TypeScript can't verify that some string as a function parameter will be a valid (existing) key for an interface (we could pass any string). Even if it is a valid property name, the compiler doesn't know what the value's type is, so it defaults to `any`. 

```js
type Animal = {
  name: string;
  species: string;
  age: number;
  isEndangered: boolean;
};

function getAnimalProp(animal: Animal, key: string): unknown {
  return animal[key]; // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Animal'.
  // No index signature with a parameter of type 'string' was found on type 'Animal'
}
```

To deal with this problem, we can use the `keyof` operator. This operator evaluates to a union of an interface's properties:

```js
function getAnimalProp(animal: Animal, key: keyof Animal): unknown {
  return animal[key];
}

// keyof Animal === 'name' | 'species' | 'age' | 'isEndangered'
```

The `keyof` operator is very useful whenever we want to dynamically create a new type based on the properties on an existing interface.

## Generic Constraints

Generics, which allow us to create reusable and flexible types and functions:

```js
function first<T>(arr: T[]): T {
  return arr[0];
}

let numArray = [1, 2, 3, 4, 5];
let strArray = ["a", "b", "c", "d", "e"];

let firstNum = first<number>(numArray); // Type of firstNum is number
let firstStr = first<string>(strArray); // Type of firstStr is string
```

In this example, the `first` function accepts any type `T` as a type parameter. However, in many cases we want to guarantee that specific properties will exist on the type that is passed in. 

Here the compiler raises an error because it cannot determine that the generic argument `T` will have an age property on it:

```js
function describeItem<T>(item: T) {
  if (item.age < 10) {
    // Property 'age' does not exist on type 'T'
    console.log("This piece is fairly new, and still has that fresh style!");
  } else if (item.age >= 10 && item.age <= 20) {
    // Property 'age' does not exist on type 'T'
    console.log("This piece has some years on it, giving it a touch of character!");
  } else {
    console.log("This is a true antique, with a history that speaks volumes!");
  }
}
```

**Generic constraints help us refine and restrict our generic types**, providing more stringent rules that these types must adhere to. It's a way of saying, "I want this to work with any type, but that type must have certain characteristics or capabilities". This allows us to maintain the flexibility of generics, but with an added layer of type safety.

A generic constraint is defined using the `extends` keyword:

```js
function describeItem<T extends { age: number }>(item: T) {
  //                  ^^^^^^^^^^^^^^^^^^^^^^^^^
  if (item.age < 10) {
    console.log(`This item is ${item.age} years old. It's still got that fresh style!`);
  } else if (item.age < 100) {
    console.log(`This item is ${item.age} years old, giving it that touch of character!`);
  } else {
    console.log(`Wow! This item is ${item.age} years old. This is a true antique, with a history that speaks volumes!`);
  }
}
```

Here, we use the constraint `T extends { age: number }`. The function will accept an item argument of any type, as long as it contains an `age` property with a value of type `number`:

The constraint creates a type intersection in which, at least, the second member properties must be present. If a passed-in object does not have these properties, it won't be of the appropriate type, and the compiler will raise an error.

Generic constraints form the basis of many advanced patterns in TypeScript. Understanding and applying generic constraints is a key step towards mastering TypeScript and building robust, type-safe applications.