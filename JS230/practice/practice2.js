function traverse(element, callback) {
  callback(element)

  for (let child of element.children) {
    traverse(child, callback)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').classList.add('heading')
  document.querySelector('ul').classList.add('bulleted')

  document.querySelector('#toggle').addEventListener('click', event => {
    event.preventDefault()
    document.querySelector('#notice').classList.toggle('hidden')
  })

  document.querySelector('#notice').addEventListener('click', event => {
    event.currentTarget.classList.toggle('hidden')
  })

  let multiplication = document.querySelector('#multiplication')
  let [operandA, operandB] = multiplication.textContent.match(/\d+/g)

  multiplication.append(` ${operandA * operandB}`)

  document.body.id = 'styled'
})
