function LikesAndFavorites(event) {
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
}

