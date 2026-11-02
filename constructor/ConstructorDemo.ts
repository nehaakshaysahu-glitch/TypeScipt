// Constructor
//a constructor is special method inside of class that is automatically called when object is created
//constructor always define with constrctor keyword

// class NameOfIndia {

//       employeeName : string = "neha";

//       constructor(employeeName : string){
//         this.employeeName = employeeName;
//       }
// }
// let na1 = new NameOfIndia("akki");
// let na2 = new NameOfIndia("nikki");
// let na3 = new NameOfIndia("ashu");
// console.log(na1.employeeName);
// console.log(na2.employeeName);
// console.log(na3.employeeName);

//Private Constructor


class NameOfIndia {

      employeeName : string = "neha";

      private constructor(employeeName : string){
        this.employeeName = employeeName;
      }
}
let na1 = new NameOfIndia("akki");
let na2 = new NameOfIndia("nikki");
let na3 = new NameOfIndia("ashu");
console.log(na1.employeeName);
console.log(na2.employeeName);
console.log(na3.employeeName);