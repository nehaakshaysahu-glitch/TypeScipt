
//Functions
//1. Normal/Basic Function

// function addition () {
//     console.log (10+20);

// }
// addition();

//2. Parameterized Function
// function multiplication(no1 : number, no2 :number){
//     console.log(no1 * no2);
// }

// multiplication(2,3);

//3. Function with Return Type
// function multiplication(no1 : number, no2 :number): number {
//     return no1 * no2;
    
// }
// const output = multiplication(5,6);
// console.log(output+40);

//4. Default parameter
// Default value is used if no arguments is passed

// function multiplication(no1 : number, no2 :number, no3 : number =10) {
//     console.log(no1 *no2* no3);
//     }
// multiplication(5,6,20);

//5. Function with optional parameter

// function multiplication(no1 : number, no2 :number, no3? : number ) {
//     console.log(no1 *no2* (no3||1));
//     }
// multiplication(5,6,5);

//6.Annonymous Functions
//A annonymous function is a function that does not have a name

// const add = function(a : number , b : number) {
//    console.log(a+b);
// }
//  add(10,20);

 //7.Arrow Function  without parameter
 // => arrow function

//  const message = (): void => console.log("Hello");
//  message();

 //8.Arrow Function with parameter

//  const add = (no1: number, no2 : number): number => {return no1 +no2;}
//  const output = add(10,20);
//  console.log(output);

 //9.Nested Function 
 //Function inside another function

//  function outer () {
//      console.log("outer function");
//      function inner(){
//         console.log("Inner function");
//      }
//        inner();
//  }
// outer();

//10. Callback Function
//Function passed as an argument to another function

// function goodBye() {
//     console.log("Good Bye..");
// }

// function greets(Callback : ()=> void) {
//     console.log("Good Morning..");
//     Callback();
// }
// greets(goodBye);

//11. Higher Order Function (HOF)

// function wish (name : string){
//  console.log("Good morning.. "+  name);
// }
// function goodBye (Callback :(name : string)=> void) {
//   console.log("Good bye");

//   Callback("neha")
// }
// goodBye(wish);

//12. Immediate Invoked Function Expression (IIFE)
(function (no1 :number , no2 : number): void {
    console.log("Addition of two variable " + (no1 + no2));
}) 
(10,20);
