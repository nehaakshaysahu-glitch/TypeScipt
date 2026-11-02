//Array

//let x: number[] = [1,2,3,4,5];

//all value
// console.log(x);

//any specific value
// console.log(x[3], x[2]);

//for of loop
// for(let output of x) {     // of -will get value , in - will get index
//     console.log(output);
// }

//let x: number[] = [31,22,38,44,53];

//for in loop
// for (let output in x) {
//     console.log(output);
// }

//simple loop
// console.log(x.length)

// for(let i=0; i<x.length; i++){
//     console.log(x[i]);
// }

// let x :any [] = [31,22,38,44,53];
// console.log(x);

//Generics
// let x : Array<boolean>= [31,22,"neha",false,'A'];
//  console.log(x);

//Array Method

//1.push(): Add elements at the end.
// let names :string [] = ['neha', ' akki'];
// names.push('akash');
// console.log(names);

//2. unshift() : Add element at the first
// let names :string [] = ['neha', ' akki'];
// names.unshift('akash');
// console.log(names);

//3. pop() : Remove last element
// let names : string[] =['neha', ' akki' , 'ashu'];
// names.pop();
// console.log(names);

//4. shift() : Remove first element
// let names : string[] =['neha', ' akki' , 'ashu'];
// names.shift();
// console.log(names);

//5. concate() : used to combine array
// let names1 : string[] =['neha', ' akki' , 'vibu'];
// let names2 : string[] =['ashu', ' neha' ];

// console.log(names1.concat(names2));

//6. slice() : used to extract part of the array
// let names1 : string[] =['neha', ' akki' , 'vibu'];
// console.log(names1.slice(1,2));

//7. splice (): used to add or remove elements from array
//Add data with splice method
//start: number, deleteCount?: number

// let names1 : string[] =['neha', ' akki' , 'vibu', 'bebo'];
// names1.splice(1, 0, 'anshu');
// console.log(names1);

//delete data with splice ()
// let names1 : string[] =['neha', ' akki' , 'vibu', 'bebo'];
// names1.splice(1, 2);
// console.log(names1);

//8.Indexof (): used to find index position of element
// let names1 : string[] =['neha', 'bebo' , 'vibu', 'bebo'];
// console.log(names1.indexOf('bebo'));

//9.toString(): convert our array into string
// let names1 : string[] =['neha', 'bebo' , 'vibu', 'akku'];
/// console.log(names1.toString());

//10.Multi-Dimentional array
let marks : number [][]=[
 [11,22,33],
 [44,55,66],
 [77,88,99]

];

for(let a : number =0; a<marks.length; a++) {  //represent for row
    for(let b : number =0; b<marks[a].length; b++) {  //represent for column
     console.log(marks[a][b]);   


    }
}