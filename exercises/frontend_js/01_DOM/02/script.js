document.addEventListener('DOMContentLoaded', () => {
  function traverse(node, callback) {
    callback(node)
    for (let child of node.childNodes) {
      traverse(child, callback)
    }
  }

  let parents = {}

  traverse(document, node => {
    let indirectChilds = 0;

    for (let child of node.childNodes) {
      child.childNodes.forEach(node => traverse(node, () => indirectChilds += 1))
    }


    parents[node.id] = [node.childNodes.length, indirectChilds];
  })

  console.log(parents)
})