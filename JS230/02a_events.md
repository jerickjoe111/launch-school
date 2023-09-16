# Events

Client-side JavaScript programs use an _event-driven programming model_. In this model, the program waits for _events_ to occur - the browser generates an event whenever something interesting happens to the document or browser or some object associated with it, for example, when the DOM finishes loading, or the user clicks on an element or press a keyboard key. We can define in our JavaScript programs what type of events we are interested in, so we can register one or more functions to be called when an event of that particular type occurs. This is not unique to JavaScript: all applications with a graphical interface are designed to work like this.

In client-side JavaScript, events can occur on any HTML element, even on the document itself, or not being triggered by user activity at all, but by the browser itself or the network, indicating some alteration in their state, document loading, elapsed time, errors in JavaScript code, etc. 

This makes the event-driven model more complex, and it's necessary to give some basic definitions:

- **Event type**: This is a string that indicates what kind of event has occurred, for example, `'click'` for when a user clicks on an element, or `'load'` for when a document has finished loading from the network.

- **Event target**: The object on which the event occurred, or the object associated to the event. `Window`, `Document` and `Element` objects are the usual event targets. Whenever we talk about a particular event, we must specify the event _type_ and the event _target_.

- **Event handler or listener**: (these terms are usually used as synonyms) This is the function that is invoked (that _handles_ or _responds_ to) when an event of a specified type on a specified target occurs, previously registered by the application.

- **Event object**: This is an `Event` object linked to a particular event that contains details about it. This object is passed to the event listener as argument, and we can interact with this object via its properties and methods: each `Event` object defines some properties with general information about the event (like its type and target), plus some specific properties, particular to each event type (for instance, the coordinates of the mouse pointer for a mouse event). This object also defines methods that alter the default actions of an event, among other functions.

- **Event propagation**: This refers to a process that the browser uses to decide which objects to trigger the event on. Some events are specific to a single object (like the `'load'` event on the `Window` object), but many others that occur on HTML elements propagate or _bubble up_ the document tree, up the elements that contain the element on which the event is first fired.

Some common events imply default actions (for example, load a new page whenever the user clicks on a hyperlink). However, event listeners can prevent these default actions by calling methods on the event object.

## Types of Events

We can classify the types of events in some general categories:

- **Device-dependent input events**: These events are directly tied to a specific input device, like the mouse or the keyboard, for instance, `'mousedown'`, `'mouseup'`, `'keydown'`, or `'keyup'`.

- **Device-independent input events**: These events are not directly tied to a specific input event: for example, the `'click'` refers to the activation of a link or a button, but this activation could have been made by the mouse, the keyboard, or a pointing device.

- **User interface events**: These are UI higher-level events on HTML elements, for instance, form elements. These include the `'focus'` or the `'submit'` events.

- **State-change events**: Some events are not activated by the user, but by network activity or the browser itself, indicating some kind of life-cycle or state-related change. The `'load'` and the `'DOMContantedLoad'` events are the most commonly used in this category.

- **API-specific events**: Many web APIs define their own event types, for example, the `XMLHttpRequest`.

## Page life-cycle events

The fully functional webpage displayed on the browser's window is the result of a cycle consisting of three main phases: the initial document HTTP request-response, a document-loading phase, and an asynchronous or _event driven_ phase:

1. In the first phase the browser sends the request asking the server for the main document, who sends back the response with the HTML code in its body.

2. In the second phase the document content is loaded and the code within `<script>` elements, both internal and external, is executed: the browser first creates a `Document` object, adding the corresponding nodes as the HTML is parsed, the JavaScript code is evaluated normally as it is found, and the DOM is constructed from the parsed HTML. The DOM loading marks the end of this phase and the beginning of the last phase.

3. In the third and last phase, the `DOMContentLoaded` event is fired on `document`. This marks the transition from the synchronous phase to the next, asynchronous phase. The page is displayed on the browser's window, while the rest of the document's external resources, like images or videos, (_assets_) are loaded. The `DOMContentLoaded` event is triggered when the HTML document as been completely parsed and loaded, however, the `load` event is only triggered much later, when all the assets are fully loaded.

The second, page loading phase is relatively short, but once the document is loaded, the asynchronous, event-driven phase lasts indefinitely, as long as the document is displayed by the browser. It is during this last phase when the browser invokes event listeners and other callbacks in response to events that occur asynchronously. 

It's often the case that we use the `DOMContentLoaded` event as a trigger to execute code or register other event listeners that use the DOM in some way, as the `load` event may delay an indeterminate amount of time.

We can use the `document.readyState` property to check the page loading progression, after the `Document` object has been created: 

- While the HTML is being parsed, it has the value of `'loading'`;
- When the document is completely parsed, it has the value of `'interactive'`;
- When the document and all the external assets finish loading, and all the `async` scripts have been executed, this property's value changes to `'complete'`.

## Registering event listeners

There are two main ways to register event listeners: the old-school way, that sets a property on the object or document element that is the event target, and the newer and more general, which uses the `addEventListener()`.

The old-school way consisted on setting a property of the event target to the desired listener function; by convention, the name of the property was composed by the word 'on', plus the name of the event, for example:

```js
window.onload = function() {
  // do something
}
```

This way, however, is now deprecated, and it shouldn't be used.

### `addEventListener()`

The newer and preferred way concerns the `addEventListener()` function. Any object that is eligible to be a target of an event defines a method with this name - this includes the `Window` object, `Document`, and all `Element` objects-, and registering an event on them is as easy as to invoke it on them with the appropriate arguments.

We can call this function many times to register more than one listener for the same type of event on the same target. When an event occurs on an object, all the listeners registered for that type of event will be invoked in the order on which they were registered. 

This function takes three arguments:

- The event name or type for which the listener is registered, passed in as a string (like `'click'`, `'keyup'`, or `'DOMContentLoaded'`);
- the callback function that will be invoked in case the event of that type occurs,
- and an optional 'options' argument.

This third argument can be a boolean or an object. If it is `true` the listener will be registered as a _capturing event_, and it will be invoked at a different phase of the event dispatch-propagation (on the _capturing_ phase). We can also pass an object specifying the options we want for the listener:

```js
document.addEventListener('click', listener, {
  capture: true,
  once: true,
  passive: true,
})
```

- the `capture` property indicates if the listener is capturing;
- the `once` property indicates if the event should be automatically removed after it is triggered once;
- the `passive` property indicates if the event handler will never call the `preventDefault()` function to cancel the default action.

It's important to point out that event listeners are invoked _as methods of the target object on which they are defined_. This means that, within its body, `this` will refer to the object on which they were registered. This won't work for listeners defined as arrow functions, as this type of functions 'inherit' the value of `this` from their contexts.

We can call `removeEventListener()` with the same arguments to remove an event listener added to a target (only the `capture` property on the third argument is important to this function). This can be useful is some situations.

## The `Event` object

Event listeners are passed an `Event` object upon invocation as a single argument. This `Event` object includes some informative and useful properties and methods:

### Properties

This object has some general properties, available to every `Event` object, and some type-specific properties.

All `Event` objects have:

- `type`: The type of event as a string.
- `target`: The object on which the event _ocurred_.
- `currentTarget`: The object on which the current listener _was registered_.
- `timeStamp`: A timestamp in milliseconds, it does not represent an absolute time.
- `isTrusted`: `true` if the event was dispatched by the web browser itself, `false` if the event was dispatched by JavaScript code.

Examples of type-specific properties on the `Event` object are, for mouse events:

- `button`: read-only property which indicates which mouse button was pressed.
- `clientX`: the value of the pointer on the x axis (horizontal)
- `clientY`: the value of the pointer on the y axis (vertical)

And, for keyboard-related events:

- `key`: The string value of the pressed key (not supported by old browsers)
- `shiftKey`: Boolean indicating whether the user pressed the shift key
- `altKey`: Boolean indicating whether the user pressed the alt key
- `ctrlKey`: Boolean indicating whether the user pressed the control key
- `metaKey`: Boolean indicating whether the user pressed the command or meta key
- `code`: returns a value that isn't altered by keyboard layout or the state of the modifier keys; it represents a physical key on the keyboard (as opposed to the character generated by pressing the key).

### Methods

This object provides useful methods:

- `preventDefault()`: prevents the browser from executing its default action (unless the event was registered with the `passive` property as `true`)
- `stopPropagation()`: cancels the propagation of events. If there are other listeners defined on the same object, the rest of those listeners will still be invoked, but no event listeners _on any other object_ will be invoked after this method is called. This method works during the capturing phase, the event target itself, and during the bubbling phase.
- `stopImmediatePropagation()`: it works as `stopPropagation()`, except it prevents also the invocation of any subsequent event listeners registered on the same object.

!
It's very important to remember that the browser lets the event go through the capturing and bubbling phases before it causes the event's default behavior (like loading a new page after clicking on a link); but that default action will be prevented if there's any listener on the path with a `preventDefault()` invocation.

## Event dispatch and propagation

In JavaScript, most events that occur on document elements _propagate_. This means that, when the event occurs, it is _dispatched_ all throughout the `window` object up and down the containing DOM elements in three distinct phases: the _capturing phase_, the _target phase_, and the _bubbling phase_.

1. In the **capturing phase**, the event gets 'dispatched' or 'transmitted' first to the `window` object, then to the `document` object, and then all the way down until reaching the target element. In practice, this means that, if any, the capturing listeners (listeners registered with the appropriate _options_ argument) of the `Window` object are invoked first, then the capturing listeners on `document`, then on `body`, and so on all the way down the DOM tree until the capturing listeners of the parent of the event target are called. 
2. In the **target phase**, non-capturing listeners are invoked on the target object on which the event was fired originally.
3. The **bubbling phase**: Most events on documents 'bubble': after the listeners on the target phase are invoked, the listeners for this type of event, if any, registered on the target's parent are invoked, and then again, if any, the listeners on the parent's parent are also invoked, and then this process continues up to the `Document` and the `Window` object. This event propagation phase is like the capturing phase in reverse.

It's very important to remember that the browser lets the event go through the capturing and bubbling phases before it does the default action of the event (like loading a new page after clicking on a link), but that default action will be prevented if there's any listener on the path with a `preventDefault()` invocation.

The vast majority of events bubble, except `'focus'`, `'blur'`, and `'scrolls'` (meaning that listeners for them have to be registered as capturing listeners via the `addEventListener` third argument). The `'load'` event on document elements bubbles, but it stops at the `Document` object, not propagating into the `window` object.

Capturing listeners can be very helpful when we want to inspect an event before it is dispatched to its target, for instance when debugging. Other common use for event capturing is for handling mouse drags.

### Delegation

Although not very intuitive at first, event propagation allows us to implement _event delegation_: Thanks to the 'bubbling' phase, we can register a single listener on a common ancestor element and handle the event response from there, instead of having to add individual listeners to each element, which can lead to extremely confusing code and/or become memory-heavy (we would be creating different functions objects for each different element).

We can create our own custom events with the `dispatchEvent()` method, invoked on the element that we want to dispatch the event to, and passing the event object as argument:

```js
let element = document.querySelector('#element')
let event = new CustomEvent('[event-type]');

element.dispatchEvent(event);
```

[Add table of commonly used events]

User interface

`load`The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images

`unload`
`error`
`resize` when the document view (window) has been resized.This event is not cancelable and does not bubble.
`scroll`

Focus and blur

`focus` when an element has received focus. The event does not bubble, but the related `focusin` event that follows does bubble.
`blur` The opposite of focus is the blur event, which fires when the element has lost focus.
`focusin`
`focusout`

Mouse events

`click` when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
`dbclick`
`mousedown`
`mouseup`
`mouseover`
`mouseout`
`mousemove`
`mouseenter` when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.
`mouseleave` when the cursor of a pointing device (usually a mouse) is moved out of it. mouseleave does not bubble 

This means that mouseleave is fired when the pointer has exited the element and all of its descendants, whereas mouseout is fired when the pointer leaves the element or leaves one of the element's descendants (even if the pointer is still within the element).

Keyboard events
`input` The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox).
`keydown` The keydown event is fired when a key is pressed. fired for all keys, regardless of whether they produce a character value.
The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events.
`keyup` The keyup event is fired when a key is released.
`keypress` (deprecated) The keypress event is fired when a key that produces a character value is pressed down.

Form events

`submit` The submit event fires when a <form> is submitted. Note that the submit event fires on the <form> element itself The submit event fires when the user clicks a submit button or presses Enter while editing a field
`change` The change event is fired for <input>, <select>, and <textarea> elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
`input` The input event fires when the value of an <input>, <select>, or <textarea> element has been changed as a direct result of a user action (such as typing in a textbox or checking a checkbox).

HTML5 Events

`DOMcontentLoaded` The DOMContentLoaded event fires when the HTML document has been completely parsed, and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.
`hashchange`
`beforeunload`

Mutation events and observers