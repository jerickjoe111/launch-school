# Cheat sheet of common selectors

In CSS, selectors are patterns used to select DOM elements

- `head` selects the element with the head tag

- `.red` selects all elements with the ‘red’ class
 
- `#nav` selects the elements with the ‘nav’ Id
 
- `div.row` selects all elements with the div tag and the ‘row’ class
 
- `[aria-hidden="true"]` selects all elements with the aria-hidden attribute with a value of “true”
 
- `*` Wildcard selector. Selects all DOM elements. See below for using it with other selectors

## We can combine selectors in interesting ways

Some examples:

- `li a` DOM **descendant** combinator. All `a` tags that are descendants of `li` tags

- `div.row *` selects **all elements that are descendant** (or child) of the elements with div tag and ‘row’ class

- `li > a` Selects **direct descendants**, instead of all descendants like the descendant selectors

- `li + a` The **adjacent** combinator. It selects _the element that is immediately preceded by the former element_. In this case, only the first `a` after each `li`.

- `li, a` **Added** selectors. Selects all `a` elements and all `li` elements.

- `li ~ a` The **sibling** combinator. Selects `a` element following a `li` element.