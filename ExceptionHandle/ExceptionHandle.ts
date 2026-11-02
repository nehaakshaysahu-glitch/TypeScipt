//Exception :Unpredictable condition

//Need of Exception handle

// console.log("Hello Everyone...  ");
// let data: any =null;
// console.log(data.length);
// console.log("Hello Evening ... ");

//Build in Exception
//1. Reference Error : Occurs when acessing a variable that is not define
// console.log(akash);

//2. Range Error : Occurs when the value is outside the allow ranage
// let arr =new Array (-5);
// console.log(arr);

//3. TypeError
// let data: any =null;
// console.log(data.length);
// console.log("Hello Evening ... ");

//4. syntaxError : Occur when typescript encounter invalid syntax
// JSON.parse("{name:"neha});

//5. URIError : Occurs when invalid URI function are used
// console.log(decodeURI("%"));

//Handle Exception in Typescript
//by try and catch

// console.log("Hello Everyone...  ");
// let data: any =null;

// try{
// console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle sucessfully");
// }
// console.log("Hello Evening ... ");
 
//Rule of Exception Handling
//1. we should use one try and one catch block 

//  let data: any =null;
// try{
// console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle sucessfully");
// }

//2. we cant declared a single try block
// let data: any =null;
// try{
// console.log(data.length);
// }  

//3. we cant declared a single catch block
//4. we can declared try block without catch block but we have to use finally block

//  let data: any =null;
// try{
// console.log(data.length);
// }finally{
//     console.log("Hello i am finally block");
// }

//finally block
//when we have to execute imp line of code 

//5.we can define finally block with an try and catch block

//  let data: any =null;
// try{
// console.log(data.length);
// } 
// catch(TypeError){
//    console.log("Exception Handle sucessfully");
// }

// finally{
//     console.log("Hello i am finally block");
// }

//If we won't get any exception still your finally block will be execute


 let data: any ="Tanu sharma";
try{
console.log(data.length);
} 
catch(TypeError){
   console.log("Exception Handle sucessfully");
}

finally{
    console.log("Hello i am finally block");
}
