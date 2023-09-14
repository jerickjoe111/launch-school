document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#submit-button').addEventListener('click', event => {
    event.preventDefault();

    let form = document.querySelector('form')
    let formData = new FormData(form)

    let request = new XMLHttpRequest()
    request.open('POST', '/api/staff_members')
    request.addEventListener('load', () => {

      let message;
      if (request.status === 201) {
        let id = JSON.parse(request.response).id
        message = `New staff added with id ${id}.`
        form.reset()
      } else message = request.response
      alert(message)
    })

    request.send(formData)
  })
})