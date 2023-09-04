document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('main').addEventListener('contextmenu', event => {
    event.preventDefault()
    alert('Main Context!')
  });

  document.querySelector('#sub').addEventListener('contextmenu', event => {
    event.preventDefault()
    event.stopPropagation()
    alert('Sub Context!')
  });
})