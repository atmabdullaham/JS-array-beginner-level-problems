const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const sortedNumbers = [...numbers].sort((a, b) => b - a); // Descending order
console.log(sortedNumbers);

const reversedFruits = [...fruits].reverse(); // Reverse the array
console.log(reversedFruits);


