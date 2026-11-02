//Abstraction

//Abstract class

abstract class DemoAbstractClass {

    constructor(studentName : string){
        console.log(studentName);
    }  
    abstract abmethod() : void;

    film(){
        console.log("Durandhar Movie");
    }

     static song(){
        console.log("Johny johny yes papa");
    }
}

class ImplementatedDemo extends DemoAbstractClass {
 
    constructor(studentName : string) {
    super(studentName);

    }

    abmethod() {
        console.log ("Hello All");
    }
}

const imd = new ImplementatedDemo("nea");
imd.abmethod();
imd.film();
DemoAbstractClass.song();
