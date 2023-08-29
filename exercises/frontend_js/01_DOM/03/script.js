document.addEventListener('DOMContentLoaded', () => {
  function traverseAncestors(element, callback) {
    if (!element) return;

    callback(element)
    traverseAncestors(element?.parentNode, callback)
  }

  function tree(id) {
    let output = [];
    let child = document.getElementById(id);

    traverseAncestors(child, element => {
      let siblings = element?.parentNode?.children;
      if (!siblings || siblings.length === 0 || !element.id) return;

      let siblingNames = [];
      for (let sibling of siblings) if (sibling.id) siblingNames.push(sibling.nodeName);
      
      output.push(siblingNames);
    })

    return output;
  }

  console.log(tree(22))
})