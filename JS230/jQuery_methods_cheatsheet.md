Here is the list of most commonly used jQuery API functions:

* **[find()](http://api.jquery.com/find)**: Selects elements based on the provided selector string
* **[hide()](http://api.jquery.com/hide)**: Hides an element if it was visible
* **[show()](http://api.jquery.com/show)**: Shows an element if it was hidden
* **[html()](http://api.jquery.com/html)**: Gets or sets an inner HTML of an element
* **[append()](http://api.jquery.com/append)** Injects an element into the DOM after the selected element
* **[prepend()](http://api.jquery.com/prepend)** Injects an element into the DOM before the selected element
* **[on()](http://api.jquery.com/on)**: Attaches an event listener to an element
* **[off()](http://api.jquery.com/off)** Detaches an event listener from an element
* **[css()](http://api.jquery.com/css)**: Gets or sets the style attribute value of an element
* **[attr()](http://api.jquery.com/attr)** Gets or sets any attribute of an element
* **[val()](http://api.jquery.com/val)**: Gets or sets the `value` attribute of an element
* **[text()](http://api.jquery.com/text)**: Gets the combined text of an element and its children
* **[each()](http://api.jquery.com/each)**: Iterates over a set of matched elements

Extra:

* **[addClass()](http://api.jquery.com/)**:
* **[toggle()](http://api.jquery.com/toggle)**:  Display or hide the matched elements.
* **[toggleClass()](http://api.jquery.com/toggle)**:  Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
* **[fade()](http://api.jquery.com/fade)**: 
* **[map()](http://api.jquery.com/map)**:  Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.
* **[before()](http://api.jquery.com/before)**: Insert content, specified by the parameter, before each element in the set of matched elements.
* **[after()](http://api.jquery.com/after)**:  Insert content, specified by the parameter, after each element in the set of matched elements.
* **[find()](http://api.jquery.com/find)**: 
* **[load()](http://api.jquery.com/load)**: 
* **[empty()](http://api.jquery.com/empty)**: 
* **[remove()](http://api.jquery.com/remove)**: 

* **[eq()](http://api.jquery.com/)**: Reduce the set of matched elements to the one at the specified index.
* **[odd()](http://api.jquery.com/odd)**: 
* **[even()](http://api.jquery.com/even)**: 
* **[last()](http://api.jquery.com/last)**: 

* **[filter()](http://api.jquery.com/filter)**: 

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