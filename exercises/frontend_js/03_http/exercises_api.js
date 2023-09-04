let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/api/staff_members')
xhr.responseType = 'json'
xhr.send()
xhr.addEventListener('load', event => {
  console.log(xhr.response)
})