# Practice Problems: Finding Nodes and Traversing Elements

Tree traversing function:

```js
function traverse(node, callBack) {
  callBack(node);                        
  for (let child of node.childNodes) {     
    traverse(child, callBack);             
  }
}
```

## 1. Write some JavaScript code to retrieve a word count for each `h2` heading on the page.

```js
let h2Elements = document.querySelectorAll('h2');
let wordCounts = [];
for (let h2 of h2Elements) {
  wordCounts.push(h2.textContent.split(' ').length)
}
```

## 2. The page has a table of contents with the title "Contents" and links to the different content sections on "Naming and etymology," "Taxonomy and evolution," etc. Use three different DOM methods to retrieve a reference to the div element that contains the table of contents.

```js
let toc = document.querySelector('.toc');
```

```js
let toc = document.querySelectorAll('.toc')[0];
```

```js
let toc = document.getElementById('toc');
```

```js
let toc = document.getElementByClassName('toc');
```

## 3. Write some JavaScript code to change the color for every odd indexed link in the table of contents to green.

```js
let links = document.querySelectorAll('.toc a'); // any a descendant of an element with the class attribute toc

for (let i = 1; i < links.length; i += 2) {
  links[i].style.color = 'green'
}
```

## 4. Write some JavaScript code to retrieve the text of every thumbnail caption on the page.

```js
let thumbnailCaptions = document.querySelectorAll('.thumbcaption');
let thumbnailText = [];
for (let i = 0; i < thumbnailCaptions.length; i += 1) {
  thumbnailText.push(thumbnailCaptions[i].textContent.split(/[\s\n]+/).join(' ').trim());
}
```

## 5. Write JavaScript code that extracts the classification of animals from the web page and logs an Object that uses the ranks as keys and the groups as values. You may assume the taxonomic ranks to use as keys is provided for you as an array.

