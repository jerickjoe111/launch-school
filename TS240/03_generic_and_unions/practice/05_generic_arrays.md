# Practice Problems: Generic Arrays

1. Does the code below use generic array type correctly?

```ts
let numbers: Array<number> = [1, 2, 3]; // Yes
```

2. Does the code below use generic array type correctly?

```ts
let strings: string[] = ["apple", "banana", "cherry"]; // yes
```

3. Does the code below use generic array type correctly?

```ts
let bools: boolean[[]] = [true, false, true]; // No
```

4. Does the code below use generic array type correctly?

```ts
type FruitNames = "apple" | "banana" | "cherry";
const fruits: Array<FruitNames> = ["apple", "banana", "mango"]; // No
```
