function findRange(array, target) {
  function findFirstIndex() {
    function isFirst(mid) {
      return array[mid] === target && (!array[mid - 1] || array[mid - 1] < target)
    }

    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (isFirst(mid)) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  function findLastIndex(firstIndex) {
    function isLast(mid) {
      return array[mid] === target && (!array[mid + 1] || array[mid + 1] > target)
    }

    let left = firstIndex;
    let right = array.length - 1;
    let mid = firstIndex;
    while (left <= right) {
      if (isLast(mid)) {
        return mid;
      } else if (array[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      mid = Math.floor((left + right) / 2);
    }
  }

  let firstIndex = findFirstIndex();
  if (firstIndex === -1) return [-1, -1];

  let lastIndex = findLastIndex(firstIndex);
  return [firstIndex, lastIndex];
}


console.log(
  findRange([1, 2, 3, 3, 3, 3, 3, 4, 5], 3),
  findRange([1, 2, 3, 3, 3, 5, 6,], 4),
  findRange([3, 3, 3, 3, 3, 3], 3),
)