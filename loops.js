// LOOPS
//1.FOR-LOOP

// printing counting from 1-10

for(let i = 1; i <= 10; i++){
 console.log(i);
}

//2. FOR OF-LOOP

// printing an array
let person = ["harshita", "muskan", "mohit", "ram"]
for(value of person){
    console.log(value);
}

//3. FOR IN-LOOP

//printing an object
 let things={
    wooden:"chair",
    steal:"utensils",
    plastic:"toothbrush"
 }

 for(let key in things){
    console.log(key);
 }

 //4. WHILE-LOOP

 //printing couting from 11-20

//  let i = 11;
//  while(i<=20){
//     console.log("the number is "+ i);
//     i++
//  }

 //5. DO WHILE-LOOP

 //table of 5

 let i = 1;
 do{
    console.log(5*i);
i++;
 }
while(i<=10);