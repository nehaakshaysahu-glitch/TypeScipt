//Interface
//1. We can declared any class with an Interface
//2. we can achieve 100% abstraction with an Interface
//3. Interface contain Abstract methods only
//4. Interface doesn't contain any concrete method, constructor , static method
//5. we do not need to define abstract keyword in front of method in interface
//6. we can't create an object of Interface.
// 7.  we can provide

// interface student {
//   id : number ;
//   na : string;
//   exam ():void;
// }

// const stud : student = {
//     id : 1,
//     na : "neha",
//     exam(){
//         console.log ("candidate is giving math exam");
//     }

// }

// console.log(stud.id);
// console.log(stud.na);
// stud.exam();

// class DemoTestCheck implements student{
//   id=1;
//   na = "nea";

//    exam(){
//         console.log ("candidate is giving math playwright");
//    }
// }
// const dt =new DemoTestCheck();
// console.log(dt.id);
// console.log(dt.na);
// dt.exam();

//Multiple Inheritance in a Interface

// interface MarutiSuzuki{
//   performance(): void;
// }

// interface Hyundai{
//   performance(): void;
// }

// class kia implements MarutiSuzuki, Hyundai{

//   performance(){
//     console.log("Performance is really good");
//   }
// }

// const k = new kia();
// k.performance();

//Interface with Array in TypeScript

interface student {
  id: number;
  stdName: string;
  location : string
}

let s: student[]= [
  {
  id: 1,
  stdName: "nea",
  location : "chennai"
},

  {
  id: 2,
  stdName: "omi",
  location : "nagpur"
},
{
  id: 3,
  stdName: "akki",
  location : "mumbai"
},

]
console.log(s[1].stdName);