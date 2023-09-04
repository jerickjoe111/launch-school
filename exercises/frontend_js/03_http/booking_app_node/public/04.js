document.addEventListener('DOMContentLoaded', () => {
  function loadAvailableSchedules() {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/schedules')
    request.responseType = "json"
    request.addEventListener('load', () => {
      let availableSchedules = request.response.filter(schedule => schedule.student_email);
      // console.log(availableSchedule)
      availableSchedules.forEach(schedule => {
        let scheduleSelect = document.querySelector('#schedule-list');
        let option = document.createElement('option')
        console.log(schedule)
        // option.value = member.id
        option.append(format(schedule));
        // staffSelect.append(option)
      })
    })

    request.send()
  }

  function format(schedule) {
    let staffName = getStaffName(schedule.staff_id)
    console.log(`${staffName} | ${schedule.date} | ${schedule.time}`)
    // return `${staffName} | ${schedule.date} | ${schedule.time}`
  }

  function getStaffName(id) {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/staff_members')
    request.responseType = "json"
    let staff;
    request.addEventListener('load', () => {
      // console.log(id)
      staff = request.response.find(staff => staff.id === id);
      console.log(staff)
      // return staff.name
    })
    request.send()
  }

  loadAvailableSchedules()

})


/*
get list of all staff
find staff member with given id
return staff member name
*/