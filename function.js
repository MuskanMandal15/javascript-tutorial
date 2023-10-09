// Performing a task

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Mussu', 'Mandal');
// greet('Harshu', 'Mandal');


function greet(name, lastName) {
    return('Hello ' + name + ' ' + lastName);
 }
 
 console.log(greet('Mussu', 'Mandal'));
 console.log(greet('Harshu', 'Mandal'));
 
 
 // Calculating a value
 
 function square(number) {
     return number * number;
 }
 console.log(square(4));
 
 
 // let number = square(3);
 // console.log(number);
 
 // Types of Functions
 
 // Function Declaration 
 
 // function walk() {
 //     console.log('walk');
 // }
 
 // //Named Anonymous Function Expression 
 // let run = function (){
 //     console.log('run');
 // };
 
 
 
 // run();
 // move();
 
 // Hoisting
 
 //Function Declaration
 
 walk();
 
 function walk() {
     console.log('walk');
 }
 
 //Function Expression 
 
 // run();
 // let run = function (){
 //     console.log('run');
 // };
 
 // Arguments 
 
 // let x = 1;
 // x = 'a';
 
 // function sum(){
 //     let total = 0;
 //     for (let value of arguments)
 //     total += value;
 // return total;
 // }
 
 // console.log(sum(1, 2, 3, 4, 5, 6));
//  ==================================================
 //The  Rest Operator
 
 // function sum(a,...args){
 //    console.log(args);
 // }
 
 // console.log(sum(1, 2, 3, 4, 5, 6));
// =======================================================================
//  Qestions of Functions

// Problem 1:
//Create a function that calculates the area of a rectangle. The rectangle has a length of 5
//units and a width of 3 units. Write a JavaScript function to find the area of this rectangle.

// solution 1.

function areaOfRec(length,width){
  return length * width;
}
console.log(areaOfRec(5,3));

// ===================================================================

// Problem 2:
// Find the error in the given code
// function addNumbers(a, b) {
// return a + b; }
// var result = addNumbers(5, 7);
// console.log("The result is: " result);

// // solution 2 - we have to add comma(,) before result

// ================================================================

// problem 3 where do you declare function in js?

// solution 3 - option 1 (function myFunction())

// ========================================================

// Problem 4:
// What is the purpose of parameters in a JavaScript function?
// solution 4 - option 3 (To accept input values when the function is called)

// =========================================================

// Problem 5:
// What does the return statement do in a JavaScript function?

// solution 5 - option 3 (It stops the execution of the function and returns a value to the caller)

// ================================================================

// Problem 6:
// What is the difference between function declarations and function expressions in
// JavaScript?

// solution 6 - option 3 (Function declarations can be anonymous, while function expressions cannot)

// =======================================================================

// Problem 7:
// You have an array of test scores, and you want to calculate the average score. Write a
// JavaScript function to calculate and return the average of the scores.

// solution 7 

const testScores = [85, 90, 78, 92, 88];

function calcAvreage(num){
    let total = 0;
    for (let value of num)
     total += value;
     return total / 5;
}
console.log(calcAvreage(testScores));

// ======================================================================

// problem 8: 
// You have a list of student scores, and you want to assign letter grades based on the scores.
// Write a JavaScript function that takes a score as input and returns the corresponding letter
// grade.

const studentScore = 81;

function gradeCard(num1){
 if(num1>=90){
    return "A";
 }else if(num1>=80 && num1<=89){
    return "B";
 }else if(num1>=70 && num1<=79){
    return "C";
 }else if(num1>=60 && num1<=69){
    return "D";
 }else if(num1<60){
    return "F"
 }
}
console.log(gradeCard(studentScore));


// ==================================================================
// Problem 9:
// Find the error in the given code

// solution 9 - 

// ============================================================

// problem 10: 
// How do you call a javascript function?

// solution 10 - option 3 (by using the function's name followed by parentheses, like myFunction ())

