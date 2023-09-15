document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#schedules').addEventListener('click', () => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/schedules')
    request.responseType = 'json'
    request.addEventListener('load', event => {
      console.log(request.response)
      let list = request.response
      let template = Handlebars.compile(document.querySelector('#schedules-list').innerHTML)
      Handlebars.registerPartial('schedule-template', document.querySelector('#schedule-template').innerHTML)
      document.querySelector('#schedules-load').innerHTML = template({schedules: list})

    })
    request.send()
  })

  document.querySelector('#dates').addEventListener('click', () => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/bookings')
    request.responseType = 'json'
    request.addEventListener('load', event => {
      console.log(request.response)
    })
    request.send()
  })


})