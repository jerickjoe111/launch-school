# Practice Problems: The `keyof` Operator

1. Will the following code result in a type error or execute without any issues?

```ts
interface Student {
  name: string;
  age: number;
}

let key: keyof Student = "grade";
// keyof Student = <'name' | 'age'>
```

There will be an error: 'grade' is not present in interface `Student`.
