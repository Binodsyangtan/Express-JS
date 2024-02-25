let matched = false;
let todos = ["html", "css"];
let inputtitle = "react";

// for(let index = 0; index < todos.length; index++){
//     if(todos[index] === inputtitle){
//         matched = true;
//     }
// }

// todos.forEach((el) => {
//   if (el === inputtitle) {
//     matched = true;
//   }
// });



// let output = todos.find(el => el == inputtitle)  // array ko form mah didaina strings ko form mah dinxa
// console.log("output", output);

// let output = todos.filter(el => el == inputtitle) // output array kai form mah dinxa yesley 
// console.log("output", output);

let output = todos.some(el => el == inputtitle) // output array kai dinxa but sabai arrary lai check garxa raw output mah dixna sabai true vayani false vayani  
console.log("output", output);

// console.log(matched);
