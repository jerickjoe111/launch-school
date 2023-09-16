# DOM Traversal Basic Techniques

## Count all elements in the DOM

the callback adds one to a variable per node traversed

```js
document.body.querySelectorAll('*').length + 1 // 1 for the body itself
```

## Count all nodes in the DOM

the callback adds one to a variable per node traversed

## All descendants elements (children, grandchildren, etc)

```js
function traverse(element, callback) {
  callback(element);

  for (let child of element.children) {
    traverse(child, callback);
  }
}
```

## All siblings

```js
  function siblings(element, callback) {
    if (element.parentNode) {
      for (let sibling of element.parentNode.children) {
        callback(sibling)
      }
    }
  }
```

## All ancestors

```js
function ancestors(element, callback) {
  let parent = element.parentNode; 
  while (parent) {
    callback(parent)
    parent = parent.parentNode;
  }
}
```

## All cousins

```js
  function siblings(element, callback) {
    if (element.parentNode) {
      for (let sibling of element.parentNode.children) {
        callback(sibling)
      }
    }
  }

  function cousins(element) {
    let grandpa = element.parentNode.parentNode
    let uncles = grandpa.children
    let cousins = []
    for (let uncle of uncles) {
      for (let cousin of uncle.children) {
        cousins.push(cousin)
      }
    }

    return cousins
  }
```

## All cousins (by generation/depth nodes)

```js
function traverse(element, generation, callback) {
  callback(element, generation);

  for (let child of element.children) {
    traverse(child, generation + 1, callback);
  }
}

function sameGeneration(target, callback) {
  let firstGeneration = document.body.children;

  for (let child of firstGeneration) {
    traverse(child, 1, (element, generation) => {
      if (generation === target) callback(element);
    });
  }
}
```

## All grandchildren

```js
  function grandChildren(grandparent) {
    let children = grandparent?.children
    if (!children) return

    let grandchildrenOutput = []
    for (let child of children) {
      let grandchildren = child?.children
      for (let grandchild of grandchildren) {
        grandchildrenOutput.push(grandchild)
      }
    }

    return grandchildrenOutput
```

## Swap two nodes

The easiest way is to locate the parent, and the two references to the elements. Then, just call `append()` on the parent, passing the elements as arguments in the inverse order we found them:

```js
parent.append(element2, element1)
```

```js
function nodeSwap(idA, idB) {
  let nodeA = document.querySelector(`#${CSS.escape(idA)}`);
  let nodeB = document.querySelector(`#${CSS.escape(idB)}`);

  if (!nodeA || !nodeB || nodeA.contains(nodeB) || nodeB.contains(nodeA)) return;

  nodeA.replaceWith(nodeB.cloneNode(true))
  nodeB.replaceWith(nodeA)
  return true;
}
```
