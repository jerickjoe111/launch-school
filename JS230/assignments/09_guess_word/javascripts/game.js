document.addEventListener('DOMContentLoaded', () => {
  const message = document.querySelector("#message");
  const letters = document.querySelector("#spaces");
  const guesses = document.querySelector("#guesses");
  const apples = document.querySelector("#apples");
  const replay = document.querySelector("#replay");

  const randomWord = (() => {
    let words = ['apple', 'banana', 'orange', 'pear'];
    return () => {
      let word = words[Math.floor(Math.random() * words.length)];
      words.splice(words.indexOf(word), 1);
      return word;
    }
  })()
  
  class Game {
    #MAX_GUESSES = 6;
    #WELCOME = 'Welcome!'
    #NO_MORE_WORDS = "Sorry, I've run out of words!";
    #WIN = 'You win!';
    #LOSE = 'You\'re out of guesses! You lose!';

    constructor() {
      let word = randomWord();
      if (!word) {
        this.displayMessage(this.#NO_MORE_WORDS);
        return this;
      }
      console.log(word);
      this.word = word.split("");
      this.correctGuesses = 0;
      this.incorrectGuesses = 0;
      this.lettersGuessed = [];
      this.wordLength = this.word.length;
      this.setApples();
      this.hideReplay();
      this.resetBlanks();
      this.createBlanks();
      this.registerKeyListener();
      this.displayMessage(this.#WELCOME);
    }

    displayMessage(messageText) {
      message.textContent = messageText;
    }

    createBlanks() {
      let spaces = `<span></span>`.repeat(this.wordLength)
      letters.insertAdjacentHTML('beforeend', spaces);
      this.spaces = document.querySelectorAll('#spaces span');
    }

    resetBlanks() {
      document.querySelectorAll('span').forEach(span => span.remove());
    }

    fillBlanksWithLetter(correctLetter) {
      this.word.forEach((letter, index) => {
        if (letter === correctLetter) {
          this.spaces[index].textContent = letter;
          this.correctGuesses += 1;
        }
      })
    }
    
    makeGuess(event) {
      let letter = event.key.toLowerCase();
      console.log(letter)
      if (!this.isLetter(letter) || this.repeatedGuess(letter)) return;
      
      if (this.word.includes(letter)) {
        this.fillBlanksWithLetter(letter);
        this.displayGuess(letter);
        this.lettersGuessed.push(letter);
        if (this.wordGuessed()) this.winGame();
        return;
      }

      this.displayIncorrectGuess(letter);
      if (this.maxedGuesses()) this.loseGame();
    }

    isLetter(character) {
      return character >= 'a' || character <= 'z'
    }
    
    repeatedGuess(letter) {
      return this.lettersGuessed.includes(letter);
    }

    displayGuess(letter) {
      let span = document.createElement('span')
      span.textContent = letter;
      guesses.append(span);
    } 

    wordGuessed() {
      return this.correctGuesses === this.wordLength;
    }

    registerKeyListener() {
      this.guessKeyListener = event => this.makeGuess(event);
      document.addEventListener('keyup', this.guessKeyListener)
    }

    removeKeyListener() {
      document.removeEventListener("keyup", this.guessKeyListener);
    }

    displayIncorrectGuess(letter) {
      this.incorrectGuesses += 1;
      this.displayGuess(letter);
      this.setApples();
    }

    setApples(){
      apples.classList.remove(...apples.classList);
      apples.classList.add(`guess_${this.incorrectGuesses}`);
    }

    maxedGuesses() {
      return this.incorrectGuesses === this.#MAX_GUESSES;
    }

    displayReplay() {
      replay.classList.add("visible");
    }

    hideReplay() {
      replay.classList.remove("visible");
    }

    winGame() {
      this.removeKeyListener();
      this.displayMessage(this.#WIN);
      this.displayReplay();
      this.setGameStatus('win');
    }

    loseGame() {
      this.removeKeyListener();
      this.displayMessage(this.#LOSE);
      this.displayReplay();
      this.setGameStatus('lose');
    }

    setGameStatus(status) {
      document.body.classList.remove('win', 'lose');
      if (status) document.body.classList.add(status);
    }
  }

  new Game();

  replay.addEventListener('click', function(e) {
    e.preventDefault();
    new Game();
  });
})