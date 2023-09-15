// document.addEventListener('DOMContentLoaded', () => {
//   let App = {
//     form: document.querySelector('form'),
//     inputName: document.querySelector('input#name'),
//     inputQuantity: document.querySelector('input#quantity'),
//     groceryList: document.querySelector('#grocery-list'),

//     init() {
//       this.bindButton();
//       this.bindInputQuantity()
//     },

//     bindButton() {
//       this.form.addEventListener('submit', event => {
//         event.preventDefault()
//         let name = this.inputName.value
//         let quantity = this.inputQuantity.value || 1
//         if (!name) return

//         this.addGrocery(name, quantity)
//         this.form.reset()
//       })
//     },

//     addGrocery(name, quantity) {
//       let li = document.createElement('li')
//       li.append(quantity, ' ', name)
//       this.groceryList.append(li)
//     },

//     bindInputQuantity() {
//       this.inputQuantity.addEventListener('keypress', event => {
//         if (event.key.match(/[^\d]/)) event.preventDefault()
//       })
//     },
//   }

//   App.init()
// })

$(() => {
  let App = {
    $form: $('form'),
    $inputName: $('input#name'),
    $inputQuantity: $('input#quantity'),
    $groceryList: $('#grocery-list'),

    init() {
      this.bindButton();
      this.bindInputQuantity()
    },

    bindButton() {
      this.$form.on('submit', event => {
        event.preventDefault()
        let name = this.$inputName.val()
        let quantity = this.$inputQuantity.val() || 1
        if (!name) return

        this.addGrocery(name, quantity)
        this.$form[0].reset()
      })
    },

    addGrocery(name, quantity) {
      let li = document.createElement('li')
      li.append(quantity, ' ', name)
      this.$groceryList.append(li)
    },

    bindInputQuantity() {
      this.$inputQuantity.on('keypress', event => {
        if (event.key.match(/[^\d]/)) event.preventDefault()
      })
    },
  }

  App.init()
})