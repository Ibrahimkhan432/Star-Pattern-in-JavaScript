     //  left triangle 

var triangle ="";

for (var i = 1; i<=6; i++) {
   for (var j=0; j<i; j++){
     triangle +="*"
}
  triangle += "\n";
}
console.log(triangle)

//     down-left triangle

// let string = "";
// for (let i = 0; i < 6; i++) {
//   // printing star
//   for (let j = 0; j < 6 - i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// Hill pattern

// let string = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }

//    string += "\n";
// }
// console.log(string);

// Down-Hill pattern

// let string = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * (5-i) - 1; k++) {
//     string += "*";
//   }

//   string += "\n";
// }
// console.log(string);


// diamond pattern

// let string = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }

//    string += "\n";
// }
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }

//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }

//    string += "\n";
// }
// console.log(string);

// square pattren

// let string = "";

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     string += "* ";
//   }
//   string += "\n";
// }
// console.log(string);
