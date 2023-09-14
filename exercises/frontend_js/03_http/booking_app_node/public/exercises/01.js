document.addEventListener('DOMContentLoaded', () => {
  let request = new XMLHttpRequest();
  request.open('GET', '/api/schedules')
  request.timeout = 5000;
  request.responseType = 'json'
  request.addEventListener('load', event => {
    console.log('CODE: ' + request.status)
    if (request.status !== 200 ) return

    let schedules = request.response
    let availableStaff = {}
    for (let schedule of schedules) {
      let staffId = `staff ${schedule.staff_id}`
      if (availableStaff[staffId]) availableStaff[staffId] += 1
      else availableStaff[staffId] = 1
    }
    let message;
    if (schedules.length === 0) message = 'No schedules available'
    else message = JSON.stringify(availableStaff)
    alert(message)
  })

  request.addEventListener('timeout', () => {
    alert('The request took too long!')
  })
  request.send()
})