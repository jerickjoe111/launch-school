# Modules

1. [Why modules?](#why-modules)
2. [Modules in Node](#modules-in-node)
3. [ES6 Modules](#es6-modules-the-official-javascript-modules)

## Why modules ?

Although this is not a problem for small, self-contained programs, actual, real-world programs tend to increase in size and complexity, which makes them harder to understand and to work with. In consequence, large single-file programs become problematic: besides the inconvenience of the file navigation itself, the risk of breaking the code with just a little change in it grows almost exponentially, and more even so when different team members are working on the same program. It becomes natural to split a program into as many files as needed: This is when program modularization comes into play.

The purpose of modular programming is to enable the assembly of large, complex programs using  modules from various sources, while ensuring that all of that code functions properly as an orchestration of different parts. Practically speaking, modularity is concerned about encapsulating or hiding private implementation details while keeping the global namespace clean, in order to prevent modules from unintentionally changing variables, methods, or classes defined by other modules.

In a JavaScript context, we can talk about _Node modules_ and _ES6 modules_.

## Modules in Node

Node was created before JavaScript had an official module system, so it came to be the pioneer of implementing this functionality. Different Node modules sought to provide core functions while reducing the complexity of their use in server applications: functions like file system I/O, networking, cryptography functions, etc.

With ES6 (2016), however, JavaScript finally supported real modularization as a core feature of this language, adding the `import` and the `export` keywords. As a result, Node was put in the position of having to support two module systems, not entirely compatible with each other: its own system ( `require()`-based Modules) and the official JavaScript system, what we call now _ES6 modules_ or _JS modules_. Node 13 (2019) added full support for ES6 modules, but, to this date, the vast majority of Node applications still use Node modules.

Each file in Node is a standalone module with its own private or local namespace. Variables, constants, functions, and classes defined in one file are private to that file, unless the file explicitly exports them. Additionally, values exported by one module can only be accessed by a module that specifically imports them.

This system involves a closure-based modularity: Node modules export their public API by adding properties to the Exports object (`module.exports`) or by replacing that object entirely in the exporting file. Node modules import other modules by invoking the `require()` in the importing file, passing a string representing the file's location that contains the code we want to import, or just the package name in case we want to import a module we installed via the NPM manager. `require()` will return the `module.exports` value we defined in the exporting file.

### CommonJS modules

Node calls the `require()`-based modules _CommonJS modules_. 

We can access the module via the `module` variable.

#### Exporting data

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

#### Importing the data

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

For many years browsers didn't natively support JavaScript modularization, and, due to the synchronous nature of Node's system, it forced the developers to depend on external code-bundling tools in order to use ES6 modules on browsers. Fortunately, ES6 modules are finally supported by almost all web browsers: to use them, we can just plug them into the HTML document with a `<script type="module">` tag. To support older browsers, we still depend on external tools.

ES6 modules system is conceptually the same as Node's, however, they differ in two aspects: the syntax used for exporting and importing, and the way in which modules are defined in web browsers.

### Importing and exporting the data

To import values from a module file into the main file we just need the `export` keyword before the declaration. If we are using Node, we need to either change the extension of the files to `.mjs` or add the `type: "module"` property to the `package.json` file.

Module file:

```js
export function func() {
  return 'whatever'
}

export let variable = 1;
export const constant = 2;
export let object = { a: 1 };
```

Main file:

```js
import { func, variable, constant, object } from "./module.mjs";

func(); // => 'whatever'
variable; // => 1
constant; // => 2
object; // => { a: 1 }
```

#### Named imports

We can rename the name bound to each value we import:

```js
import { func as renamedFunction } from "./module.mjs";
renamedFunction(); // => 'whatever'
```

#### Namespace imports

We can import all declarations from a file using the `*` syntax, and using the `.` syntax to access its values:

```js
import * as MyModule from "./module.mjs";

MyModule.func(); // => 'whatever'
MyModule.variable; // => 1
MyModule.constant; // => 2
MyModule.object; // => { a: 1 }
```

#### Default exports

We can establish default exporting values to provide a _primary_ of _fallback_ export. Only one default export is allowed per module, and the curly braces are not required:

Module file:

```js
function func() {
  return 'whatever'
}

export default func;
```

Main file:

```js
import func from "./module.mjs";

func(); // => 'whatever'
```

We can even rename a default import:

```js
import otherName from "./module.mjs";

otherName(); // => 'whatever'
```

We can mix named and default exports in a JavaScript module.
