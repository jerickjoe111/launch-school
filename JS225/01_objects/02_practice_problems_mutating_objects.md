# Practice Problems: Mutating Objects

## 1. What will the code below output to the console?

```js
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);
```
```
Hello from the function scope!
Hello from the global scope!
```

## 2. What will the code below log to the console? What does this output demonstrate in relation to the output of problem one?

```js
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);

console.log(myObj.message);
```

```
Greetings from the function scope!
Greetings from the function scope!
```

In this case we pass as argument a copy of the reference to the object, thus making possible to alter the object's state within the function. This change is permanent. In the previous case, we are simply reassigning a local variable within the function to a new string, which does not affect the outer variable `message`.

## 3. What will the code below log to the console?

```js
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);
```
```
Hello from the function scope!
Hello from the function scope!
```

## 4. What will the code below log to the console?

```js
let a = 10;
let obj = {
  a
}

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj.a === obj.a);
```

```
false
true
```

## 5. Consider the code below:

```js
let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true
```

## If objects are mutable, why does the second to last line return false?

This is the case because `menagerie.warthog` still holds the object to which we assigned `animal` on line 1; when we reassign the variable `animal` on line 10, this does not affect the value of `menagerie.warthog`.

