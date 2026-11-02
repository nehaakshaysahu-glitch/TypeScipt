//Encapsulation
//wrapping data into the single unit that is known as Encapsulation
//Getter : we have to access private data from class with getter method only
//Setter : we have to set data in a class with setter method only
class EncapsulationExample{

private a : number =20;
private company : string = "Endo Service";
private studentNametest: string;

constructor (studentNametest: string){
    this.studentNametest = studentNametest;
}

getA() : number{
    return this.a;
}
  getCompany() : string{
    return this.company;
}
 setstudentName(studentNametest : string){
    return this.studentNametest = studentNametest;
 }
}

let en = new EncapsulationExample("nanu");
// console.log(en.getA());
// console.log(en.getCompany());
en.setstudentName ("nanu");