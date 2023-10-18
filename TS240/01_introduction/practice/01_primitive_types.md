# Practice Problems: Primitive Types


1. Will the code below raise an error?

```ts
let x: number = 2;
let y: number = 2;
let result: string = x + y;
```

Yes. 4 is a number.

2. Will the code bellow raise an error?​

```ts
let x: number = 2;
let y: string = "2";
let result: string = x + y;
```

No, as the resulting expression is a string `'22'`, not a number.

3. Will the following code raise an error?​

```ts
let x: number = 2;
let y: string = "2";
let result: boolean = x === y;
```

Yes, because TypeScript infers there must be an error with that comparison of types without overlap between them.

4. Will the following code raise an error?​

```ts
let x: boolean = true;
let y: number = 2;
let z: string = "";
let result: boolean = x || y || z;
```

No, as the expression results in a boolean `true`.

5. Will the code below raise an error?​

```ts
let x: boolean = true;
let y: number = 2;
let z: string = "";
let result: boolean = (x && y) || z;
```

Yes, because TypeScript infers the whole expression as being `number | string` (the first one evaluates to `2`), not assignable to `boolean`.

6. Will the code below raise an error?

```ts
let x: undefined;
x = 1;
```

Yes, type `number` is not assignable to type `undefined`.
