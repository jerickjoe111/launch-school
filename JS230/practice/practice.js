$(() => {
  let posts = [
    {
      title: 'Lorem ipsum dolor sit amet',
      published: 'April 1, 2015',
      tags: ['1', '2', '3'],
      body: '<strong>Sed</strong> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      published: 'April 1, 2015',
      tags: ['1', '2', '3'],
      body: '<strong>Sed</strong> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      published: 'April 1, 2015',
      tags: [],
      body: '<strong>Sed</strong> ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.'
    },
  ]

  let template = document.querySelector('#post')
  let templateCompiler = Handlebars.compile(template.innerHTML)
  Handlebars.registerPartial('tag', document.querySelector('#tag').innerHTML)
  document.body.innerHTML = templateCompiler({posts: posts})
})

