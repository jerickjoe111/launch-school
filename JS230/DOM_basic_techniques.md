# DOM Traversal Basic Techniques

## All descendants (children, grandchildren, etc)

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
  for (let sibling of element?.parentNode.children) {
    callback(element);
  }
}
```

## All ancestors

```js
function ancestors(element, callback) {
  let parent = element.parentNode; 
  while (parent && parent.nodeName !== 'HTML') {
    callback(parent)
    parent = parent.parentNode;
  }
}
```

## All cousins (same generation/depth nodes)

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

## Swap two nodes

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
