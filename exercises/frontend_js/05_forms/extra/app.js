document.addEventListener('DOMContentLoaded', () => {
  let App = {
    allInputs: document.querySelectorAll('dd input'),
    formErrors: document.querySelector('.form_errors'),

    init() {
      this.registerInputs();
      this.registerSubmitButton();
    },

    registerInputs() {
      document.querySelector('fieldset dl').addEventListener('blur', event => {
        let target = event.target
        if (target.tagName !== 'INPUT') return
        
        if (!target.validity.valid) this.markInvalid(target)
        else this.markValid(target)
        if (this.checkAllValid()) {
          this.formErrors.textContent = ''
        }
      }, true)

      document.querySelector('fieldset dl').addEventListener('focus', event => {
        let target = event.target
        if (target.tagName !== 'INPUT') return
        this.markValid(target)
      }, true)
    },

    markValid(input) {
      let messageSpan = input.nextElementSibling
      messageSpan.textContent = ''
      input.classList.remove('invalid_field')
    },
    
    markInvalid(input) {
      let messageSpan = input.nextElementSibling
      let name = input.name.split('_')
                           .map(w => w[0].toUpperCase() + w.slice(1, w.length))
                           .join(' ')
      messageSpan.textContent = `${name} is a required field`
      input.classList.add('invalid_field')      
    },

    checkAllValid() {
      for (let input of [...this.allInputs]) {
        if (!input.validity.valid) return false
      }
      return true
    },

    registerSubmitButton() {
      document.querySelector('form').addEventListener('submit', event => {
        event.preventDefault()
        if (!this.checkAllValid()) this.formErrors.textContent = "Fix errors before submitting this form."
      })
    }
  }

  App.init()
})

/*
  for all inputs
  if invalid one,

      return
      show fix errors

*/