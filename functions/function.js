// Performing a task

// function greet(name, lastName) {
//     console.log('Hello ' + name + ' ' + lastName);
// }

// greet('Mussu', 'Mandal');
// greet('Harshu', 'Mandal');


function greet(name, lastName) {
    return('Hello ' + name + ' ' + lastName);
 }
 
//  console.log(greet('Mussu', 'Mandal'));
//  console.log(greet('Harshu', 'Mandal'));
 
 
 // Calculating a value
 
 function square(number) {
     return number * number;
 }
//  console.log(square(4));
 
 
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
   //   console.log('walk');
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
//  The  Rest Operator
 
 function sum(a,...para){
   let sum = 0;
   for(let value of para){
      sum += value;
   }
   return sum;
 }
 
 console.log(sum(1, 2, 3, 4, 5, 6));
 // 1 is for a , so it ignores the 1 , that's why the output is 20

 function subtract(){
   let sub = 0;
   for(let value of arguments){ // arguments is the reserve keyword it only allows to run where "function" keyword is present, don't use this
      sub -= value;
   }
   return sub;
 }
 console.log(subtract(1, 2, 3, 4, 5, 6));
 
// =======================================================================
// getters & Setters

// const person = {
//     firstName : 'Harshita',
//     lastName : 'Mandal',
//     get fullName(){
//         return `${person.firstName} ${person.lastName}`

//     },

//     set fullName(value){
//    const parts = value.split(' ');
//    this.firstName = parts [0];
//    this.lastName = parts[1];
//     }
// };

// person.fullName = "Muskan Mandal";

// person.fullName = '';


// console.log(person);

//Getters : acess properties
//Setters : Change (mutate) properties


// Try & Catch

// try{
//     // Code that may throw error
// } catch (error) {
//     //code to handle error
// }

// const person = {
//     firstName : 'Harshita',
//     lastName : 'Mandal',
//     set fullName(value){
//         if (typeof value !== 'string')
//         throw new Error('Value is not a string');



//    const parts = value.split(' ');
//    if (parts.length !==2)
//    throw new Error('Enter a first name and last name')
//    this.firstName = parts [0];
//    this.lastName = parts[1];
//     }
// };


// try{
//     person.fullName = 'Prabhat Kumar';
// } catch(error){
//     alert(error)
// }

// console.log(person);



// try{
//     // Code that may throw error
// } catch (error) {
//     //code to handle error
// }

// =================================================================
// CALL BACK FUNCTION

function test(a,b){
   a();
}
const hello = ()=>{
   // console.log("pink");
}

test(hello);

// CLOSURES

function a(){
   return function b(){
      return function c(){
         // console.log('first');
      }
   }
}
// console.log(a()()());





