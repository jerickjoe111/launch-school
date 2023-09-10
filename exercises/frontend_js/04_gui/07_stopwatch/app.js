$(() => {
  let App = {
    $startButton: $('button.toggle'),
    $resetButton: $('button.reset'),
    $centiseconds: $('span.centiseconds'),
    csIntervalId: null,
    centiseconds: 0,
    seconds: -1,


    init() {
      this.$startButton.on('click', this.startStop.bind(this))
      this.$resetButton.on('click', this.reset.bind(this))
    },

    startStop(event) {
      let button = event.target;
      if (button.textContent === 'Stop') {
        clearInterval(this.csIntervalId)
        button.textContent = 'Start'
        return;
      }

      this.csIntervalId = setInterval(this.addCS.bind(this), 10)
      button.textContent = 'Stop'
    },

    addCS() {
      if (this.centiseconds % 100 === 0)  {
        this.seconds += 1
        this.updateTimers()
      }
      this.$centiseconds.text(this.format(this.centiseconds += 1))
    },

    updateTimers() {
      let seconds = this.seconds % 60
      let minutes = Math.floor(this.seconds / 60)
      let hours = Math.floor(minutes / 60)

      document.querySelector('span.seconds').textContent = this.format(seconds)
      document.querySelector('span.minutes').textContent = this.format(minutes)
      document.querySelector('span.hours').textContent = this.format(hours)
    },

    reset() {
      clearInterval(this.csIntervalId)
      this.csIntervalId = null;
      this.seconds = 0;
      document.querySelectorAll('.timer span').forEach(span => span.textContent = '00')
    },

    format(number) {
      return `${number % 100}`.padStart(2, '0')
    }
  }

  App.init()
})


/*
*/