document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1').classList.add('heading')
  document.querySelector('ul').classList.add('bulleted')
  document.querySelector('#toggle').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#notice').classList.toggle('hidden')
    document.querySelector('#notice').classList.toggle('visible')
  })
  document.querySelector('#notice').addEventListener('click', event => {
    document.querySelector('#notice').classList.add('hidden')
  })
  document.querySelector('#multiplication').append(` ${13 * 9}`)
  document.body.id = 'styled'
})


