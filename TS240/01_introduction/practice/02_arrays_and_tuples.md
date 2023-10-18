# Practice Problems: Arrays and Tuples


1. Will the code below raise an error?

```ts
let arr: string[] = ["hello", "world"];
arr.push(5);
```

Yes, because the argument is not of type `string`

2. Will the code bellow raise an error?​

```ts
let tuple: [number, number] = [1, 2];
tuple.push("3");
```

Yes, because argument is not of type `number`. Tuples implement the same methods as the array. This leads to unexpected behavior, and we should not use them.

3. Will the following code raise an error?​

```ts
let tuple: [number, number] = [1, 2];
tuple.push(3);
```

No, because argument is of type `number`. Tuples implement the same methods as the array. This leads to unexpected behavior, and we should not use them.


4. Will the following code raise an error?​

```ts
let tuple: [number, string] = [1, "2"];
tuple[0] = "1";
```
Yes, because the type of the new value is not of type `number`

5. You have seen that you can create a tuple that holds different types of values. Let's take a look at this array:

```ts
const myArray = ["is", "launch school", "awesome", true, "or", false];
```

This array consists of both string and boolean values. If you had to assign a type definition to `myArray`, what would it be?

```ts
const myArray: (string | boolean)[]
```

```ts
const myArray: Array<string | boolean>
```
