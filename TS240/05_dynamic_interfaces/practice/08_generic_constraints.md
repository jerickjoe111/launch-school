# Practice Problems: Generic constraints

1. The following JavaScript function allows you to get a property's value from an object. Please rewrite the function in TypeScript by adding types and a generic constraint to make the function safer.

```ts
function getProperty(obj, key) {
  return obj[key];
}
```

```ts
function getProperty<GenericType, Keys extends keyof GenericType>( // keys must be an existing key in passed in object type
  obj: GenericType, 
  key: Keys
  ): GenericType[Keys] { // the return value can also be assigned dynamically to a type in this way.
  return obj[key];
}
```

Here, `GenericType` is the type of `obj`, and `Keys` is the type of `key`. 

The constraint `Keys extends keyof GenericType` ensures that `key` is a valid (present) key of an object of type `GenericType`. 

`GenericType[Keys]` is the type of the property in `obj` at `key`.
