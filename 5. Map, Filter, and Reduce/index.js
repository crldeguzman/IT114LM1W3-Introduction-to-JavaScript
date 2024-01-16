/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map(number => number ** 2);
console.log(squares)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum)

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const uppercaseWords = words.map(word => word.toUpperCase());
console.log(uppercaseWords)

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const longWords = words.filter(word => word.length > 4);
console.log(longWords)

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatedString = words.reduce((accumulator, word) => accumulator + word, '');
console.log(concatenatedString)

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
/*
1. Map in JavaScript transforms each element of an array using a provided function and creates a new array with the results.
2. Filter in JavaScript creates a new array by selecting elements from an existing array that satisfy a specified condition.
3. Reduce in JavaScript combines all elements of an array into a single value using a provided function, accumulating the results iteratively.
*/
