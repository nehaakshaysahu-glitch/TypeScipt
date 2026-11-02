//This keyword

// class ThisKewordDemo{

//     stdName : string = "Deepa";

//     constructor(stdName : string) {
//        this.stdName = stdName;
//     }
// }
//  const tk = new ThisKewordDemo("nea");
//  console.log(tk.stdName);



class ThisKewordDemo{

    m1(){
           console.log("M1");
           this.m2();
    }

      m2(){
           console.log("M2");
     this.m3();
        } 

      m3(){
           console.log("M3");
    }}
    const tk = new ThisKewordDemo ();
    tk.m1();
