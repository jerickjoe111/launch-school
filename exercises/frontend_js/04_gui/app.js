$(() => {
  let App = {
    $screenCurrentNumber: $('.current-num'),
    $screenCurrentCalculation: $('.calculation'),
    operandA: null,
    operandB: null,
    operandCache: '',
    operation: null,

    init() {
      this.registerButtons()
    },

    registerButtons() {
      $('#buttons').on('click', 'a', this.pressButton.bind(this));
    },

    pressButton(event) {
      let buttonType = event.target.className;
      let button = event.target.textContent;
      switch (buttonType) {
        case 'digit':
          this.handleDigit(button);
          break;
        case 'op':
          this.handleOperator(button);
          break;
        case 'result-button':
          this.operate();
          break;
        case 'control':
          this.handleControl(button);
          break;
        case 'dot':
          if (!this.operandCache.match(/\./)) this.operandCache += '.';
      }
    },

    handleDigit(digit) {
      this.operandCache += digit
      let number = this.$screenCurrentNumber.text() === '0' ? digit : this.operandCache;
      this.$screenCurrentNumber.text(number)
      if (this.operandA) this.operandB = Number(this.operandCache)
    },

    handleOperator(button) { 
      this.operation = button;
      let screenNumber = this.$screenCurrentNumber.text();
      this.operandA = screenNumber ? Number(screenNumber) : Number(this.operandCache)
      this.operandCache = '';
      this.$screenCurrentCalculation.text(`${this.operandA} ${this.operation}`)
      this.$screenCurrentNumber.text('0');
    },

    operate() {
      let result;
      switch (this.operation) {
        case '+':
          result = this.operandA + this.operandB;
          break;
        case '-':
          result = this.operandA - this.operandB;
          break;
        case 'x':
          result = this.operandA * this.operandB;
          break
        case '÷':
          result = this.operandA / this.operandB;
          break;
        case '%':
          result = this.operandA % this.operandB;
          break;
      }

      this.$screenCurrentCalculation.text('')
      this.$screenCurrentNumber.text(result)
    },

    handleControl(button) {
      switch (button) {
        case 'CE':
          this.$screenCurrentNumber.text('0')
          this.operandCache = ''
          break;
        case 'C':
          this.$screenCurrentNumber.text('0')
          this.operandCache = ''
          this.$screenCurrentCalculation.text('')
          this.operandA = null;
          this.operandB = null;
          break;
        case 'NEG':
          let number = -Number(this.$screenCurrentNumber.text())
          let cache = this.operandCache;
          this.operandCache = cache[0] === '-' ? cache.slice(1, cache.length - 1) : `-${cache}`;
          this.operandA = Number(this.operandCache)
          this.$screenCurrentNumber.text(number)
          break
      }

    },

  }

  App.init()
})

/*

chain operations:

  when operation is done,
  screen number becomes operand A ??

*/