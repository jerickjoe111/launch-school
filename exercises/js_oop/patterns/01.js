// Implement an ancestors method that returns the 
// prototype chain (ancestors) of a calling object 
// as an array of object names. 

function ancestors() {
  function getPrototypeName(object) {
    return object.name || `${prototype.constructor.name}.prototype`;
  }

  let prototype = Object.getPrototypeOf(this);
  let prototypes = [];
  while (prototype) {
    let prototypeName = getPrototypeName(prototype)
    prototypes.push(prototypeName);
    prototype = Object.getPrototypeOf(prototype)
  }

  return prototypes;
}

const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(ancestors(foo));  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(ancestors(bar));  // returns ['bar', 'foo', 'Object.prototype']
console.log(ancestors(baz));  // returns ['foo', 'Object.prototype']
console.log(ancestors(qux));  // returns ['Object.prototype']
