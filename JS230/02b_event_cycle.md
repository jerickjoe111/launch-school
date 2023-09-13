# Events

request
1. The request is sent by the browser, asking the server for the HTML document

response
2. The response arrives, with the document in its body as a long string

parsing response
3. The response is parsed by the browser

dom creating

4. As the document is parsed, the DOM is created, 

scripts evaluated

5. As the browser parses the `<script>` element, the JavaScript inside it is executed. In this case, an event listener is registered to the `document` object, set to be triggered when the `DOMContentLoaded` is fired. When the listener is executed, its code will register the appropriate listeners to specific elements, already present in the DOM; these listeners will be ready to be invoked when the event of the specified type occurs.

listening phase or event-driven phase

event occurs
6. When the event occurs, it is dispatched from the `window` object all down to the element that triggered it; 

[See details of this process](./02a_events.md#event-dispatch-and-propagation)

event dispatched

listener triggered:

          capturing phase  

          target phase

          bubling phase
