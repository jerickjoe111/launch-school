# 1. What naming convention separates constructor functions from other functions?

First letter in upper case

# 2. What will the code below output? Why?

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
```

The last line will raise a `TypeError` exception because, as we are not declaring a return value with `return`, the function just returns `undefined`, which is assigned to `lizzy`, upon we are trying to call a non-existent `scamper` property.

# 3. Alter the code in problem 2 so that it produces the desired output.

```js
function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
```