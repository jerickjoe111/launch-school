// header before main
document.body.prepend(document.querySelectorAll('header')[1]);

// h1 to header before nav
document.body.querySelector('header').prepend(document.querySelector('main > h1'));

// figures to article
document.body.querySelector('article').append(...document.querySelectorAll('figure'))
document.body.querySelector('article').append(document.querySelectorAll('figure')[0])




