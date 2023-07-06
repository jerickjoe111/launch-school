// Write a makeCar function that works as shown above.

function makeCar(rate, brakePower) {
  return {
    speed: 0,
    rate,
    accelerate() {
      this.speed += this.rate;
    },
    brake() {
      let newSpeed = this.speed - this.brakePower;
      this.speed = newSpeed >= 0 ? newSpeed : 0;
    }
  };
};

let hatchback = makeCar(9);

// Our application now needs to handle braking to slow down. 
// Extend the code from problem 1 to handle specifying a 
// braking rate for each car. 
// Also, add a method that tells the 
// car to apply the brakes for one second.
