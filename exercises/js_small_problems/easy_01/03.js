// Exercise 03

// Build a program that asks the user to enter the length and width of a room in meters, 
// and then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// - ask for length in meters
// - ask for width in meters
// - calculate area
// - convert area to feet

const METER_TO_FOOT = 10.7639;

const ASK_LENGTH = 'Enter the length of the room in meters:';
const ASK_WIDTH = 'Enter the width of the room in meters:';

let length = Number(readlineSync.prompt(ASK_LENGTH));
let width = Number(readlineSync.prompt(ASK_WIDTH));

let area_m = length * width;
let area_ft = (area_m * METER_TO_FOOT).toFixed(2);

(function() {
  let resultMessage = `The area of the room is ${area_m} square meters (${area_ft} square feet).`;
  console.log(resultMessage);
}());