// 1. Create an array of numbers and access the first and last elements.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstElement = numbers[0];
console.log(firstElement);

const lastElement = numbers[numbers.length - 1];
console.log(lastElement);


// Create an array of fruits and access elements using index.
// 2. Add and remove elements:

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const fruitsUpdated = [...fruits];
console.log(fruitsUpdated)

// there are two ways to add items in an array one is push and another is unShift: 
//a.  to add items in the end we use "push"
fruitsUpdated.push("fig"); // Add to the end
console.log(fruitsUpdated);
//b.  to add items in the beginning we use "usshift" 
fruitsUpdated.unshift("grape"); // Add to the beginning
console.log(fruitsUpdated)


// there are two ways to remove items from an array
//a. to remove items from the end we use "pop"
fruitsUpdated.pop(); // Remove from the end
console.log(fruitsUpdated)

//b. to remove items from the beginning we use "shift"
fruitsUpdated.shift(); // Remove from the beginning
console.log(fruitsUpdated);
