/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
*/

const randomNumber = Math.floor((Math.random() * 100) + 1); // feel free to mock this value for testing

// TODO 2.1 Display "more than fifty" if randomNumber is more than fify
// Your code here
if(randomNumber > 50){
    console.log(`The random number ${randomNumber} is more than fifty.`);
}
else{
    console.log(`The random number ${randomNumber} is less than 50.`);
}

// TODO 2.2 Display whether the random number is odd or even
// Your code here
if(randomNumber % 2 === 0){
    console.log(`The random number ${randomNumber} is even.`);
}

else if(randomNumber % 2 === 1){
    console.log(`The random number ${randomNumber} is odd.`);
}

// TODO 2.3 If the number if a multiple of 3, write "fizz".
// if the number is a multiple of 5 display "buzz".
// if the number is divisible by both 3 and 5, display "fizzbuzz". otherwise, display the number
// Your code here
if(randomNumber % 3 === 0){
    console.log("fizz");
}
else if(randomNumber % 5 === 0){
    console.log("buzz");
}
else if(randomNumber % 3 === 0 && randomNumber % 5 ===0){
    console.log("fizzbuzz");
}
else{
    console.log(randomNumber);
}

let toDisplay = ""
// TODO 2.4 Use the ternary conditional operator to set toDisplay to "Even" if randomNumber is even and "Odd" if randomNumber is odd
// Your code here
toDisplay = randomNumber % 2 === 0 ? "Even": "Odd";
console.log("toDisplay", toDisplay);

// Checkpoint 2.1 How do you use switch statements and when would you use them? Try researching the answer
// Answer: The switch statement evaluates an expression, and executes the code depending on the case that the expression falls upon.
// and if the expression does not belong in any case, it will go to the default case.
// You use switch statements when you know the number of cases there will be in the expression

// TODO 2.5 Use a for loop to print the numbers 1 to N
const n = 10
// Your code here
for(let i = 0; i < n; i++){
    console.log(i+1);
}

const list = ["apple", "banana", "cherry", "date", "elderberry"];
// TODO 2.6 Use a while loop to display all the values in the list
// Your code here
let i = 0
while(i < list.length){
    console.log(list[i]);
    i++;
}

// Checkpoint 2.3 What is the difference between do while and while loop?
// Answer: a while loop checks the condition before executing
// meanwhile a do while loop executes at least once and checks the condition after each execution

// TODO 2.7 Use a for of loop to display all the values in the list
// Your code here
for(const element of list){
    console.log(element);
}

// TODO 2.8 Use a for in loop to display all the values in the list
// Your code here
for(const property in list){
    console.log(`${property}: ${list[property]}`)
}

// TODO 2.9 Use the for each method of the list to display all its values 
// Your code here
list.forEach(function(value){
    console.log(value)
})

// Checkpoint 2.2 When should you use for of, for in, or .forEach loops? Try researching the answer
// Answer: Use for of when iterating over values in an iterable object. Use for in for iterating over object keys.
// Use forEach for arrays when you want a concise way to iterate with a callBack function

// TODO 2.10 Use the try and catch block to catch division by zero errors in the code below.
// In the finally block, simulate cleaning up resources by displaying "cleaning up resources"
try{
    const numerator = Math.floor((Math.random() * 100) + 1);
const denominator = 0 // feel free to mock this value for testing


if(denominator === 0){
    throw new Error("Division by zero error")
} else {
    console.log(numerator / denominator);
}

}
catch(e){
    console.log(e.message);
}

finally{
    console.log("cleaning up resources");
}

