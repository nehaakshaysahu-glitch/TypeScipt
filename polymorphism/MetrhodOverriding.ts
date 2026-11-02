//MetrhodOverriding 
//Runtime Polymorphism / Method Overriding /Dynamic Polymorphism
//same method name and same in a parameter
//happened in parent and child class

class ParentDemo {

    education(){
        console.log("My son/daughter should be an Engineer");
    }

}

class son extends ParentDemo {
  override education(){
        console.log("My son/daughter should be an doctor");
    }
}

const s = new son();
s.education();