document.addEventListener('DOMContentLoaded', () => {
  function validInput(data) {
    for (let value of Object.values(data)) {
      if (value.length === 0) return false
    }

    return true;
  }

  function addStaffMember(data) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/staff_members')
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    xhr.responseType = 'json'
    let json = JSON.stringify(data)

    xhr.addEventListener('load', event => {
      if (xhr.status === 400) {
        alert('Bad request')
        return;
      }
      alert(`User succesfully created with id: ${xhr.response.id}`)
      form.reset()
    })

    xhr.send(json)
  }

  let form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
    formData = new FormData(form)
    let data = {}
    for (let k of formData) data[k[0]] = k[1];
    if (!validInput(data)) {
      alert('Invalid input data')
      return
    }
    
    addStaffMember(data)
  })
})