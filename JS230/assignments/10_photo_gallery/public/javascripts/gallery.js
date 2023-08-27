import Slideshow from "./slideshow.js";

document.addEventListener('DOMContentLoaded', () => {
  function renderPhotos() {
    let slides = document.getElementById('slides');
    slides.insertAdjacentHTML('beforeend', templates.photos({ photos: photos }));
  }

  function renderPhotoInformation(index) {
    let photo = photos.find( item => item.id === index );
    let header = document.querySelector("section > header");
    header.innerHTML = "";
    header.insertAdjacentHTML('beforeend', templates.photo_information(photo));
  }

  function renderComments(index) {
    fetch(`/comments?photo_id=${index}`)
      .then(response => response.json())
      .then(comment_json => {
        let comment_list = document.querySelector("#comments ul");
        comment_list.innerHTML = "";
        comment_list.insertAdjacentHTML('beforeend', templates.photo_comments({ comments: comment_json }));
    });
  }

  let templates = {};
  let photos;

  // compile template functions, keep them in object
  document.querySelectorAll("script[type='text/x-handlebars']").forEach(template => {
    templates[template.id] = Handlebars.compile(template.innerHTML);
  });

  // register partial templates
  document.querySelectorAll("[data-type=partial]").forEach(template => {
    Handlebars.registerPartial(template.id, template.innerHTML);
  });

  fetch("/photos")
    .then(response => response.json())
    .then(json => {
      photos = json;
      renderPhotos();
      renderPhotoInformation(photos[0].id);
      renderComments(photos[0].id);
      Slideshow.init(renderPhotoInformation, renderComments);
  });

  document.querySelector('section > header').addEventListener('click', event => {
    event.preventDefault();
    let button = event.target;
    if (!button.classList.contains('button')) return;

    fetch(button.href,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `photo_id=${button.dataset.id}`,
      })
      .then(response => response.json())
      .then(json => {
        button.textContent = button.textContent.replace(/\d+/, json.total);
      });
  })

  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    let form = event.target;
    let data = new FormData(form);
    let pictureId = Slideshow.currentPicture.dataset.id;
    data.set('photo_id', pictureId);
    fetch(form.action, {
      method: form.method,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams([...data])
    })
      .then(response => response.json())
      .then(json => {
        let commentsList = document.querySelector('#comments ul');
        commentsList.insertAdjacentHTML('beforeend', templates.photo_comment(json));
        form.reset();
      })
  })
});