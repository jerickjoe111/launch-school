// Exercise 01

// What will each line of the following code return? 
// Don't run the code until after you have tried to answer.

console.log((false && undefined)); // false 
console.log((false || undefined)); // undefined
console.log(((false && undefined) || (false || undefined))); // undefined
console.log(((false || undefined) || (false && undefined))); // false
console.log(((false && undefined) && (false || undefined))); // false
console.log(((false || undefined) && (false && undefined))); // undefined
console.log(('a' || (false && undefined) || '')); // 'a'
console.log(((false && undefined) || 'a' || '')); // 'a'
console.log(('a' && (false || undefined) && '')); // undefined
console.log(((false || undefined) && 'a' && '')); // undefined