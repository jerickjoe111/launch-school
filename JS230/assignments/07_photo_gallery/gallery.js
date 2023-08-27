document.addEventListener('DOMContentLoaded', () => {
  let activeThumbnail = document.querySelector('img.active');
  let activeTop = document.querySelector('figure img');

  document.querySelector('ul').addEventListener('click', event => {
    let elementClicked = event.target;
    if (elementClicked.nodeName !== 'IMG') return;

    activeThumbnail.classList.remove('active');
    elementClicked.classList.add('active');
    activeThumbnail = elementClicked;
    activeTop.src = activeThumbnail.src;
  })
})