$(() => {

})

function traverse(element, callback) {
  callback(element)

  for (let child of element.children) {
    traverse(child, callback)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let paragraphs = []
  document.querySelectorAll('p').forEach((paragraph, index) => {
    if (index === 0) return

    paragraphs.push(paragraph)
  })

  document.body.append(paragraphs[3],paragraphs[2], paragraphs[1], paragraphs[0])
})
