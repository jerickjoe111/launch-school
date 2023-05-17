What will the following code log to the console and why? Don't run it until you have tried to answer.

## Question 1

```js
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors); // ['red', 'green', 'blue', 'yellow']
```

The variable `color` is in scope within the function; by calling the method `push()` on the `colors` array, we are permanently mutating it by adding the value of `color` to the end. And, by passing the variable `colors` as an argument to the function, we are actually passing a copy of the reference to the array, thus we are indeed modifying the original array.

## Question 2

```js
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors); // ['red', 'green', 'blue', undefined]
```

This is the case because in JavaScript, when we pass less arguments than parameters defined, the unassigned parameters are set to `undefined`. So we are modifying the original array `colors` is pointing to by pushing into it the value of the `color` argument, `undefined`.

## Question 3

```js
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors); // ['red', 'green', 'blue', 'purple', 'pink']
```

This time the parameter is assigned to the value of the second argument, the variables `color1` and then `color2` on the second `updateColors()` invocation, so we are pushing into the array actual color strings.

## Question 4

```js
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1); // we push 'pink` into the `colors` array, return the same array
updateColors(newColors, color2);
console.log(colors); // ['red', 'green', 'blue', 'purple', 'pink']
```

## Question 5

```js
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors); // ['red', 'green', 'blue']
```

We call `removeColor(colors)` passing a reference of the array as an argument, and then, the return value of the function, the color extracted from the original array, the string `blue` is assigned to the global variable `color`. So, when we invoke `addColor()` passing the array and the `color` value, is again a string `blue`, which `color` was reassigned to within the body of the `removeColor()` function, what is pushed into the array.

## Question 6

```js
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word); // 'Hello'
let exclaimedWord = exclaim(capitalizedWord); // 'hello!!!'

console.log(word); // 'hello'
console.log(capitalizedWord); // 'Hello'
console.log(exclaimedWord); // 'hello!!!'
```

The trick here is that we pass an argument to each of the function invocations, but the functions don't define any parameters: they return the global variable `word`, which is accessible from within the body of both functions.

## Question 7

```js
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word); 
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); // 'hello'
console.log(capitalizedWord); // 'Hello'
console.log(exclaimedWord); // 'Hello!!!'
```

It's the same case as the previous question, but here the functions define a `word` parameter, which is assigned to the value of the variables passed as arguments, to then be assigned to the `capitalizedWord` and `exclaimedWord` global variables. The functions return a new string object in both cases.



