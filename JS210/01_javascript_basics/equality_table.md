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
| String == Number      | `'1' == 1`          | `true`       | When one operand is a string and the other is a number, it converts the string to a number and then strictly compares them |
| `null` == `undefined` | `null == undefined` | `true`       | `null` is equal to `undefined` in non-strict equality comparison                                                     |
| Boolean == Other Type | `true == 1`         | `true`       | Booleans are converted to numbers, and the comparison is tried again: `true` becomes `1`, `false` becomes `0`.       |


When one operand is a string and the other is a number, the string is converted to a number:

```js
'42' == 42            // true
42 == '42'            // true
42 == 'a'             // false -- becomes 42 == NaN
0 == ''               // true -- becomes 0 == 0
0 == '\n'             // true -- becomes 0 == 0
```

When one operand is a boolean, it is converted to a number:

```js
42 == true            // false -- becomes 42 == 1
0 == false            // true -- becomes 0 == 0
'0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
[] == false           // true -- [] becomes ''
'' == false           // true -- becomes '' == 0, then 0 == 0
true == '1'           // true
true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN
```

When comparing any kind of object (such as an array) against a primitive value with `==`, the first thing JS does is coerce the object to a primitive value. It first tries the method `valueOf()`; if this also returns an object, it tries `toString()` next.

When one operand is `null` and the other is `undefined`, the non-strict operator always returns `true`. If both operands are `null` or both are `undefined`, the return value is `true`. Comparing `null` or `undefined` to all other values returns `false`:

```js
null == undefined      // true
undefined == null      // true
null == null           // true
undefined == undefined // true
undefined == false     // false
null == false          // false
undefined == ''        // false
undefined === null     // false -- strict comparison
```

When one of the operands is `NaN`, the comparison always returns false:

```js
NaN == 0              // false
NaN == NaN            // false
NaN === NaN           // false -- even with the strict operator
NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself
```

More Examples with arrays:

```js
[] == '0';               // false -- becomes '' == '0'
[] == 0;                 // true -- becomes '' == 0, then 0 == 0
[] == false;             // true -- becomes '' == false, then 0 == 0
[] == ![];               // true -- same as above
[null] == '';            // true -- becomes '' == ''
[undefined] == false;    // true -- becomes '' == ''
[false] == false;        // false -- becomes 'false' == 0, then NaN == 0
```

More examples with generic objects:

```js
[] + {};                  // "[object Object]" -- becomes "" + "[object Object]"
[] - {};                  // NaN -- becomes "" - "[object Object]", then 0 - NaN
'[object Object]' == {};  // true
'' == {};                 // false
false == {};              // false
0 == {};                  // false
```