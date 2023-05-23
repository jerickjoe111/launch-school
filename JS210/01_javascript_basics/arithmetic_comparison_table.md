## Unary operators

| Operator | Example | Return Value | Side Effects |
| --- | --- | --- | --- |
| `++` (pre-increment operator) | `++a` | `a + 1` | It increments the operand and evaluates to the **incremented** value of the operand |
| `++` (post-increment operator) | `a++` | `a` | It increments the operand and evaluates to the **UNincremented** value of the operand |
| `--` (pre-increment operator) | `--a` | `a - 1` | It decrements the operand and evaluates to the **decremented** value of the operand |
| `--` (post-increment operator) | `a--` | `a` | It decrements the operand and evaluates to the **UNdecremented** value of the operand |
| `+(a)`  | `+(true)` | `1` | It converts its operand to a number (or `NaN`) and evaluates to the converted value. It shouldn't be used with `BigInt` operands |

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
| Function + String | `(function name() {}) + 'a'`   | `'function name() {}a'`       | Concatenation      | `+` favors strings                 |

## Comparison

| Data Types      | Example  | Return Value | Performs operation | Notes                              |
|-----------------|-------------|--------------|--------------------|------------------------------------|
| String < String | `'11'< '2'` | `true`       | String Comparison  |                                    |
| String < Number | `'11' < 3`  | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers  |
| Boolean < Number | `true > 3`  | `false`      | Numerical Comparison | `true` is converted to `1`, and `1` is less than `3`  |
| String < Number | `'one' < 2` | `false`      | Numerical Comparison | `<`, `>`,`<=`, `>=` favor numbers; `'one'` converted to `NaN`         |
| Number < Number | `1 < 2`     | `true`       | Numerical Comparison |                                    |
| Object < String | `[1, 2] < '2'` | `true`      | String Comparison  |  The array is converted to '1,2', and the strings are compared by character encoding, one by one. |
| Object < Number | `[1, 2] < 2` | `false`       | Numerical Comparison  | `[1, 2]` is converted to `NaN`                                    |
| Boolean < Boolean | `false < true` | `false`       | Numerical Comparison  | `true` is converted to `1` and `false` is converted to `0`                                  |

- **The other arithmetic operators `-`, `*`, `**`, `%` are only defined for numbers, so JavaScript converts both operands to numbers and tries to add them.**

- Comparison can be performed only on numbers and strings; operands that are not of those types are converted;
When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

- String comparison is just numerical comparison of the encoding values of the two strings, character-wise:
```js
'Zoo' < 'aardbark' // => True (Z comes before -is less- than a)
```
When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.

Examples:

```js
11 > '9'              // true -- '9' is coerced to 9
'11' > 9              // true -- '11' is coerced to 11
123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
123 <= 'a'            // also false
true > null           // true -- becomes 1 > 0
true > false          // true -- also becomes 1 > 0
null <= false         // true -- becomes 0 <= 0
undefined >= 1        // false -- becomes NaN >= 1
```

