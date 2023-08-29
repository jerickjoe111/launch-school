document.addEventListener('DOMContentLoaded', () => {
  function traverse(element, generation, callback) {
    callback(element, generation) 

    for (let child of element.children) {
      traverse(child, generation + 1, callback)
    }
  }

  function colorGeneration(target) {
    let firstGeneration = document.body.children;

    for (let child of firstGeneration) {
      traverse(child, 1, (element, generation) => {
        if (generation === target) element.classList.add('generation-color');
      })
    }
  }

  colorGeneration(3)
})

/*

// find indentation level

    // for each level traversed until target found, add 1 (from document)

    // color target

// for each element that is at the same level, color that target:

    // if an element found is at the same level and the id has not been found:

          // color element

          // save id of element



*/