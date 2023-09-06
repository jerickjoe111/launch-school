document.addEventListener('DOMContentLoaded', () => {
  const SCHEDULES = '/api/schedules';
  const STUDENTS = '/api/students';
  const LIST = document.querySelector('#schedules-list')
  const OTHER = document.querySelector('#other-list')

  function renderSchedules(schedules) {
    schedules.forEach(schedule => {
      let li = document.createElement('li')
      li.append(`${schedule.student_email}: ${schedule.date}`)
      LIST.append(li)
    })
  }

  function renderOther(other) {
    other.forEach(other => {
      let li = document.createElement('li')
      li.append(`${other.name}: ${other.email}`)
      OTHER.append(li)
    })
  }

  function renderFast(array) {
    array.forEach(e => {
      let li = document.createElement('li')
      li.append(`${e}`)
      OTHER.append(li)
    })
  }

  function renderSlow(array) {
    array.forEach(e => {
      let li = document.createElement('li')
      li.append(`${e}`)
      LIST.append(li)
    })
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  } 

  async function slowFetch() {
    await delay(5000)
    return [1, 2, 3]
  }

  async function fastFetch() {
    await delay(2000)
    console.log('fast fetching...')
    return [1, 2, 3]
  }
  
  // fetch(SCHEDULES)
  //   .then(response => {
  //     if (!response.ok) return null;

  //     return response.json();      
  //   })
  //   .then(schedules => {
  //     if (schedules) renderSchedules(schedules)
  //     else alert('ERROR')
  //   })
  //   .catch(error => {
  //     alert('ERROR FROM CATCH')
  //     alert(error)
  //   })

  async function fetchLists(url) {
    try {
      let response = await fetch(url, {method: 'GET'})
      let json = await response.json()
      return json 
    } catch(error) {
      console.log('ERROR:')
      console.log(error)
    }
  }  

  async function makeConcurrentSmoothie() {
    // let slow = slowFetch();
    let fast = await fastFetch();
    let fast2 = await fastFetch();

    // return await Promise.all([fast2, fast])
    return [fast, fast2]
  }

  // fetchLists(SCHEDULES).then(renderSchedules)
  // fetchLists(STUDENTS).then(renderOther)
  // slowFetch().then(renderSlow)
  // fastFetch().then(renderFast)
  makeConcurrentSmoothie().then(renderFast)
})








// fetch("/api/user/profile")    // Start the HTTP request
//     .then(response => {       // Call this when status and headers are ready
//         if (!response.ok) {   // If we got a 404 Not Found or similar error
//             return null;      // Maybe user is logged out; return null profile
//         }

//         // Now check the headers to ensure that the server sent us JSON.
//         // If not, our server is broken, and this is a serious error!
//         let type = response.headers.get("content-type");
//         if (type !== "application/json") {
//             throw new TypeError(`Expected JSON, got ${type}`);
//         }

//         // If we get here, then we got a 2xx status and a JSON content-type
//         // so we can confidently return a Promise for the response
//         // body as a JSON object.
//         return response.json();
//     })
//     .then(profile => {        // Called with the parsed response body or null
//         if (profile) {
//             displayUserProfile(profile);
//         }
//         else { // If we got a 404 error above and returned null we end up here
//             displayLoggedOutProfilePage();
//         }
//     })
//     .catch(e => {
//         if (e instanceof NetworkError) {
//             // fetch() can fail this way if the internet connection is down
//             displayErrorMessage("Check your internet connection.");
//         }
//         else if (e instanceof TypeError) {
//             // This happens if we throw TypeError above
//             displayErrorMessage("Something is wrong with our server!");
//         }
//         else {
//             // This must be some kind of unanticipated error
//             console.error(e);
//         }
//     });