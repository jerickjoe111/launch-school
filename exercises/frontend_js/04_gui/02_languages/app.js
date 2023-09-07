$(() => {
  const LANGUAGES = [
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
  ];

  const MAX_CHARACTERS = 120

  function shorten(description) {
    return description.slice(0, MAX_CHARACTERS) + ' ...'
  }

  function findDescription(language) {
    return LANGUAGES.find(lang => lang.name === language).description
  }

  LANGUAGES.forEach(language => {
    let languageDiv = document.createElement('div');
    languageDiv.classList.add('lang');
    languageDiv.dataset.lang = language.name;
    let title = document.createElement('h2');
    title.append(language.name);
    let description = document.createElement('p');
    description.append(shorten(language.description));
    let button = document.createElement('a');
    button.href = '#';
    button.classList.add('more');
    button.append('Show More');
    
    languageDiv.append(title);
    languageDiv.append(description);
    languageDiv.append(button);
    document.querySelector('#languages').append(languageDiv);
  })


  $('.more').on('click', event => {
    let button = event.target
    let parent = event.target.parentElement
    let language = parent.dataset.lang
    if (event.target.textContent === 'Show More') {
      parent.querySelector('p').textContent = findDescription(language)
      button.textContent = 'Show Less'
    } else {
      parent.querySelector('p').textContent = shorten(findDescription(language))
      button.textContent = 'Show More'
    }
  })
})

/*
try with handlebars

pass an object with a mapped version of languages???
*/