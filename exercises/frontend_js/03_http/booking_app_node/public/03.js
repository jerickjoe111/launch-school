document.addEventListener('DOMContentLoaded', () => {
  let lastScheduleNumber = 1;

  function loadStaffMembers() {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members')
    request.responseType = "json"
    request.addEventListener('load', () => {
      let members = request.response.map(staff => ({id: staff.id, name: staff.name}));
      members.forEach(member => {
        let staffSelect = document.querySelector('select');
        let option = document.createElement('option')
        option.value = member.id
        option.append(member.name);
        staffSelect.append(option)
      })
    })
    request.send()
  }

  function cloneSchedule() {
    lastScheduleNumber += 1;
    let original = document.querySelector(`.schedule`)
    let clone = original.cloneNode(true)
    let scheduleTitle = clone.querySelector('h2').textContent
    clone.querySelector('h2').textContent = scheduleTitle.replace(/\d+/, lastScheduleNumber)
    document.querySelector('main').append(clone)
  }

  function submitScheduleData(data) {
    let request = new XMLHttpRequest();
    request.open('POST', '/api/schedules')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let json = JSON.stringify(data)

    request.addEventListener('load', () => {
      if (request.status !== 201) {
        alert('Bad Request')
        return
      }

      alert('Schedules added successfully')
    })

    request.send(json)
  }

  loadStaffMembers();

  document.querySelector('#add-schedule').addEventListener('click', () => {
    cloneSchedule()
  })

  document.querySelector('#submit-schedules').addEventListener('click', () => {
    let schedules = document.querySelectorAll('.schedule');
    let schedulesData = { schedules: [] };
    schedules.forEach(schedule => {
      let formData = new FormData(schedule.querySelector('form'))
      schedulesData.schedules.push({
        staff_id: formData.get('staff'),
        date: formData.get('date'),
        time: formData.get('time'),
      })
    })

    submitScheduleData(schedulesData)
  })
})

/*
adding schedules:

serialize form input data into json
send request with json
handle response (invalid inputs; schedules added)


*/