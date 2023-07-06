// Where is there duplication?

let chile = {
  name: 'The Republic of Chile',
  continent: 'South America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let canada = {
  name: 'Canada',
  continent: 'North America',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

let southAfrica = {
  name: 'The Republic of South Africa',
  continent: 'Africa',
  getDescription() {
    return this.name + ' is located in ' + this.continent + '.';
  },
};

// In the getDescription method


// Implement a factory function for our country objects

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      let description = this.name + ' is located in ' + this.continent + '.';
      if (this.visited) return description + 'I have visited ' + this.name;
      else return description + 'I haven\'t visited ' + this.name; 
    },
    visitCountry() {
      this.visited = true;
    }
  }
}

// Alter the factory function so that the object it returns 
// includes a property visited with a value of false.

// Alter the factory function to use an optional visited 
// parameter with a default value of false.

// Implement a method visitCountry that sets the visited property to true.

// Finally, let's update our getDescription function to reflect the visited data


