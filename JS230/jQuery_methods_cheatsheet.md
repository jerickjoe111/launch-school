Here is the list of most commonly used jQuery API functions:

(all these are methods to be called on jQuery objects, with or without a selector argument)

DOM traversal/manipulation

* **[find()](http://api.jquery.com/find)**: Gets a collection of descendant elements based on the provided selector string, jquery object, or element
* **[children()](http://api.jquery.com/after)**:  Like `find()`, but only travels one level (only direct children)
* **[append()](http://api.jquery.com/append)** inserts the specified content as the last child of each element in the jQuery collection
* **[prepend()](http://api.jquery.com/prepend)** inserts the specified content as the first child of each element in the jQuery collection
* **[before()](http://api.jquery.com/before)**: Insert content, specified by the parameter, before each element in the set of matched elements.
* **[after()](http://api.jquery.com/after)**:  Insert content, specified by the parameter, after each element in the set of matched elements.
* **[remove()](http://api.jquery.com/remove)**: Removes the set of matched elements from the DOM.
* **[empty()](http://api.jquery.com/empty)**:  Remove all child nodes of the set of matched elements from the DOM.

Element querying

* **[html()](http://api.jquery.com/html)**: Gets or sets an inner HTML of an element   
* **[val()](http://api.jquery.com/val)**: Gets or sets the `value` attribute of an element
* **[text()](http://api.jquery.com/text)**: Gets the combined text of an element and its children
* **[css()](http://api.jquery.com/css)**: Gets or sets the style attribute value of an element        
* **[attr()](http://api.jquery.com/attr)** Gets or sets any attribute of an element

Events

* **[on()](http://api.jquery.com/on)**: Attaches an event listener to an element
* **[off()](http://api.jquery.com/off)**: Detaches an event listener from an element
* **[one()](http://api.jquery.com/off)**: identical to `.on()`, except that the handler for a given element and event type is unbound after its first invocation. 

Iterators

* **[each()](http://api.jquery.com/each)**: Iterates over a set of matched elements
* **[map()](http://api.jquery.com/map)**:  Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.

CSS/Animations

* **[hide()](http://api.jquery.com/hide)**: Hides an element if it was visible
* **[show()](http://api.jquery.com/show)**: Shows an element if it was hidden
* **[addClass()](http://api.jquery.com/)**: Adds the specified class(es) to each element in the set of matched elements.
* **[toggle()](http://api.jquery.com/toggle)**:  Display or hide the matched elements.
* **[toggleClass()](http://api.jquery.com/toggle)**:  Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.

Extra:

* **[add()](http://api.jquery.com/load)**: Given a jQuery object that represents a set of DOM elements, the .add() method constructs a new jQuery object from the union of those elements and the ones passed into the method.

* **[load()](http://api.jquery.com/load)**: Load data from the server and place the returned HTML into the matched elements.

* **[eq()](http://api.jquery.com/)**: Reduces the set of matched elements to the one at the specified index.
* **[odd()](http://api.jquery.com/odd)**: Reduces the set of matched elements to elements at an odd index number
* **[even()](http://api.jquery.com/even)**: Reduces the set of matched elements to elements at an even index number
* **[last()](http://api.jquery.com/last)**: Reduce the set of matched elements to the last in the set.
* **[first()](http://api.jquery.com/last)**: Reduce the set of matched elements to the first in the set.

* **[filter()](http://api.jquery.com/filter)**: Reduce the set of matched elements to those that match the selector or pass the function's test.

* **[proxy()](http://api.jquery.com/filter)**: Takes a function and returns a new one that will always have a particular context. (like `bind()`)

Pseudo-selectors:

* **[':contains(text)'](http://api.jquery.com/remove)**: Select all elements that contain the specified text. (i.e `'p:contains(text)'`)
* **[':not(selector)'](http://api.jquery.com/remove)**: Selects all elements that do not match the given selector.

Attribute selectors:

Attribute Contains Selector [name*=”value”]
Selects elements that have the specified attribute with a value containing a given substring.

Attribute Contains Word Selector [name~=”value”]
Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.

Attribute Starts With Selector [name^=”value”]
Selects elements that have the specified attribute with a value beginning exactly with a given string.

Attribute Ends With Selector [name$=”value”]
Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.