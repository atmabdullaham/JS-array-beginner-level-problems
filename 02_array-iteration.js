// Print all elements of an array using a for loop.
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
 console.log(fruits[i])
}



// Use forEach() to log each element.

console.log("Fruits Array using forEach():");
let newPuhs = [];
let newUnShift = [];
fruits.forEach(function (fruit) {
 console.log(fruit);
 newUnShift.unshift(fruit);
 newPuhs.push(fruit);

});
console.log(newUnShift)
console.log(newPuhs)
// Output:
// Apple
// Banana
// Orange
// Mango
// Grapes
