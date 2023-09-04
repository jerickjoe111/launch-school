document.addEventListener('DOMContentLoaded', () => {
  const divRed = document.querySelector('#red');
  const divBlue = document.querySelector('#blue');
  const divOrange = document.querySelector('#orange');
  const divGreen = document.querySelector('#green');

  let tracker = (() => {
    let events = [];
    return {
      add() {
        events.push(event);
      },

      list() {
        return events.slice();
      },

      elements() {
        return this.list().map(({target}) => target );
      },

      clear() {
        events.length = 0;
      },

      includes(event) {
        return events.includes(event);
      },
    }
  })()

  function track(callback) {
    return event => {
      if (!tracker.includes(event)) tracker.add(event)
      callback(event)
    }
  }

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));
  
  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));
  
  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));
  
  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
})