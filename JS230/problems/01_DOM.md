# A Hierarchy of Nodes

1. True or False: there is a direct one-to-one mapping between the tags that appear in an HTML file and the nodes in the DOM.

False. The browser may insert nodes that don't appear in the HTML due to invalid markup or the omission of optional tags. Text, including whitespace, also creates Text nodes.

2. True or False: Text nodes sometimes contain nothing but whitespace.

True. All text, including whitespace, in the original HTML document appears in the DOM as a text node.

Given the HTML shown below, draw the DOM that the browser will construct when it loads the HTML. Determine which nodes are:

- elements,
- text nodes with nothing but whitespace
- text nodes containing text,
- or comments.

```html
<html>
  <head>
    <title>Newsletter Signup</title>
  </head>
  <body>
    <!-- A short comment -->
    <h1>Newsletter Signup</h1>
    <p class="intro" id="simple">
      To receive our weekly emails, enter your email address below.
      <a href="info.html">Get more info</a>.
    </p>
    <div class="form">
      <form>
        <label>
          Enter your email:
          <input name="email" placeholder="user.name@domain.test"/>
        </label>
        <p class="controls">
          <button id="cancelButton">Cancel</button>
          <button type="submit" id="submitButton">Subscribe</button>
        </p>
      </form>
    </div>
  </body>
</html>
```
