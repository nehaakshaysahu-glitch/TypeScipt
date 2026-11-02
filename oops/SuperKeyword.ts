//Super Keyword

class FatherMother {
  
    constructor(name :string) {
        console.log(name);
    }
    wish(){
        console.log("Good Evening");
    }
}
 class Daughter extends FatherMother {

     constructor(name :string) {
       super(name);
    }
     display () {
          super.wish();
     }
 }
 const d = new Daughter("neha");
 //d.display();

 //this keyword and Super keyword difference