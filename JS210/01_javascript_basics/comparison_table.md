| Data Types      | Expression  | Return Value | Performs operation | Notes                              |
|-----------------|-------------|--------------|--------------------|------------------------------------|
| Number + Number | `1 + 2`     | `3`          | Addition           |                                    |
| Boolean + Number | `true + 2` | `3`          | Addition           | Booleans are converted to numbers: `true` becomes `1`, `false` becomes `0`.  |
| String + String | `'1' + '2'` | `'12'`       | Concatenation      |                                    |
| String + Number | `'1' + 2`   | `'12'`       | Concatenation      | `+` favors strings                 |
| Number < Number | `1 < 2`     | `true`       | Numerical Comparison |                                    |
| String < String | `'11'< '2'` | `true`       | String Comparison  |                                    |
| String < Number | `'11' < 3`  | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers  |
| String < Number | `'one' < 2` | `false`      | Numerical Comparison | `'one'` converted to `NaN`         |

- Comparison can be performed only on numbers and strings; operands that are not of those types are converted.

- String comparison is just numerical comparison of the encoding values of the two strings, character-wise:
```js
'Zoo' < 'aardbark' // => True (Z comes before -is less- than a)
```