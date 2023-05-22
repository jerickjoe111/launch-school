## Type Conversion

| Value                            | to String     | to Number | to Boolean |
|----------------------------------|---------------|-----------|------------|
| `undefined`                      | `'undefined'` | `NaN`     | `false`    |
| `null`                           | `'null'`      | `0`       | `false`    |
| `false`                          | `'false'`     | `0`       |            |
| `true`                           | `'true'`      | `1`       |            |
| `''` (empty string)              |               | `0`       | `false`    |
| `'\n'` (special character string) |              | `0`       | `false`    |
| `'1.2'` (non-empty, numeric)     |               | `1.2`     | `true`     |
| `'one'` (non-empty, non-numeric) |               | `NaN`     | `true`     |
| `0`                              | `0`           |           | `false`    |
| `-0`                             | `0`           |           | `false`    |
| `1` (finite number, non-zero)    | `'1'`         |           | `true`     |
| `Infinity`                       | `'Infinity'`  |           | `true`     |
| `-Infinity`                      | `'-Infinity'` |           | `true`     |
| `NaN`                            | `NaN`         |           | `false`    |
| `{'a': 1}` (plain object)        | `'[object Object]'`    | `NaN` | `true`     |
| `[]` (empty array)               | `''`          | `0`       | `true`     |
| `[1]` (one numeric element)      | `'1'`         | `1`       | `true`     |
| `['a']` (any other array)        | Use `join()`  | `NaN`     | `true`     |
| `function() {}` (any function)   | See rules     | `NaN`     | `true`     |

Objects to string:
```js
 {x: 1, y: 2}.toString() // => '[object Object]'
```

***Note that JavaScript operators and statements expect values of different types, and it performs conversions to those types without a warning (implicit conversion)**

## Explicit Type Conversion

The simplest way to perform an explicit type conversion is to use the `Boolean()`, `Number()` and `String()` functions:

Any value other than `null` and `undefined` has a `toString()` method, and the result of this method is usually the same as that returned by `String()`

The `toString()` method defined by the `Number` class accepts an optional argument that specifies a radix, or base, for the conversion (by default `10`)

### Max Control with Numbers:

The `Number` class defines three methods for these kinds of number-to-string conversions:

1. `toFixed()` converts a number to a string with a specified number of digits after the decimal point without exponential notation.
2. `toExponential()` converts a number to a string using exponential notation, with one digit before the decimal point and a specified number of digits after the decimal point.
3. `toPrecision()` converts a number to a string with the number of significant digits you specify. It uses exponential notation if the number of significant digits is not large enough to display the entire integer portion of the number.

### Global Conversion String Functions:

1. `parseInt()` parses only integers, skipping leading whitespace, parsing as many numeric characters as it can, ignoring anything that follows. If the first nonspace character is not part of a valid numeric literal, it returns `NaN`. If a string begins with `'0x'` or `'0X'`, it interprets the number as hexadecimal. It accepts a second argument radix (base).
2. `parseFlat()` parses integers and floats, skipping leading whitespace, parsing as many numeric characters as it can, ignoring anything that follows. If the first nonspace character is not part of a valid numeric literal, it returns `NaN`.
