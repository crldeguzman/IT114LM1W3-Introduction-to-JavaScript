/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var x = 1;
console.log("The value of the variable using var is " + x);

/*if(x===1) {
    var x = x + 1;
    console.log("The new value of the variable using var is " + x);
}
*/

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = 2;
console.log("The value of the variable using let is "+y);

if(y===2){
    let y = 3;
    console.log("The new value of the variable using let is "+y)
}

// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const z = 3;
console.log("The constant value is " + z)

if(z===3){
    const z = 4;
    console.log("The new constant value is "+ z)
}

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: var is a global interchangeable variable, let can be reassigned, const cannot be reassigned

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var var1 = 10;
var var2 = 5;
sumvar = var1 + var2;
diffvar = var1 - var2;
prodvar = var1 * var2;
divvar = var1 / var2;

console.log(`The variables are:${var1}, and ${var2}. The sum is ${sumvar}. The difference is ${diffvar}. The product is ${prodvar}. The quotient is ${divvar}.`);

// Checkpoint 1.2 What operators did you use?
// Answer: Addition Subtraction Multiplication Division
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring = "This is the original string."
mystring += " This text is added to the string."
console.log(mystring);

// Checkpoint 1.3 What operators did you use?
// Answer: Concatenation operator (+=)

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const num1 = 1;
let statement = !num1 && 2;
console.log(statement);

// Checkpoint 1.4 What operators did you use?
// Answer: Logical AND, Logical NOT


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
// Your code here
const numberlist = [0,1,2,3,4,5];
let x1 = 0 in numberlist;
let x2 = 11 in numberlist;
console.log(x1);
console.log(x2);

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false will evaluate as TRUE, because javascript evaluates an empty list as false, and
// false == false will evaluate as TRUE. in javascript, == does not compare the type, hence why === is recommended.
