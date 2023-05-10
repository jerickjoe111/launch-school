## Type Conversion

| Value                            | to String     | to Number | to Boolean |
|----------------------------------|---------------|-----------|------------|
| `undefined`                      | `'undefined'` | `NaN`     | `false`    |
| `null`                           | `'null'`      | `0`       | `false`    |
| `false`                          | `'false'`     | `0`       |            |
| `true`                           | `'true'`      | `1`       |            |
| `''` (empty string)              |               | `0`       | `false`    |
| `'1.2'` (non-empty, numeric)     |               | `1.2`     | `true`     |
| `'one'` (non-empty, non-numeric) |               | `NaN`     | `true`     |
| `0`                              | `0`           |           | `false`    |
| `-0`                             | `0`           |           | `false`    |
| `1` (finite number, non-zero)    | `'1'`         |           | `true`     |
| `Infinity`                       | `'Infinity'`  |           | `true`     |
| `-Infinity`                      | `'-Infinity'` |           | `true`     |
| `NaN`                            | `NaN`         |           | `false`    |
| `{}` (any object)                | See rules     | See rules | `true`     |
| `[]` (empty array)               | `''`          | `0`       | `true`     |
| `[1]` (one numeric element)      | `'1'`         | `1`       | `true`     |
| `['a']` (any other array)        | Use `join()`  | `NaN`     | `true`     |
| `function() {}` (any function)   | See rules     | `NaN`     | `true`     |

Objects to string:
```js
 {x: 1, y: 2}.toString() // => '[object Object]'
```

