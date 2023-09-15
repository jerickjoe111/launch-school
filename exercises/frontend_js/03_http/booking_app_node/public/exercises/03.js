document.addEventListener('DOMContentLoaded', () => {
  let App = {
    staffMembers: null,
    lastId: 1,

    init() {
      this.loadStaff();
      this.bindButtonSubmit();
      this.bindButtonAddSchedule();
    },

    loadStaff() {
      let staffList = document.querySelector('select')
      let request = new XMLHttpRequest()
      request.open('GET', '/api/staff_members')
      request.responseType = 'json'
      request.addEventListener('load', event => {
        this.staffMembers = request.response
        for (let member of this.staffMembers) {
          let option = document.createElement('option')
          option.append(member.name)
          option.dataset.id = member.id
          staffList.append(option)
        }
      })
      request.send()
    },

    bindButtonSubmit() {
      document.querySelector('#submit-schedules').addEventListener('click', () => {
        let json = { schedules: [] }
        document.querySelectorAll('form').forEach(form => {
          let data = new FormData(form)
          json.schedules.push(
            {
              staff_id: this.getStaffId(data.get('staff')),
              date: data.get('date'),
              time: data.get('time'),
            }
          )
        })
        this.submit(JSON.stringify(json))
      })
    },

    bindButtonAddSchedule() {
      document.querySelector('#add-schedule').addEventListener('click', event => {
        let lastSchedule = document.querySelector('main').lastElementChild
        let newSchedule = lastSchedule.cloneNode(true)
        let id = this.generateId(lastSchedule)
        newSchedule.querySelector('h2').textContent = `Schedule ${id}`
        document.querySelector('main').append(newSchedule)
      })
    },

    generateId(schedule) {
      return Number(schedule.querySelector('h2').textContent.match(/\d+/)[0]) + 1
    },

    getStaffId(staffName) {
      return this.staffMembers.find(member => member.name === staffName).id
    },

    submit(json) {
      let request = new XMLHttpRequest()
      request.open('POST', '/api/schedules')
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
      request.addEventListener('load', () => alert(request.response) )
      request.send(json)
    },
  }

  App.init()
})

/*
 load staff object with ids (request)

 clone schedule div per button click

 on submit:

    - parse all forms into json
        - also, add staff id (find name of staff)
    - send request
    - handle response
*/