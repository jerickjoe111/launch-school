# 06 Introduction to Recursion

Recursion is a powerful concept in computer science that enables functions to call themselves. It provides an elegant and efficient solution to complex problems.

## Some terminology

The **recursive case** refers to the part of the recursive function where it calls itself. It allows the function to solve a larger problem by breaking it down into smaller, similar subproblems. By applying the same function to a smaller input, we move closer to reaching the base case and ultimately solve the problem.

The **reduction step** is the part of the recursive case where the input is modified to move closer to the base case. It ensures that each recursive call operates on a smaller version of the original problem. The reduction step is crucial for making progress towards the base case and solving the problem recursively.

The **call stack** is a crucial concept to grasp when working with recursive algorithms. Think of the call stack as a stack of function calls that keeps track of the order in which functions are called and their respective execution contexts. It operates on the Last-In-First-Out (LIFO) principle, meaning that the most recently added function call is the first one to be resolved and removed from the stack. The LIFO principle means that the last function call added to the stack is the first one to be resolved and removed. Once a function completes its execution, it is popped off the stack, allowing the previous function call to resume its execution.

A **stack overflow** occurs when the call stack exceeds its capacity, typically due to an infinite recursion or excessively deep recursion.
When a stack overflow occurs, it means that the call stack has grown too large for the system to handle, resulting in a runtime error. It usually happens when there is no proper base case defined, causing an infinite loop of recursive function calls that consume the available stack space.

## Time and Space Complexity of Recursive Algorithms

### Counting Recursive Calls

To begin, we count the number of recursive calls made by the algorithm based on the input size. Each recursive call typically contributes to the overall time complexity.

### Determining the Work Done

Next, we assess the work done at each level of recursion. It involves analyzing the operations performed within each recursive call and any additional computations outside the recursive calls.

### Combining Recursive Calls and Work Done

Finally, we combine the number of recursive calls and the work done at each level to determine the overall time complexity of the recursive algorithm.

#### Drawing a Recursion Tree

When analyzing the time complexity of a recursive algorithm, drawing out a recursive tree can be a helpful visual tool. The recursive tree represents the sequence of recursive calls and helps us understand the number of operations performed at each level of recursion.

By examining the structure of the recursive tree, we can count the number of nodes (representing function calls) and determine the number of operations performed in each call. This allows us to estimate the overall time complexity of the algorithm.

## Space Complexity

Space complexity refers to the amount of memory required by an algorithm to perform its computations. In the case of recursive algorithms, understanding space complexity involves considering the memory used for recursive function calls and auxiliary data structures.

Recursive function calls are implemented using a call stack. The call stack is a data structure that keeps track of the function calls, storing the necessary information for each call, such as local variables and the return address.

To analyze the space complexity of a recursive algorithm, we consider the maximum depth of the recursive calls, as it determines the space used by the call stack.

In some cases, additional auxiliary data structures may also contribute to the space complexity. This is why it is advisable to avoid allocating O(n) space during each recursion, such as creating new arrays, and instead pass the array through the function calls and adjust pointers. Allocating O(n)space during each recursion can result in a space complexity of O(n^2), where n represents the input size. This can be inefficient and problematic for large inputs, as it requires a substantial amount of memory.

## The Function Signature

In many interview problems, you will encounter a well-defined function signature. This signature specifies the name of the function, the input parameters it expects, and the type of the output it should produce. It serves as a contract that defines how the function should be used and what it should return. By following the function signature, you ensure that your implementation meets the requirements of the problem.

```js
function fibonacci(num) {
  // Function implementation
}
```

In this case, the function name is `fibonacci`, and it expects a single input parameter called `num`. As you know, the purpose of the `fibonacci` function is to calculate the Fibonacci sequence for the given `num`. The return type is not explicitly specified in the function signature because JavaScript is a dynamically typed language. However, in statically typed languages, you might see something like function `fibonacci(num: number): number`, which indicates that the function accepts a number as input and returns a number.

Now, let's discuss the concept of using a _helper function_ in recursive problems. Recursive solutions often require additional values or arguments to be passed down through each recursive call. However, you should avoid modifying the given function signature unless you have discussed it with the interviewer. In such cases, you can introduce a helper function that accepts the required additional arguments.

For instance, if we want to introduce a cache to optimize the Fibonacci function, we can use a helper function.

```js
function fibonacci(num) {
  return fibonacciHelper(num, {});
}

function fibonacciHelper(num, cache) {
  // Define the base case and recursive case
}
```

In this case, the `fibonacci` function serves as a wrapper that calls the actual recursive implementation `fibonacciHelper`. The `fibonacciHelper` function takes two parameters: `num` represents the current number for which we want to calculate the Fibonacci value, and `cache` represents a cache object that can store previously calculated Fibonacci values to avoid redundant computations.

By using a helper function, you can extend the number of arguments or values passed down to recursive calls without changing the original function signature. It provides a way to incorporate additional information or optimizations required for an efficient recursive solution.

When dealing with recursive algorithms, certain subproblems may be repeatedly solved with the same input, leading to duplicated efforts and increased computational overhead. Using a cache in these problems is important because it helps avoid redundant calculations and improves the efficiency of the function. This optimization method is called Dynamic programming.

Remember, the function signature should remain consistent with the problem requirements, and the helper function can be used to provide the necessary flexibility and extensibility in your recursive implementation.
