import * as MyModule from "./module.mjs";

console.log(MyModule.func()) // => 'whatever'
console.log(MyModule.variable) // => 1
console.log(MyModule.constant) // => 2
console.log(MyModule.object) // => { a: 1 }