## Strict Equality:

| Data Types                                     | Expression            | Return Value | Notes                                                                    |
|------------------------------------------------|-----------------------|--------------|--------------------------------------------------------------------------|
| String === Number                              | `'1' === 1`           | `false`      | Different types can never be strictly equal                              |
| `null` === `null`, `undefined` === `undefined` | `null === undefined`  | `false`      | `null` is not strictly equal to `undefined`                              |
| `NaN` === Any other type, even `NaN`           | `NaN === NaN`         | `false`      | `NaN` is not equal to anything, even itself                              |
| Number === Number                              | `0 === -0`            | `true`       | Two numbers strictly are equal if they have the same value               |
| String === String                              | `'aloha' === 'aloha'` | `true`       | Two strings are strictly equal if they contain the EXACT same characters |
| Object === Object                              | `[1] === [1]`         | `false`      | Two objects are strictly equal if they are the same object               |


## Non-strict Equality:

| Data Types            | Expression          | Return Value | Notes                                                                                                                |
|-----------------------|---------------------|--------------|----------------------------------------------------------------------------------------------------------------------|
| String == Number      | `'1' == 1`          | `true`       | When one operand is a string and the other is a number, it converts the string to a number an strictly compares them |
| `null` == `undefined` | `null == undefined` | `true`       | `null` is equal to `undefined` in non-strict equality comparison                                                     |
| Boolean == Other Type | `true == 1`         | `true`       | Booleans are converted to numbers, and the comparison is tried again: `true` becomes `1`, `false` becomes `0`.       |

**Primitives are compared _by value_, Objects are compared _by reference_**