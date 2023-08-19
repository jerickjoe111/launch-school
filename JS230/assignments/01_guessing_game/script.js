document.addEventListener('DOMContentLoaded', () => {
  function generateRandom() {
    const MAX_NUMBER = 100;
    return Math.floor(Math.random() * MAX_NUMBER) + 1;
  }

  function newGame() {
    const PROMPT_GUESS = 'Guess a number from 1 to 100';
    answer = generateRandom();
    paragraph.textContent = PROMPT_GUESS;
    input.value = ''
  }

  const LOWER_GUESS = 'The answer is lower than ';
  const HIGHER_GUESS = 'The answer is higher than ';
  const CORRECT_GUESS = 'The answer is correct!';

  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');  
  let answer;

  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = parseInt(input.value);
    let message;
    if (guess < answer) message = `${HIGHER_GUESS}${guess}!`;
    else if (guess > answer) message = `${LOWER_GUESS}${guess}!`;
    else message = CORRECT_GUESS;
    paragraph.textContent = message;
  })

  link.addEventListener('click', event => {
    event.preventDefault();
    newGame();
  })
  
  newGame();
});
