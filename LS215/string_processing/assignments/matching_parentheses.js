// Write a function that takes a string as an argument and returns true 
// if the string contains properly balanced parentheses, false otherwise. 
// Parentheses are properly balanced only when '(' and ')' occur in matching pairs, 
// with each pair starting with '('.

// Stack: arrays that

// insert only at the end
// read only from the end
// delete only from the end

// Init empty stack

// For every char in string:

//   - if char is not parentheses, skip

//   - if char is OPENING par., PUSH onto the stack

//   - if char is CLOSING par.,

//         if stack is empty (unmatched closing par.), RETURN false

//         if stack has matching opening par., POP from stack

// if stack is empty, RETURN true

// if stach is not empty, RETURN false

function isBalanced(string) {
  function openingParenthesis(char) { return char === '('; }
  function closingParenthesis(char) { return char === ')'; }
  function isEmpty(stack) { return stack.length === 0; }
  function readFrom(stack) { return stack[stack.length - 1]; }

  let stack = [];

  string.split('').forEach(char => {
      if (openingParenthesis(char)) stack.push(char);
      else if (closingParenthesis(char)) {
        if (isEmpty(stack)) return false;
        else if (openingParenthesis(readFrom(stack))) stack.pop();
      }
    }
  )

  return isEmpty(stack) ? true : false;
}
