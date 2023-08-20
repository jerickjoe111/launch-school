$(() => {
  let post = {
    title: 'Lorem ipsum dolor sit amet',
    published: 'April 1, 2015',
    body: '<em>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</em>',
    tags: ['Foods', 'Cooking', 'Vegetables'],
  };

  let post2 = {
    title: 'Second post',
    published: 'August 20, 2023',
    body: '<em>Sample text Sample text Sample text Sample text Sample text Sample text Sample text Sample text</em>',
    tags: [],
  }

  let posts = [post, post2]

  // compile templates into functions
  postTemplate = Handlebars.compile($('#post').html());
  tagPartial = Handlebars.compile($('#tag').html());

  // register partial
  Handlebars.registerPartial('tag', $('#tag').html());

  $('body').append(postTemplate({posts}));
})