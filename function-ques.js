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
  
  // solution 6 - option 2 (function declarations are hoisted, while function expressions are not)
  
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
   }else{
     return "F"
      
   }
  }
  console.log(gradeCard(studentScore));
  
  
  // ==================================================================
  // Problem 9:
  // Find the error in the given code
  
  // solution 9 - bracket missing on line number 9
  
  // ============================================================
  
  // problem 10: 
  // How do you call a javascript function?
  
  // solution 10 - option 3 (by using the function's name followed by parentheses, like myFunction ())
  
  // =============================================================================================
  
  //DEFAULT PARAMETER
  
  function tableOfTwo(a=2){
     for(let i=1;i<=10;i++){
        console.log(`${a}*${i}=${a*i}`);
     }
  
  }
  tableOfTwo(5);
  // if we already set parameter in parameter that the function will take default parameter, no matter if we already set arguments.
  
  // ========================================================================================
  
  // problem 11:
  //Write a JavaScript function called ‘calculateTotal’ that calculates the total cost of items in a shopping cart. Then, create another function called ‘applyDiscount’ that takes the total cost as a parameter and applies a discount. Finally, call the ‘calculateTotal’ function and pass its result to the ‘applyDiscount’ function.
// Your task is to write the code for both functions and demonstrate the function call, providing the final discounted total.
// You can use the following information:
// Initial cart total: Rs. 1250.00
// Discount rate: 10%
  
function calculateTotal(){

}

function applyDiscount(totalCost){

}

// ==========================================================================

