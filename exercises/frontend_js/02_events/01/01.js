function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let maxTime = callbacks.length * 2
  let interval;
  
  for (let callback of callbacks) {
    interval = Math.floor(Math.random() * 1000 * maxTime)
    setTimeout(callback, interval)
  }

  let i = 1
  let id = setInterval(() =>  {
              console.log(i)
              i += 1
            }, 1000)

  setTimeout(() => clearInterval(id), (maxTime + 1) * 1000)
}

randomizer(callback1, callback2, callback3)