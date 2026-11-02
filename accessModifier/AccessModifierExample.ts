// Access Modifier 
// Access modifier are used to control the visibility & accessibility of property or method

//1. Public access modifier
//when we are not declaring any access modifier infront of property and method then public access modifier assigned.
//public access modifier we can access anywhere in file.

// class DemoofAccessModifier {
    
//    public studentName : string = "barbie" ;    //property
//     public multiplication() {                   //method    
//          console.log(10 * 20);
//     }
// } 
//  let dam =new DemoofAccessModifier();
//  console.log(dam.studentName);
//  dam.multiplication();

 //2. Private Access Modifier

 class DemoofAccessModifier {
    
   private studentName : string = "barbie" ;    //property
    private multiplication() {                   //method    
         console.log(10 * 20);
    }
} 
 let dam =new DemoofAccessModifier();
//  console.log(dam.studentName);
//  dam.multiplication();



