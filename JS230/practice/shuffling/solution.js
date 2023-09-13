document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(document.querySelectorAll('header')[1])
  document.querySelector('header').prepend(document.querySelector('main h1'))

  let [baby, metro] = document.querySelectorAll('figure')
  document.querySelector('article').append(metro, baby)

  let [babyCaption, metroCaption] = document.querySelectorAll('figcaption')
  baby.append(babyCaption)
  metro.append(metroCaption)
})