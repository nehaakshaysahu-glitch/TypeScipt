//If Else loop

// let age : number = 17;

// if (age >=18) {
//     console.log("candidate is eligible for vote");
// }
// else{
//         console.log("candidate isn't eligible for vote");
// }

//If Else If Ladder

let marks : number = 101;
if (marks >=190) {
    console.log("candidate is eligible for MBBS");
}
else if (marks>=180 && marks<=189){
        console.log("candidate is eligible for IIT");
}
else if (marks>=150 && marks<=179){
        console.log("candidate is eligible for Engineering colg");
}
else if (marks>=100 && marks<=149){
        console.log("candidate is eligible for Pharmasy");
}
else if (marks>=40 && marks<=99){
        console.log("candidate is eligible for BBA, BSC");
}
else  {
        console.log("candidate is fail");
}