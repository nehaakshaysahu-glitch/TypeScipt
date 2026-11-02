//Polymorphism
//It means "Many Forms"
//Compile-Time / Method Overloading / static Polymorphism
//Method Overloading means same method name but different in parameter

// class MethodOverloading {
//     addition (x : number , y: number) :void;
//     addition (x : string , y: string) :void;

//     addition(x : any , y: any) {
//         console.log (x + y);
//     }
// }
// const mo = new MethodOverloading();
// mo.addition("Dili", "mum");

class MethodOverloading {
    addition (x : string) : void;
    addition (x : number , y: number) :void;
    addition (x : string , y: string , z: string) :void;

    addition(x? : any , y?: any , z? : any) {
        if(x!==undefined && y!== undefined && z!== undefined){
        console.log (x + y+ z);
    } else if (x!==undefined && y!== undefined) {
        console.log(x+y);
    } 
    else if (x!==undefined) {
        console.log (x);
    }
}
}
const mo = new MethodOverloading();
mo.addition("Dilli" , "Mum", "Nag");