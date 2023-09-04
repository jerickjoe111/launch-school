document.addEventListener('DOMContentLoaded', () => {
  const MAIN = document.querySelector('main')
  const TO_RESET = [MAIN, ...document.querySelectorAll('article')];

  function resetHighlightning() {
    TO_RESET.forEach(element => element.classList.remove('highlight'))
  }

  function highlight(element) {
    element.classList.add('highlight')
  }

  document.querySelector('ul').addEventListener('click', event => {
    event.stopPropagation()
    resetHighlightning()
    let article = document.querySelector(`${event.target.href.match(/\#article-\d+/)[0]}`)
    highlight(article)
  })

  document.body.addEventListener('click', event => {
    let clicked = event.target;
    let toHighlight;
    if (['ARTICLE', 'H2', 'P'].includes(clicked.tagName)) {
      toHighlight = clicked.tagName === 'ARTICLE' ? clicked : clicked.parentElement;
    } else toHighlight = MAIN;
    resetHighlightning()
    highlight(toHighlight)
  })
})