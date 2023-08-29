# The DOM API

## General Overview

1. [Selecting Nodes and Elements](#selecting-nodes-and-elements)

    - CSS selectors

        - `document.querySelector([css selector string])`
        - `document.querySelectorAll([css selector string])`

    - Shortcut properties

        - `document.images`
        - `document.forms`
        - `document.links`
        - etc.

    - Other Methods (old school)

        - `document.getElementById()`
        - `document.getElementByName()`
        - `document.getElementByTagName()`
        - `document.getElementByClassName()`

2. [Properties used for DOM traversal](#properties-for-dom-traversal)

    - DOM as a tree of Elements

        - `element.parentNode`

        - `element.children`
        - `element.childrenElementCount`
        - `element.firstElementChild`
        - `element.lastElementChild`

        - `element.previousElementSibling`
        - `element.nextElementSibling`

        - `element.textContent`

    - DOM as a tree of Nodes

        - `node.parentNode`

        - `node.childNodes`
        - `node.firstChild`
        - `node.lastChild`

        - `node.nextSibling`
        - `node.previousSibling`

        - `node.nodeType`
        - `node.nodeName`
        - `node.nodeValue`

        - `node.contains(otherNode)`

3. [Getting/Setting Elements HTML Attributes](#gettingsetting-element-html-attributes)

    - General Methods (old school)

        - `element.getAttribute(name)`
        - `element.setAttribute(name, newValue)`
        - `element.hasAttribute(name)`
        - `element.removeAttribute(name)`

    - Element object properties

        - Universal

            - `element.className`
            - `element.classList`
                - `add()`
                - `remove()`
                - `toggle()`
                - `contains()`
            - `element.id`
            - etc.

        - Element-specific

            - `image.src`
            - `link.href`
            - `input.value`
            - etc.

4. [Getting/Setting Document Content](#gettingsetting-document-content)

    - Element Content as HTML

        - `element.innerHTML`
        - `element.outerHTML`
        - `element.insertAdjacentHTML(position, HTMLstring)`

    - Element Content as Plain Text

        - `textContent`

5. [Creating, inserting, deleting nodes](#creating-inserting-and-deleting-nodes)

    - Element creation

        - `document.createElement(tagName)`

    - Element insertion

        - As a child of an Element

            - `element.prepend(strings or elements)`
            - `element.append(strings or elements)`

        - As a sibling of a Node

            - `node.before(strings or elements)`
            - `node.after(strings or elements)`

    - Element cloning

        - `element.cloneNode(true for deep cloning)`

    - Node deletion

        - `node.remove()`
        - `node.replaceWith(strings or elements)`

    - Old school methods

## Selecting Nodes and Elements

### CSS Selector Methods

| Method | Description | Return value | Notes |
| --- | --- | --- | --- | 
| `document.querySelector(selectors)` | Returns first Element that matches CSS selector or selectors | First Element found or `null` | Characters that are not part of standard CSS syntax must be escaped (i.e.:numerical ids have to be escaped with `CSS.escape(id)`) |
| `document.querySelectorAll(selectors)` | Returns a static (not live) `NodeList` representing a list of the document's elements that match the specified selectors. | `NodeList` or `null` | Characters that are not part of standard CSS syntax must be escaped (i.e.:numerical ids have to be escaped with `CSS.escape(id)`) |

### Old School Methods

| Method | Description | Return value | Notes |
| --- | --- | --- | --- | 
| `document.getElementById(id)` | Returns an Element object representing the element whose id property matches the specified string.  | The element or `null` | The `#` is not necessary | 

## Properties for DOM Traversal

### DOM as a tree of Elements

| Property | Description | Value | Notes |
| --- | --- | --- | --- |
| `element.parentNode` | Returns the parent of the `element` | Element | Returns `null` if `element` is the Document |
| `element.children` | returns a live `HTMLCollection` which contains all the child elements of the element upon which it was called. | HTMLCollection | An HTMLCollection in the HTML DOM is live; it is automatically updated when the underlying document is changed. For this reason it is a good idea to make a copy (e.g., using Array.from) to iterate over if adding, moving, or removing nodes. |
| `element.firstElementChild` | returns an element's first child Element, or `null` if there are no child elements. | Element |  |
| `element.lastElementChild` | returns an element's last child Element, or `null` if there are no child elements.  | Element |  |
| `element.previousElementSibling` | returns the Element immediately prior to the specified one in its parent's children list, or `null` if the specified element is the first one in the list.| Element |  |
| `element.nextElementSibling` | returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list. | Element |  |
| `element.textcontent` | Represents the text content of the node and its descendants. |  | Setting `textContent` on a node removes all the node's children and replaces them with a single text node with the given string value. Sometimes people use `innerHTML` to retrieve or write text inside an element, but `textContent` has better performance because its value is not parsed as HTML. |

### DOM as a tree of Nodes

| Property | Description | Value | Notes |
| --- | --- | --- | --- |
| `node.parentNode` | Returns the parent of the `node` | Node |  |
| `node.childNodes` | returns a live `NodeList` of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments. | NodeList | The NodeList being live means that its content is changed each time new children are added or removed. Browsers insert text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using `Node.childNodes[0]` may refer to a whitespace text node rather than the actual element the author intended to get. The `document` object itself has two children: the `Doctype` declaration and the root element, typically referred to as `documentElement`. In HTML documents the latter is the `<html>` element. |
| `node.firstChild` | returns a node's first child Node, or `null` if there are no child elements. | Node |  |
| `node.lastChild` | returns a node's last child Node, or `null` if there are no child elements.  | Node |  |
| `node.previousSibling` | returns the Node immediately prior to the specified one in its parent's children list, or `null` if the specified node is the first one in the list.| Node |  |
| `node.nextSibling` | returns the Node immediately following the specified one in its parent's children list, or null if the specified node is the last one in the list. | Node |  |
| `node.nodeType` | Returns an integer that identifies what the node is. It distinguishes different kind of nodes from each other, such as elements, text and comments.| An integer | `1` for Element, `3` for Text, `8` for Comment, `9` for Document. |
| `node.nodeName` | Returns the name of the current node as a string | A string |  The HTML tag name of an Element object, in uppercase. Other types of nodes return, i.e.: `#text`, or `#comment` for Text or Comment nodes. |
| `node.nodeValue` | Returns or sets the textual value of the current node. | A string | `null` for non-Text or non-Comment nodes |
| `node.contains(anotherNode)` |  returns a boolean value indicating whether a node is a descendant of a given node, that is the node itself, one of its direct children (childNodes), one of the children's direct children, and so on. | A boolean |  |

## Getting/Setting Element HTML Attributes

### Old School General Methods

### Attributes as Element object properties

## Getting/Setting Document Content

### Element content as HTML

| Method | Description | Return value | Notes |
| --- | --- | --- | --- | 
| `element.innerHTML`  |  gets or sets the HTML contained within the element | A string containing the HTML serialization of the element's descendants. | To insert the HTML into the document rather than replace the contents of an element, use the method `insertAdjacentHTML()`. Setting the value of `innerHTML` removes all the element's descendants and replaces them with nodes constructed by parsing the HTML given in the string argument. | 
| `element.outerHTML`  | gets the serialized HTML fragment describing the element including its descendants. It can also be set to replace the element with nodes parsed from the given string. | A string containing the HTML serialization of the element's descendants. |To only obtain the HTML representation of the contents of an element, or to replace the contents of an element, use the `innerHTML` property instead. Reading the value of `outerHTML` returns a string containing an HTML serialization of the element and its descendants. Setting the value of `outerHTML` replaces the element and all of its descendants with a new DOM tree constructed by parsing the specified string argument. | 
| `element.insertAdjacentHTML(position, string)` | parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. | --- | `poisition` can be: `"beforebegin"`Before the element.;`"afterbegin"`,Just inside the element, before its first child; `"beforeend"`, Just inside the element, after its last child; `"afterend"`, After the element. | 

### Element content as plain text
| Property | Description | Value | Notes |
| --- | --- | --- | --- |
| `element.textcontent` | Represents the text content of the node and its descendants. |  | Setting `textContent` on a node removes all the node's children and replaces them with a single text node with the given string value. Sometimes people use `innerHTML` to retrieve or write text inside an element, but `textContent` has better performance because its value is not parsed as HTML. |

## Creating, Inserting and Deleting Nodes

### Element creation

| Method | Description | Return value | Notes |
| --- | --- | --- | --- |
| `document.createElement(tagName)` | creates the HTML element specified by `tagName` | The new element | --- |

### Element insertion

| Method | Description | Return value | Notes |
| --- | --- | --- | --- |
| `element.prepend()` | Inserts a set of Node objects or string objects before the first child of the Element. String objects are inserted as equivalent Text nodes. | --- | Accepts multiple arguments |
| `element.append()` | Inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes. | --- | Accepts multiple arguments |
| `node.before()` | Inserts a set of Node or string objects as a sibling: in the children list of this Element's parent, just before this Element. String objects are inserted as equivalent Text nodes. | --- | Accepts multiple arguments |
| `node.after()` |  inserts a set of Node or string objects as a sibling: in the children list of the Element's parent, just after the Element. String objects are inserted as equivalent Text nodes. | --- | Accepts multiple arguments |

### Element cloning

| Method | Description | Return value | Notes |
| `node.cloneNode(deep)` | returns a duplicate of the node on which this method was called. Its parameter controls if the subtree contained in a node is also cloned or not. | The new clone | Cloning a node copies all of its attributes and their values, including intrinsic (inline) listeners. It does not copy event listeners added using `addEventListener()`. Warning: `cloneNode()` may lead to duplicate element IDs in a document! If the original node has an id attribute, and the clone will be placed in the same document, then you should modify the clone's ID to be unique. Also, name attributes may need to be modified, depending on whether duplicate names are expected. |

### Element deletion

| Method | Description | Return value | Notes |
| `node.remove()` | Removes the element from the DOM. | --- | --- |
| `node.replaceWith()` | replaces this Element in the children list of its parent with a set of Node or string objects. String objects are inserted as equivalent Text nodes. | --- | --- |

### Old Methods

| Parent Node Method | description |
| --- | --- |
| `parent.appendChild(node)` | Append `node` to the end of `parent.childNodes` |
| `parent.insertBefore(node, targetNode)` | Insert `node` into `parent.childNodes` before `targetNode` |
| `parent.replaceChild(node, targetNode)`| Remove `targetNode` from `parent.childNodes` and insert `node` in its place |

`document.appendChild` causes an error. Use `document.body.appendChild` instead.

Node Insertion

| Element Insertion Method | description |
| --- | --- |
| `element.insertAdjacentElement(position, newElement)` | Inserts `newElement` at `position` relative to `element` |
| `element.insertAdjacentText(position, text)` | Inserts Text node that contains `text` at `position` relative to `element` |

`position` must be one of the following String values:

| Position | description |
| --- | --- |
| `beforebegin` | Before the element |
| `afterbegin` | Before the first child of the element |
| `beforeend` | After the last child of the element |
| `afterend` | After the element |

We also can remove a node from the document with `parent.removeChild(node)`. If we remove a node, it becomes eligible for garbage collection unless we store a reference to it.

