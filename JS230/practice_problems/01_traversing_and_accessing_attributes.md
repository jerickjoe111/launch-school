# Practice Problems: Traversing and Accessing Attributes

Use the following HTML to solve these practice problems:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>On the River</title>
  </head>
  <body>
    <h1>On the River</h1>
    <p>A poem by Paul Laurence Dunbar</p>

    <p>
      The sun is low,<br>
      The waters flow,<br>
      My boat is dancing to and fro.<br>
      The eve is still,<br>
      Yet from the hill<br>
      The killdeer echoes loud and shrill.
    </p>
    <p>
      The paddles plash,<br>
      The wavelets dash,<br>
      We see the summer lightning flash;<br>
      While now and then,<br>
      In marsh and fen<br>
      Too muddy for the feet of men,
    </p>
    <p>
      Where neither bird<br>
      Nor beast has stirred,<br>
      The spotted bullfrog's croak is heard.<br>
      The wind is high,<br>
      The grasses sigh,<br>
      The sluggish stream goes sobbing by.
    </p>
    <p>
      And far away<br>
      The dying day<br>
      Has cast its last effulgent ray;<br>
      While on the land<br>
      The shadows stand<br>
      Proclaiming that the eve's at hand.
    </p>
  </body>
</html>
```

Tree traversing function:

```js
function traverse(element, callBack) {
  callBack(element);                        
  for (let child of element.children) {     
    traverse(child, callBack);             
  }
}
```

## 1. Starting with the `document` node, use the `lastChild` and `childNodes` properties to change the text color to red on the `On the River` heading and set its font size 48 pixels:

```js
let heading = document.lastChild.lastChild.childNodes[1];
heading.style.fontSize = "48px";
heading.style.color = "red";
```

## 2. Count the paragraphs on the page, and then log the result:

```js
const isParagraph = function(element) {
  const PARAGRAPH = 'P';
  return element.nodeName === PARAGRAPH;
}

let paragraphsCount = 0;
function countParagraphs(element) {
  if (isParagraph(element)) paragraphsCount += 1;
  for (let child of element.children) {
    countParagraphs(child);
  }
}
countParagraphs(document);
console.log(paragraphsCount);
```

Alt.:

```js
function traverse(element, callBack) {
  callBack(element);                        
  for (let child of element.children) {     
    traverse(child, callBack);             
  }
}

let paragraphsCount = 0;
traverse(document, element => {
  if (element.nodeName === 'P') paragraphsCount += 1;
})
console.log(paragraphsCount);
```

## 3. Retrieve the first word from each paragraph on the page and log the result


- For each body's child (recurr.)

  - if it's a paragraph (nodeName === 'P')

      - get textContent

      - save first word to list

- log word list

```js
function traverse(element, callBack) {
  callBack(element);                        
  for (let child of element.childNodes) {     
    traverse(child, callBack);             
  }
}

let words = [];
traverse(document, element => {
  if (element.parentNode?.nodeName === 'P' && element === element.parentNode.firstChild) {
    let word = element.nodeValue.match(/([\w]+)/)[0];
    words.push(word);
  };
})

console.log(words);
```

Alt.:

```js
function traverse(element, callBack) {
  callBack(element);                        
  for (let child of element.childNodes) {     
    traverse(child, callBack);             
  }
}

let words = [];
traverse(document, element => {
  if (element.nodeName === 'P') {
    let firstWord = element.firstChild.data.match(/([\w]+)/)[0];
    words.push(firstWord);
  };
})

console.log(words);
```


## 4. Add the class stanza to each paragraph except the first

- For each body's child (recurr.)

  - if it's a paragraph

      - add class 'stanza'

```js
function traverse(element, callBack) {
  callBack(element);                        
  for (let child of element.childNodes) {     
    traverse(child, callBack);             
  }
}

let firstParagraphFound = false;
traverse(document, node => {
  if (node.nodeName === 'P') {
    if (!firstParagraphFound) firstParagraphFound = true;
    else node.classList.add('stanza');
  };
})
```

## 5. Count the images on the page, then count the PNG images.

- Get list of all images, count length

- Filter list of images, extract url, find file extension, if file extension is png, count length

```js
let images = document.images;
let totalImages = images.length;

let pngImages = 0;
for (let i = 0; i < images.length; i += 1) {
  let image = images[i];
  if (image.src.match(/png$/)) pngImages += 1;
}

console.log(totalImages, pngImages);
```


## 6. Change the link color to red for every link on the page.

- Get list of all links, for every link in list, add style color red.

```js
let links = document.links;

for (let i = 0; i < links.length; i += 1) {
  links[i].style.color = 'red';
}
```
