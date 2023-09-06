document.addEventListener('DOMContentLoaded', () => {
  function loadStaffNames() {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members')
    request.responseType = "json"
    let names = {};
    request.addEventListener('load', () => {
      request.response.forEach(staff => names[staff.id] = staff.name);
      staffNames = names;
    })
    request.send()
  }

  function loadAvailableSchedules() {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/schedules')
    request.responseType = "json"
    request.addEventListener('load', () => {
      let availableSchedules = request.response.filter(schedule => !schedule.student_email);
      availableSchedules.forEach(schedule => {
        let scheduleSelect = document.querySelector('#schedule-list');
        let option = document.createElement('option')
        option.value = schedule.id
        option.append(format(schedule));
        scheduleSelect.append(option)
      })
    })

    request.send()
  }

  function format(schedule) {
    let name = staffNames[schedule.staff_id];
    return `${name} | ${schedule.date} | ${schedule.time}`
  }

  function submitScheduleForm(data) {
    let request = new XMLHttpRequest();
    request.open('POST', '/api/bookings')
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    let json = JSON.stringify(data)
    
    request.addEventListener('load', () => {
      let status = request.status;
      let response = request.response;
      let bookingSequence = response.match(/\d+/)
      if (status !== 204 && bookingSequence) {
        alert(response)
        toggleStudentPanel(data["student_email"], bookingSequence[0])

        let form = document.querySelector('#student-form')
        form.addEventListener('submit', event => {
          event.preventDefault();
          let request = new XMLHttpRequest();
          request.open('POST', '/api/students')
          let formData = new FormData(form)
          formData.append('booking_sequence', bookingSequence[0])

          request.addEventListener('load', event => {
            alert(event.target.response)
            let request = new XMLHttpRequest();
            request.open('POST', '/api/bookings')
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            request.addEventListener('load', () => {
              alert('booked')
              form.reset()
              toggleStudentPanel()
            })

            request.send(json)
          })

          request.send(formData)
        })
      } else if (status !== 204) {
        alert(response)
      } else alert('booked')
    })

    request.send(json)
  } 

  function toggleStudentPanel(email, booking_sequence) {
    document.querySelector('#student-email').value = email || ''
    document.querySelector('#booking-sequence').value = booking_sequence || '';
    document.querySelector('#student').classList.toggle('hidden')
  }

  let staffNames;
  loadStaffNames()
  loadAvailableSchedules()

  document.querySelector('#schedule-form').addEventListener('submit', event => {
    event.preventDefault();

    let formData = new FormData(event.target)
    let data = {
      id: formData.get('schedule'),
      "student_email": formData.get('email'),
    }

    submitScheduleForm(data)
  })












  function studentsTest() {
    let request = new XMLHttpRequest;
    request.open('GET', '/api/students')
    request.responseType = 'json'
    request.send()
    request.addEventListener('load', () => {
      console.log(request.response)
    })
  }

  function schedulesTest() {
    let request = new XMLHttpRequest;
    request.open('GET', '/api/schedules')
    request.responseType = 'json'
    request.send()
    request.addEventListener('load', () => {
      console.log(request.response)
    })
  }

  studentsTest()
  schedulesTest()
})


/*
todo:

add constants for elements

refactor with promises/fetch/async/await
*/



