document.addEventListener('DOMContentLoaded', () => {
  function nodeSwap(idA, idB) {
    let nodeA = document.querySelector(`#${CSS.escape(idA)}`);
    let nodeB = document.querySelector(`#${CSS.escape(idB)}`);
    if (!nodeA || !nodeB || nodeA.contains(nodeB) || nodeB.contains(nodeA)) return;

    nodeA.replaceWith(nodeB.cloneNode(true))
    nodeB.replaceWith(nodeA)

    return true
  }

  console.log(nodeSwap(7,9))
})
