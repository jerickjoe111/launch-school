document.addEventListener('DOMContentLoaded', () => {
  // document.addEventListener('click', event => {
  //   console.log(event.currentTarget.nodeName)
  // }, true)

  // document.querySelector('body').addEventListener('click', event => {
  //   console.log(event.currentTarget.nodeName)
  // }, true)

  document.querySelector('div#a').addEventListener('click', event => {
    console.log(event.currentTarget.id)
    // event.stopPropagation()
  }, true)

  document.querySelector('div#b').addEventListener('click', event => {
    console.log(event.currentTarget.id)
  })

  document.querySelector('div#c').addEventListener('click', event => {
    console.log(event.currentTarget.id)
    // event.stopPropagation()
  }, true)
})

/*




*/