| Data Types      | Expression  | Return Value | Performs operation | Notes                              |
|-----------------|-------------|--------------|--------------------|------------------------------------|
| Number + `undefined` | `1 + undefined`     | `NaN`          | None           |                                    |
| Object + Number | `[1] + 1`     | `11`          | Objects are converted to strings when using the  `+` operator      |                                    |
| Number + Number | `1 + 2`     | `3`          | Addition           |                                    |
| Boolean + Number | `true + 2` | `3`          | Addition           | Booleans are converted to numbers: `true` becomes `1`, `false` becomes `0`.  |
| String + String | `'1' + '2'` | `'12'`       | Concatenation      |                                    |
| String + Number | `'1' + 2`   | `'12'`       | Concatenation      | `+` favors strings                 |
| `null` + Number | `null + 2`   | `3`       | Addition      | `null`/`undefined` is converted to `0`                 |
| `null`/`undefined` + String | `null + 'a'`   | `'nulla'`       | Concatenation      | `+` favors strings                 |
| Number < Number | `1 < 2`     | `true`       | Numerical Comparison |                                    |
| String < String | `'11'< '2'` | `true`       | String Comparison  |                                    |
| String < Number | `'11' < 3`  | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers  |
| String < Number | `'one' < 2` | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers; `'one'` converted to `NaN`         |

- **The other arithmetic operators `-`, `*`, `**`, `%` are only defined for numbers, so JavaScript converts both operands to numbers.**

- Comparison can be performed only on numbers and strings; operands that are not of those types are converted.

- String comparison is just numerical comparison of the encoding values of the two strings, character-wise:
```js
'Zoo' < 'aardbark' // => True (Z comes before -is less- than a)
```

