// Exercise 08

function slice(array, begin, end) {
  let result = [];
  begin = begin > array.length ? array.length : begin;
  end = end > array.length ? array.length : end;
  for (let i = begin; i < end; i += 1) result.push(array[i]);

  return result;
}

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  let arrayCopy = slice(array, 0, array.length);
  let elementCount = args.length;
  let newLength = array.length + elementCount - deleteCount;
  array.length = newLength;
  for (let i = 0; i < elementCount; i += 1) array[start + i] = args[i];

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}