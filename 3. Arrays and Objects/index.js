/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(`First item: ${numbers[0]}. Fifth item: ${numbers[4]}. Last item: ${numbers[14]}`)

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
const minnum = Math.min(...numbers);

const maxnum = Math.max(...numbers); 

let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
let avg = sum / numbers.length;

console.log(`Minimum number: ${minnum}. Maximum number: ${maxnum}. Average: ${avg}`)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Lists in python can contain data of different types, meanwhile arrays in JavaScript are strictly
// for a single data type only. Python lists are dynamic, while JS arrays are static.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let labCourse = new Object();
labCourse = {
    courseCode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    students: 40
};

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
labCourse.professor = "Sir Job Lipat"
console.log(labCourse.professor)

// Todo 3.5 Declare an array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    {courseCode: "IT114", name: "Web Systems and Technologies", units: 2},
    {courseCode: "IT114L", name: "Web Systems and Technologies (Laboratory)", units: 1},
    {courseCode: "CS107", name: "Information Management", units: 2}
];


// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0;

for (let course of courses) {
    totalUnits += course.units;
}

console.log(totalUnits);


// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: In Python, dictionaries serve as the equivalent of JavaScript objects. 
// Both dictionaries and JavaScript objects are key-value pairs, allowing for the storage and retrieval of data in a flexible and dynamic manner.
// JavaScript objects allow dynamic addition and removal of properties, enabling a more flexible structure, while Python dictionaries are typically more explicit and require defined keys.
// Additionally, JavaScript objects support prototypal inheritance, whereas Python dictionaries lack this feature as they are not designed for the same level of object-oriented programming paradigm.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numbersCopy = [...numbers, 42069];

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { courseCode, units } = labCourse;
console.log("Course Code:", courseCode);
console.log("Units:", units);