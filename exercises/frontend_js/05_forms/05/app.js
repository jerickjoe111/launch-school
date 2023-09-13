$(() => {
  const QUESTIONS = [
    {
      id: 1,
      description: "Who is the author of <cite>The Hitchhiker's Guide to the Galaxy</cite>?",
      options: ['Dan Simmons', 'Douglas Adams', 'Stephen Fry', 'Robert A. Heinlein'],
    },
    {
      id: 2,
      description: 'Which of the following numbers is the answer to Life, the \
                    Universe and Everything?',
      options: ['66', '13', '111', '42'],
    },
    {
      id: 3,
      description: 'What is Pan Galactic Gargle Blaster?',
      options: ['A drink', 'A machine', 'A creature', 'None of the above'],
    },
    {
      id: 4,
      description: 'Which star system does Ford Prefect belong to?',
      options: ['Aldebaran', 'Algol', 'Betelgeuse', 'Alpha Centauri'],
    },
  ];

  const ANSWER_KEY = { '1': 'Douglas Adams', '2': '42', '3': 'A drink', '4': 'Betelgeuse' };

  let App = {
    questionsTemplate: Handlebars.compile(document.querySelector('#question-template').innerHTML),
    correctMessage: 'Correct answer.',
    wrongMessage: 'Wrong Answer. Correct answer is:',
    notAnsweredMessage: 'You did not answer this question. Correct answer is:',


    init() {
      this.renderQuestions()
      this.bindButtons()
    },

    renderQuestions() {
      let fieldset = document.querySelector('fieldset')
      QUESTIONS.forEach(question =>{
        fieldset.insertAdjacentHTML('beforeend', this.questionsTemplate(question))
      })
    },

    questions() {
      return document.querySelectorAll('div.question')
    },

    bindButtons() {
      $('.reset-form').on('click', this.reset.bind(this))
      $('.submit').on('click', this.markAnswers.bind(this))
    },

    markAnswers() {
      this.questions().forEach(question => {
        let selectedValue = this.findSelected(question)
        this.markQuestion(question, selectedValue)
      })
    },

    findSelected(question) {
      let buttons = [...question.querySelectorAll('input')]
      for (let button of buttons) {
        if (button.checked) return button.value
      }
      return
    },

    markQuestion(question, selectedValue) {
      let isCorrect = ANSWER_KEY[question.dataset.id] === selectedValue
      if (!selectedValue) this.markNotAnswered(question) 
      else if (!isCorrect) this.markWrong(question)
      else this.markCorrect(question)
    },

    markCorrect(question) {
      let result = question.querySelector('.result')
      result.classList.add('correct')
      result.textContent = `${this.correctMessage}` 
    },
    
    markWrong(question) {
      let result = question.querySelector('.result')
      result.classList.add('wrong')
      result.textContent = `${this.wrongMessage} "${this.correctAnswer(question)}"` 
    },
    
    markNotAnswered(question) {
      let result = question.querySelector('.result')
      result.classList.add('wrong')
      result.textContent = `${this.notAnsweredMessage} "${this.correctAnswer(question)}"` 
    },

    correctAnswer(question) {
      return ANSWER_KEY[question.dataset.id]
    },

    reset() {
      document.querySelector('form').reset()
      this.resetQuestions()
    },

    resetQuestions() {
      this.questions().forEach(question => {
        let result = question.querySelector('p.result')
        result.classList.remove('correct', 'wrong')
        result.textContent = ''
      })
    }
  }

  App.init()
})

/*
*/