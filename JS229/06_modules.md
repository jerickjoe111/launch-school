# Modules

## Why modules ?

Although this is not a problem for small, self-contained programs, actual, real-world programs tend to increase in size and complexity, which makes them harder to understand and to work with. In consequence, large single-file programs become problematic: besides the inconvenience of the file navigation itself, the risk of breaking the code with just a little change in it grows almost exponentially, and more even so when different team members are working on the same program. It becomes natural to split a program into as many files as needed: This is when program modularization comes into play.

The purpose of modular programming is to enable the assembly of large, complex programs using  modules from various sources, while ensuring that all of that code functions properly as an orchestration of different parts. Practically speaking, modularity is concerned about encapsulating or hiding private implementation details while keeping the global namespace clean, in order to prevent modules from unintentionally changing variables, methods, or classes defined by other modules.

In a JavaScript context, we can talk about _Node modules_ and _ES6 modules_.

## Modules in Node

Node was created before JavaScript had an official module system, so it came to be the pioneer of implementing this functionality. Different Node modules sought to provide core functions while reducing the complexity of their use in server applications: functions like file system I/O, networking, cryptography functions, etc.

Each file in Node is a standalone module with its own private or local namespace. Variables, constants, functions, and classes defined in one file are private to that file, unless the file explicitly exports them. Additionally, values exported by one module can only be accessed by a module that specifically imports them.

This system involves a closure-based modularity: Node modules export their public API by adding properties to the Exports object (`module.exports`) or by replacing that object entirely. Node modules import other modules via the `require()`.

With ES6 (2016), however, JavaScript finally supported real modularization as a core feature of this language, adding the `import` and the `export` keywords. As a result, Node was put in the position of having to support two module systems, not entirely compatible: its own system ( `require()`-based Node Modules) and the official JavaScript system, what we call now _ES6 modules_. Node 13 (2019) added full support for ES6 modules, but, to this date, the vast majority of Node applications still use Node modules.

## CommonJS modules

Node calls the `require()`-based modules _CommonJS modules_. 

We can access the module via the `module` variable.

### Exporting data

We have to first create a `.js` file with the modular code, and then we can either add the values we want to export as properties of the `module.exports` object, or replace this object entirely:

Module file:

```js
let someObjectToExport() {
  a: 1,
  b: 2,
};
let someVariableToExport = 1;

module.exports.variable = someVariableToExport; // add a property
module.exports = someObjectToExport; // replace the object with another value
```

### Importing the data

We can import local files by providing the path to it, or just the package name if we installed it with the NPM manager.

Main file:

```js
const IMPORTED = require('./moduleFile.js')
```

It is also possible to use object destructuring assignment to import the `module.exports` object:

```js
const { a, b } = require('./moduleFile.js');
```

## ES6 modules (the official JavaScript modules)



