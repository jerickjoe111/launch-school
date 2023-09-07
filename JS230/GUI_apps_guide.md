# GUI Mini App creation guide:


Upon the `DOMContentLoaded` event, within the listener:

1. Define constants and variables to use within the mini app (objects, arrays, constants, etc.)
2. Create an object (literal) and assign it to a variable `App`
3. Within the object:
  1. Define references to elements in the DOM you will need as properties of the object
  2. Define other properties, for example, for HTML compilers.
  3. Define an `init()` method. This will initialize the mini app. Within this method, usually we render DOM elements, templates, register initial listeners, hide certain elements, etc. This method will define the initial state for the app that the user will first find.
  4. Define each function. One per operation for example, one for hide and show elements, set timed events, bind certain events (after the user has clicked on an element, etc.)

  - Warning: `this` within the callbacks that work as listeners refers to the element on which the listener is registered, not to the `App` object. For this reason, any callback that will make use of _any property or method_ of the `App` object must be passed permanently bound to the object when we pass them as arguments to the listener adder (`addEventListener()`, or `.on()` in jQuery). For instance:

  ```js
  let App  = {
    property = '1',

    init() {
      let element = document.querySelector('#element')
      element.addEventListener('click', this.methodCallBack.bind(this)) // we pass it bound to the object,...
    },

    callback() {
      alert(this.property) // ... so `this` within the callback refers to the object, not the element.
    }
  }
  ```
4. No initialize the GUI mini app, we call `App.init()`