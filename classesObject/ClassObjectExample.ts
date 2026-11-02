//class is blueprint of anything
//class can contain property, methods static method
//object always represent for real word entity
//always create object from class only
//creating an object bcz of to access class data.
//object create with new keyword

//TypeScript methods
//Methods generally used to execute some task 
//Methos always we should define in class


class KratikaExample {
  age : number =20;           //property

  //1.simple method
//    addition(){
//     console.log(10+20);
//   }

  // 2. method with parameter
//   addition(no1: number , no2 : number){
//    console.log(no1+no2);
// }

//3. Method with return
// addition(no1 : number , no2 : number ) : number {
//   return no1 + no2;
// }
// }

//4. Method with default Parameter
addition(no1 : number , no2 : number , no3 : number = 50) {
  console.log ( no1 + no2 + no3);
}
}

let ms =new KratikaExample();
// console.log(ms.age);
const data =ms.addition(30, 40);

