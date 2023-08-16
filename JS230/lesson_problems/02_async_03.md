# Capturing and Bubbling (2)

Your objective is to list the sequence of event listeners that fire based on the alert boxes you see in the clip (i.e., `click` event listener of the `main` element listening on the capture phase).

1. 

- `click` event on the `<main>` element on the bubbling phase (`target` element)
- `click` event on the outermost `<div>` element on the bubbling phase (`currentTarget` element)

2. 

- `click` event on the outermost `<div>` element on the capturing phase
- `click` event on the `target` element `<main>` on the bubbling phase

3. 

- `click` event on the outermost `<div>` element during the bubbling phase after a delay of 7 seconds

- `keypress` event ('q')
- `keypress` event ('w')

- `click` event on the `<main>` element during the bubbling phase after a delay of 7 seconds

