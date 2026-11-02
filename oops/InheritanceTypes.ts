//Inheritance types
//1. Single Inheritance 
// class Human {
//     read () {
//         console.log("Reading");
//     }
// }
// class Male extends Human{
    
// }
//    const m = new Human();
//    m.read();
  
//2. Multilevel Inheritance

// class Rangrao {
//     farm() {
//         console.log("Mango Farm")
//     }
// }
// class Arjun extends Rangrao {

// }
//  class omkar extends Arjun{

//  }

//  const om = new omkar();
//  om.farm();

//3.Herarcy inheritance

//4. multiple inheritance -- not supported in typescript
class MarutiSuzuki {
   engine () {

    console.log ("Marutisuzuki Engine performance is really good");
   }}

   class Hyundai {
   engine () {

    console.log ("Marutisuzuki Engine performance is ok ok");
   }
}

class kia extends MarutiSuzuki , Hyundai {

}