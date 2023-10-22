# Practice Problems: Practice Problems: Rejected Promises

1. Let's revisit the solution we created in our last practice problem:

```ts
async function getData(url: string): Promise<void> {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
```

This time, try to extend it by adding some try-catch logic to make our function more robust. Use the `unknown` type for the error we catch. Since the error is of type `unknown`, do some simple type guarding to narrow down the type of error and handle them accordingly. If it's an error object, log out the error message, otherwise, log out `"An unknown error occurred"`.

```ts
async function getData(url: string): Promise<void> {
  try {
    let response = await fetch(url)
    let data = await response.json();
    console.log(data)
  } catch (e: unknown) {
    if (e instanceof Error) console.log(e.message)
    else console.log('An unknown error ocurred')
  }
}
```