document.addEventListener('DOMContentLoaded', () => {
  const INITIAL_WORDS = ['apple', 'banana', 'orange','pear'];
  const ALLOWED_GUESSES = 6;
  
  let App = {
    words: [...INITIAL_WORDS],
    currentWord: null,
    incorrectGuesses: 0,

    init() {

    },

    randomWord() {
      let word = this.words[Math.floor(Math.random() * this.words.length)]
      this.words.splice(this.words.indexOf(word), 1)
      return word
    }
  }

  App.init()
})