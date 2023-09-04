document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('html').addEventListener('click', event => {
    let container = document.querySelector('#container');

    if (!container.contains(event.target)) container.style = 'display: none';
  });
})