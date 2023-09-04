document.addEventListener('DOMContentLoaded', () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/api/schedules')
  xhr.timeout = 9000;
  xhr.responseType = 'json'
  xhr.send()

  xhr.addEventListener('load', () => {
    let availableSchedules = xhr.response.filter(schedule => !schedule.student_email);

    if (availableSchedules.length === 0) {
      alert('No schedules available')
      return;
    }
    let list = document.createElement('ul');
    availableSchedules.forEach(schedule => {
      let li = document.createElement('li')
      li.append(`Staff: ${schedule.staff_id}, Date: ${schedule.date}, Time: ${schedule.time}`)
      list.append(li)
    })
    document.body.append(list)
  })

  xhr.addEventListener('timeout', () => {
    alert('Request timeout')
  });

  xhr.addEventListener('loadend', () => {
    alert('The request has been completed')
  });
})