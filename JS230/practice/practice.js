$(() => {

})

function traverse(element, callback) {
  callback(element)

  for (let child of element.children) {
    traverse(child, callback)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let heading = document.children[0].lastElementChild.children[0]
  heading.style.color = 'red'
  heading.style.fontSize = '48px'

  let count = 0;
  traverse(document, element => {
    if (element.tagName === 'P') count += 1;
  })
  // console.log(count)
  let words = []
  traverse(document, element => {
    if (element.tagName === 'P') {
      words.push(element.textContent.match(/\w+/)[0])
    }
  })

  // console.log(words)

  let firstParagraphSkipped;
  traverse(document, element => {
    if (element.tagName !== 'P') return

    if (firstParagraphSkipped) element.classList.add('stanza')

    firstParagraphSkipped ||= true
  })


})
