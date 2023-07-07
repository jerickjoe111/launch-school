# 1. In the following code, when can JavaScript garbage collect each of the following arrays? [1], [2], and [1, 2].

```js
let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();
```

- `[1]`: after line 4 is executed.
- `[2]`: when `run` ends its execution. 
- `[1, 2]`: we need to dereference `a` (was reassigned on line 12)

# 2. In the following code, when can JavaScript garbage collect the value ["Steve", "Edie"]?

```js
function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
```
We need to dereference `helloSteveAndEdie`, as it is retaining two references to the literal array in its closure. This array won't be GC until the program ends.