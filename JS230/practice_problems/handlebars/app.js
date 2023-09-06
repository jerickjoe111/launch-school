$(() => {
  let posts = [
    {
      title: '<em>Lorem ipsum dolor sit amet</em>',
      published: 'April 1, 2015',
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      tags: ['tag1', 'tag2', 'tag3'],
    },
    {
      title: '<em>Other</em>',
      published: 'April 1, 2222',
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      tags: [],
    },
  ]

  let templateCompiler = Handlebars.compile($('#posts').html())
  // let partialCompiler = Handlebars.compile($('#tag').html())

  // Handlebars.registerPartial('post', $('#post').html())
  Handlebars.registerPartial('tag', $('#tag').html())

  $('body').html(templateCompiler({posts: posts}))
})