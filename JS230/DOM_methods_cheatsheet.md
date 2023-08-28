# The DOM API

## General Overview

1. Selecting Nodes and Elements

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

2. Properties used for DOM traversal

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

        - `element.parentNode`

        - `element.childNodes`
        - `element.firstChild`
        - `element.lastChild`

        - `element.nextSibling`
        - `element.previousSibling`

        - `element.nodeType`
        - `element.nodeName`
        - `element.nodeValue`

3. Getting/Setting Elements HTML Attributes

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

4. Getting/Setting Document Content

    - Element Content as HTML

        - `element.innerHTML`
        - `element.outerHTML`
        - `element.insertAdjacentHTML(position, HTMLstring)`

    - Element Content as Plain Text

        - `textContent`

5. Creating, inserting, deleting nodes

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
