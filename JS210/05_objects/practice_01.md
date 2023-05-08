1. Write a function named `objectHasProperty` that takes two arguments: an Object and a String. The function should return true if the Object contains a property with the name given by the String, false otherwise.

```js
function objectHasProperty(object, property) {
  return property in object;
}
```

2. Write a function named `incrementProperty` that takes two arguments: an Object and a String. If the Object contains a property with the specified name, the function should increment the value of that property. If the property does not exist, the function should add a new property with a value of 1. The function should return the new value of the property.

```js
function incrementProperty(object, propertyStr) {
  propertyStr in object ? object[propertyStr] += 1 : object[propertyStr] = 1;
  return object[propertyStr];
}
```

3. Write a function named `copyProperties` that takes two Objects as arguments. The function should copy all properties from the first object to the second. The function should return the number of properties copied.

```js
function copyProperties(sourceObject, targetObject) {
  let propertiesCopied = 0
  for (let property in sourceObject) {
    targetObject[property] = sourceObject[property];
    propertiesCopied += 1;
  }

  return propertiesCopied;
}
```

4. Write a function named `wordCount` that takes a single String as an argument. The function should return an Object that contains the counts of each word that appears in the provided String. In the returned Object, you should use the words as keys, and the counts as values.

```js
function wordCount(string) {
  
}
```