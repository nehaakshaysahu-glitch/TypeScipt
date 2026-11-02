//Protected Access Modifier

// class ProtectedDemoTest {

//     protected candidate : string = "Neha";

//    protected bankName(){
//         console.log("ICICI Bank");
//     }
// }

// class DemoTestCheck extends ProtectedDemoTest {

//     display(){
//         console.log(this.candidate);
//         this.bankName();
//     }
// }

// const pd = new (DemoTestCheck);
// pd.display();

//Private Constructor
//If your class contain private constructor you can't extends that class

class TanujaMath{
    private constructor() {
        console.log("This is a Private Constructor..");
    }
}

class TanujaPhysics extends TanujaMath {

}