// // different practices of different conditions of for loops

// document.write("<h1>");

// // task 1-a
//  for (var i = 1; i <= 5;  i++) {
//    for ( var j = 1; j < i + 1; j++){
//          document.write(`${j} `)
//    } 
//    document.write("<br>");
//  }

// // task 1-b
// document.write("<h1>");
//  for (var i = 1; i <= 5;  i++) {
//    for ( var j = 1; j <= 5; j++){
//          document.write(`${j} `)
//    } 
//    document.write("<br>");
//  }

//  // task 1-c
// document.write("<h1>");
// for (var i = 1; i <= 5;  i++) {
//   for ( var j = 1; j <= 6 - i; j++){
//         document.write(`${j} `)
//   } 
//   document.write("<br>");
// }
// document.write("<br>")

// // task 2-b
//    for (var c = 5; c >= 1; c-- ){
//     for(var d = 5; d >= c; d--){
//        document.write( d + " ");
//     }
//        document.write("<br>")
//    }
// document.write("<br>")

// // task 2-a
// for (var c = 5; c >= 1; c-- ){
//     for(var d = 5; d >= 1; d--){
//        document.write( d + " ");
//     }
//        document.write("<br>")
//    }
//    document.write("<br>")

// //  task  2-c
// for (var a = 1; a <= 5; a++){
//     for(var b = 5; b >= a; b-- ){
//        document.write( b + " ");
//     }
//        document.write("<br>")
//    }
//    document.write("<br>")

// // task 3-a
// for (var i = 1; i <= 5;  i++) {
//     for ( var j = 1; j < i + 1; j++){
//         if ( e = "*" ){
//         document.write(e + " ")             
//        }
//     }
//     document.write("<br>");

//  } 
// document.write("</h1>");    

//  practice work 
// this practice is to understand the working of reversed loop:

//  i me index value store horhi hai 

// let original = "melody"; 
// let reversed = "";
// let i = original.length - 1;
//  reversed += original[i];
//      document.write(reversed);

// a practice to prove that i is storing index values in reversed loop:

// let original = "melody"; 
// let reversed = "";
//      reversed = original[3];
//      document.write(reversed);

// so according to this i has stored "o" which index value is "3"

// this is the work of reversed loop  :

// let original = "melody"; 
// let reversed = "";
//      for (let i = original. length - 1; i >= 0; i--) {
//      reversed += original[i];
//      } 
//      document.write(reversed);