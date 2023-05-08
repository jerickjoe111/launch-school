// Exercise 07

function shift(array) {
  let result;

  if (array.length !== 0) {
    result = array.splice(0, 1).pop();
  }

  return result;
}

function unshift(array, ...args) {
  for (let i = 0; i < args.length; i += 1) {
    array.splice(i , 0, args[i]);
  }

  return array.length;
}