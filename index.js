const prompt = require("prompt-sync")();
// 1 :  Write a program to print the below pattern based on no of rows
// input: rows: 5
// * * * * *
//  *     *
//   *   *
//    * *
//     *

// Code : 

let rows = +prompt("Enter no of rows :");
for (i = rows; i >= 1; i--) {
  s = "";
  for (k = 1; k <= rows - i; k++) {
    s = s + " ";
  }
  for (j = 1; j <= i; j++) {
    if (j == 1 || i == rows || j == i)
        s = s + "* ";
    else
        s = s + "  ";
  }
  console.log(s);
}

// 2 : Write a program to print the below pattern based on no of rows
// input: rows: 5
// output:
// *
// * *
// * * *
// * *
// *

// Code : 

let rows1 = +prompt("Enter no of rows :");
let mid = Math.ceil(rows1 / 2);
let rem = rows1 - mid;
for (i = 1; i <= mid; i++) {
  s1 = "";
  for (j = 1; j <= i; j++) {
    s1 = s1 + "* ";
  }

  console.log(s1);
}
for (a = rem; a >= 1; a--) {
  s1 = "";
  for (b = 1; b <= a; b++) {
    s1 = s1 + "* ";
  }
  console.log(s1);
}


// 3 : Write a program to print the below pattern based on no of rows
// input: rows: 4
// output:
//    1
//   2 3 
//  4   6 
// 7 8 9 10

// Code : 

let rows2 = +prompt("Enter no of rows :");
let value=1;
for (i = 1; i <= rows2; i++) {
  s2 = "";
  for (k = 1; k <= rows2 - i; k++) {
    s2 = s2 + " ";
  }
  for (j = 1; j <= i; j++) {
    if (j == 1 || i == rows2 || i == j)
        s2= s2 + value+" ";
    else
        s2 = s2 + "  ";
        value++;
  }
  console.log(s2);
}
