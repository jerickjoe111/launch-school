// Write a function, which takes a non-negative integer (seconds) as input 
// and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(totalSeconds) {
  function pad(integer) {
    return integer < 9 ? `0${integer}` : `${integer}`
  }

  let totalMinutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;
  let minutes = totalMinutes % 60
  let hours = Math.floor(totalMinutes / 60);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function precise(x) {
  return x.toPrecision(4);
}

console.log(precise(1));