$(() => {
  const FORM_ERROR_MESSAGE = `Form cannot be submitted until errors are corrected.`;

  let App = {
    $formErrors: $('.form-errors'),

    init() {
      this.bindFieldValidation()
      this.bindSubmitButton()
      this.bindInputKeyValidation();
      this.bindAutoTab();
    },

    bindFieldValidation() {
      $('input').on('blur', event => {
        let inputField = event.target;
        let errorMessage = inputField.nextElementSibling
        if ($(inputField).is(':valid')) {
          inputField.classList.remove('invalid-field')
          errorMessage.textContent = ''
          return;
        }

        inputField.classList.add('invalid-field')
        errorMessage.textContent = `The ${this.format(inputField.name)} is required.`
      })
    },

    bindSubmitButton() {
      $('button').on('click', event => {
        event.preventDefault();

        if (!this.allValidInputs()) {
          console.log('fasdfaf')
          this.$formErrors.text(FORM_ERROR_MESSAGE)
          return
        }

        this.$formErrors.text('')
        this.serializeForm()
      })
    },

    format(name) {
      let formatted = name.replace('-', ' ');
      return formatted.slice(0, 1) + formatted.slice(1, formatted.length)
    },

    allValidInputs() {
      return $('input:invalid').length === 0
    },

    bindInputKeyValidation() {
      $('fieldset').on('keydown', 'input', event => {
        let key = event.key
        if (!key) return;

        let input = event.target.name
        let allowedPattern = input.match(/name|(^backspace)/i) ? /[a-z]/i : /^\d+$|/i;
        if (!key.match(allowedPattern) ) {
          event.preventDefault()
          return
        }
      })
    },

    bindAutoTab() {
      $('#autotab').on('keydown', 'input:not(#cd4)', event => {
        if ($(event.target).val().length === 4) {
          event.target.nextElementSibling.focus()
        }
      })
    },

    serializeForm() {
      let data = new FormData()
      let creditCardNumber = ''
      document.querySelectorAll('input[name=credit-card]').forEach(input => creditCardNumber += input.value )
      document.querySelectorAll('input').forEach(input => {
        let name = input.name;
        if (name === 'credit-card') return

        data.append(name, input.value)
      })
      data.append('credit-card', creditCardNumber)
      
      this.sendRequest(data);

      $('#form-data').text(new URLSearchParams(data).toString())
    },

    sendRequest(queryString) {
      let request = new XMLHttpRequest();
      request.open('POST', '/')
      request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      request.send(queryString)
    }
  }

  App.init()
})