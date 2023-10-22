# Practice Problems: Working with Promises

1. Below is a sample JavaScript function that uses promises:

```ts
function getData(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
```

Convert the `getData` function to TypeScript by adding proper types. Additionally, rewrite the function using the async/await syntax.

```ts
async function getData(url: string): Promise<void> {
  let response = await fetch(url)
  let data = await response.json();

  console.log(data)
}
```