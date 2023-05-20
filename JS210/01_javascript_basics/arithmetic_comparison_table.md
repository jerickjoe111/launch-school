## Binary `+` operator

| Data Types      | Example  | Return Value | Performs operation | Notes                              |
|-----------------|-------------|--------------|--------------------|------------------------------------|
| Number + `undefined` | `1 + undefined`     | `NaN`          | None           |                                    |
| Number + `null` | `2 + null`   | `3`       | Addition      | `null`/`undefined` is converted to `0`                 |
| Number + Number | `1 + 2`     | `3`          | Addition           |                                    |
| Boolean + Number | `true + 2` | `3`          | Addition           | Booleans are converted to numbers: `true` becomes `1`, `false` becomes `0`.  |
| Object + Number | `[1] + 1`     | `11`          | Objects are converted to strings when using the  `+` operator      |                                    |
| String + String | `'1' + '2'` | `'12'`       | Concatenation      |                                    |
| String + Number | `'1' + 2`   | `'12'`       | Concatenation      | `+` favors strings                 |
| String + `null`/`undefined` | `'a' + null`   | `'nulla'`       | Concatenation      | `+` favors strings                 |

## Comparison

| Data Types      | Example  | Return Value | Performs operation | Notes                              |
|-----------------|-------------|--------------|--------------------|------------------------------------|
| String < String | `'11'< '2'` | `true`       | String Comparison  |                                    |
| Object < String | `[1, 2] < '2'` | `true`      | String Comparison  |  The array is converted to '1,2', and the strings are compared by character encoding, one by one.
| Object < Number | `[1, 2] < 2` | `false`       | Numerical Comparison  | `[1, 2]` is converted to `NaN`                                    |
| Number < Number | `1 < 2`     | `true`       | Numerical Comparison |                                    |
| String < Number | `'11' < 3`  | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers  |
| String < Number | `'one' < 2` | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers; `'one'` converted to `NaN`         |

- **The other arithmetic operators `-`, `*`, `**`, `%` are only defined for numbers, so JavaScript converts both operands to numbers and tries to add them.**

- Comparison can be performed only on numbers and strings; operands that are not of those types are converted;
When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

- String comparison is just numerical comparison of the encoding values of the two strings, character-wise:
```js
'Zoo' < 'aardbark' // => True (Z comes before -is less- than a)
```

