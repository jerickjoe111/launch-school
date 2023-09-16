document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').addEventListener('contextmenu', event => {
    event.preventDefault()
    alert('main')
  });
  document.querySelector('#sub').addEventListener('contextmenu', event => {
    event.preventDefault()
    event.stopPropagation()
    alert('sub')
  });
})


/*




*/