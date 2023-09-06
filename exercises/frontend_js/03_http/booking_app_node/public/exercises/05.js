document.addEventListener('DOMContentLoaded', () => {
  function loadBookings() {
    let request = new XMLHttpRequest;
    request.open('GET', '/api/schedules')
    request.responseType = 'json'
    request.addEventListener('load', () => {
      let bookings = request.response.filter(b => b.student_email)
      bookings.forEach(booking => {
        loadBookingElement(booking)
      })
    })
    request.send()
  }

  function loadBookingElement(bookingData) {
    let booking = document.createElement('li')
    booking.append(bookingData.date)
    booking.dataset.id = bookingData.id

    let detailsList = document.createElement('ul')
    detailsList.classList.add('hidden')
    let bookingDetails = document.createElement('li')
    bookingDetails.append(format(bookingData))
    detailsList.append(bookingDetails)
    booking.append(detailsList)
    document.querySelector('#bookings').append(booking)
  }

  function format(schedule) {
    let name = staffNames[schedule.staff_id];
    return `${name} | ${schedule.student_email} | ${schedule.time}`
  }

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

  let staffNames;
  loadStaffNames()
  loadBookings()

  document.querySelector('#bookings').addEventListener('click', event => {
    let target = event.target
    if (target.tagName !== 'LI') return
    
    target.querySelector('ul').classList.toggle('hidden')
  })
})