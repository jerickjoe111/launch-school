document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');
  let text = document.querySelector('.content');
  let intervalActive = false;
  let cursorIntervalId;

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    if (!intervalActive) {
      intervalActive = true;
      cursorIntervalId = setInterval(() =>  {
        textField.classList.toggle('cursor');
      }, 500);
    }
  })

  document.addEventListener('click', event => {
    textField.classList.remove('focused', 'cursor')
    clearInterval(cursorIntervalId);
  })

  document.addEventListener('keydown', event => {
    if (!textField.classList.contains('focused')) return;
    let key = event.key;
    console.log(key);
    if (key === 'Backspace') text.textContent = text.textContent.slice(0, -1);
    else text.textContent += key;
  })


});
