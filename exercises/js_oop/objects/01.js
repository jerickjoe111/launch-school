// The code below is expected to output the following when run:

// const helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');
// Good Morning Victor

// However, it instead results in an error. What is the problem with the code? 
// Why isn't it producing the expected results?

function createGreeter(name) {
  return {
    name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`; // `this` added
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`; // `this` added
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`; // `this` added
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

// We needed to reference the context within the `greet` function (the Greeter object `helloVictor`)
// via the keyword `this` in order to access the properties, as there are no variables with those names
// in scope within `greet`.
