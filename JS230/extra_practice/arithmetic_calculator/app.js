// document.addEventListener('DOMContentLoaded', () => {
//   let App = {
//     operations: {
//       "+": (a, b) => a + b,
//       "-": (a, b) => a - b,
//       "*": (a, b) => a * b,
//       "/": (a, b) => a / b,
//     },

//     init() {
//       this.bindNumberInputs();
//       this.bindEqual();
//     },

//     bindNumberInputs() {
//       document.querySelector('fieldset').addEventListener('change', () => {
//         this.calculate()  
//       })
//     },

//     bindEqual() {
//       document.querySelector('input[type=submit]').addEventListener('click', event => {
//         event.preventDefault()
//         this.calculate()
//       })
//     },

//     calculate() {
//       let operandA = Number(document.querySelector('#first-number').value)
//       let operandB = Number(document.querySelector('#second-number').value)
//       let operator = document.querySelector('#operator').value
//       let result = this.operations[operator](operandA, operandB)
//       document.querySelector('#result').textContent = result
//     }
//   }

//   App.init()
// })

$(() => {
  let App = {
    operations: {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
    },

    init() {
      this.bindNumberInputs();
      this.bindEqual();
    },

    bindNumberInputs() {
      $('fieldset').on('change', this.calculate.bind(this))
    },

    bindEqual() {
      $('input[type=submit]').on('click', event => {
        event.preventDefault();
        this.calculate
      })
    },

    calculate() {
      let operandA = Number($('#first-number').val())
      let operandB = Number($('#second-number').val())
      let operator = $('#operator').val()
      let result = this.operations[operator](operandA, operandB)
      $('#result').text(result)
    }
  }

  App.init()
})