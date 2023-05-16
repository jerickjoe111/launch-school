// Exercise 05

// What will the following program log to the console? Can you explain why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // adds '3.4': 'Oranges' property to array
console.log(array.length); // 3. own properties with no index names are not counted by length
console.log(Object.keys(array).length); // 4

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);

