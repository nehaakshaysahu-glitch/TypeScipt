//Break Statement
//stops loop immediately
//when brake statement encounter in any loop then your loop will be terminated immediately

// for (let i : number =1; i<=5; i++){
//     if (i == 4) {
//       break;
//     }
//     console.log(i);
// }

//continue statement
//skip current interation which mathes the condition

for (let i : number =1; i<=5; i++){
     if (i == 2) {
      continue;
    }
     console.log(i);
}