document.addEventListener('DOMContentLoaded', () => {
  function delegateEvent(parentElement, selector, eventType, callback) {
    if (!parentElement) return;

    parentElement.addEventListener(eventType, event => {
      if ([...parentElement.querySelectorAll(selector)].includes(event.target)) {
        callback(event)
      }
    });

    return true;
  }
})