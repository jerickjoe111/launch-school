## 1. Reimplement `makeList`, so that it returns an Object that provides the interface shown above, including add, list, and remove methods.

```js
function makeList() {
  let list = [];
  return {
    items() {
      return list;
    },
    add(item) {
      if (!list.includes(item)) {
        list.push(item);
        console.log(`${item} added!`);
      } else {
        console.log(`${item} already in list!`);
      }
    },

    list() {
      if (list.length === 0) {
        console.log('The list is empty');
      } else {
        list.forEach(item => console.log(item));
      }
    },

    remove(item) {
      if (list.includes(item)) {
        list.splice(list.indexOf(item), 1);
        console.log(`${item} removed!`);
      } else {
        console.log(`${item} not in list!`);
      }
    },
  }
}
```