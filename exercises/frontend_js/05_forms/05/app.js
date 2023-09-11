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

    bindButtons() {
      $('.reset-form').on('click', event => {
        event.preventDefault();
        document.querySelector('form').reset()
      })

      $('.submit')
    },
  }

  App.init()
})

/*
for every radio button:

    get id of parent question

    get selected button

    if selected === answer_key; mark correct
    else                      ; mark incorrect, show correct answer
*/