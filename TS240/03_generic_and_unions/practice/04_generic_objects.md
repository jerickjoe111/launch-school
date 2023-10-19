# Practice Problems: Generic Objects

1. Does the code below use generic object type correctly?

```ts
type Pair<T, U> = {
  first: T;
  second: U;
};

const myPair: Pair<number, string> = { // this one does
  first: 42,
  second: "Answer",
};

const yourPair: Pair<number, string> = { // error; order in type variables is important
  first: "Another answer",
  second: 42,
};
```

2. Does the code below use generic object type correctly?

```ts
type KeyValuePairs<T, U> = {
  key: T;
  values: U[];
};

const myPairs: KeyValuePairs<string, number> = {
  key: "Numbers",
  values: [1, 2, 3, 4, 5],
};

const yourPairs: KeyValuePairs<number, string> = {
  key: 42,
  values: ["One", "Two", 3, "Four"], // error; must be an array of strings
};
```
