document.addEventListener('DOMContentLoaded', () => {
  let App = {
      languages: [
      {
        name: 'Ruby',
        description: 'Ruby is a dynamic, reflective, object-oriented, ' +
        'general-purpose programming language. It was designed and developed in the mid-1990s ' +
        'by Yukihiro Matsumoto in Japan. According to its creator, Ruby was influenced by Perl, ' +
        'Smalltalk, Eiffel, Ada, and Lisp. It supports multiple programming paradigms, ' +
        'including functional, object-oriented, and imperative. It also has a dynamic type ' +
        'system and automatic memory management.'
      },
    
      {
        name: 'JavaScript',
        description: 'JavaScript is a high-level, dynamic, untyped, and interpreted ' +
        'programming language. It has been standardized in the ECMAScript language ' +
        'specification. Alongside HTML and CSS, JavaScript is one of the three core ' +
        'technologies of World Wide Web content production; the majority of websites employ ' +
        'it, and all modern Web browsers support it without the need for plug-ins. JavaScript ' +
        'is prototype-based with first-class functions, making it a multi-paradigm language, ' +
        'supporting object-oriented, imperative, and functional programming styles.'
      },
    
      {
        name: 'Lisp',
        description: 'Lisp (historically, LISP) is a family of computer programming languages ' +
        'with a long history and a distinctive, fully parenthesized prefix notation. ' +
        'Originally specified in 1958, Lisp is the second-oldest high-level programming ' +
        'language in widespread use today. Only Fortran is older, by one year. Lisp has changed ' +
        'since its early days, and many dialects have existed over its history. Today, the best '+
        'known general-purpose Lisp dialects are Common Lisp and Scheme.'
      }
    ],

    max_characters: 120,
    languagesTemplate: Handlebars.compile(document.querySelector('#languages-template').innerHTML),

    init() {
      this.registerPartial()
      this.loadLanguages()
      this.bindButtons()
    },

    registerPartial() {
      let partialHTML = document.querySelector('#language-template').innerHTML
      Handlebars.registerPartial('language-template', partialHTML)
    },

    loadLanguages() {
      let div = document.querySelector('#languages')
      div.insertAdjacentHTML('beforeend', this.languagesTemplate({languages: this.languages}))
      document.querySelectorAll('div.lang p').forEach(description => {
        description.textContent = this.shortenDescription(description.textContent)
      })
    },

    shortenDescription(description) {
      return description.slice(0, this.max_characters) + '...'
    },

    bindButtons() {
      document.querySelector('#languages').addEventListener('click', event => {
        event.preventDefault()
        let target = event.target
        if (target.tagName !== 'A') return

        this.toggleDescription(target)
      })
    },

    toggleDescription(button) {
      let languageDescription = button.previousElementSibling
      if (button.textContent.match(/More/i)) {
        languageDescription.textContent = this.findLongDescription(button)
        button.textContent = 'Show Less'
      } else {
        languageDescription.textContent = this.shortenDescription(languageDescription.textContent)
        button.textContent = 'Show More'
      }
    },

    findLongDescription(button) {
      let language = button.parentElement.dataset.lang
      return this.languages.find(l => l.name === language).description
    },
  }

  App.init()
})

/*
try with handlebars

pass an object with a mapped version of languages???
*/